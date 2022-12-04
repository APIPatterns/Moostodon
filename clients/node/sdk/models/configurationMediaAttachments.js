"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationMediaAttachments = void 0;
class ConfigurationMediaAttachments {
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
     * Instantiates a new ConfigurationMediaAttachments and sets the default values.
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
            "image_matrix_limit": n => { this.image_matrix_limit = n.getNumberValue(); },
            "image_size_limit": n => { this.image_size_limit = n.getNumberValue(); },
            "supported_mime_types": n => { this.supported_mime_types = n.getCollectionOfPrimitiveValues(); },
            "video_matrix_limit": n => { this.video_matrix_limit = n.getNumberValue(); },
            "video_size_limit": n => { this.video_size_limit = n.getNumberValue(); },
        };
    }
    ;
    /**
     * Gets the image_matrix_limit property value. The image_matrix_limit property
     * @returns a integer
     */
    get image_matrix_limit() {
        return this._image_matrix_limit;
    }
    ;
    /**
     * Sets the image_matrix_limit property value. The image_matrix_limit property
     * @param value Value to set for the image_matrix_limit property.
     */
    set image_matrix_limit(value) {
        this._image_matrix_limit = value;
    }
    ;
    /**
     * Gets the image_size_limit property value. The image_size_limit property
     * @returns a integer
     */
    get image_size_limit() {
        return this._image_size_limit;
    }
    ;
    /**
     * Sets the image_size_limit property value. The image_size_limit property
     * @param value Value to set for the image_size_limit property.
     */
    set image_size_limit(value) {
        this._image_size_limit = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeNumberValue("image_matrix_limit", this.image_matrix_limit);
        writer.writeNumberValue("image_size_limit", this.image_size_limit);
        writer.writeCollectionOfPrimitiveValues("supported_mime_types", this.supported_mime_types);
        writer.writeNumberValue("video_matrix_limit", this.video_matrix_limit);
        writer.writeNumberValue("video_size_limit", this.video_size_limit);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the supported_mime_types property value. The supported_mime_types property
     * @returns a string
     */
    get supported_mime_types() {
        return this._supported_mime_types;
    }
    ;
    /**
     * Sets the supported_mime_types property value. The supported_mime_types property
     * @param value Value to set for the supported_mime_types property.
     */
    set supported_mime_types(value) {
        this._supported_mime_types = value;
    }
    ;
    /**
     * Gets the video_matrix_limit property value. The video_matrix_limit property
     * @returns a integer
     */
    get video_matrix_limit() {
        return this._video_matrix_limit;
    }
    ;
    /**
     * Sets the video_matrix_limit property value. The video_matrix_limit property
     * @param value Value to set for the video_matrix_limit property.
     */
    set video_matrix_limit(value) {
        this._video_matrix_limit = value;
    }
    ;
    /**
     * Gets the video_size_limit property value. The video_size_limit property
     * @returns a integer
     */
    get video_size_limit() {
        return this._video_size_limit;
    }
    ;
    /**
     * Sets the video_size_limit property value. The video_size_limit property
     * @param value Value to set for the video_size_limit property.
     */
    set video_size_limit(value) {
        this._video_size_limit = value;
    }
    ;
}
exports.ConfigurationMediaAttachments = ConfigurationMediaAttachments;
