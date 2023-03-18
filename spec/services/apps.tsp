import "../models/common.tsp";
import "../models/application.tsp";

using Mastodon;
using TypeSpec.Http;

// /api/v1/apps
interface AppsService {
  //Create a new application.
  @post createApp(
    @body body: CreateAppForm
  ): Application | UnprocessableContentError;

  // Verify credentials and get the current user.
  @route("verify_credentials")
  @get
  verifyCredentials(): Application | UnauthorizedError;
}

model CreateAppForm is Form {
  client_name: string;
  redirect_uris: string;
  scopes: string;
  website: string;
}
