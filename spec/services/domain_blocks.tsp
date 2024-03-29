import "./common.tsp";
using Mastodon;
using TypeSpec.Http;

interface DomainBlocksService {
  // Get a list of domains blocked by the instance.
  @get getDomainBlocks(...RangeParameters): string[] | UnauthorizedResponse;

  // Block a domain.
  @post blockDomain(
    @body body: BlockDomainBody
  ): string | UnauthorizedResponse | UnprocessableContentError;

  // Unblock a domain.
  @delete unblockDomain(
    @query domain: string
  ): string | UnauthorizedResponse | UnprocessableContentError;
}

model BlockDomainBody {
  @header contentType: "application/x-www-form-urlencoded";
  domain: string;
}
