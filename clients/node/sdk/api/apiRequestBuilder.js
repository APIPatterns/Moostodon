"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequestBuilder = void 0;
const v1RequestBuilder_1 = require("./v1/v1RequestBuilder");
const v2RequestBuilder_1 = require("./v2/v2RequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api */
class ApiRequestBuilder {
    /** The v1 property */
    get v1() {
        return new v1RequestBuilder_1.V1RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The v2 property */
    get v2() {
        return new v2RequestBuilder_1.V2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ApiRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
}
exports.ApiRequestBuilder = ApiRequestBuilder;
