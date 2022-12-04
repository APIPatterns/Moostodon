"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusSource = void 0;
class StatusSource {
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
     * Instantiates a new StatusSource and sets the default values.
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
            "id": n => { this.id = n.getStringValue(); },
            "spoiler_text": n => { this.spoiler_text = n.getStringValue(); },
            "text": n => { this.text = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    get id() {
        return this._id;
    }
    ;
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    set id(value) {
        this._id = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("spoiler_text", this.spoiler_text);
        writer.writeStringValue("text", this.text);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the spoiler_text property value. The spoiler_text property
     * @returns a string
     */
    get spoiler_text() {
        return this._spoiler_text;
    }
    ;
    /**
     * Sets the spoiler_text property value. The spoiler_text property
     * @param value Value to set for the spoiler_text property.
     */
    set spoiler_text(value) {
        this._spoiler_text = value;
    }
    ;
    /**
     * Gets the text property value. The text property
     * @returns a string
     */
    get text() {
        return this._text;
    }
    ;
    /**
     * Sets the text property value. The text property
     * @param value Value to set for the text property.
     */
    set text(value) {
        this._text = value;
    }
    ;
}
exports.StatusSource = StatusSource;
