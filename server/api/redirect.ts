import { zitadel } from "~/lib/auth/oauth";

import { parseCookies } from "h3";
import { fetchWithEvent } from "h3";

import { useUserStore } from "~/stores/user";

import * as arctic from "arctic";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const code = query.code?.toString();

  const cookies = parseCookies(event);
  const storedVerifier = cookies["code_verifier"];

  try {
    const tokens = await zitadel.validateAuthorizationCode(code!, storedVerifier);

    const state = useUserStore();

    setCookie(event, "access_token", tokens.accessToken(), {
      secure: !import.meta.dev,
      path: "/",
      httpOnly: true,
      maxAge: tokens.accessTokenExpiresInSeconds()
    });

    setCookie(event, "id_token", tokens.idToken(), {
      secure: !import.meta.dev,
      path: "/",
      httpOnly: true,
      maxAge: tokens.accessTokenExpiresInSeconds()
    });

  } catch (e) {
    if (e instanceof arctic.OAuth2RequestError) {
      const code = e.code;
      throw createError({
        statusCode: 400,
        statusMessage: `Invalid OAuth request (${e.code})`,
      })
    }
    if (e instanceof arctic.ArcticFetchError) {
      const cause = e.cause;
      throw createError({
        statusCode: 400,
        statusMessage: `Failed to call 'fetch' when making an OAuth request.`,
        cause: cause
      })
    }

    throw createError({
      statusCode: 400,
      statusMessage: `Failed to parse incoming OAuth request.`
    });
  }

})