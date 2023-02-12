"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationPolls = void 0;
class ConfigurationPolls {
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
     * Instantiates a new ConfigurationPolls and sets the default values.
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
            "max_characters_per_option": n => { this.max_characters_per_option = n.getNumberValue(); },
            "max_expiration": n => { this.max_expiration = n.getNumberValue(); },
            "max_options": n => { this.max_options = n.getNumberValue(); },
            "min_expiration": n => { this.min_expiration = n.getNumberValue(); },
        };
    }
    ;
    /**
     * Gets the max_characters_per_option property value. The max_characters_per_option property
     * @returns a integer
     */
    get max_characters_per_option() {
        return this._max_characters_per_option;
    }
    ;
    /**
     * Sets the max_characters_per_option property value. The max_characters_per_option property
     * @param value Value to set for the max_characters_per_option property.
     */
    set max_characters_per_option(value) {
        this._max_characters_per_option = value;
    }
    ;
    /**
     * Gets the max_expiration property value. The max_expiration property
     * @returns a integer
     */
    get max_expiration() {
        return this._max_expiration;
    }
    ;
    /**
     * Sets the max_expiration property value. The max_expiration property
     * @param value Value to set for the max_expiration property.
     */
    set max_expiration(value) {
        this._max_expiration = value;
    }
    ;
    /**
     * Gets the max_options property value. The max_options property
     * @returns a integer
     */
    get max_options() {
        return this._max_options;
    }
    ;
    /**
     * Sets the max_options property value. The max_options property
     * @param value Value to set for the max_options property.
     */
    set max_options(value) {
        this._max_options = value;
    }
    ;
    /**
     * Gets the min_expiration property value. The min_expiration property
     * @returns a integer
     */
    get min_expiration() {
        return this._min_expiration;
    }
    ;
    /**
     * Sets the min_expiration property value. The min_expiration property
     * @param value Value to set for the min_expiration property.
     */
    set min_expiration(value) {
        this._min_expiration = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeNumberValue("max_characters_per_option", this.max_characters_per_option);
        writer.writeNumberValue("max_expiration", this.max_expiration);
        writer.writeNumberValue("max_options", this.max_options);
        writer.writeNumberValue("min_expiration", this.min_expiration);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.ConfigurationPolls = ConfigurationPolls;
