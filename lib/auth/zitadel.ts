import { OAuth2Tokens } from "arctic";
import { createS256CodeChallenge } from "arctic/dist/oauth2";
import { createOAuth2Request, sendTokenRequest   } from "arctic/dist/request";

export class Zitadel {
  private authorizationEndpoint: string;
  private tokenEndpoint: string;
  private tokenRevocationEndpoint: string;

  private redirectURI: string;
  private clientId: string;


  constructor(baseUrl: string, clientId: string, clientSecret: string | null, redirectURI: string) {
    this.authorizationEndpoint = new URL("/oauth/v2/authorize", baseUrl).href;
    this.tokenEndpoint = new URL("/oauth/v2/token", baseUrl).href;
    this.tokenRevocationEndpoint = new URL("/oauth/v2/revoke", baseUrl).href;

    this.clientId = clientId;
		this.redirectURI = redirectURI;
  }

  public createAuthorizationURL(state: string, codeVerifier: string, scopes: string[]): URL {
		const url = new URL(this.authorizationEndpoint);

		url.searchParams.set("response_type", "code");
		url.searchParams.set("client_id", this.clientId);
		url.searchParams.set("redirect_uri", this.redirectURI);

		url.searchParams.set("state", state);

		if (scopes.length > 0) {
			url.searchParams.set("scope", scopes.join(" "));
		}

		const codeChallenge = createS256CodeChallenge(codeVerifier);
    
		url.searchParams.set("code_challenge_method", "S256");
		url.searchParams.set("code_challenge", codeChallenge);
    
		return url;
	}

  public async validateAuthorizationCode(
		code: string,
		codeVerifier: string
	): Promise<OAuth2Tokens> {
		const body = new URLSearchParams();
		
		body.set("client_id", this.clientId);
		body.set("redirect_uri", this.redirectURI);
		body.set("code", code);
		body.set("grant_type", "authorization_code");
		body.set("code_verifier", codeVerifier);
		
		const request = createOAuth2Request(this.tokenEndpoint, body);
		const tokens = await sendTokenRequest(request);

		return tokens;
	}

  public async refreshAccessToken(refreshToken: string): Promise<OAuth2Tokens> {
		const body = new URLSearchParams();
		body.set("grant_type", "refresh_token");
		body.set("refresh_token", refreshToken);
		body.set("client_id", this.clientId);
		const request = createOAuth2Request(this.tokenEndpoint, body);
		const tokens = await sendTokenRequest(request);
		return tokens;
	}
	
}