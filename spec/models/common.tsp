namespace Mastodon;
using TypeSpec.Http;

model Error {
  error: string;
  error_description: string;
}

model GoneResponse is Response<410>;

model Form {
  @header contentType: "application/x-www-form-urlencoded";
}
