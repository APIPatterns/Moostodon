"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mention = void 0;
class Mention {
    /**
     * Gets the acct property value. The acct property
     * @returns a string
     */
    get acct() {
        return this._acct;
    }
    ;
    /**
     * Sets the acct property value. The acct property
     * @param value Value to set for the acct property.
     */
    set acct(value) {
        this._acct = value;
    }
    ;
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
     * Instantiates a new Mention and sets the default values.
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
            "acct": n => { this.acct = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "username": n => { this.username = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    get id() {
        return this._id;
    }
    ;
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    set id(value) {
        this._id = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("acct", this.acct);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("url", this.url);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    get url() {
        return this._url;
    }
    ;
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    set url(value) {
        this._url = value;
    }
    ;
    /**
     * Gets the username property value. The username property
     * @returns a string
     */
    get username() {
        return this._username;
    }
    ;
    /**
     * Sets the username property value. The username property
     * @param value Value to set for the username property.
     */
    set username(value) {
        this._username = value;
    }
    ;
}
exports.Mention = Mention;
