"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const createStatusFromDiscriminatorValue_1 = require("./createStatusFromDiscriminatorValue");
class Context {
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
     * Gets the ancestors property value. The ancestors property
     * @returns a Status
     */
    get ancestors() {
        return this._ancestors;
    }
    ;
    /**
     * Sets the ancestors property value. The ancestors property
     * @param value Value to set for the ancestors property.
     */
    set ancestors(value) {
        this._ancestors = value;
    }
    ;
    /**
     * Instantiates a new Context and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the descendants property value. The descendants property
     * @returns a Status
     */
    get descendants() {
        return this._descendants;
    }
    ;
    /**
     * Sets the descendants property value. The descendants property
     * @param value Value to set for the descendants property.
     */
    set descendants(value) {
        this._descendants = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "ancestors": n => { this.ancestors = n.getCollectionOfObjectValues(createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue); },
            "descendants": n => { this.descendants = n.getCollectionOfObjectValues(createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue); },
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
        writer.writeCollectionOfObjectValues("ancestors", this.ancestors);
        writer.writeCollectionOfObjectValues("descendants", this.descendants);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.Context = Context;
