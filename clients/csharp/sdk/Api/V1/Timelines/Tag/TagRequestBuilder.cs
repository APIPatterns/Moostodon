using MastodonClientLib.Api.V1.Timelines.Tag.Item;
using Microsoft.Kiota.Abstractions;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System;
namespace MastodonClientLib.Api.V1.Timelines.Tag {
    /// <summary>
    /// Builds and executes requests for operations under \api\v1\timelines\tag
    /// </summary>
    public class TagRequestBuilder : BaseRequestBuilder {
        /// <summary>Gets an item from the MastodonClientLib.api.v1.timelines.tag.item collection</summary>
        public WithTagItemRequestBuilder this[string position] { get {
            var urlTplParams = new Dictionary<string, object>(PathParameters);
            if (!string.IsNullOrWhiteSpace(position)) urlTplParams.Add("tag", position);
            return new WithTagItemRequestBuilder(urlTplParams, RequestAdapter);
        } }
        /// <summary>
        /// Instantiates a new TagRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public TagRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1/timelines/tag", pathParameters) {
        }
        /// <summary>
        /// Instantiates a new TagRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public TagRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1/timelines/tag", rawUrl) {
        }
    }
}
