using MastodonClientLib.Api.V1.Timelines.List.Item;
using Microsoft.Kiota.Abstractions;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System;
namespace MastodonClientLib.Api.V1.Timelines.List {
    /// <summary>
    /// Builds and executes requests for operations under \api\v1\timelines\list
    /// </summary>
    public class ListRequestBuilder : BaseRequestBuilder {
        /// <summary>Gets an item from the MastodonClientLib.api.v1.timelines.list.item collection</summary>
        public ListItemRequestBuilder this[string position] { get {
            var urlTplParams = new Dictionary<string, object>(PathParameters);
            if (!string.IsNullOrWhiteSpace(position)) urlTplParams.Add("id", position);
            return new ListItemRequestBuilder(urlTplParams, RequestAdapter);
        } }
        /// <summary>
        /// Instantiates a new ListRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public ListRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1/timelines/list", pathParameters) {
        }
        /// <summary>
        /// Instantiates a new ListRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public ListRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1/timelines/list", rawUrl) {
        }
    }
}
