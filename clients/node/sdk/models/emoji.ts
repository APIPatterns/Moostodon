import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Emoji implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The shortcode property */
    private _shortcode?: string | undefined;
    /** The static_url property */
    private _static_url?: string | undefined;
    /** The url property */
    private _url?: string | undefined;
    /** The visible_in_picker property */
    private _visible_in_picker?: boolean | undefined;
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
     * Instantiates a new Emoji and sets the default values.
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
            "shortcode": n => { this.shortcode = n.getStringValue(); },
            "static_url": n => { this.static_url = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "visible_in_picker": n => { this.visible_in_picker = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("shortcode", this.shortcode);
        writer.writeStringValue("static_url", this.static_url);
        writer.writeStringValue("url", this.url);
        writer.writeBooleanValue("visible_in_picker", this.visible_in_picker);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the shortcode property value. The shortcode property
     * @returns a string
     */
    public get shortcode() {
        return this._shortcode;
    };
    /**
     * Sets the shortcode property value. The shortcode property
     * @param value Value to set for the shortcode property.
     */
    public set shortcode(value: string | undefined) {
        this._shortcode = value;
    };
    /**
     * Gets the static_url property value. The static_url property
     * @returns a string
     */
    public get static_url() {
        return this._static_url;
    };
    /**
     * Sets the static_url property value. The static_url property
     * @param value Value to set for the static_url property.
     */
    public set static_url(value: string | undefined) {
        this._static_url = value;
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
    /**
     * Gets the visible_in_picker property value. The visible_in_picker property
     * @returns a boolean
     */
    public get visible_in_picker() {
        return this._visible_in_picker;
    };
    /**
     * Sets the visible_in_picker property value. The visible_in_picker property
     * @param value Value to set for the visible_in_picker property.
     */
    public set visible_in_picker(value: boolean | undefined) {
        this._visible_in_picker = value;
    };
}
