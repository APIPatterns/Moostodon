"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAttachment = void 0;
const createMediaAttachmentMetaFromDiscriminatorValue_1 = require("./createMediaAttachmentMetaFromDiscriminatorValue");
class MediaAttachment {
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
     * Instantiates a new MediaAttachment and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
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
            "id": n => { this.id = n.getStringValue(); },
            "meta": n => { this.meta = n.getObjectValue(createMediaAttachmentMetaFromDiscriminatorValue_1.createMediaAttachmentMetaFromDiscriminatorValue); },
            "preview_url": n => { this.preview_url = n.getStringValue(); },
            "remote_url": n => { this.remote_url = n.getStringValue(); },
            "text_url": n => { this.text_url = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
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
     * Gets the meta property value. The meta property
     * @returns a MediaAttachmentMeta
     */
    get meta() {
        return this._meta;
    }
    ;
    /**
     * Sets the meta property value. The meta property
     * @param value Value to set for the meta property.
     */
    set meta(value) {
        this._meta = value;
    }
    ;
    /**
     * Gets the preview_url property value. The preview_url property
     * @returns a string
     */
    get preview_url() {
        return this._preview_url;
    }
    ;
    /**
     * Sets the preview_url property value. The preview_url property
     * @param value Value to set for the preview_url property.
     */
    set preview_url(value) {
        this._preview_url = value;
    }
    ;
    /**
     * Gets the remote_url property value. The remote_url property
     * @returns a string
     */
    get remote_url() {
        return this._remote_url;
    }
    ;
    /**
     * Sets the remote_url property value. The remote_url property
     * @param value Value to set for the remote_url property.
     */
    set remote_url(value) {
        this._remote_url = value;
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
        writer.writeStringValue("id", this.id);
        writer.writeObjectValue("meta", this.meta);
        writer.writeStringValue("preview_url", this.preview_url);
        writer.writeStringValue("remote_url", this.remote_url);
        writer.writeStringValue("text_url", this.text_url);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the text_url property value. The text_url property
     * @returns a string
     */
    get text_url() {
        return this._text_url;
    }
    ;
    /**
     * Sets the text_url property value. The text_url property
     * @param value Value to set for the text_url property.
     */
    set text_url(value) {
        this._text_url = value;
    }
    ;
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    get type() {
        return this._type;
    }
    ;
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    set type(value) {
        this._type = value;
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
exports.MediaAttachment = MediaAttachment;
