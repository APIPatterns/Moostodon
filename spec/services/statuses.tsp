import "./common.tsp";
import "../models/status.tsp";

using Mastodon;
using TypeSpec.Http;

interface StatusesService {
  // Publish a new status
  @post publishStatus(@body body: CreateStatusForm): Status;
}

model CreateStatusForm is Form {
  status: string;
  // /*
  // Not currently supported by Kiota https://github.com/microsoft/kiota/issues/2291
  // media_Ids: string[];
  // */

  // /*
  // Not currently supported by Kiota https://github.com/microsoft/kiota/issues/2291
  // @friendlyName("pollOptions")
  // "poll[options]": string[];
  // */


  @friendlyName("pollExpiresIn")
  `poll[expires_in]`: int32;

  @friendlyName("pollMultiple")
  `poll[multiple]`: boolean;

  @friendlyName("pollHideTotals")
  `poll[hide_totals]`: boolean;
  in_reply_to_id: string;
  sensitive: boolean;
  spoiler_text: string;
  visibility: Visibility;
  language: string;
  scheduled_at: string;
}

enum Visibility {
  public,
  unlisted,
  private,
  direct,
}
