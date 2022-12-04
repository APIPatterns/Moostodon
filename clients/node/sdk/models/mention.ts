import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Mention implements AdditionalDataHolder, Parsable {
    /** The acct property */
    private _acct?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The id property */
    private _id?: string | undefined;
    /** The url property */
    private _url?: string | undefined;
    /** The username property */
    private _username?: string | undefined;
    /**
     * Gets the acct property value. The acct property
     * @returns a string
     */
    public get acct() {
        return this._acct;
    };
    /**
     * Sets the acct property value. The acct property
     * @param value Value to set for the acct property.
     */
    public set acct(value: string | undefined) {
        this._acct = value;
    };
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
     * Instantiates a new Mention and sets the default values.
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
            "acct": n => { this.acct = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "username": n => { this.username = n.getStringValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("acct", this.acct);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("url", this.url);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
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
     * Gets the username property value. The username property
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. The username property
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
    };
}
