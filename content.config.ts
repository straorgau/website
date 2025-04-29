import { defineCollection, defineContentConfig } from "@nuxt/content";
import { forgejoContentDriver } from "./lib/unstorage/forgejoDriver";


export default defineContentConfig({
  collections: {
    policies: defineCollection({
      type: "page",
      source: forgejoContentDriver({
        host: "https://codeberg.org",
        basePath: "/api/v1",
        repo: "stra/policies",
        exclude: ["README.md"]
      }),
    })
  }
})