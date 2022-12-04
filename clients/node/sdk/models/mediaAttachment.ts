import {createMediaAttachmentMetaFromDiscriminatorValue} from './createMediaAttachmentMetaFromDiscriminatorValue';
import {MediaAttachmentMeta} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaAttachment implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The description property */
    private _description?: string | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The meta property */
    private _meta?: MediaAttachmentMeta | undefined;
    /** The preview_url property */
    private _preview_url?: string | undefined;
    /** The remote_url property */
    private _remote_url?: string | undefined;
    /** The text_url property */
    private _text_url?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /** The url property */
    private _url?: string | undefined;
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
     * Instantiates a new MediaAttachment and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "meta": n => { this.meta = n.getObjectValue<MediaAttachmentMeta>(createMediaAttachmentMetaFromDiscriminatorValue); },
            "preview_url": n => { this.preview_url = n.getStringValue(); },
            "remote_url": n => { this.remote_url = n.getStringValue(); },
            "text_url": n => { this.text_url = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the meta property value. The meta property
     * @returns a MediaAttachmentMeta
     */
    public get meta() {
        return this._meta;
    };
    /**
     * Sets the meta property value. The meta property
     * @param value Value to set for the meta property.
     */
    public set meta(value: MediaAttachmentMeta | undefined) {
        this._meta = value;
    };
    /**
     * Gets the preview_url property value. The preview_url property
     * @returns a string
     */
    public get preview_url() {
        return this._preview_url;
    };
    /**
     * Sets the preview_url property value. The preview_url property
     * @param value Value to set for the preview_url property.
     */
    public set preview_url(value: string | undefined) {
        this._preview_url = value;
    };
    /**
     * Gets the remote_url property value. The remote_url property
     * @returns a string
     */
    public get remote_url() {
        return this._remote_url;
    };
    /**
     * Sets the remote_url property value. The remote_url property
     * @param value Value to set for the remote_url property.
     */
    public set remote_url(value: string | undefined) {
        this._remote_url = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("id", this.id);
        writer.writeObjectValue<MediaAttachmentMeta>("meta", this.meta);
        writer.writeStringValue("preview_url", this.preview_url);
        writer.writeStringValue("remote_url", this.remote_url);
        writer.writeStringValue("text_url", this.text_url);
        writer.writeStringValue("type", this.type);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the text_url property value. The text_url property
     * @returns a string
     */
    public get text_url() {
        return this._text_url;
    };
    /**
     * Sets the text_url property value. The text_url property
     * @param value Value to set for the text_url property.
     */
    public set text_url(value: string | undefined) {
        this._text_url = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
