"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusesItemRequestBuilder = void 0;
const createStatusFromDiscriminatorValue_1 = require("../../../../models/createStatusFromDiscriminatorValue");
const bookmarkRequestBuilder_1 = require("./bookmark/bookmarkRequestBuilder");
const contextRequestBuilder_1 = require("./context/contextRequestBuilder");
const favouriteRequestBuilder_1 = require("./favourite/favouriteRequestBuilder");
const favourited_byRequestBuilder_1 = require("./favourited_by/favourited_byRequestBuilder");
const historyRequestBuilder_1 = require("./history/historyRequestBuilder");
const muteRequestBuilder_1 = require("./mute/muteRequestBuilder");
const pinRequestBuilder_1 = require("./pin/pinRequestBuilder");
const reblogRequestBuilder_1 = require("./reblog/reblogRequestBuilder");
const reblogged_byRequestBuilder_1 = require("./reblogged_by/reblogged_byRequestBuilder");
const sourceRequestBuilder_1 = require("./source/sourceRequestBuilder");
const unbookmarkRequestBuilder_1 = require("./unbookmark/unbookmarkRequestBuilder");
const unfavouriteRequestBuilder_1 = require("./unfavourite/unfavouriteRequestBuilder");
const unmuteRequestBuilder_1 = require("./unmute/unmuteRequestBuilder");
const unpinRequestBuilder_1 = require("./unpin/unpinRequestBuilder");
const unreblogRequestBuilder_1 = require("./unreblog/unreblogRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/statuses/{id} */
class StatusesItemRequestBuilder {
    /** The bookmark property */
    get bookmark() {
        return new bookmarkRequestBuilder_1.BookmarkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The context property */
    get context() {
        return new contextRequestBuilder_1.ContextRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The favourite property */
    get favourite() {
        return new favouriteRequestBuilder_1.FavouriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The favourited_by property */
    get favourited_by() {
        return new favourited_byRequestBuilder_1.Favourited_byRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The history property */
    get history() {
        return new historyRequestBuilder_1.HistoryRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mute property */
    get mute() {
        return new muteRequestBuilder_1.MuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The pin property */
    get pin() {
        return new pinRequestBuilder_1.PinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The reblog property */
    get reblog() {
        return new reblogRequestBuilder_1.ReblogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The reblogged_by property */
    get reblogged_by() {
        return new reblogged_byRequestBuilder_1.Reblogged_byRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The source property */
    get source() {
        return new sourceRequestBuilder_1.SourceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unbookmark property */
    get unbookmark() {
        return new unbookmarkRequestBuilder_1.UnbookmarkRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unfavourite property */
    get unfavourite() {
        return new unfavouriteRequestBuilder_1.UnfavouriteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unmute property */
    get unmute() {
        return new unmuteRequestBuilder_1.UnmuteRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unpin property */
    get unpin() {
        return new unpinRequestBuilder_1.UnpinRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The unreblog property */
    get unreblog() {
        return new unreblogRequestBuilder_1.UnreblogRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new StatusesItemRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/statuses/{id}";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    createDeleteRequestInformation(requestConfiguration) {
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.DELETE;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
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
    createPutRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.PUT;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setStreamContent(body);
        return requestInfo;
    }
    ;
    delete(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createDeleteRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue, responseHandler, undefined)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    get(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.createGetRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue, responseHandler, undefined)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    put(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPutRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue, responseHandler, undefined)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}
exports.StatusesItemRequestBuilder = StatusesItemRequestBuilder;
