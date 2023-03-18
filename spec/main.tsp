import "@typespec/http";
import "./services/apps.tsp";
import "./services/auth.tsp";
import "./services/accounts.tsp";
import "./services/account.tsp";
import "./services/timelines.tsp";
import "./services/search.tsp";
import "./services/instance.tsp";
import "./services/domain_blocks.tsp";
import "./services/statuses.tsp";
import "./services/status.tsp";


using TypeSpec.Http;

@service({
  title: "Mastodon",
  description: "Mastodon API",
  version: "1.0.0",
  termsOfService: "https://docs.joinmastodon.org/api/",
  contact: {
    name: "Mastodon",
    url: "https://joinmastodon.org/",
  },
})
@server(
  "https://mastodon.example/",
  "Actual server to be set during client setup"
)
@route("/")
namespace MastodonApi { // This namespace actually generates operations
  using Mastodon; // This namespace contains all models and interfaces

  @route("oauth")
  interface oauthResource extends OAuthService {}

  @route("api/v1")
  namespace v1 {
    @route("apps")
    interface appResource extends AppsService {}

    @route("accounts")
    interface AccountsResource extends AccountsService {}

    @route("accounts/{id}")
    interface AccountResource extends AccountService {}

    @route("bookmarks")
    interface BookmarksResource extends NamedSet<Status> {}

    @route("favourites")
    interface FavouritesResource extends NamedSet<Status> {}

    @route("mutes")
    interface MutesResource extends NamedSet<Account> {}

    @route("blocks")
    interface BlocksResource extends NamedSet<Account> {}

    @route("endorsements")
    interface EndorsementsResource extends NamedSet<Account> {}

    @route("timelines")
    interface TimelinesResource extends TimelinesService {}

    @route("statuses")
    interface StatusesResource extends StatusesService {}

    @route("statuses/{id}")
    interface StatusResource extends StatusService {}

    @route("instance")
    interface InstanceResource extends InstanceService {}

    @route("domain_blocks")
    interface DomainBlocksResource extends DomainBlocksService {}
  }

  @route("api/v2")
  namespace v2 {
    @route("search")
    interface SearchResource extends SearchService {}
  }
}
