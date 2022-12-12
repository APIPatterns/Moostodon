"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MastodonClient = void 0;
const apiRequestBuilder_1 = require("./api/apiRequestBuilder");
const oauthRequestBuilder_1 = require("./oauth/oauthRequestBuilder");
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
const kiota_serialization_json_1 = require("@microsoft/kiota-serialization-json");
const kiota_serialization_text_1 = require("@microsoft/kiota-serialization-text");
/** The main entry point of the SDK, exposes the configuration and the fluent API. */
class MastodonClient {
    /** The api property */
    get api() {
        return new apiRequestBuilder_1.ApiRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The oauth property */
    get oauth() {
        return new oauthRequestBuilder_1.OauthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new MastodonClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    constructor(requestAdapter) {
        if (!requestAdapter)
            throw new Error("requestAdapter cannot be undefined");
        this.pathParameters = {};
        this.urlTemplate = "{+baseurl}";
        this.requestAdapter = requestAdapter;
        (0, kiota_abstractions_1.registerDefaultSerializer)(kiota_serialization_json_1.JsonSerializationWriterFactory);
        (0, kiota_abstractions_1.registerDefaultSerializer)(kiota_serialization_text_1.TextSerializationWriterFactory);
        (0, kiota_abstractions_1.registerDefaultDeserializer)(kiota_serialization_json_1.JsonParseNodeFactory);
        (0, kiota_abstractions_1.registerDefaultDeserializer)(kiota_serialization_text_1.TextParseNodeFactory);
        if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
            requestAdapter.baseUrl = "https://mastodon.example";
        }
    }
    ;
}
exports.MastodonClient = MastodonClient;
