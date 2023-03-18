import "./common.tsp";
import "../models/account.tsp";
import "../models/status.tsp";
import "../models/tag.tsp";
import "@typespec/openapi3";

// using Mastodon.v1;
// using Mastodon.v2;
using Mastodon;

using TypeSpec.Http;
using OpenAPI;

enum SearchType {
  accounts,
  hashtags,
  statuses,
}

model SearchResult {
  accounts: Account[];
  hashtags: Tag[];
  statuses: Status[];
}

interface SearchService {
  @get search(@query q: string, @query type: SearchType): SearchResult;
}
