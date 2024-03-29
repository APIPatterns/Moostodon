import "./common.tsp";
using Mastodon;
using TypeSpec.Http;

interface TimelinesService {
  // Get public timeline
  @route("public")
  @get
  publicTimeline(
    @query local: boolean,
    @query only_media: boolean,
    ...RangeParameters
  ): Status[];

  // Get Home Timeline
  @route("home")
  @get
  getHomeTimeline(
    ...RangeParameters
  ): Status[] | UnauthorizedResponse | NotFoundResponse;

  // Get Tag Timeline
  @route("tag/{tag}")
  @get
  getStatusByTag(
    @path tag: string,
    @query local: boolean,
    @query only_media: boolean,
    ...RangeParameters
  ): Status[] | NotFoundResponse;

  // Get List Timeline
  @route("list/{id}")
  @get
  getStatusByList(
    @path id: string,
    ...RangeParameters
  ): Status[] | NotFoundResponse;
}
