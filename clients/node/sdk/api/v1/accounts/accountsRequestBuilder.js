"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsRequestBuilder = void 0;
const createAccountFromDiscriminatorValue_1 = require("../../../models/createAccountFromDiscriminatorValue");
const familiar_followersRequestBuilder_1 = require("./familiar_followers/familiar_followersRequestBuilder");
const lookupRequestBuilder_1 = require("./lookup/lookupRequestBuilder");
const relationshipsRequestBuilder_1 = require("./relationships/relationshipsRequestBuilder");
const searchRequestBuilder_1 = require("./search/searchRequestBuilder");
const update_credentialsRequestBuilder_1 = require("./update_credentials/update_credentialsRequestBuilder");
const verify_credentialsRequestBuilder_1 = require("./verify_credentials/verify_credentialsRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/accounts */
class AccountsRequestBuilder {
    /** The familiar_followers property */
    get familiar_followers() {
        return new familiar_followersRequestBuilder_1.Familiar_followersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The lookup property */
    get lookup() {
        return new lookupRequestBuilder_1.LookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The relationships property */
    get relationships() {
        return new relationshipsRequestBuilder_1.RelationshipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The search property */
    get search() {
        return new searchRequestBuilder_1.SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The update_credentials property */
    get update_credentials() {
        return new update_credentialsRequestBuilder_1.Update_credentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The verify_credentials property */
    get verify_credentials() {
        return new verify_credentialsRequestBuilder_1.Verify_credentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccountsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/accounts";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    createPostRequestInformation(body, requestConfiguration) {
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setStreamContent(body);
        return requestInfo;
    }
    ;
    post(body, requestConfiguration, responseHandler) {
        var _a, _b;
        if (!body)
            throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(body, requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue, responseHandler, undefined)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}
exports.AccountsRequestBuilder = AccountsRequestBuilder;
