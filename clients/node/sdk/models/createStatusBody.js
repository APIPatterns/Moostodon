"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatusBody = void 0;
const visibility_1 = require("./visibility");
class CreateStatusBody {
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
     * Instantiates a new CreateStatusBody and sets the default values.
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
            "in_reply_to_id": n => { this.in_reply_to_id = n.getStringValue(); },
            "language": n => { this.language = n.getStringValue(); },
            "media_Ids": n => { this.media_Ids = n.getCollectionOfPrimitiveValues(); },
            "poll[expires_in]": n => { this.pollExpires_in = n.getNumberValue(); },
            "poll[hide_totals]": n => { this.pollHide_totals = n.getBooleanValue(); },
            "poll[multiple]": n => { this.pollMultiple = n.getBooleanValue(); },
            "poll[options]": n => { this.pollOptions = n.getCollectionOfPrimitiveValues(); },
            "scheduled_at": n => { this.scheduled_at = n.getStringValue(); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
            "spoiler_text": n => { this.spoiler_text = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
            "visibility": n => { this.visibility = n.getEnumValue(visibility_1.Visibility); },
        };
    }
    ;
    /**
     * Gets the in_reply_to_id property value. The in_reply_to_id property
     * @returns a string
     */
    get in_reply_to_id() {
        return this._in_reply_to_id;
    }
    ;
    /**
     * Sets the in_reply_to_id property value. The in_reply_to_id property
     * @param value Value to set for the in_reply_to_id property.
     */
    set in_reply_to_id(value) {
        this._in_reply_to_id = value;
    }
    ;
    /**
     * Gets the language property value. The language property
     * @returns a string
     */
    get language() {
        return this._language;
    }
    ;
    /**
     * Sets the language property value. The language property
     * @param value Value to set for the language property.
     */
    set language(value) {
        this._language = value;
    }
    ;
    /**
     * Gets the media_Ids property value. The media_Ids property
     * @returns a string
     */
    get media_Ids() {
        return this._media_Ids;
    }
    ;
    /**
     * Sets the media_Ids property value. The media_Ids property
     * @param value Value to set for the media_Ids property.
     */
    set media_Ids(value) {
        this._media_Ids = value;
    }
    ;
    /**
     * Gets the poll[expires_in] property value. The pollExpires_in property
     * @returns a integer
     */
    get pollExpires_in() {
        return this._pollExpires_in;
    }
    ;
    /**
     * Sets the poll[expires_in] property value. The pollExpires_in property
     * @param value Value to set for the pollExpires_in property.
     */
    set pollExpires_in(value) {
        this._pollExpires_in = value;
    }
    ;
    /**
     * Gets the poll[hide_totals] property value. The pollHide_totals property
     * @returns a boolean
     */
    get pollHide_totals() {
        return this._pollHide_totals;
    }
    ;
    /**
     * Sets the poll[hide_totals] property value. The pollHide_totals property
     * @param value Value to set for the pollHide_totals property.
     */
    set pollHide_totals(value) {
        this._pollHide_totals = value;
    }
    ;
    /**
     * Gets the poll[multiple] property value. The pollMultiple property
     * @returns a boolean
     */
    get pollMultiple() {
        return this._pollMultiple;
    }
    ;
    /**
     * Sets the poll[multiple] property value. The pollMultiple property
     * @param value Value to set for the pollMultiple property.
     */
    set pollMultiple(value) {
        this._pollMultiple = value;
    }
    ;
    /**
     * Gets the poll[options] property value. The pollOptions property
     * @returns a string
     */
    get pollOptions() {
        return this._pollOptions;
    }
    ;
    /**
     * Sets the poll[options] property value. The pollOptions property
     * @param value Value to set for the pollOptions property.
     */
    set pollOptions(value) {
        this._pollOptions = value;
    }
    ;
    /**
     * Gets the scheduled_at property value. The scheduled_at property
     * @returns a string
     */
    get scheduled_at() {
        return this._scheduled_at;
    }
    ;
    /**
     * Sets the scheduled_at property value. The scheduled_at property
     * @param value Value to set for the scheduled_at property.
     */
    set scheduled_at(value) {
        this._scheduled_at = value;
    }
    ;
    /**
     * Gets the sensitive property value. The sensitive property
     * @returns a boolean
     */
    get sensitive() {
        return this._sensitive;
    }
    ;
    /**
     * Sets the sensitive property value. The sensitive property
     * @param value Value to set for the sensitive property.
     */
    set sensitive(value) {
        this._sensitive = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("in_reply_to_id", this.in_reply_to_id);
        writer.writeStringValue("language", this.language);
        writer.writeCollectionOfPrimitiveValues("media_Ids", this.media_Ids);
        writer.writeNumberValue("poll[expires_in]", this.pollExpires_in);
        writer.writeBooleanValue("poll[hide_totals]", this.pollHide_totals);
        writer.writeBooleanValue("poll[multiple]", this.pollMultiple);
        writer.writeCollectionOfPrimitiveValues("poll[options]", this.pollOptions);
        writer.writeStringValue("scheduled_at", this.scheduled_at);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeStringValue("spoiler_text", this.spoiler_text);
        writer.writeStringValue("status", this.status);
        writer.writeEnumValue("visibility", this.visibility);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the spoiler_text property value. The spoiler_text property
     * @returns a string
     */
    get spoiler_text() {
        return this._spoiler_text;
    }
    ;
    /**
     * Sets the spoiler_text property value. The spoiler_text property
     * @param value Value to set for the spoiler_text property.
     */
    set spoiler_text(value) {
        this._spoiler_text = value;
    }
    ;
    /**
     * Gets the status property value. The status property
     * @returns a string
     */
    get status() {
        return this._status;
    }
    ;
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    set status(value) {
        this._status = value;
    }
    ;
    /**
     * Gets the visibility property value. The visibility property
     * @returns a Visibility
     */
    get visibility() {
        return this._visibility;
    }
    ;
    /**
     * Sets the visibility property value. The visibility property
     * @param value Value to set for the visibility property.
     */
    set visibility(value) {
        this._visibility = value;
    }
    ;
}
exports.CreateStatusBody = CreateStatusBody;
