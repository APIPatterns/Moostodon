"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAttachmentMeta = void 0;
const createMediaAttachmentMetaOriginalFromDiscriminatorValue_1 = require("./createMediaAttachmentMetaOriginalFromDiscriminatorValue");
const createMediaAttachmentMetaSmallFromDiscriminatorValue_1 = require("./createMediaAttachmentMetaSmallFromDiscriminatorValue");
class MediaAttachmentMeta {
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
     * Instantiates a new MediaAttachmentMeta and sets the default values.
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
            "original": n => { this.original = n.getObjectValue(createMediaAttachmentMetaOriginalFromDiscriminatorValue_1.createMediaAttachmentMetaOriginalFromDiscriminatorValue); },
            "small": n => { this.small = n.getObjectValue(createMediaAttachmentMetaSmallFromDiscriminatorValue_1.createMediaAttachmentMetaSmallFromDiscriminatorValue); },
        };
    }
    ;
    /**
     * Gets the original property value. The original property
     * @returns a MediaAttachmentMetaOriginal
     */
    get original() {
        return this._original;
    }
    ;
    /**
     * Sets the original property value. The original property
     * @param value Value to set for the original property.
     */
    set original(value) {
        this._original = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("original", this.original);
        writer.writeObjectValue("small", this.small);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the small property value. The small property
     * @returns a MediaAttachmentMetaSmall
     */
    get small() {
        return this._small;
    }
    ;
    /**
     * Sets the small property value. The small property
     * @param value Value to set for the small property.
     */
    set small(value) {
        this._small = value;
    }
    ;
}
exports.MediaAttachmentMeta = MediaAttachmentMeta;
