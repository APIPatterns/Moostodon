"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationTranslation = void 0;
class ConfigurationTranslation {
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
     * Instantiates a new ConfigurationTranslation and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the enabled property value. The enabled property
     * @returns a boolean
     */
    get enabled() {
        return this._enabled;
    }
    ;
    /**
     * Sets the enabled property value. The enabled property
     * @param value Value to set for the enabled property.
     */
    set enabled(value) {
        this._enabled = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "enabled": n => { this.enabled = n.getBooleanValue(); },
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
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.ConfigurationTranslation = ConfigurationTranslation;
