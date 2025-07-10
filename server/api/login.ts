import { query } from "#pruvious/server";
import { generateCodeVerifier, generateState } from "arctic";
import { zitadel } from "~/lib/auth/oauth";

import { setCookie } from "h3";

export default defineEventHandler(async (event) => {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const scopes = ["openid", "profile", "name", "email"];
  const url = zitadel.createAuthorizationURL(state, codeVerifier, scopes);


  setCookie(event, "state", state, {
    secure: !import.meta.dev, // should automatically set to `false` when running in dev mode, and vice-versa when not in dev
    path: "/",
    httpOnly: true,
    maxAge: 60 * 10 // 10 min
  });
  
  setCookie(event, "code_verifier", codeVerifier, {
    secure: !import.meta.dev,
    path: "/",
    httpOnly: true,
	  maxAge: 60 * 10 // 10 min
  });

  await sendRedirect(event, url.toString());
});