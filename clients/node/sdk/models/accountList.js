"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountList = void 0;
class AccountList {
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
     * Instantiates a new AccountList and sets the default values.
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
            "id": n => { this.id = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
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
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("title", this.title);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    get title() {
        return this._title;
    }
    ;
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    set title(value) {
        this._title = value;
    }
    ;
}
exports.AccountList = AccountList;
