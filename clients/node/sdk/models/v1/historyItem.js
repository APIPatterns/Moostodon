"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryItem = void 0;
class HistoryItem {
    /**
     * Gets the accounts property value. The accounts property
     * @returns a string
     */
    get accounts() {
        return this._accounts;
    }
    ;
    /**
     * Sets the accounts property value. The accounts property
     * @param value Value to set for the accounts property.
     */
    set accounts(value) {
        this._accounts = value;
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
     * Instantiates a new HistoryItem and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the day property value. The day property
     * @returns a string
     */
    get day() {
        return this._day;
    }
    ;
    /**
     * Sets the day property value. The day property
     * @param value Value to set for the day property.
     */
    set day(value) {
        this._day = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "accounts": n => { this.accounts = n.getStringValue(); },
            "day": n => { this.day = n.getStringValue(); },
            "uses": n => { this.uses = n.getStringValue(); },
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
        writer.writeStringValue("accounts", this.accounts);
        writer.writeStringValue("day", this.day);
        writer.writeStringValue("uses", this.uses);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the uses property value. The uses property
     * @returns a string
     */
    get uses() {
        return this._uses;
    }
    ;
    /**
     * Sets the uses property value. The uses property
     * @param value Value to set for the uses property.
     */
    set uses(value) {
        this._uses = value;
    }
    ;
}
exports.HistoryItem = HistoryItem;
