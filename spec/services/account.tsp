import "../models/account.tsp";
import "../models/status.tsp";
import "../models/tag.tsp";

namespace Mastodon;
using TypeSpec.Http;

interface AccountService {
  // Get an account.
  @get getAccount(@path id: string):
    | Account
    | NotFoundResponse
    | UnauthorizedResponse
    | GoneResponse;

  // Update an account.
  @patch updateAccount(@path id: string, @body body: Account):
    | Account
    | UnauthorizedResponse
    | ForbiddenResponse
    | NotFoundResponse;

  // Get an account's status
  @route("statuses")
  @get
  getStatuses(
    @path id: string,
    ...RangeParameters,
    @query exclude_reblogs: boolean,
    @query tagged: string
  ): Status[] | UnauthorizedResponse | NotFoundResponse | GoneResponse;

  // Get an account's followers.
  @route("followers")
  @get
  getFollowers(@path id: string, ...RangeParameters):
    | Account[]
    | UnauthorizedResponse
    | NotFoundResponse
    | GoneResponse;

  // Get an account's following
  @route("following")
  @get
  getFollowing(@path id: string, ...RangeParameters):
    | Account[]
    | UnauthorizedResponse
    | NotFoundResponse
    | GoneResponse;

  // Get an account's featured tags
  @route("featured_tags")
  @get
  getFeaturedTags(@path id: string):
    | FeaturedTag[]
    | UnauthorizedResponse
    | NotFoundResponse
    | GoneResponse;

  // Get lists containing this account
  @route("lists")
  @get
  getLists(@path id: string):
    | AccountList[]
    | UnauthorizedResponse
    | NotFoundResponse
    | GoneResponse
    | UnprocessableContentError;

  // Follow Account
  @route("follow")
  @post
  follow(@path id: string, @body body: FollowBody):
    | Relationship
    | UnauthorizedResponse
    | NotFoundResponse
    | GoneResponse
    | UnprocessableContentError;

  // Unfollow Account
  @route("unfollow")
  @post
  unfollow(
    @path id: string
  ): Relationship | UnauthorizedResponse | UnprocessableContentError;

  // Remove Account from followers
  @route("remove_from_followers")
  @post
  removeFromFollowers(
    @path id: string
  ): Relationship | UnauthorizedResponse | UnprocessableContentError;

  // Block Account
  @route("block")
  @post
  block(
    @path id: string
  ): Relationship | UnauthorizedResponse | UnprocessableContentError;

  // Unblock Account
  @route("unblock")
  @post
  unblock(
    @path id: string
  ): Relationship | UnauthorizedResponse | UnprocessableContentError;

  // Mute Account
  @route("mute")
  @post
  mute(
    @path id: string,
    @body body: MuteForm
  ): Relationship | UnauthorizedResponse | UnprocessableContentError;

  // Unmute Account
  @route("unmute")
  @post
  unmute(
    @path id: string
  ): Relationship | UnauthorizedResponse | UnprocessableContentError;

  //pin Account
  @route("pin")
  @post
  pin(@path id: string):
    | Relationship
    | UnauthorizedResponse
    | ForbiddenResponse
    | UnprocessableContentError;

  //unpin Account
  @route("unpin")
  @post
  unpin(@path id: string):
    | Relationship
    | UnauthorizedResponse
    | ForbiddenResponse
    | UnprocessableContentError;

  // Set note
  @route("note")
  @post
  setNote(
    @path id: string,
    @body body: SetNoteForm
  ): Relationship | UnauthorizedResponse | UnprocessableContentError;
}

model SetNoteForm is Form {
  comment: string;
}

model MuteForm is Form {
  notifications: boolean;
  duration: int32;
}
