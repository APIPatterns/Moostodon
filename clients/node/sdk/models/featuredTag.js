"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturedTag = void 0;
class FeaturedTag {
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
     * Instantiates a new FeaturedTag and sets the default values.
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
            "id": n => { this.id = n.getStringValue(); },
            "last_status_at": n => { this.last_status_at = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "statuses_count": n => { this.statuses_count = n.getNumberValue(); },
            "url": n => { this.url = n.getStringValue(); },
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
     * Gets the last_status_at property value. The last_status_at property
     * @returns a string
     */
    get last_status_at() {
        return this._last_status_at;
    }
    ;
    /**
     * Sets the last_status_at property value. The last_status_at property
     * @param value Value to set for the last_status_at property.
     */
    set last_status_at(value) {
        this._last_status_at = value;
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
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("last_status_at", this.last_status_at);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("statuses_count", this.statuses_count);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the statuses_count property value. The statuses_count property
     * @returns a integer
     */
    get statuses_count() {
        return this._statuses_count;
    }
    ;
    /**
     * Sets the statuses_count property value. The statuses_count property
     * @param value Value to set for the statuses_count property.
     */
    set statuses_count(value) {
        this._statuses_count = value;
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
exports.FeaturedTag = FeaturedTag;
