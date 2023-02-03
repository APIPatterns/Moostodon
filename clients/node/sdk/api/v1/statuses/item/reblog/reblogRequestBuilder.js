"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReblogRequestBuilder = void 0;
const createStatusFromDiscriminatorValue_1 = require("../../../../../models/createStatusFromDiscriminatorValue");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/**
 * Builds and executes requests for operations under /api/v1/statuses/{id}/reblog
 */
class ReblogRequestBuilder {
    /**
     * Instantiates a new ReblogRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/statuses/{id}/reblog";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @param responseHandler Response handler to use in place of the default response handling provided by the core service
     * @returns a Promise of Status
     */
    post(requestConfiguration, responseHandler) {
        var _a, _b;
        const requestInfo = this.toPostRequestInformation(requestConfiguration);
        return (_b = (_a = this.requestAdapter) === null || _a === void 0 ? void 0 : _a.sendAsync(requestInfo, createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue, responseHandler, undefined)) !== null && _b !== void 0 ? _b : Promise.reject(new Error('request adapter is null'));
    }
    ;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
    toPostRequestInformation(requestConfiguration) {
        const requestInfo = new kiota_abstractions_1.RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = kiota_abstractions_1.HttpMethod.POST;
        requestInfo.headers["Accept"] = ["application/json"];
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    }
    ;
}
exports.ReblogRequestBuilder = ReblogRequestBuilder;
