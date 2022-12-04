"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusEdit = void 0;
const createAccountFromDiscriminatorValue_1 = require("./createAccountFromDiscriminatorValue");
const createEmojiFromDiscriminatorValue_1 = require("./createEmojiFromDiscriminatorValue");
const createMediaAttachmentFromDiscriminatorValue_1 = require("./createMediaAttachmentFromDiscriminatorValue");
const createPollFromDiscriminatorValue_1 = require("./createPollFromDiscriminatorValue");
class StatusEdit {
    /**
     * Gets the account property value. The account property
     * @returns a Account
     */
    get account() {
        return this._account;
    }
    ;
    /**
     * Sets the account property value. The account property
     * @param value Value to set for the account property.
     */
    set account(value) {
        this._account = value;
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
     * Instantiates a new StatusEdit and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the content property value. The content property
     * @returns a string
     */
    get content() {
        return this._content;
    }
    ;
    /**
     * Sets the content property value. The content property
     * @param value Value to set for the content property.
     */
    set content(value) {
        this._content = value;
    }
    ;
    /**
     * Gets the created_at property value. The created_at property
     * @returns a string
     */
    get created_at() {
        return this._created_at;
    }
    ;
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    set created_at(value) {
        this._created_at = value;
    }
    ;
    /**
     * Gets the emojis property value. The emojis property
     * @returns a Emoji
     */
    get emojis() {
        return this._emojis;
    }
    ;
    /**
     * Sets the emojis property value. The emojis property
     * @param value Value to set for the emojis property.
     */
    set emojis(value) {
        this._emojis = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "account": n => { this.account = n.getObjectValue(createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue); },
            "content": n => { this.content = n.getStringValue(); },
            "created_at": n => { this.created_at = n.getStringValue(); },
            "emojis": n => { this.emojis = n.getCollectionOfObjectValues(createEmojiFromDiscriminatorValue_1.createEmojiFromDiscriminatorValue); },
            "media_attachments": n => { this.media_attachments = n.getCollectionOfObjectValues(createMediaAttachmentFromDiscriminatorValue_1.createMediaAttachmentFromDiscriminatorValue); },
            "poll": n => { this.poll = n.getObjectValue(createPollFromDiscriminatorValue_1.createPollFromDiscriminatorValue); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
            "spoiler_text": n => { this.spoiler_text = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the media_attachments property value. The media_attachments property
     * @returns a MediaAttachment
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
     * Gets the poll property value. The poll property
     * @returns a Poll
     */
    get poll() {
        return this._poll;
    }
    ;
    /**
     * Sets the poll property value. The poll property
     * @param value Value to set for the poll property.
     */
    set poll(value) {
        this._poll = value;
    }
    ;
    /**
     * Gets the sensitive property value. The sensitive property
     * @returns a boolean
     */
    get sensitive() {
        return this._sensitive;
    }
    ;
    /**
     * Sets the sensitive property value. The sensitive property
     * @param value Value to set for the sensitive property.
     */
    set sensitive(value) {
        this._sensitive = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("account", this.account);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("created_at", this.created_at);
        writer.writeCollectionOfObjectValues("emojis", this.emojis);
        writer.writeCollectionOfObjectValues("media_attachments", this.media_attachments);
        writer.writeObjectValue("poll", this.poll);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeStringValue("spoiler_text", this.spoiler_text);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the spoiler_text property value. The spoiler_text property
     * @returns a string
     */
    get spoiler_text() {
        return this._spoiler_text;
    }
    ;
    /**
     * Sets the spoiler_text property value. The spoiler_text property
     * @param value Value to set for the spoiler_text property.
     */
    set spoiler_text(value) {
        this._spoiler_text = value;
    }
    ;
}
exports.StatusEdit = StatusEdit;
