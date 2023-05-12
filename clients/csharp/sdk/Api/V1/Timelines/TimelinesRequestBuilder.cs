using MastodonClientLib.Api.V1.Timelines.Home;
using MastodonClientLib.Api.V1.Timelines.List;
using MastodonClientLib.Api.V1.Timelines.Public;
using MastodonClientLib.Api.V1.Timelines.Tag;
using Microsoft.Kiota.Abstractions;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System;
namespace MastodonClientLib.Api.V1.Timelines {
    /// <summary>
    /// Builds and executes requests for operations under \api\v1\timelines
    /// </summary>
    public class TimelinesRequestBuilder : BaseRequestBuilder {
        /// <summary>The home property</summary>
        public HomeRequestBuilder Home { get =>
            new HomeRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The list property</summary>
        public ListRequestBuilder List { get =>
            new ListRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The public property</summary>
        public PublicRequestBuilder Public { get =>
            new PublicRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The tag property</summary>
        public TagRequestBuilder Tag { get =>
            new TagRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>
        /// Instantiates a new TimelinesRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public TimelinesRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1/timelines", pathParameters) {
        }
        /// <summary>
        /// Instantiates a new TimelinesRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public TimelinesRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1/timelines", rawUrl) {
        }
    }
}
