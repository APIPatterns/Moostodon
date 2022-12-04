"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppsRequestBuilder = void 0;
const createApplicationFromDiscriminatorValue_1 = require("../../../models/createApplicationFromDiscriminatorValue");
const createUnprocessableContentErrorFromDiscriminatorValue_1 = require("../../../models/createUnprocessableContentErrorFromDiscriminatorValue");
const verify_credentialsRequestBuilder_1 = require("./verify_credentials/verify_credentialsRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/apps */
class AppsRequestBuilder {
    /** The verify_credentials property */
    get verify_credentials() {
        return new verify_credentialsRequestBuilder_1.Verify_credentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AppsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/apps";
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
        const errorMapping = {
            "422": createUnprocessableContentErrorFromDiscriminatorValue_1.createUnprocessableContentErrorFromDiscriminatorValue,
        };
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createApplicationFromDiscriminatorValue_1.createApplicationFromDiscriminatorValue, responseHandler, errorMapping)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
}
exports.AppsRequestBuilder = AppsRequestBuilder;
