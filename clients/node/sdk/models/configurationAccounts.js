"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationAccounts = void 0;
class ConfigurationAccounts {
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
     * Instantiates a new ConfigurationAccounts and sets the default values.
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
            "max_feature_tags": n => { this.max_feature_tags = n.getNumberValue(); },
        };
    }
    ;
    /**
     * Gets the max_feature_tags property value. The max_feature_tags property
     * @returns a integer
     */
    get max_feature_tags() {
        return this._max_feature_tags;
    }
    ;
    /**
     * Sets the max_feature_tags property value. The max_feature_tags property
     * @param value Value to set for the max_feature_tags property.
     */
    set max_feature_tags(value) {
        this._max_feature_tags = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeNumberValue("max_feature_tags", this.max_feature_tags);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.ConfigurationAccounts = ConfigurationAccounts;
