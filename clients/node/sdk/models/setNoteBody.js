"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetNoteBody = void 0;
class SetNoteBody {
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
     * Gets the comment property value. The comment property
     * @returns a string
     */
    get comment() {
        return this._comment;
    }
    ;
    /**
     * Sets the comment property value. The comment property
     * @param value Value to set for the comment property.
     */
    set comment(value) {
        this._comment = value;
    }
    ;
    /**
     * Instantiates a new SetNoteBody and sets the default values.
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
            "comment": n => { this.comment = n.getStringValue(); },
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
        writer.writeStringValue("comment", this.comment);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.SetNoteBody = SetNoteBody;
