"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const createHistoryItemFromDiscriminatorValue_1 = require("./createHistoryItemFromDiscriminatorValue");
class Tag {
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
     * Instantiates a new Tag and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the following property value. The following property
     * @returns a boolean
     */
    get following() {
        return this._following;
    }
    ;
    /**
     * Sets the following property value. The following property
     * @param value Value to set for the following property.
     */
    set following(value) {
        this._following = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "following": n => { this.following = n.getBooleanValue(); },
            "history": n => { this.history = n.getCollectionOfObjectValues(createHistoryItemFromDiscriminatorValue_1.createHistoryItemFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the history property value. The history property
     * @returns a HistoryItem
     */
    get history() {
        return this._history;
    }
    ;
    /**
     * Sets the history property value. The history property
     * @param value Value to set for the history property.
     */
    set history(value) {
        this._history = value;
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
        writer.writeBooleanValue("following", this.following);
        writer.writeCollectionOfObjectValues("history", this.history);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    get url() {
        return this._url;
    }
    ;
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    set url(value) {
        this._url = value;
    }
    ;
}
exports.Tag = Tag;
