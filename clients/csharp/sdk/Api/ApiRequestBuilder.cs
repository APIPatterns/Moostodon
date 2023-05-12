using MastodonClientLib.Api.V1;
using MastodonClientLib.Api.V2;
using Microsoft.Kiota.Abstractions;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System;
namespace MastodonClientLib.Api {
    /// <summary>
    /// Builds and executes requests for operations under \api
    /// </summary>
    public class ApiRequestBuilder : BaseRequestBuilder {
        /// <summary>The v1 property</summary>
        public V1RequestBuilder V1 { get =>
            new V1RequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The v2 property</summary>
        public V2RequestBuilder V2 { get =>
            new V2RequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>
        /// Instantiates a new ApiRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public ApiRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api", pathParameters) {
        }
        /// <summary>
        /// Instantiates a new ApiRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public ApiRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api", rawUrl) {
        }
    }
}
