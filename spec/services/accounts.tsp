import "../models/account.tsp";

namespace Mastodon;
using TypeSpec.Http;

interface AccountsService {
  // Register a new account.
  @post createAccount(
    @body body: CreateAccountForm
  ): Account | UnauthorizedResponse;

  // Verify credentials and get current user.
  @route("verify_credentials")
  @get
  verifyCredentials(): Account | UnauthorizedResponse;

  // Update account credentials.
  @route("update_credentials")
  @patch
  updateCredentials(
    @body body: UpdateCredentialsForm
  ): Account | UnauthorizedResponse | UnprocessableContentError;

  // Search for accounts.
  @route("search")
  @get
  search(
    @query q: string,
    @query limit: int32,
    @query following: boolean,
    @query resolve: boolean
  ): Account[] | UnauthorizedResponse;

  // Lookup an account
  @route("lookup")
  @get
  lookup(
    @query acct: string,
    @query skip_webfinger: boolean
  ): Account | NotFoundResponse;

  // Get account relationships
  @route("relationships")
  @get
  getRelationships(
    @query() id: string[]
  ): Relationship[] | UnauthorizedResponse | UnprocessableContentError;

  // Find familiar followers
  @route("familiar_followers")
  @get
  getFamiliarFollowers(
    @query() id: string[]
  ): FamiliarFollowers[] | UnauthorizedResponse | UnprocessableContentError;
}

model FamiliarFollowers {
  id: string;
  followers: Account[];
}

model UpdateCredentialsForm is Form {
  discoverable: boolean;
  bot: boolean;
  display_name: string;
  note: string;
  avatar: string;
  header: string;
  locked: boolean;
  `source[privacy]`: string;
  `source[sensitive]`: boolean;
  `source[language]`: string;
  //fields_attributes: ???;  I don't know how to do this
}

model CreateAccountForm is Form {
  username: string;
  email: string;
  password: string;
  agreement: boolean;
  locale: string;
  reason: string;
}
