"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollOption = void 0;
class PollOption {
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
     * Instantiates a new PollOption and sets the default values.
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
            "title": n => { this.title = n.getStringValue(); },
            "votes_count": n => { this.votes_count = n.getNumberValue(); },
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
        writer.writeStringValue("title", this.title);
        writer.writeNumberValue("votes_count", this.votes_count);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    get title() {
        return this._title;
    }
    ;
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    set title(value) {
        this._title = value;
    }
    ;
    /**
     * Gets the votes_count property value. The votes_count property
     * @returns a integer
     */
    get votes_count() {
        return this._votes_count;
    }
    ;
    /**
     * Sets the votes_count property value. The votes_count property
     * @param value Value to set for the votes_count property.
     */
    set votes_count(value) {
        this._votes_count = value;
    }
    ;
}
exports.PollOption = PollOption;
