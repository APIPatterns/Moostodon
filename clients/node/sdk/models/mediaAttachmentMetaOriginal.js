"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaAttachmentMetaOriginal = void 0;
class MediaAttachmentMetaOriginal {
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
     * Gets the aspect property value. The aspect property
     * @returns a float
     */
    get aspect() {
        return this._aspect;
    }
    ;
    /**
     * Sets the aspect property value. The aspect property
     * @param value Value to set for the aspect property.
     */
    set aspect(value) {
        this._aspect = value;
    }
    ;
    /**
     * Instantiates a new MediaAttachmentMetaOriginal and sets the default values.
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
            "aspect": n => { this.aspect = n.getNumberValue(); },
            "height": n => { this.height = n.getNumberValue(); },
            "size": n => { this.size = n.getStringValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    }
    ;
    /**
     * Gets the height property value. The height property
     * @returns a integer
     */
    get height() {
        return this._height;
    }
    ;
    /**
     * Sets the height property value. The height property
     * @param value Value to set for the height property.
     */
    set height(value) {
        this._height = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeNumberValue("aspect", this.aspect);
        writer.writeNumberValue("height", this.height);
        writer.writeStringValue("size", this.size);
        writer.writeNumberValue("width", this.width);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the size property value. The size property
     * @returns a string
     */
    get size() {
        return this._size;
    }
    ;
    /**
     * Sets the size property value. The size property
     * @param value Value to set for the size property.
     */
    set size(value) {
        this._size = value;
    }
    ;
    /**
     * Gets the width property value. The width property
     * @returns a integer
     */
    get width() {
        return this._width;
    }
    ;
    /**
     * Sets the width property value. The width property
     * @param value Value to set for the width property.
     */
    set width(value) {
        this._width = value;
    }
    ;
}
exports.MediaAttachmentMetaOriginal = MediaAttachmentMetaOriginal;
