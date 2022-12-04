"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowBody = void 0;
class FollowBody {
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
     * Instantiates a new FollowBody and sets the default values.
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
            "lanuages": n => { this.lanuages = n.getCollectionOfPrimitiveValues(); },
            "notify": n => { this.notify = n.getBooleanValue(); },
            "reblogs": n => { this.reblogs = n.getBooleanValue(); },
        };
    }
    ;
    /**
     * Gets the lanuages property value. The lanuages property
     * @returns a string
     */
    get lanuages() {
        return this._lanuages;
    }
    ;
    /**
     * Sets the lanuages property value. The lanuages property
     * @param value Value to set for the lanuages property.
     */
    set lanuages(value) {
        this._lanuages = value;
    }
    ;
    /**
     * Gets the notify property value. The notify property
     * @returns a boolean
     */
    get notify() {
        return this._notify;
    }
    ;
    /**
     * Sets the notify property value. The notify property
     * @param value Value to set for the notify property.
     */
    set notify(value) {
        this._notify = value;
    }
    ;
    /**
     * Gets the reblogs property value. The reblogs property
     * @returns a boolean
     */
    get reblogs() {
        return this._reblogs;
    }
    ;
    /**
     * Sets the reblogs property value. The reblogs property
     * @param value Value to set for the reblogs property.
     */
    set reblogs(value) {
        this._reblogs = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues("lanuages", this.lanuages);
        writer.writeBooleanValue("notify", this.notify);
        writer.writeBooleanValue("reblogs", this.reblogs);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.FollowBody = FollowBody;
