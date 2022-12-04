"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUsage = void 0;
class UserUsage {
    /**
     * Gets the active_halfyear property value. The active_halfyear property
     * @returns a int64
     */
    get active_halfyear() {
        return this._active_halfyear;
    }
    ;
    /**
     * Sets the active_halfyear property value. The active_halfyear property
     * @param value Value to set for the active_halfyear property.
     */
    set active_halfyear(value) {
        this._active_halfyear = value;
    }
    ;
    /**
     * Gets the active_month property value. The active_month property
     * @returns a int64
     */
    get active_month() {
        return this._active_month;
    }
    ;
    /**
     * Sets the active_month property value. The active_month property
     * @param value Value to set for the active_month property.
     */
    set active_month(value) {
        this._active_month = value;
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
     * Instantiates a new UserUsage and sets the default values.
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
            "active_halfyear": n => { this.active_halfyear = n.getNumberValue(); },
            "active_month": n => { this.active_month = n.getNumberValue(); },
            "total": n => { this.total = n.getNumberValue(); },
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
        writer.writeNumberValue("active_halfyear", this.active_halfyear);
        writer.writeNumberValue("active_month", this.active_month);
        writer.writeNumberValue("total", this.total);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the total property value. The total property
     * @returns a int64
     */
    get total() {
        return this._total;
    }
    ;
    /**
     * Sets the total property value. The total property
     * @param value Value to set for the total property.
     */
    set total(value) {
        this._total = value;
    }
    ;
}
exports.UserUsage = UserUsage;
