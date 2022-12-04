import {Visibility} from './visibility';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CreateStatusBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The in_reply_to_id property */
    private _in_reply_to_id?: string | undefined;
    /** The language property */
    private _language?: string | undefined;
    /** The media_Ids property */
    private _media_Ids?: string[] | undefined;
    /** The pollExpires_in property */
    private _pollExpires_in?: number | undefined;
    /** The pollHide_totals property */
    private _pollHide_totals?: boolean | undefined;
    /** The pollMultiple property */
    private _pollMultiple?: boolean | undefined;
    /** The pollOptions property */
    private _pollOptions?: string[] | undefined;
    /** The scheduled_at property */
    private _scheduled_at?: string | undefined;
    /** The sensitive property */
    private _sensitive?: boolean | undefined;
    /** The spoiler_text property */
    private _spoiler_text?: string | undefined;
    /** The status property */
    private _status?: string | undefined;
    /** The visibility property */
    private _visibility?: Visibility | undefined;
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
     * Instantiates a new CreateStatusBody and sets the default values.
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
            "in_reply_to_id": n => { this.in_reply_to_id = n.getStringValue(); },
            "language": n => { this.language = n.getStringValue(); },
            "media_Ids": n => { this.media_Ids = n.getCollectionOfPrimitiveValues<string>(); },
            "poll[expires_in]": n => { this.pollExpires_in = n.getNumberValue(); },
            "poll[hide_totals]": n => { this.pollHide_totals = n.getBooleanValue(); },
            "poll[multiple]": n => { this.pollMultiple = n.getBooleanValue(); },
            "poll[options]": n => { this.pollOptions = n.getCollectionOfPrimitiveValues<string>(); },
            "scheduled_at": n => { this.scheduled_at = n.getStringValue(); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
            "spoiler_text": n => { this.spoiler_text = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
            "visibility": n => { this.visibility = n.getEnumValue<Visibility>(Visibility); },
        };
    };
    /**
     * Gets the in_reply_to_id property value. The in_reply_to_id property
     * @returns a string
     */
    public get in_reply_to_id() {
        return this._in_reply_to_id;
    };
    /**
     * Sets the in_reply_to_id property value. The in_reply_to_id property
     * @param value Value to set for the in_reply_to_id property.
     */
    public set in_reply_to_id(value: string | undefined) {
        this._in_reply_to_id = value;
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
     * Gets the media_Ids property value. The media_Ids property
     * @returns a string
     */
    public get media_Ids() {
        return this._media_Ids;
    };
    /**
     * Sets the media_Ids property value. The media_Ids property
     * @param value Value to set for the media_Ids property.
     */
    public set media_Ids(value: string[] | undefined) {
        this._media_Ids = value;
    };
    /**
     * Gets the poll[expires_in] property value. The pollExpires_in property
     * @returns a integer
     */
    public get pollExpires_in() {
        return this._pollExpires_in;
    };
    /**
     * Sets the poll[expires_in] property value. The pollExpires_in property
     * @param value Value to set for the pollExpires_in property.
     */
    public set pollExpires_in(value: number | undefined) {
        this._pollExpires_in = value;
    };
    /**
     * Gets the poll[hide_totals] property value. The pollHide_totals property
     * @returns a boolean
     */
    public get pollHide_totals() {
        return this._pollHide_totals;
    };
    /**
     * Sets the poll[hide_totals] property value. The pollHide_totals property
     * @param value Value to set for the pollHide_totals property.
     */
    public set pollHide_totals(value: boolean | undefined) {
        this._pollHide_totals = value;
    };
    /**
     * Gets the poll[multiple] property value. The pollMultiple property
     * @returns a boolean
     */
    public get pollMultiple() {
        return this._pollMultiple;
    };
    /**
     * Sets the poll[multiple] property value. The pollMultiple property
     * @param value Value to set for the pollMultiple property.
     */
    public set pollMultiple(value: boolean | undefined) {
        this._pollMultiple = value;
    };
    /**
     * Gets the poll[options] property value. The pollOptions property
     * @returns a string
     */
    public get pollOptions() {
        return this._pollOptions;
    };
    /**
     * Sets the poll[options] property value. The pollOptions property
     * @param value Value to set for the pollOptions property.
     */
    public set pollOptions(value: string[] | undefined) {
        this._pollOptions = value;
    };
    /**
     * Gets the scheduled_at property value. The scheduled_at property
     * @returns a string
     */
    public get scheduled_at() {
        return this._scheduled_at;
    };
    /**
     * Sets the scheduled_at property value. The scheduled_at property
     * @param value Value to set for the scheduled_at property.
     */
    public set scheduled_at(value: string | undefined) {
        this._scheduled_at = value;
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
        writer.writeStringValue("in_reply_to_id", this.in_reply_to_id);
        writer.writeStringValue("language", this.language);
        writer.writeCollectionOfPrimitiveValues<string>("media_Ids", this.media_Ids);
        writer.writeNumberValue("poll[expires_in]", this.pollExpires_in);
        writer.writeBooleanValue("poll[hide_totals]", this.pollHide_totals);
        writer.writeBooleanValue("poll[multiple]", this.pollMultiple);
        writer.writeCollectionOfPrimitiveValues<string>("poll[options]", this.pollOptions);
        writer.writeStringValue("scheduled_at", this.scheduled_at);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeStringValue("spoiler_text", this.spoiler_text);
        writer.writeStringValue("status", this.status);
        writer.writeEnumValue<Visibility>("visibility", this.visibility);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the spoiler_text property value. The spoiler_text property
     * @returns a string
     */
    public get spoiler_text() {
        return this._spoiler_text;
    };
    /**
     * Sets the spoiler_text property value. The spoiler_text property
     * @param value Value to set for the spoiler_text property.
     */
    public set spoiler_text(value: string | undefined) {
        this._spoiler_text = value;
    };
    /**
     * Gets the status property value. The status property
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the visibility property value. The visibility property
     * @returns a Visibility
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. The visibility property
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: Visibility | undefined) {
        this._visibility = value;
    };
}
