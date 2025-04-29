/**
 * This file is based on the [Unstorage Github driver](https://github.com/unjs/unstorage/blob/main/src/drivers/github.ts), 
 * with modifications to work with Codeberg (and other Forgejo-based instances - it may also be be backwards compatible with Gitea),
 * as well as the Nuxt Content plugin.
 * 
 * [Unstorage is licensed under MIT.](https://github.com/unjs/unstorage/blob/main/LICENSE)
 */

import { withTrailingSlash, joinURL } from "ufo";
import { ofetch } from "ofetch";
import { defineCollectionSource } from "@nuxt/content";

export interface ForgejoOptions {
  /**
   * Forgejo instance URL.
   * 
   * @default "https://codeberg.org"
   */
  host: string;
  
  /**
   * Default API endpoint for the Forgejo instance.
   * 
   * @default "/api/v1";
   */
  basePath: string;

  /**
   * The name of the repository. (e.g. `codeberg/forgejo`). 
   * Required.
   */
  repo: string;

  /**
   * The branch name. 
   * @default "main"
   */
  branch?: string;

  /**
   * Directory to look up.
   * 
   * @default ""
   */
  dir?: string;

  /**
   * Time-to-live for the content to be cached in memory.
   * @default 600
   */
  ttl?: number;

  /**
   * Commit SHA hash. Defaults to the latest commit.
   * 
   * @default ""
   */
  commit?: string;

  /**
   * Excludes files from discovery.
   * 
   * @default [];
   */
  exclude?: string[];
}

interface ForgejoFile {
  content?: string; // returned as base64
  meta: {
    mode: string;
    sha: string;
    size: number;
  }
}

const defaultOptions: ForgejoOptions = {
  host: "https://codeberg.org",
  basePath: "/api/v1",
  repo: "",
  branch: "main",
  dir: "",
  ttl: 1000,
  commit: "",
  exclude: [],
}

let files: Record<string, ForgejoFile> = {};
let lastCheck = 0;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let syncPromise: undefined | Promise<any>;

const syncFiles = async (_opts: ForgejoOptions) => {
  const opts: ForgejoOptions = { ...defaultOptions, ..._opts };

  if (!opts.repo) {
    throw Error("Repo format is required.")
  }

  if (lastCheck + opts.ttl! * 1000 > Date.now()) {
    return;
  }

  if (!syncPromise) {
    syncPromise = fetchFiles(opts);
  }

  files = await syncPromise;
  lastCheck = Date.now();
  syncPromise = undefined;
}

const getContentUrl = (opts: ForgejoOptions) => joinURL(opts.host, opts.repo, "/raw", opts.branch!, opts.dir!);

export const forgejoContentDriver = (opts: ForgejoOptions) => defineCollectionSource({
  getKeys: async () => {
    await syncFiles(opts);

    return Object.keys(files)
  },
  getItem: async (path: string) => {
    await syncFiles(opts);

    const item = files[path];

    if (!item.content) {
      try {
        item.content = await ofetch(path.replace(/:/g, "/"), {
          baseURL: getContentUrl(opts),
          parseResponse: (txt) => txt
        });
      } catch (error) {
        throw Error(`Failed to fetch \`${JSON.stringify(path)}\`.`, { cause: error })
      }
    }

    return item.content!;
  }
});


async function fetchFiles(opts: ForgejoOptions) {
  const prefix = withTrailingSlash(opts.dir).replace(/^\//, "");
  const files: Record<string, ForgejoFile> = {};

  let commit = opts.commit || undefined;

  if (!opts.commit) {
    try {
      const { sha } = await ofetch(`/repos/${opts.repo}/commits?limit=1`, {
        baseURL: joinURL(opts.host, opts.basePath),
        parseResponse: (t) => JSON.parse(t)[0]
      });
  
      commit = sha;
    } catch (error) {
      throw Error(`Failed to retrieve latest commit from repo \`${opts.repo}\`.`, { cause: error });
    }
  }

  try {
    const { tree } = await ofetch(`/repos/${opts.repo}/git/trees/${commit}?recursive=true`, {
      baseURL: joinURL(opts.host, opts.basePath),
    });

    for (const node of tree) {
      if (node.type !== "blob" || !node.path.startsWith(prefix)) continue;

      if (opts.exclude && opts.exclude.includes(node.path)) continue;

      const key: string = node.path.slice(prefix.length).replace(/\//, ":");

      files[key] = {
        meta: {
          sha: node.sha,
          mode: node.mode,
          size: node.size,
        }
      };
    }

    return files;
  } catch (error) {
    throw Error("Failed to retrieve git trees.", { cause: error });
  }
}