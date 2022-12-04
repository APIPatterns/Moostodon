import {Status} from '../../../../models/';
import {createStatusFromDiscriminatorValue} from '../../../../models/createStatusFromDiscriminatorValue';
import {BookmarkRequestBuilder} from './bookmark/bookmarkRequestBuilder';
import {ContextRequestBuilder} from './context/contextRequestBuilder';
import {FavouriteRequestBuilder} from './favourite/favouriteRequestBuilder';
import {Favourited_byRequestBuilder} from './favourited_by/favourited_byRequestBuilder';
import {HistoryRequestBuilder} from './history/historyRequestBuilder';
import {MuteRequestBuilder} from './mute/muteRequestBuilder';
import {PinRequestBuilder} from './pin/pinRequestBuilder';
import {ReblogRequestBuilder} from './reblog/reblogRequestBuilder';
import {Reblogged_byRequestBuilder} from './reblogged_by/reblogged_byRequestBuilder';
import {SourceRequestBuilder} from './source/sourceRequestBuilder';
import {StatusesItemRequestBuilderDeleteRequestConfiguration} from './statusesItemRequestBuilderDeleteRequestConfiguration';
import {StatusesItemRequestBuilderGetRequestConfiguration} from './statusesItemRequestBuilderGetRequestConfiguration';
import {StatusesItemRequestBuilderPutRequestConfiguration} from './statusesItemRequestBuilderPutRequestConfiguration';
import {UnbookmarkRequestBuilder} from './unbookmark/unbookmarkRequestBuilder';
import {UnfavouriteRequestBuilder} from './unfavourite/unfavouriteRequestBuilder';
import {UnmuteRequestBuilder} from './unmute/unmuteRequestBuilder';
import {UnpinRequestBuilder} from './unpin/unpinRequestBuilder';
import {UnreblogRequestBuilder} from './unreblog/unreblogRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /api/v1/statuses/{id} */
export class StatusesItemRequestBuilder {
    /** The bookmark property */
    public get bookmark(): BookmarkRequestBuilder {
        return new BookmarkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The context property */
    public get context(): ContextRequestBuilder {
        return new ContextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The favourite property */
    public get favourite(): FavouriteRequestBuilder {
        return new FavouriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The favourited_by property */
    public get favourited_by(): Favourited_byRequestBuilder {
        return new Favourited_byRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The history property */
    public get history(): HistoryRequestBuilder {
        return new HistoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mute property */
    public get mute(): MuteRequestBuilder {
        return new MuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The pin property */
    public get pin(): PinRequestBuilder {
        return new PinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The reblog property */
    public get reblog(): ReblogRequestBuilder {
        return new ReblogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The reblogged_by property */
    public get reblogged_by(): Reblogged_byRequestBuilder {
        return new Reblogged_byRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The source property */
    public get source(): SourceRequestBuilder {
        return new SourceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unbookmark property */
    public get unbookmark(): UnbookmarkRequestBuilder {
        return new UnbookmarkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unfavourite property */
    public get unfavourite(): UnfavouriteRequestBuilder {
        return new UnfavouriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unmute property */
    public get unmute(): UnmuteRequestBuilder {
        return new UnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unpin property */
    public get unpin(): UnpinRequestBuilder {
        return new UnpinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unreblog property */
    public get unreblog(): UnreblogRequestBuilder {
        return new UnreblogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new StatusesItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/statuses/{id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    public createDeleteRequestInformation(requestConfiguration?: StatusesItemRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    public createGetRequestInformation(requestConfiguration?: StatusesItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    public createPutRequestInformation(body: ArrayBuffer | undefined, requestConfiguration?: StatusesItemRequestBuilderPutRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PUT;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setStreamContent(body);
        return requestInfo;
    };
    public delete(requestConfiguration?: StatusesItemRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Status | undefined> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Status>(requestInfo, createStatusFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    public get(requestConfiguration?: StatusesItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Status | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Status>(requestInfo, createStatusFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    public put(body: ArrayBuffer | undefined, requestConfiguration?: StatusesItemRequestBuilderPutRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Status | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPutRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Status>(requestInfo, createStatusFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
}
