import "./common.tsp";
import "../models/status.tsp";
import "../models/account.tsp";

using Mastodon;
using TypeSpec.Http;

interface StatusService {
  //Get a status
  @get getStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  //Delete a status
  @delete deleteStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Get status context
  @route("context")
  @get
  getContext(@path id: string): Context | NotFoundResponse;

  // See who boosted a status
  @route("reblogged_by")
  @get
  getRebloggedBy(@path id: string): Account[] | NotFoundResponse;

  // See who favourited a status
  @route("favourited_by")
  @get
  getFavouritedBy(@path id: string): Account[] | NotFoundResponse;

  // Favourite a status
  @route("favourite")
  @post
  favouriteStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Unfavourite a status
  @route("unfavourite")
  @post
  unfavouriteStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Reblog a status
  @route("reblog")
  @post
  reblogStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Unreblog a status
  @route("unreblog")
  @post
  unreblogStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Bookmark a status
  @route("bookmark")
  @post
  bookmarkStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Unbookmark a status
  @route("unbookmark")
  @post
  unbookmarkStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Mute notifications for a status
  @route("mute")
  @post
  muteStatusNotifications(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Unmute notifications for a status
  @route("unmute")
  @post
  unmuteStatusNotifications(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Pin a status
  @route("pin")
  @post
  pinStatus(@path id: string): Status | UnauthorizedResponse | NotFoundResponse;

  // Unpin a status
  @route("unpin")
  @post
  unpinStatus(
    @path id: string
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // Edit a status
  @put editStatus(
    @path id: string,
    @body status: EditStatusForm
  ): Status | UnauthorizedResponse | NotFoundResponse;

  // View edit history
  @route("history")
  @get
  getStatusHistory(
    @path id: string
  ): StatusEdit[] | UnauthorizedResponse | NotFoundResponse;

  // View status source
  @route("source")
  @get
  getStatusSource(
    @path id: string
  ): StatusSource | UnauthorizedResponse | NotFoundResponse;
}

model StatusSource {
  id: string;
  text: string;
  spoiler_text: string;
}

model StatusEdit {
  content: string;
  spoiler_text: string;
  sensitive: boolean;
  created_at: string;
  account: Account;
  poll: Poll;
  media_attachments: MediaAttachment[];
  emojis: Emoji[];
}

model EditStatusForm {
  @header contentType: "application/x-www-form-urlencoded";
  status: string;
  spoiler_text: string;
  sensitive: boolean;
  // Not yet supported by Kiota
  // media_Ids: string[];
  // Not yet supported by Kiota
  // @friendlyName("pollOptions")
  // "poll[options]": string[];

  @friendlyName("pollExpiresIn")
  `poll[expires_in]`: int32;

  @friendlyName("pollMultiple")
  `poll[multiple]`: boolean;

  @friendlyName("pollHideTotals")
  `poll[hide_totals]`: boolean;
}

model Context {
  ancestors: Status[];
  descendants: Status[];
}
