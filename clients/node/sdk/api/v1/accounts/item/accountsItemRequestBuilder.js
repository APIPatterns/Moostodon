"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsItemRequestBuilder = void 0;
const createAccountFromDiscriminatorValue_1 = require("../../../../models/createAccountFromDiscriminatorValue");
const blockRequestBuilder_1 = require("./block/blockRequestBuilder");
const featured_tagsRequestBuilder_1 = require("./featured_tags/featured_tagsRequestBuilder");
const followRequestBuilder_1 = require("./follow/followRequestBuilder");
const followersRequestBuilder_1 = require("./followers/followersRequestBuilder");
const followingRequestBuilder_1 = require("./following/followingRequestBuilder");
const listsRequestBuilder_1 = require("./lists/listsRequestBuilder");
const muteRequestBuilder_1 = require("./mute/muteRequestBuilder");
const noteRequestBuilder_1 = require("./note/noteRequestBuilder");
const pinRequestBuilder_1 = require("./pin/pinRequestBuilder");
const remove_from_followersRequestBuilder_1 = require("./remove_from_followers/remove_from_followersRequestBuilder");
const statusesRequestBuilder_1 = require("./statuses/statusesRequestBuilder");
const unblockRequestBuilder_1 = require("./unblock/unblockRequestBuilder");
const unfollowRequestBuilder_1 = require("./unfollow/unfollowRequestBuilder");
const unmuteRequestBuilder_1 = require("./unmute/unmuteRequestBuilder");
const unpinRequestBuilder_1 = require("./unpin/unpinRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/accounts/{id} */
class AccountsItemRequestBuilder {
    /** The block property */
    get block() {
        return new blockRequestBuilder_1.BlockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The featured_tags property */
    get featured_tags() {
        return new featured_tagsRequestBuilder_1.Featured_tagsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The follow property */
    get follow() {
        return new followRequestBuilder_1.FollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The followers property */
    get followers() {
        return new followersRequestBuilder_1.FollowersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The following property */
    get following() {
        return new followingRequestBuilder_1.FollowingRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The lists property */
    get lists() {
        return new listsRequestBuilder_1.ListsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mute property */
    get mute() {
        return new muteRequestBuilder_1.MuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The note property */
    get note() {
        return new noteRequestBuilder_1.NoteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The pin property */
    get pin() {
        return new pinRequestBuilder_1.PinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The remove_from_followers property */
    get remove_from_followers() {
        return new remove_from_followersRequestBuilder_1.Remove_from_followersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The statuses property */
    get statuses() {
        return new statusesRequestBuilder_1.StatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unblock property */
    get unblock() {
        return new unblockRequestBuilder_1.UnblockRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unfollow property */
    get unfollow() {
        return new unfollowRequestBuilder_1.UnfollowRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unmute property */
    get unmute() {
        return new unmuteRequestBuilder_1.UnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unpin property */
    get unpin() {
        return new unpinRequestBuilder_1.UnpinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccountsItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/accounts/{id}";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    createGetRequestInformation(requestConfiguration) {
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
    createPatchRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PATCH;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setContentFromParsable(this.requestAdapter, "application/json", body);
        return requestInfo;
    }
    ;
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue, responseHandler, undefined)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    patch(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPatchRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue, responseHandler, undefined)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}
exports.AccountsItemRequestBuilder = AccountsItemRequestBuilder;
