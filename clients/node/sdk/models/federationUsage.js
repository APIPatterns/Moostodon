"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FederationUsage = void 0;
class FederationUsage {
    /**
     * Gets the active property value. The active property
     * @returns a int64
     */
    get active() {
        return this._active;
    }
    ;
    /**
     * Sets the active property value. The active property
     * @param value Value to set for the active property.
     */
    set active(value) {
        this._active = value;
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
     * Instantiates a new FederationUsage and sets the default values.
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
            "active": n => { this.active = n.getNumberValue(); },
            "receiving": n => { this.receiving = n.getNumberValue(); },
            "sending": n => { this.sending = n.getNumberValue(); },
        };
    }
    ;
    /**
     * Gets the receiving property value. The receiving property
     * @returns a int64
     */
    get receiving() {
        return this._receiving;
    }
    ;
    /**
     * Sets the receiving property value. The receiving property
     * @param value Value to set for the receiving property.
     */
    set receiving(value) {
        this._receiving = value;
    }
    ;
    /**
     * Gets the sending property value. The sending property
     * @returns a int64
     */
    get sending() {
        return this._sending;
    }
    ;
    /**
     * Sets the sending property value. The sending property
     * @param value Value to set for the sending property.
     */
    set sending(value) {
        this._sending = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeNumberValue("active", this.active);
        writer.writeNumberValue("receiving", this.receiving);
        writer.writeNumberValue("sending", this.sending);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.FederationUsage = FederationUsage;
