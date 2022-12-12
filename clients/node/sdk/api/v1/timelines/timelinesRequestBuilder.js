"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelinesRequestBuilder = void 0;
const homeRequestBuilder_1 = require("./home/homeRequestBuilder");
const listItemRequestBuilder_1 = require("./list/item/listItemRequestBuilder");
const listRequestBuilder_1 = require("./list/listRequestBuilder");
const publicRequestBuilder_1 = require("./public/publicRequestBuilder");
const withTagItemRequestBuilder_1 = require("./tag/item/withTagItemRequestBuilder");
const tagRequestBuilder_1 = require("./tag/tagRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /api/v1/timelines */
class TimelinesRequestBuilder {
    /** The home property */
    get home() {
        return new homeRequestBuilder_1.HomeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The list property */
    get list() {
        return new listRequestBuilder_1.ListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
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
     * Gets an item from the NotUsedButRequired.api.v1.timelines.list.item collection
     * @param id Unique identifier of the item
     * @returns a ListItemRequestBuilder
     */
    listById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        urlTplParams["id"] = id;
        return new listItemRequestBuilder_1.ListItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
    /**
     * Gets an item from the NotUsedButRequired.api.v1.timelines.tag.item collection
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
