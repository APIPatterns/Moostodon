using MastodonClientLib.Api.V1.Statuses.Item.Bookmark;
using MastodonClientLib.Api.V1.Statuses.Item.Context;
using MastodonClientLib.Api.V1.Statuses.Item.Favourite;
using MastodonClientLib.Api.V1.Statuses.Item.Favourited_by;
using MastodonClientLib.Api.V1.Statuses.Item.History;
using MastodonClientLib.Api.V1.Statuses.Item.Mute;
using MastodonClientLib.Api.V1.Statuses.Item.Pin;
using MastodonClientLib.Api.V1.Statuses.Item.Reblog;
using MastodonClientLib.Api.V1.Statuses.Item.Reblogged_by;
using MastodonClientLib.Api.V1.Statuses.Item.Source;
using MastodonClientLib.Api.V1.Statuses.Item.Unbookmark;
using MastodonClientLib.Api.V1.Statuses.Item.Unfavourite;
using MastodonClientLib.Api.V1.Statuses.Item.Unmute;
using MastodonClientLib.Api.V1.Statuses.Item.Unpin;
using MastodonClientLib.Api.V1.Statuses.Item.Unreblog;
using MastodonClientLib.Models;
using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
namespace MastodonClientLib.Api.V1.Statuses.Item {
    /// <summary>Builds and executes requests for operations under \api\v1\statuses\{id}</summary>
    public class StatusesItemRequestBuilder {
        /// <summary>The bookmark property</summary>
        public BookmarkRequestBuilder Bookmark { get =>
            new BookmarkRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The context property</summary>
        public ContextRequestBuilder Context { get =>
            new ContextRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The favourite property</summary>
        public FavouriteRequestBuilder Favourite { get =>
            new FavouriteRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The favourited_by property</summary>
        public Favourited_byRequestBuilder Favourited_by { get =>
            new Favourited_byRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The history property</summary>
        public HistoryRequestBuilder History { get =>
            new HistoryRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The mute property</summary>
        public MuteRequestBuilder Mute { get =>
            new MuteRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Path parameters for the request</summary>
        private Dictionary<string, object> PathParameters { get; set; }
        /// <summary>The pin property</summary>
        public PinRequestBuilder Pin { get =>
            new PinRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The reblog property</summary>
        public ReblogRequestBuilder Reblog { get =>
            new ReblogRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The reblogged_by property</summary>
        public Reblogged_byRequestBuilder Reblogged_by { get =>
            new Reblogged_byRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The request adapter to use to execute the requests.</summary>
        private IRequestAdapter RequestAdapter { get; set; }
        /// <summary>The source property</summary>
        public SourceRequestBuilder Source { get =>
            new SourceRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The unbookmark property</summary>
        public UnbookmarkRequestBuilder Unbookmark { get =>
            new UnbookmarkRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The unfavourite property</summary>
        public UnfavouriteRequestBuilder Unfavourite { get =>
            new UnfavouriteRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The unmute property</summary>
        public UnmuteRequestBuilder Unmute { get =>
            new UnmuteRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The unpin property</summary>
        public UnpinRequestBuilder Unpin { get =>
            new UnpinRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>The unreblog property</summary>
        public UnreblogRequestBuilder Unreblog { get =>
            new UnreblogRequestBuilder(PathParameters, RequestAdapter);
        }
        /// <summary>Url template to use to build the URL for the current request builder</summary>
        private string UrlTemplate { get; set; }
        /// <summary>
        /// Instantiates a new StatusesItemRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="pathParameters">Path parameters for the request</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public StatusesItemRequestBuilder(Dictionary<string, object> pathParameters, IRequestAdapter requestAdapter) {
            _ = pathParameters ?? throw new ArgumentNullException(nameof(pathParameters));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/api/v1/statuses/{id}";
            var urlTplParams = new Dictionary<string, object>(pathParameters);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        /// <summary>
        /// Instantiates a new StatusesItemRequestBuilder and sets the default values.
        /// </summary>
        /// <param name="rawUrl">The raw URL to use for the request builder.</param>
        /// <param name="requestAdapter">The request adapter to use to execute the requests.</param>
        public StatusesItemRequestBuilder(string rawUrl, IRequestAdapter requestAdapter) {
            if(string.IsNullOrEmpty(rawUrl)) throw new ArgumentNullException(nameof(rawUrl));
            _ = requestAdapter ?? throw new ArgumentNullException(nameof(requestAdapter));
            UrlTemplate = "{+baseurl}/api/v1/statuses/{id}";
            var urlTplParams = new Dictionary<string, object>();
            urlTplParams.Add("request-raw-url", rawUrl);
            PathParameters = urlTplParams;
            RequestAdapter = requestAdapter;
        }
        public RequestInformation CreateDeleteRequestInformation(Action<StatusesItemRequestBuilderDeleteRequestConfiguration> requestConfiguration = default) {
            var requestInfo = new RequestInformation {
                HttpMethod = Method.DELETE,
                UrlTemplate = UrlTemplate,
                PathParameters = PathParameters,
            };
            requestInfo.Headers.Add("Accept", "application/json");
            if (requestConfiguration != null) {
                var requestConfig = new StatusesItemRequestBuilderDeleteRequestConfiguration();
                requestConfiguration.Invoke(requestConfig);
                requestInfo.AddRequestOptions(requestConfig.Options);
                requestInfo.AddHeaders(requestConfig.Headers);
            }
            return requestInfo;
        }
        public RequestInformation CreateGetRequestInformation(Action<StatusesItemRequestBuilderGetRequestConfiguration> requestConfiguration = default) {
            var requestInfo = new RequestInformation {
                HttpMethod = Method.GET,
                UrlTemplate = UrlTemplate,
                PathParameters = PathParameters,
            };
            requestInfo.Headers.Add("Accept", "application/json");
            if (requestConfiguration != null) {
                var requestConfig = new StatusesItemRequestBuilderGetRequestConfiguration();
                requestConfiguration.Invoke(requestConfig);
                requestInfo.AddRequestOptions(requestConfig.Options);
                requestInfo.AddHeaders(requestConfig.Headers);
            }
            return requestInfo;
        }
        public RequestInformation CreatePutRequestInformation(Stream body, Action<StatusesItemRequestBuilderPutRequestConfiguration> requestConfiguration = default) {
            _ = body ?? throw new ArgumentNullException(nameof(body));
            var requestInfo = new RequestInformation {
                HttpMethod = Method.PUT,
                UrlTemplate = UrlTemplate,
                PathParameters = PathParameters,
            };
            requestInfo.Headers.Add("Accept", "application/json");
            requestInfo.SetStreamContent(body);
            if (requestConfiguration != null) {
                var requestConfig = new StatusesItemRequestBuilderPutRequestConfiguration();
                requestConfiguration.Invoke(requestConfig);
                requestInfo.AddRequestOptions(requestConfig.Options);
                requestInfo.AddHeaders(requestConfig.Headers);
            }
            return requestInfo;
        }
        public async Task<Status> DeleteAsync(Action<StatusesItemRequestBuilderDeleteRequestConfiguration> requestConfiguration = default, CancellationToken cancellationToken = default) {
            var requestInfo = CreateDeleteRequestInformation(requestConfiguration);
            return await RequestAdapter.SendAsync<Status>(requestInfo, Status.CreateFromDiscriminatorValue, default, cancellationToken);
        }
        public async Task<Status> GetAsync(Action<StatusesItemRequestBuilderGetRequestConfiguration> requestConfiguration = default, CancellationToken cancellationToken = default) {
            var requestInfo = CreateGetRequestInformation(requestConfiguration);
            return await RequestAdapter.SendAsync<Status>(requestInfo, Status.CreateFromDiscriminatorValue, default, cancellationToken);
        }
        public async Task<Status> PutAsync(Stream body, Action<StatusesItemRequestBuilderPutRequestConfiguration> requestConfiguration = default, CancellationToken cancellationToken = default) {
            _ = body ?? throw new ArgumentNullException(nameof(body));
            var requestInfo = CreatePutRequestInformation(body, requestConfiguration);
            return await RequestAdapter.SendAsync<Status>(requestInfo, Status.CreateFromDiscriminatorValue, default, cancellationToken);
        }
        /// <summary>Configuration for the request such as headers, query parameters, and middleware options.</summary>
        public class StatusesItemRequestBuilderDeleteRequestConfiguration {
            /// <summary>Request headers</summary>
            public IDictionary<string, string> Headers { get; set; }
            /// <summary>Request options</summary>
            public IList<IRequestOption> Options { get; set; }
            /// <summary>
            /// Instantiates a new StatusesItemRequestBuilderDeleteRequestConfiguration and sets the default values.
            /// </summary>
            public StatusesItemRequestBuilderDeleteRequestConfiguration() {
                Options = new List<IRequestOption>();
                Headers = new Dictionary<string, string>();
            }
        }
        /// <summary>Configuration for the request such as headers, query parameters, and middleware options.</summary>
        public class StatusesItemRequestBuilderGetRequestConfiguration {
            /// <summary>Request headers</summary>
            public IDictionary<string, string> Headers { get; set; }
            /// <summary>Request options</summary>
            public IList<IRequestOption> Options { get; set; }
            /// <summary>
            /// Instantiates a new StatusesItemRequestBuilderGetRequestConfiguration and sets the default values.
            /// </summary>
            public StatusesItemRequestBuilderGetRequestConfiguration() {
                Options = new List<IRequestOption>();
                Headers = new Dictionary<string, string>();
            }
        }
        /// <summary>Configuration for the request such as headers, query parameters, and middleware options.</summary>
        public class StatusesItemRequestBuilderPutRequestConfiguration {
            /// <summary>Request headers</summary>
            public IDictionary<string, string> Headers { get; set; }
            /// <summary>Request options</summary>
            public IList<IRequestOption> Options { get; set; }
            /// <summary>
            /// Instantiates a new StatusesItemRequestBuilderPutRequestConfiguration and sets the default values.
            /// </summary>
            public StatusesItemRequestBuilderPutRequestConfiguration() {
                Options = new List<IRequestOption>();
                Headers = new Dictionary<string, string>();
            }
        }
    }
}
