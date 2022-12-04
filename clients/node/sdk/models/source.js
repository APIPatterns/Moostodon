"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Source = void 0;
const createFieldFromDiscriminatorValue_1 = require("./createFieldFromDiscriminatorValue");
class Source {
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
     * Instantiates a new Source and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the fields property value. The fields property
     * @returns a Field
     */
    get fields() {
        return this._fields;
    }
    ;
    /**
     * Sets the fields property value. The fields property
     * @param value Value to set for the fields property.
     */
    set fields(value) {
        this._fields = value;
    }
    ;
    /**
     * Gets the follower_requests_count property value. The follower_requests_count property
     * @returns a integer
     */
    get follower_requests_count() {
        return this._follower_requests_count;
    }
    ;
    /**
     * Sets the follower_requests_count property value. The follower_requests_count property
     * @param value Value to set for the follower_requests_count property.
     */
    set follower_requests_count(value) {
        this._follower_requests_count = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "fields": n => { this.fields = n.getCollectionOfObjectValues(createFieldFromDiscriminatorValue_1.createFieldFromDiscriminatorValue); },
            "follower_requests_count": n => { this.follower_requests_count = n.getNumberValue(); },
            "language": n => { this.language = n.getStringValue(); },
            "note": n => { this.note = n.getStringValue(); },
            "privacy": n => { this.privacy = n.getStringValue(); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
        };
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
     * Gets the note property value. The note property
     * @returns a string
     */
    get note() {
        return this._note;
    }
    ;
    /**
     * Sets the note property value. The note property
     * @param value Value to set for the note property.
     */
    set note(value) {
        this._note = value;
    }
    ;
    /**
     * Gets the privacy property value. The privacy property
     * @returns a string
     */
    get privacy() {
        return this._privacy;
    }
    ;
    /**
     * Sets the privacy property value. The privacy property
     * @param value Value to set for the privacy property.
     */
    set privacy(value) {
        this._privacy = value;
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
        writer.writeCollectionOfObjectValues("fields", this.fields);
        writer.writeNumberValue("follower_requests_count", this.follower_requests_count);
        writer.writeStringValue("language", this.language);
        writer.writeStringValue("note", this.note);
        writer.writeStringValue("privacy", this.privacy);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.Source = Source;
