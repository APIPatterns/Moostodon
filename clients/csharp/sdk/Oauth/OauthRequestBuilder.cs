using MastodonClientLib.Oauth.Authorize;
using MastodonClientLib.Oauth.Revoke;
using MastodonClientLib.Oauth.Token;
using Microsoft.Kiota.Abstractions;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System;
namespace MastodonClientLib.Oauth {
    /// <summary>
    /// Builds and executes requests for operations under \oauth
    /// </summary>
    public class OauthRequestBuilder : BaseRequestBuilder {
        /// <summary>The authorize property</summary>
        public AuthorizeRequestBuilder Authorize { get =>
            new AuthorizeRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The revoke property</summary>
        public RevokeRequestBuilder Revoke { get =>
            new RevokeRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The token property</summary>
        public TokenRequestBuilder Token { get =>
            new TokenRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>
        /// Instantiates a new OauthRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public OauthRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/oauth", pathParameters) {
        }
        /// <summary>
        /// Instantiates a new OauthRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public OauthRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/oauth", rawUrl) {
        }
    }
}
