using MastodonClientLib.Api.V1.Accounts;
using MastodonClientLib.Api.V1.Apps;
using MastodonClientLib.Api.V1.Blocks;
using MastodonClientLib.Api.V1.Bookmarks;
using MastodonClientLib.Api.V1.Domain_blocks;
using MastodonClientLib.Api.V1.Endorsements;
using MastodonClientLib.Api.V1.Favourites;
using MastodonClientLib.Api.V1.Instance;
using MastodonClientLib.Api.V1.Mutes;
using MastodonClientLib.Api.V1.Statuses;
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
        /// <summary>The blocks property</summary>
        public BlocksRequestBuilder Blocks { get =>
            new BlocksRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The bookmarks property</summary>
        public BookmarksRequestBuilder Bookmarks { get =>
            new BookmarksRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The domain_blocks property</summary>
        public Domain_blocksRequestBuilder Domain_blocks { get =>
            new Domain_blocksRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The endorsements property</summary>
        public EndorsementsRequestBuilder Endorsements { get =>
            new EndorsementsRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The favourites property</summary>
        public FavouritesRequestBuilder Favourites { get =>
            new FavouritesRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The instance property</summary>
        public InstanceRequestBuilder Instance { get =>
            new InstanceRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The mutes property</summary>
        public MutesRequestBuilder Mutes { get =>
            new MutesRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Path parameters for the request</summary>
        private Dictionary<string, object> PathParameters { get; set; }
        /// <summary>The request adapter to use to execute the requests.</summary>
        private IRequestAdapter RequestAdapter { get; set; }
        /// <summary>The statuses property</summary>
        public StatusesRequestBuilder Statuses { get =>
            new StatusesRequestBuilder(PathParameters, RequestAdapter);
        }
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
