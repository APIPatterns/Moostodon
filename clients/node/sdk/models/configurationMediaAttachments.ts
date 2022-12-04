import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConfigurationMediaAttachments implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The image_matrix_limit property */
    private _image_matrix_limit?: number | undefined;
    /** The image_size_limit property */
    private _image_size_limit?: number | undefined;
    /** The supported_mime_types property */
    private _supported_mime_types?: string[] | undefined;
    /** The video_matrix_limit property */
    private _video_matrix_limit?: number | undefined;
    /** The video_size_limit property */
    private _video_size_limit?: number | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new ConfigurationMediaAttachments and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "image_matrix_limit": n => { this.image_matrix_limit = n.getNumberValue(); },
            "image_size_limit": n => { this.image_size_limit = n.getNumberValue(); },
            "supported_mime_types": n => { this.supported_mime_types = n.getCollectionOfPrimitiveValues<string>(); },
            "video_matrix_limit": n => { this.video_matrix_limit = n.getNumberValue(); },
            "video_size_limit": n => { this.video_size_limit = n.getNumberValue(); },
        };
    };
    /**
     * Gets the image_matrix_limit property value. The image_matrix_limit property
     * @returns a integer
     */
    public get image_matrix_limit() {
        return this._image_matrix_limit;
    };
    /**
     * Sets the image_matrix_limit property value. The image_matrix_limit property
     * @param value Value to set for the image_matrix_limit property.
     */
    public set image_matrix_limit(value: number | undefined) {
        this._image_matrix_limit = value;
    };
    /**
     * Gets the image_size_limit property value. The image_size_limit property
     * @returns a integer
     */
    public get image_size_limit() {
        return this._image_size_limit;
    };
    /**
     * Sets the image_size_limit property value. The image_size_limit property
     * @param value Value to set for the image_size_limit property.
     */
    public set image_size_limit(value: number | undefined) {
        this._image_size_limit = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("image_matrix_limit", this.image_matrix_limit);
        writer.writeNumberValue("image_size_limit", this.image_size_limit);
        writer.writeCollectionOfPrimitiveValues<string>("supported_mime_types", this.supported_mime_types);
        writer.writeNumberValue("video_matrix_limit", this.video_matrix_limit);
        writer.writeNumberValue("video_size_limit", this.video_size_limit);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the supported_mime_types property value. The supported_mime_types property
     * @returns a string
     */
    public get supported_mime_types() {
        return this._supported_mime_types;
    };
    /**
     * Sets the supported_mime_types property value. The supported_mime_types property
     * @param value Value to set for the supported_mime_types property.
     */
    public set supported_mime_types(value: string[] | undefined) {
        this._supported_mime_types = value;
    };
    /**
     * Gets the video_matrix_limit property value. The video_matrix_limit property
     * @returns a integer
     */
    public get video_matrix_limit() {
        return this._video_matrix_limit;
    };
    /**
     * Sets the video_matrix_limit property value. The video_matrix_limit property
     * @param value Value to set for the video_matrix_limit property.
     */
    public set video_matrix_limit(value: number | undefined) {
        this._video_matrix_limit = value;
    };
    /**
     * Gets the video_size_limit property value. The video_size_limit property
     * @returns a integer
     */
    public get video_size_limit() {
        return this._video_size_limit;
    };
    /**
     * Sets the video_size_limit property value. The video_size_limit property
     * @param value Value to set for the video_size_limit property.
     */
    public set video_size_limit(value: number | undefined) {
        this._video_size_limit = value;
    };
}
