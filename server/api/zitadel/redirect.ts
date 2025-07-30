import { zitadel } from "~/lib/auth/oauth";

import { parseCookies } from "h3";

import * as arctic from "arctic";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const code = query.code?.toString();

  const cookies = parseCookies(event);
  const storedVerifier = cookies["code_verifier"];

  try {
    const tokens = await zitadel.validateAuthorizationCode(code!, storedVerifier);

    const cookieData = JSON.stringify({
      auth: tokens.data
    });

    setCookie(event, "store.user", cookieData, {
      secure: !import.meta.dev, // should automatically set to `false` when running in dev mode, and vice-versa when not in dev
      path: "/",
      httpOnly: true,
      maxAge: 60 * 6 * 4 // 24 hours
    });

    return "Login Successful."
  } catch (e) {
    if (e instanceof arctic.OAuth2RequestError) {
      const code = e.code;
      throw createError({
        statusCode: 400,
        statusMessage: `Invalid OAuth request (${code})`,
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