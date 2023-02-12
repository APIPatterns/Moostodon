"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registrations = void 0;
class Registrations {
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
     * Gets the approval_required property value. The approval_required property
     * @returns a boolean
     */
    get approval_required() {
        return this._approval_required;
    }
    ;
    /**
     * Sets the approval_required property value. The approval_required property
     * @param value Value to set for the approval_required property.
     */
    set approval_required(value) {
        this._approval_required = value;
    }
    ;
    /**
     * Instantiates a new Registrations and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the enabled property value. The enabled property
     * @returns a boolean
     */
    get enabled() {
        return this._enabled;
    }
    ;
    /**
     * Sets the enabled property value. The enabled property
     * @param value Value to set for the enabled property.
     */
    set enabled(value) {
        this._enabled = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "approval_required": n => { this.approval_required = n.getBooleanValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "message": n => { this.message = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the message property value. The message property
     * @returns a string
     */
    get message() {
        return this._message;
    }
    ;
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    set message(value) {
        this._message = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("approval_required", this.approval_required);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("message", this.message);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.Registrations = Registrations;
