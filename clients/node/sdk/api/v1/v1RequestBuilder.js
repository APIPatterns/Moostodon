"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1RequestBuilder = void 0;
const accountsRequestBuilder_1 = require("./accounts/accountsRequestBuilder");
const accountsItemRequestBuilder_1 = require("./accounts/item/accountsItemRequestBuilder");
const appsRequestBuilder_1 = require("./apps/appsRequestBuilder");
const blocksRequestBuilder_1 = require("./blocks/blocksRequestBuilder");
const bookmarksRequestBuilder_1 = require("./bookmarks/bookmarksRequestBuilder");
const domain_blocksRequestBuilder_1 = require("./domain_blocks/domain_blocksRequestBuilder");
const endorsementsRequestBuilder_1 = require("./endorsements/endorsementsRequestBuilder");
const favouritesRequestBuilder_1 = require("./favourites/favouritesRequestBuilder");
const instanceRequestBuilder_1 = require("./instance/instanceRequestBuilder");
const mutesRequestBuilder_1 = require("./mutes/mutesRequestBuilder");
const statusesItemRequestBuilder_1 = require("./statuses/item/statusesItemRequestBuilder");
const statusesRequestBuilder_1 = require("./statuses/statusesRequestBuilder");
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
    /** The blocks property */
    get blocks() {
        return new blocksRequestBuilder_1.BlocksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The bookmarks property */
    get bookmarks() {
        return new bookmarksRequestBuilder_1.BookmarksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The domain_blocks property */
    get domain_blocks() {
        return new domain_blocksRequestBuilder_1.Domain_blocksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The endorsements property */
    get endorsements() {
        return new endorsementsRequestBuilder_1.EndorsementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The favourites property */
    get favourites() {
        return new favouritesRequestBuilder_1.FavouritesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The instance property */
    get instance() {
        return new instanceRequestBuilder_1.InstanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mutes property */
    get mutes() {
        return new mutesRequestBuilder_1.MutesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The statuses property */
    get statuses() {
        return new statusesRequestBuilder_1.StatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The timelines property */
    get timelines() {
        return new timelinesRequestBuilder_1.TimelinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Gets an item from the NotUsedButRequired.api.v1.accounts.item collection
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
    /**
     * Gets an item from the NotUsedButRequired.api.v1.statuses.item collection
     * @param id Unique identifier of the item
     * @returns a StatusesItemRequestBuilder
     */
    statusesById(id) {
        if (!id)
            throw new Error("id cannot be undefined");
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(this.pathParameters);
        urlTplParams["id"] = id;
        return new statusesItemRequestBuilder_1.StatusesItemRequestBuilder(urlTplParams, this.requestAdapter);
    }
    ;
}
exports.V1RequestBuilder = V1RequestBuilder;
