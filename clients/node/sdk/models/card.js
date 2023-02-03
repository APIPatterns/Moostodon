"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    /**
     * Instantiates a new Card and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
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
    ;
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    get description() {
        return this._description;
    }
    ;
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    set description(value) {
        this._description = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "image": n => { this.image = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the image property value. The image property
     * @returns a string
     */
    get image() {
        return this._image;
    }
    ;
    /**
     * Sets the image property value. The image property
     * @param value Value to set for the image property.
     */
    set image(value) {
        this._image = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("image", this.image);
        writer.writeStringValue("title", this.title);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    get title() {
        return this._title;
    }
    ;
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    set title(value) {
        this._title = value;
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
}
exports.Card = Card;
