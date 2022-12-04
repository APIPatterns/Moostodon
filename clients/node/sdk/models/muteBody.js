"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuteBody = void 0;
class MuteBody {
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
     * Instantiates a new MuteBody and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the duration property value. The duration property
     * @returns a integer
     */
    get duration() {
        return this._duration;
    }
    ;
    /**
     * Sets the duration property value. The duration property
     * @param value Value to set for the duration property.
     */
    set duration(value) {
        this._duration = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "duration": n => { this.duration = n.getNumberValue(); },
            "notifications": n => { this.notifications = n.getBooleanValue(); },
        };
    }
    ;
    /**
     * Gets the notifications property value. The notifications property
     * @returns a boolean
     */
    get notifications() {
        return this._notifications;
    }
    ;
    /**
     * Sets the notifications property value. The notifications property
     * @param value Value to set for the notifications property.
     */
    set notifications(value) {
        this._notifications = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeNumberValue("duration", this.duration);
        writer.writeBooleanValue("notifications", this.notifications);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
}
exports.MuteBody = MuteBody;
