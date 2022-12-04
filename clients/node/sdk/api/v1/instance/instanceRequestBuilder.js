"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceRequestBuilder = void 0;
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/instance */
class InstanceRequestBuilder {
    /** The instance property */
    get instance() {
        return new InstanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new InstanceRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/instance";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
}
exports.InstanceRequestBuilder = InstanceRequestBuilder;
