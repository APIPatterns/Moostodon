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
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System;
namespace MastodonClientLib.Api.V1 {
    /// <summary>
    /// Builds and executes requests for operations under \api\v1
    /// </summary>
    public class V1RequestBuilder : BaseRequestBuilder {
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
        /// <summary>The statuses property</summary>
        public StatusesRequestBuilder Statuses { get =>
            new StatusesRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The timelines property</summary>
        public TimelinesRequestBuilder Timelines { get =>
            new TimelinesRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>
        /// Instantiates a new V1RequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public V1RequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1", pathParameters) {
        }
        /// <summary>
        /// Instantiates a new V1RequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public V1RequestBuilder(string rawUrl, IRequestAdapter requestAdapter) : base(requestAdapter, "{+baseurl}/api/v1", rawUrl) {
        }
    }
}
