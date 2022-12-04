import {Account} from '../../../../models/';
import {createAccountFromDiscriminatorValue} from '../../../../models/createAccountFromDiscriminatorValue';
import {AccountsItemRequestBuilderGetRequestConfiguration} from './accountsItemRequestBuilderGetRequestConfiguration';
import {AccountsItemRequestBuilderPatchRequestConfiguration} from './accountsItemRequestBuilderPatchRequestConfiguration';
import {BlockRequestBuilder} from './block/blockRequestBuilder';
import {Featured_tagsRequestBuilder} from './featured_tags/featured_tagsRequestBuilder';
import {FollowRequestBuilder} from './follow/followRequestBuilder';
import {FollowersRequestBuilder} from './followers/followersRequestBuilder';
import {FollowingRequestBuilder} from './following/followingRequestBuilder';
import {ListsRequestBuilder} from './lists/listsRequestBuilder';
import {MuteRequestBuilder} from './mute/muteRequestBuilder';
import {NoteRequestBuilder} from './note/noteRequestBuilder';
import {PinRequestBuilder} from './pin/pinRequestBuilder';
import {Remove_from_followersRequestBuilder} from './remove_from_followers/remove_from_followersRequestBuilder';
import {StatusesRequestBuilder} from './statuses/statusesRequestBuilder';
import {UnblockRequestBuilder} from './unblock/unblockRequestBuilder';
import {UnfollowRequestBuilder} from './unfollow/unfollowRequestBuilder';
import {UnmuteRequestBuilder} from './unmute/unmuteRequestBuilder';
import {UnpinRequestBuilder} from './unpin/unpinRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /api/v1/accounts/{id} */
export class AccountsItemRequestBuilder {
    /** The block property */
    public get block(): BlockRequestBuilder {
        return new BlockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The featured_tags property */
    public get featured_tags(): Featured_tagsRequestBuilder {
        return new Featured_tagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The follow property */
    public get follow(): FollowRequestBuilder {
        return new FollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The followers property */
    public get followers(): FollowersRequestBuilder {
        return new FollowersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The following property */
    public get following(): FollowingRequestBuilder {
        return new FollowingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The lists property */
    public get lists(): ListsRequestBuilder {
        return new ListsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mute property */
    public get mute(): MuteRequestBuilder {
        return new MuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The note property */
    public get note(): NoteRequestBuilder {
        return new NoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The pin property */
    public get pin(): PinRequestBuilder {
        return new PinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The remove_from_followers property */
    public get remove_from_followers(): Remove_from_followersRequestBuilder {
        return new Remove_from_followersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The statuses property */
    public get statuses(): StatusesRequestBuilder {
        return new StatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unblock property */
    public get unblock(): UnblockRequestBuilder {
        return new UnblockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unfollow property */
    public get unfollow(): UnfollowRequestBuilder {
        return new UnfollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unmute property */
    public get unmute(): UnmuteRequestBuilder {
        return new UnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unpin property */
    public get unpin(): UnpinRequestBuilder {
        return new UnpinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new AccountsItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/accounts/{id}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    public createGetRequestInformation(requestConfiguration?: AccountsItemRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
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
    public createPatchRequestInformation(body: Account | undefined, requestConfiguration?: AccountsItemRequestBuilderPatchRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    };
    public get(requestConfiguration?: AccountsItemRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Account | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Account>(requestInfo, createAccountFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    public patch(body: Account | undefined, requestConfiguration?: AccountsItemRequestBuilderPatchRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Account | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Account>(requestInfo, createAccountFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
}
