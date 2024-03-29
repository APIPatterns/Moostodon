"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
class UnauthorizedError extends kiota_abstractions_1.ApiError {
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
     * Instantiates a new UnauthorizedError and sets the default values.
     */
    constructor() {
        super();
        this._additionalData = {};
    }
    ;
    /**
     * Gets the error property value. The error property
     * @returns a string
     */
    get errorEscaped() {
        return this._errorEscaped;
    }
    ;
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the errorEscaped property.
     */
    set errorEscaped(value) {
        this._errorEscaped = value;
    }
    ;
    /**
     * Gets the error_description property value. The error_description property
     * @returns a string
     */
    get error_description() {
        return this._error_description;
    }
    ;
    /**
     * Sets the error_description property value. The error_description property
     * @param value Value to set for the error_description property.
     */
    set error_description(value) {
        this._error_description = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "error": n => { this.errorEscaped = n.getStringValue(); },
            "error_description": n => { this.error_description = n.getStringValue(); },
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
        writer.writeStringValue("error", this.errorEscaped);
        writer.writeStringValue("error_description", this.error_description);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.UnauthorizedError = UnauthorizedError;
