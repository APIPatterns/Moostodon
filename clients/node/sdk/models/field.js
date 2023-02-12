"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
class Field {
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
     * Instantiates a new Field and sets the default values.
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
            "name": n => { this.name = n.getStringValue(); },
            "value": n => { this.value = n.getStringValue(); },
            "verified_at": n => { this.verified_at = n.getStringValue(); },
        };
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("value", this.value);
        writer.writeStringValue("verified_at", this.verified_at);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the value property value. The value property
     * @returns a string
     */
    get value() {
        return this._value;
    }
    ;
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    set value(value) {
        this._value = value;
    }
    ;
    /**
     * Gets the verified_at property value. The verified_at property
     * @returns a string
     */
    get verified_at() {
        return this._verified_at;
    }
    ;
    /**
     * Sets the verified_at property value. The verified_at property
     * @param value Value to set for the verified_at property.
     */
    set verified_at(value) {
        this._verified_at = value;
    }
    ;
}
exports.Field = Field;
