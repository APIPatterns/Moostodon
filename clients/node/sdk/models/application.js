"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
class Application {
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
     * Gets the client_id property value. The client_id property
     * @returns a string
     */
    get client_id() {
        return this._client_id;
    }
    ;
    /**
     * Sets the client_id property value. The client_id property
     * @param value Value to set for the client_id property.
     */
    set client_id(value) {
        this._client_id = value;
    }
    ;
    /**
     * Gets the client_secret property value. The client_secret property
     * @returns a string
     */
    get client_secret() {
        return this._client_secret;
    }
    ;
    /**
     * Sets the client_secret property value. The client_secret property
     * @param value Value to set for the client_secret property.
     */
    set client_secret(value) {
        this._client_secret = value;
    }
    ;
    /**
     * Instantiates a new Application and sets the default values.
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
            "client_id": n => { this.client_id = n.getStringValue(); },
            "client_secret": n => { this.client_secret = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "redirect_uri": n => { this.redirect_uri = n.getStringValue(); },
            "vapid_key": n => { this.vapid_key = n.getStringValue(); },
            "website": n => { this.website = n.getStringValue(); },
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
     * Gets the name property value. The name property
     * @returns a string
     */
    get name() {
        return this._name;
    }
    ;
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    set name(value) {
        this._name = value;
    }
    ;
    /**
     * Gets the redirect_uri property value. The redirect_uri property
     * @returns a string
     */
    get redirect_uri() {
        return this._redirect_uri;
    }
    ;
    /**
     * Sets the redirect_uri property value. The redirect_uri property
     * @param value Value to set for the redirect_uri property.
     */
    set redirect_uri(value) {
        this._redirect_uri = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("client_id", this.client_id);
        writer.writeStringValue("client_secret", this.client_secret);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("redirect_uri", this.redirect_uri);
        writer.writeStringValue("vapid_key", this.vapid_key);
        writer.writeStringValue("website", this.website);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the vapid_key property value. The vapid_key property
     * @returns a string
     */
    get vapid_key() {
        return this._vapid_key;
    }
    ;
    /**
     * Sets the vapid_key property value. The vapid_key property
     * @param value Value to set for the vapid_key property.
     */
    set vapid_key(value) {
        this._vapid_key = value;
    }
    ;
    /**
     * Gets the website property value. The website property
     * @returns a string
     */
    get website() {
        return this._website;
    }
    ;
    /**
     * Sets the website property value. The website property
     * @param value Value to set for the website property.
     */
    set website(value) {
        this._website = value;
    }
    ;
}
exports.Application = Application;
