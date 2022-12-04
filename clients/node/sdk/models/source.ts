import {createFieldFromDiscriminatorValue} from './createFieldFromDiscriminatorValue';
import {Field} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Source implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The fields property */
    private _fields?: Field[] | undefined;
    /** The follower_requests_count property */
    private _follower_requests_count?: number | undefined;
    /** The language property */
    private _language?: string | undefined;
    /** The note property */
    private _note?: string | undefined;
    /** The privacy property */
    private _privacy?: string | undefined;
    /** The sensitive property */
    private _sensitive?: boolean | undefined;
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
     * Instantiates a new Source and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the fields property value. The fields property
     * @returns a Field
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. The fields property
     * @param value Value to set for the fields property.
     */
    public set fields(value: Field[] | undefined) {
        this._fields = value;
    };
    /**
     * Gets the follower_requests_count property value. The follower_requests_count property
     * @returns a integer
     */
    public get follower_requests_count() {
        return this._follower_requests_count;
    };
    /**
     * Sets the follower_requests_count property value. The follower_requests_count property
     * @param value Value to set for the follower_requests_count property.
     */
    public set follower_requests_count(value: number | undefined) {
        this._follower_requests_count = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fields": n => { this.fields = n.getCollectionOfObjectValues<Field>(createFieldFromDiscriminatorValue); },
            "follower_requests_count": n => { this.follower_requests_count = n.getNumberValue(); },
            "language": n => { this.language = n.getStringValue(); },
            "note": n => { this.note = n.getStringValue(); },
            "privacy": n => { this.privacy = n.getStringValue(); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the language property value. The language property
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The language property
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
    /**
     * Gets the note property value. The note property
     * @returns a string
     */
    public get note() {
        return this._note;
    };
    /**
     * Sets the note property value. The note property
     * @param value Value to set for the note property.
     */
    public set note(value: string | undefined) {
        this._note = value;
    };
    /**
     * Gets the privacy property value. The privacy property
     * @returns a string
     */
    public get privacy() {
        return this._privacy;
    };
    /**
     * Sets the privacy property value. The privacy property
     * @param value Value to set for the privacy property.
     */
    public set privacy(value: string | undefined) {
        this._privacy = value;
    };
    /**
     * Gets the sensitive property value. The sensitive property
     * @returns a boolean
     */
    public get sensitive() {
        return this._sensitive;
    };
    /**
     * Sets the sensitive property value. The sensitive property
     * @param value Value to set for the sensitive property.
     */
    public set sensitive(value: boolean | undefined) {
        this._sensitive = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<Field>("fields", this.fields);
        writer.writeNumberValue("follower_requests_count", this.follower_requests_count);
        writer.writeStringValue("language", this.language);
        writer.writeStringValue("note", this.note);
        writer.writeStringValue("privacy", this.privacy);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeAdditionalData(this.additionalData);
    };
}
