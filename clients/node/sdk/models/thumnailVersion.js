"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumnailVersion = void 0;
class ThumnailVersion {
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
     * Instantiates a new ThumnailVersion and sets the default values.
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
            "@1x": n => { this.onex = n.getStringValue(); },
            "@2x": n => { this.twox = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the @1x property value. The Onex property
     * @returns a string
     */
    get onex() {
        return this._onex;
    }
    ;
    /**
     * Sets the @1x property value. The Onex property
     * @param value Value to set for the Onex property.
     */
    set onex(value) {
        this._onex = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("@1x", this.onex);
        writer.writeStringValue("@2x", this.twox);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the @2x property value. The Twox property
     * @returns a string
     */
    get twox() {
        return this._twox;
    }
    ;
    /**
     * Sets the @2x property value. The Twox property
     * @param value Value to set for the Twox property.
     */
    set twox(value) {
        this._twox = value;
    }
    ;
}
exports.ThumnailVersion = ThumnailVersion;
