"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationUrls = void 0;
class ConfigurationUrls {
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    get additionalData() {
        return this._additionalData;
    }
    ;
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value) {
        this._additionalData = value;
    }
    ;
    /**
     * Instantiates a new ConfigurationUrls and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "streaming_api": n => { this.streaming_api = n.getStringValue(); },
        };
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("streaming_api", this.streaming_api);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the streaming_api property value. The streaming_api property
     * @returns a string
     */
    get streaming_api() {
        return this._streaming_api;
    }
    ;
    /**
     * Sets the streaming_api property value. The streaming_api property
     * @param value Value to set for the streaming_api property.
     */
    set streaming_api(value) {
        this._streaming_api = value;
    }
    ;
}
exports.ConfigurationUrls = ConfigurationUrls;
