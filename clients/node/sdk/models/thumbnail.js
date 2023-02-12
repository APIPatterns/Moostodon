"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thumbnail = void 0;
const createThumnailVersionFromDiscriminatorValue_1 = require("./createThumnailVersionFromDiscriminatorValue");
class Thumbnail {
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
     * Gets the blurhash property value. The blurhash property
     * @returns a string
     */
    get blurhash() {
        return this._blurhash;
    }
    ;
    /**
     * Sets the blurhash property value. The blurhash property
     * @param value Value to set for the blurhash property.
     */
    set blurhash(value) {
        this._blurhash = value;
    }
    ;
    /**
     * Instantiates a new Thumbnail and sets the default values.
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
            "blurhash": n => { this.blurhash = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "versions": n => { this.versions = n.getObjectValue(createThumnailVersionFromDiscriminatorValue_1.createThumnailVersionFromDiscriminatorValue); },
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
        writer.writeStringValue("blurhash", this.blurhash);
        writer.writeStringValue("url", this.url);
        writer.writeObjectValue("versions", this.versions);
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
    /**
     * Gets the versions property value. The versions property
     * @returns a ThumnailVersion
     */
    get versions() {
        return this._versions;
    }
    ;
    /**
     * Sets the versions property value. The versions property
     * @param value Value to set for the versions property.
     */
    set versions(value) {
        this._versions = value;
    }
    ;
}
exports.Thumbnail = Thumbnail;
