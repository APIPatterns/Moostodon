using MastodonClientLib.Api.V1.Accounts;
using MastodonClientLib.Api.V1.Apps;
using MastodonClientLib.Api.V1.Oauth;
using MastodonClientLib.Api.V1.Timelines;
using Microsoft.Kiota.Abstractions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
namespace MastodonClientLib.Api.V1 {
    /// <summary>Builds and executes requests for operations under \api\v1</summary>
    public class V1RequestBuilder {
        /// <summary>The accounts property</summary>
        public AccountsRequestBuilder Accounts { get =>
            new AccountsRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The apps property</summary>
        public AppsRequestBuilder Apps { get =>
            new AppsRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The oauth property</summary>
        public OauthRequestBuilder Oauth { get =>
            new OauthRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Path parameters for the request</summary>
        private Dictionary<string, object> PathParameters { get; set; }
        /// <summary>The request adapter to use to execute the requests.</summary>
        private IRequestAdapter RequestAdapter { get; set; }
        /// <summary>The timelines property</summary>
        public TimelinesRequestBuilder Timelines { get =>
            new TimelinesRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Url template to use to build the URL for the current request builder</summary>
        private string UrlTemplate { get; set; }
        /// <summary>
        /// Instantiates a new V1RequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public V1RequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) {
            _ = pathParameters ?? throw new ArgumentNullException(nameof(pathParameters));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/api/v1";
            var urlTplParams = new Dictionary<string, object>(pathParameters);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// Instantiates a new V1RequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public V1RequestBuilder(string rawUrl, IRequestAdapter requestAdapter) {
            if(string.IsNullOrEmpty(rawUrl)) throw new ArgumentNullException(nameof(rawUrl));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/api/v1";
            var urlTplParams = new Dictionary<string, object>();
            urlTplParams.Add("request-raw-url", rawUrl);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
    }
}
