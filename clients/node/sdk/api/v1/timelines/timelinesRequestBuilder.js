"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelinesRequestBuilder = void 0;
const publicRequestBuilder_1 = require("./public/publicRequestBuilder");
const withTagItemRequestBuilder_1 = require("./tag/item/withTagItemRequestBuilder");
const tagRequestBuilder_1 = require("./tag/tagRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/timelines */
class TimelinesRequestBuilder {
    /** The public property */
    get public() {
        return new publicRequestBuilder_1.PublicRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The tag property */
    get tag() {
        return new tagRequestBuilder_1.TagRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new TimelinesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/timelines";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
    /**
     * Gets an item from the MoostodonSdk.api.v1.timelines.tag.item collection
     * @param id Unique identifier of the item
     * @returns a WithTagItemRequestBuilder
     */
    tagById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        urlTplParams["tag"] = id;
        return new withTagItemRequestBuilder_1.WithTagItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}
exports.TimelinesRequestBuilder = TimelinesRequestBuilder;
