"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationStatuses = void 0;
class ConfigurationStatuses {
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
     * Gets the characters_reserved_per_url property value. The characters_reserved_per_url property
     * @returns a integer
     */
    get characters_reserved_per_url() {
        return this._characters_reserved_per_url;
    }
    ;
    /**
     * Sets the characters_reserved_per_url property value. The characters_reserved_per_url property
     * @param value Value to set for the characters_reserved_per_url property.
     */
    set characters_reserved_per_url(value) {
        this._characters_reserved_per_url = value;
    }
    ;
    /**
     * Instantiates a new ConfigurationStatuses and sets the default values.
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
            "characters_reserved_per_url": n => { this.characters_reserved_per_url = n.getNumberValue(); },
            "max_characters": n => { this.max_characters = n.getNumberValue(); },
            "max_media_attachments": n => { this.max_media_attachments = n.getNumberValue(); },
        };
    }
    ;
    /**
     * Gets the max_characters property value. The max_characters property
     * @returns a integer
     */
    get max_characters() {
        return this._max_characters;
    }
    ;
    /**
     * Sets the max_characters property value. The max_characters property
     * @param value Value to set for the max_characters property.
     */
    set max_characters(value) {
        this._max_characters = value;
    }
    ;
    /**
     * Gets the max_media_attachments property value. The max_media_attachments property
     * @returns a integer
     */
    get max_media_attachments() {
        return this._max_media_attachments;
    }
    ;
    /**
     * Sets the max_media_attachments property value. The max_media_attachments property
     * @param value Value to set for the max_media_attachments property.
     */
    set max_media_attachments(value) {
        this._max_media_attachments = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeNumberValue("characters_reserved_per_url", this.characters_reserved_per_url);
        writer.writeNumberValue("max_characters", this.max_characters);
        writer.writeNumberValue("max_media_attachments", this.max_media_attachments);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.ConfigurationStatuses = ConfigurationStatuses;
