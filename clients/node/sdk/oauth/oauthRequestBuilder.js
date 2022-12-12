"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthRequestBuilder = void 0;
const authorizeRequestBuilder_1 = require("./authorize/authorizeRequestBuilder");
const revokeRequestBuilder_1 = require("./revoke/revokeRequestBuilder");
const tokenRequestBuilder_1 = require("./token/tokenRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
/** Builds and executes requests for operations under /oauth */
class OauthRequestBuilder {
    /** The authorize property */
    get authorize() {
        return new authorizeRequestBuilder_1.AuthorizeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The revoke property */
    get revoke() {
        return new revokeRequestBuilder_1.RevokeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The token property */
    get token() {
        return new tokenRequestBuilder_1.TokenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new OauthRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(pathParameters, requestAdapter) {
        if (!pathParameters)
            throw new Error("pathParameters cannot be undefined");
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/oauth";
        const urlTplParams = (0, kiota_abstractions_1.getPathParameters)(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    }
    ;
}
exports.OauthRequestBuilder = OauthRequestBuilder;
