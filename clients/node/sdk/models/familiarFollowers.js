"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamiliarFollowers = void 0;
const createAccountFromDiscriminatorValue_1 = require("./createAccountFromDiscriminatorValue");
class FamiliarFollowers {
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
     * Instantiates a new FamiliarFollowers and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the followers property value. The followers property
     * @returns a Account
     */
    get followers() {
        return this._followers;
    }
    ;
    /**
     * Sets the followers property value. The followers property
     * @param value Value to set for the followers property.
     */
    set followers(value) {
        this._followers = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "followers": n => { this.followers = n.getCollectionOfObjectValues(createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
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
        writer.writeCollectionOfObjectValues("followers", this.followers);
        writer.writeStringValue("id", this.id);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.FamiliarFollowers = FamiliarFollowers;
