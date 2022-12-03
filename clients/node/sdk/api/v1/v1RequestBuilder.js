"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1RequestBuilder = void 0;
const accountsRequestBuilder_1 = require("./accounts/accountsRequestBuilder");
const accountsItemRequestBuilder_1 = require("./accounts/item/accountsItemRequestBuilder");
const appsRequestBuilder_1 = require("./apps/appsRequestBuilder");
const oauthRequestBuilder_1 = require("./oauth/oauthRequestBuilder");
const timelinesRequestBuilder_1 = require("./timelines/timelinesRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1 */
class V1RequestBuilder {
    /** The accounts property */
    get accounts() {
        return new accountsRequestBuilder_1.AccountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The apps property */
    get apps() {
        return new appsRequestBuilder_1.AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The oauth property */
    get oauth() {
        return new oauthRequestBuilder_1.OauthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The timelines property */
    get timelines() {
        return new timelinesRequestBuilder_1.TimelinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the MoostodonSdk.api.v1.accounts.item collection
     * @param id Unique identifier of the item
     * @returns a AccountsItemRequestBuilder
     */
    accountsById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        urlTplParams["id"] = id;
        return new accountsItemRequestBuilder_1.AccountsItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * Instantiates a new V1RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
}
exports.V1RequestBuilder = V1RequestBuilder;
