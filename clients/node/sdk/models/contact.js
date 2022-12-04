"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const createAccountFromDiscriminatorValue_1 = require("./createAccountFromDiscriminatorValue");
class Contact {
    /**
     * Gets the account property value. The account property
     * @returns a Account
     */
    get account() {
        return this._account;
    }
    ;
    /**
     * Sets the account property value. The account property
     * @param value Value to set for the account property.
     */
    set account(value) {
        this._account = value;
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
     * Instantiates a new Contact and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the email property value. The email property
     * @returns a string
     */
    get email() {
        return this._email;
    }
    ;
    /**
     * Sets the email property value. The email property
     * @param value Value to set for the email property.
     */
    set email(value) {
        this._email = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "account": n => { this.account = n.getObjectValue(createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue); },
            "email": n => { this.email = n.getStringValue(); },
        };
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("account", this.account);
        writer.writeStringValue("email", this.email);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.Contact = Contact;
