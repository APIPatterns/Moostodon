import "@typespec/http";
import "../models/common.tsp";

using TypeSpec.Http;
using Mastodon;

model RangeParameters {
  @query max_Id?: string;
  @query sinceId?: string;
  @query min_Id?: string;
  @query limit?: int32;
}

model UnprocessableContentError is Error {
  @statusCode statusCode: 422;
}

model UnauthorizedError is Error {
  @statusCode statusCode: 401;
}

interface NamedSet<T> {
  @get items(...RangeParameters): T[];
}
