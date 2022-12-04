"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCredentialsBody = void 0;
const createFieldFromDiscriminatorValue_1 = require("./createFieldFromDiscriminatorValue");
const createSourceFromDiscriminatorValue_1 = require("./createSourceFromDiscriminatorValue");
class UpdateCredentialsBody {
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
     * Gets the avatar property value. The avatar property
     * @returns a string
     */
    get avatar() {
        return this._avatar;
    }
    ;
    /**
     * Sets the avatar property value. The avatar property
     * @param value Value to set for the avatar property.
     */
    set avatar(value) {
        this._avatar = value;
    }
    ;
    /**
     * Gets the bot property value. The bot property
     * @returns a boolean
     */
    get bot() {
        return this._bot;
    }
    ;
    /**
     * Sets the bot property value. The bot property
     * @param value Value to set for the bot property.
     */
    set bot(value) {
        this._bot = value;
    }
    ;
    /**
     * Instantiates a new UpdateCredentialsBody and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the discoverable property value. The discoverable property
     * @returns a boolean
     */
    get discoverable() {
        return this._discoverable;
    }
    ;
    /**
     * Sets the discoverable property value. The discoverable property
     * @param value Value to set for the discoverable property.
     */
    set discoverable(value) {
        this._discoverable = value;
    }
    ;
    /**
     * Gets the display_name property value. The display_name property
     * @returns a string
     */
    get display_name() {
        return this._display_name;
    }
    ;
    /**
     * Sets the display_name property value. The display_name property
     * @param value Value to set for the display_name property.
     */
    set display_name(value) {
        this._display_name = value;
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
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "avatar": n => { this.avatar = n.getStringValue(); },
            "bot": n => { this.bot = n.getBooleanValue(); },
            "discoverable": n => { this.discoverable = n.getBooleanValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "fields": n => { this.fields = n.getCollectionOfObjectValues(createFieldFromDiscriminatorValue_1.createFieldFromDiscriminatorValue); },
            "header": n => { this.header = n.getStringValue(); },
            "locked": n => { this.locked = n.getBooleanValue(); },
            "note": n => { this.note = n.getStringValue(); },
            "source": n => { this.source = n.getObjectValue(createSourceFromDiscriminatorValue_1.createSourceFromDiscriminatorValue); },
        };
    }
    ;
    /**
     * Gets the header property value. The header property
     * @returns a string
     */
    get header() {
        return this._header;
    }
    ;
    /**
     * Sets the header property value. The header property
     * @param value Value to set for the header property.
     */
    set header(value) {
        this._header = value;
    }
    ;
    /**
     * Gets the locked property value. The locked property
     * @returns a boolean
     */
    get locked() {
        return this._locked;
    }
    ;
    /**
     * Sets the locked property value. The locked property
     * @param value Value to set for the locked property.
     */
    set locked(value) {
        this._locked = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("avatar", this.avatar);
        writer.writeBooleanValue("bot", this.bot);
        writer.writeBooleanValue("discoverable", this.discoverable);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeCollectionOfObjectValues("fields", this.fields);
        writer.writeStringValue("header", this.header);
        writer.writeBooleanValue("locked", this.locked);
        writer.writeStringValue("note", this.note);
        writer.writeObjectValue("source", this.source);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the source property value. The source property
     * @returns a Source
     */
    get source() {
        return this._source;
    }
    ;
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    set source(value) {
        this._source = value;
    }
    ;
}
exports.UpdateCredentialsBody = UpdateCredentialsBody;
