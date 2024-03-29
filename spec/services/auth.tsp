using Mastodon;
using TypeSpec.Http;

interface OAuthService {
  // Call authorize endpoint to get an authorization code
  @route("/authorize")
  @get
  authorize(
    @query response_type: string,
    @query client_id: string,
    @query redirect_uri: string,
    @query scope: string,
    @query force_login: boolean,
    @query lang: string
  ): AuthorizeResponse | BadRequestResponse;

  // Get a token
  @route("/token")
  @post
  token(
    @body body: TokenForm
  ): TokenResponse | BadRequestResponse | UnauthorizedResponse;

  // Revoke a token
  @route("/revoke")
  @post
  revoke(@body body: RevokeForm): OkResponse | ForbiddenResponse;
}

model RevokeForm is Form {
  client_id: string;
  client_secret: string;
  token: string;
}

model TokenForm is Form {
  grant_type: string;
  code: string;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  scopes: string;
}

model TokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  created_at: int32;
}

model AuthorizeResponse {
  @statusCode statusCode: 200;
  @header location: string;
}
