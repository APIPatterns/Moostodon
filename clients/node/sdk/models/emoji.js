"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emoji = void 0;
class Emoji {
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
     * Instantiates a new Emoji and sets the default values.
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
            "shortcode": n => { this.shortcode = n.getStringValue(); },
            "static_url": n => { this.static_url = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "visible_in_picker": n => { this.visible_in_picker = n.getBooleanValue(); },
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
        writer.writeStringValue("shortcode", this.shortcode);
        writer.writeStringValue("static_url", this.static_url);
        writer.writeStringValue("url", this.url);
        writer.writeBooleanValue("visible_in_picker", this.visible_in_picker);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the shortcode property value. The shortcode property
     * @returns a string
     */
    get shortcode() {
        return this._shortcode;
    }
    ;
    /**
     * Sets the shortcode property value. The shortcode property
     * @param value Value to set for the shortcode property.
     */
    set shortcode(value) {
        this._shortcode = value;
    }
    ;
    /**
     * Gets the static_url property value. The static_url property
     * @returns a string
     */
    get static_url() {
        return this._static_url;
    }
    ;
    /**
     * Sets the static_url property value. The static_url property
     * @param value Value to set for the static_url property.
     */
    set static_url(value) {
        this._static_url = value;
    }
    ;
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    get url() {
        return this._url;
    }
    ;
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    set url(value) {
        this._url = value;
    }
    ;
    /**
     * Gets the visible_in_picker property value. The visible_in_picker property
     * @returns a boolean
     */
    get visible_in_picker() {
        return this._visible_in_picker;
    }
    ;
    /**
     * Sets the visible_in_picker property value. The visible_in_picker property
     * @param value Value to set for the visible_in_picker property.
     */
    set visible_in_picker(value) {
        this._visible_in_picker = value;
    }
    ;
}
exports.Emoji = Emoji;
