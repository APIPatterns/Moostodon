"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
const createConfigurationAccountsFromDiscriminatorValue_1 = require("./createConfigurationAccountsFromDiscriminatorValue");
const createConfigurationMediaAttachmentsFromDiscriminatorValue_1 = require("./createConfigurationMediaAttachmentsFromDiscriminatorValue");
const createConfigurationPollsFromDiscriminatorValue_1 = require("./createConfigurationPollsFromDiscriminatorValue");
const createConfigurationStatusesFromDiscriminatorValue_1 = require("./createConfigurationStatusesFromDiscriminatorValue");
const createConfigurationTranslationFromDiscriminatorValue_1 = require("./createConfigurationTranslationFromDiscriminatorValue");
const createConfigurationUrlsFromDiscriminatorValue_1 = require("./createConfigurationUrlsFromDiscriminatorValue");
class Configuration {
    /**
     * Gets the accounts property value. The accounts property
     * @returns a ConfigurationAccounts
     */
    get accounts() {
        return this._accounts;
    }
    ;
    /**
     * Sets the accounts property value. The accounts property
     * @param value Value to set for the accounts property.
     */
    set accounts(value) {
        this._accounts = value;
    }
    ;
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
     * Instantiates a new Configuration and sets the default values.
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
            "accounts": n => { this.accounts = n.getObjectValue(createConfigurationAccountsFromDiscriminatorValue_1.createConfigurationAccountsFromDiscriminatorValue); },
            "media_attachments": n => { this.media_attachments = n.getObjectValue(createConfigurationMediaAttachmentsFromDiscriminatorValue_1.createConfigurationMediaAttachmentsFromDiscriminatorValue); },
            "polls": n => { this.polls = n.getObjectValue(createConfigurationPollsFromDiscriminatorValue_1.createConfigurationPollsFromDiscriminatorValue); },
            "statuses": n => { this.statuses = n.getObjectValue(createConfigurationStatusesFromDiscriminatorValue_1.createConfigurationStatusesFromDiscriminatorValue); },
            "translation": n => { this.translation = n.getObjectValue(createConfigurationTranslationFromDiscriminatorValue_1.createConfigurationTranslationFromDiscriminatorValue); },
            "urls": n => { this.urls = n.getObjectValue(createConfigurationUrlsFromDiscriminatorValue_1.createConfigurationUrlsFromDiscriminatorValue); },
        };
    }
    ;
    /**
     * Gets the media_attachments property value. The media_attachments property
     * @returns a ConfigurationMediaAttachments
     */
    get media_attachments() {
        return this._media_attachments;
    }
    ;
    /**
     * Sets the media_attachments property value. The media_attachments property
     * @param value Value to set for the media_attachments property.
     */
    set media_attachments(value) {
        this._media_attachments = value;
    }
    ;
    /**
     * Gets the polls property value. The polls property
     * @returns a ConfigurationPolls
     */
    get polls() {
        return this._polls;
    }
    ;
    /**
     * Sets the polls property value. The polls property
     * @param value Value to set for the polls property.
     */
    set polls(value) {
        this._polls = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("accounts", this.accounts);
        writer.writeObjectValue("media_attachments", this.media_attachments);
        writer.writeObjectValue("polls", this.polls);
        writer.writeObjectValue("statuses", this.statuses);
        writer.writeObjectValue("translation", this.translation);
        writer.writeObjectValue("urls", this.urls);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the statuses property value. The statuses property
     * @returns a ConfigurationStatuses
     */
    get statuses() {
        return this._statuses;
    }
    ;
    /**
     * Sets the statuses property value. The statuses property
     * @param value Value to set for the statuses property.
     */
    set statuses(value) {
        this._statuses = value;
    }
    ;
    /**
     * Gets the translation property value. The translation property
     * @returns a ConfigurationTranslation
     */
    get translation() {
        return this._translation;
    }
    ;
    /**
     * Sets the translation property value. The translation property
     * @param value Value to set for the translation property.
     */
    set translation(value) {
        this._translation = value;
    }
    ;
    /**
     * Gets the urls property value. The urls property
     * @returns a ConfigurationUrls
     */
    get urls() {
        return this._urls;
    }
    ;
    /**
     * Sets the urls property value. The urls property
     * @param value Value to set for the urls property.
     */
    set urls(value) {
        this._urls = value;
    }
    ;
}
exports.Configuration = Configuration;
