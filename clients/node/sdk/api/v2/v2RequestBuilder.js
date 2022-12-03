"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V2RequestBuilder = void 0;
const searchRequestBuilder_1 = require("./search/searchRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v2 */
class V2RequestBuilder {
    /** The search property */
    get search() {
        return new searchRequestBuilder_1.SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new V2RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v2";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
}
exports.V2RequestBuilder = V2RequestBuilder;
