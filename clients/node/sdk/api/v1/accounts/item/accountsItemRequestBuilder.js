"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsItemRequestBuilder = void 0;
const createAccountFromDiscriminatorValue_1 = require("../../../../models/v1/createAccountFromDiscriminatorValue");
const statusesRequestBuilder_1 = require("./statuses/statusesRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/accounts/{id} */
class AccountsItemRequestBuilder {
    /** The statuses property */
    get statuses() {
        return new statusesRequestBuilder_1.StatusesRequestBuilder(this.pathParameters, this.requestAdapter);
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
