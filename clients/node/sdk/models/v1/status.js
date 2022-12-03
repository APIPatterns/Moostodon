"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const createAccountFromDiscriminatorValue_1 = require("./createAccountFromDiscriminatorValue");
const createStatusFromDiscriminatorValue_1 = require("./createStatusFromDiscriminatorValue");
class Status {
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
     * Gets the application property value. The application property
     * @returns a string
     */
    get application() {
        return this._application;
    }
    ;
    /**
     * Sets the application property value. The application property
     * @param value Value to set for the application property.
     */
    set application(value) {
        this._application = value;
    }
    ;
    /**
     * Gets the card property value. The card property
     * @returns a string
     */
    get card() {
        return this._card;
    }
    ;
    /**
     * Sets the card property value. The card property
     * @param value Value to set for the card property.
     */
    set card(value) {
        this._card = value;
    }
    ;
    /**
     * Instantiates a new Status and sets the default values.
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
     * @returns a string
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
     * Gets the favourited property value. The favourited property
     * @returns a boolean
     */
    get favourited() {
        return this._favourited;
    }
    ;
    /**
     * Sets the favourited property value. The favourited property
     * @param value Value to set for the favourited property.
     */
    set favourited(value) {
        this._favourited = value;
    }
    ;
    /**
     * Gets the favourites_count property value. The favourites_count property
     * @returns a integer
     */
    get favourites_count() {
        return this._favourites_count;
    }
    ;
    /**
     * Sets the favourites_count property value. The favourites_count property
     * @param value Value to set for the favourites_count property.
     */
    set favourites_count(value) {
        this._favourites_count = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "account": n => { this.account = n.getObjectValue(createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue); },
            "application": n => { this.application = n.getStringValue(); },
            "card": n => { this.card = n.getStringValue(); },
            "content": n => { this.content = n.getStringValue(); },
            "created_at": n => { this.created_at = n.getStringValue(); },
            "emojis": n => { this.emojis = n.getCollectionOfPrimitiveValues(); },
            "favourited": n => { this.favourited = n.getBooleanValue(); },
            "favourites_count": n => { this.favourites_count = n.getNumberValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "in_reply_to_account_id": n => { this.in_reply_to_account_id = n.getStringValue(); },
            "in_reply_to_id": n => { this.in_reply_to_id = n.getStringValue(); },
            "language": n => { this.language = n.getStringValue(); },
            "media_attachments": n => { this.media_attachments = n.getCollectionOfPrimitiveValues(); },
            "mentions": n => { this.mentions = n.getCollectionOfPrimitiveValues(); },
            "muted": n => { this.muted = n.getBooleanValue(); },
            "pinned": n => { this.pinned = n.getBooleanValue(); },
            "poll": n => { this.poll = n.getStringValue(); },
            "reblog": n => { this.reblog = n.getObjectValue(createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue); },
            "reblogged": n => { this.reblogged = n.getBooleanValue(); },
            "reblogs_count": n => { this.reblogs_count = n.getNumberValue(); },
            "replies_count": n => { this.replies_count = n.getNumberValue(); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
            "spoiler_text": n => { this.spoiler_text = n.getStringValue(); },
            "tags": n => { this.tags = n.getCollectionOfPrimitiveValues(); },
            "uri": n => { this.uri = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "visibility": n => { this.visibility = n.getStringValue(); },
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
     * Gets the in_reply_to_account_id property value. The in_reply_to_account_id property
     * @returns a string
     */
    get in_reply_to_account_id() {
        return this._in_reply_to_account_id;
    }
    ;
    /**
     * Sets the in_reply_to_account_id property value. The in_reply_to_account_id property
     * @param value Value to set for the in_reply_to_account_id property.
     */
    set in_reply_to_account_id(value) {
        this._in_reply_to_account_id = value;
    }
    ;
    /**
     * Gets the in_reply_to_id property value. The in_reply_to_id property
     * @returns a string
     */
    get in_reply_to_id() {
        return this._in_reply_to_id;
    }
    ;
    /**
     * Sets the in_reply_to_id property value. The in_reply_to_id property
     * @param value Value to set for the in_reply_to_id property.
     */
    set in_reply_to_id(value) {
        this._in_reply_to_id = value;
    }
    ;
    /**
     * Gets the language property value. The language property
     * @returns a string
     */
    get language() {
        return this._language;
    }
    ;
    /**
     * Sets the language property value. The language property
     * @param value Value to set for the language property.
     */
    set language(value) {
        this._language = value;
    }
    ;
    /**
     * Gets the media_attachments property value. The media_attachments property
     * @returns a string
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
     * Gets the mentions property value. The mentions property
     * @returns a string
     */
    get mentions() {
        return this._mentions;
    }
    ;
    /**
     * Sets the mentions property value. The mentions property
     * @param value Value to set for the mentions property.
     */
    set mentions(value) {
        this._mentions = value;
    }
    ;
    /**
     * Gets the muted property value. The muted property
     * @returns a boolean
     */
    get muted() {
        return this._muted;
    }
    ;
    /**
     * Sets the muted property value. The muted property
     * @param value Value to set for the muted property.
     */
    set muted(value) {
        this._muted = value;
    }
    ;
    /**
     * Gets the pinned property value. The pinned property
     * @returns a boolean
     */
    get pinned() {
        return this._pinned;
    }
    ;
    /**
     * Sets the pinned property value. The pinned property
     * @param value Value to set for the pinned property.
     */
    set pinned(value) {
        this._pinned = value;
    }
    ;
    /**
     * Gets the poll property value. The poll property
     * @returns a string
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
     * Gets the reblog property value. The reblog property
     * @returns a Status
     */
    get reblog() {
        return this._reblog;
    }
    ;
    /**
     * Sets the reblog property value. The reblog property
     * @param value Value to set for the reblog property.
     */
    set reblog(value) {
        this._reblog = value;
    }
    ;
    /**
     * Gets the reblogged property value. The reblogged property
     * @returns a boolean
     */
    get reblogged() {
        return this._reblogged;
    }
    ;
    /**
     * Sets the reblogged property value. The reblogged property
     * @param value Value to set for the reblogged property.
     */
    set reblogged(value) {
        this._reblogged = value;
    }
    ;
    /**
     * Gets the reblogs_count property value. The reblogs_count property
     * @returns a integer
     */
    get reblogs_count() {
        return this._reblogs_count;
    }
    ;
    /**
     * Sets the reblogs_count property value. The reblogs_count property
     * @param value Value to set for the reblogs_count property.
     */
    set reblogs_count(value) {
        this._reblogs_count = value;
    }
    ;
    /**
     * Gets the replies_count property value. The replies_count property
     * @returns a integer
     */
    get replies_count() {
        return this._replies_count;
    }
    ;
    /**
     * Sets the replies_count property value. The replies_count property
     * @param value Value to set for the replies_count property.
     */
    set replies_count(value) {
        this._replies_count = value;
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
        writer.writeStringValue("application", this.application);
        writer.writeStringValue("card", this.card);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("created_at", this.created_at);
        writer.writeCollectionOfPrimitiveValues("emojis", this.emojis);
        writer.writeBooleanValue("favourited", this.favourited);
        writer.writeNumberValue("favourites_count", this.favourites_count);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("in_reply_to_account_id", this.in_reply_to_account_id);
        writer.writeStringValue("in_reply_to_id", this.in_reply_to_id);
        writer.writeStringValue("language", this.language);
        writer.writeCollectionOfPrimitiveValues("media_attachments", this.media_attachments);
        writer.writeCollectionOfPrimitiveValues("mentions", this.mentions);
        writer.writeBooleanValue("muted", this.muted);
        writer.writeBooleanValue("pinned", this.pinned);
        writer.writeStringValue("poll", this.poll);
        writer.writeObjectValue("reblog", this.reblog);
        writer.writeBooleanValue("reblogged", this.reblogged);
        writer.writeNumberValue("reblogs_count", this.reblogs_count);
        writer.writeNumberValue("replies_count", this.replies_count);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeStringValue("spoiler_text", this.spoiler_text);
        writer.writeCollectionOfPrimitiveValues("tags", this.tags);
        writer.writeStringValue("uri", this.uri);
        writer.writeStringValue("url", this.url);
        writer.writeStringValue("visibility", this.visibility);
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
    /**
     * Gets the tags property value. The tags property
     * @returns a string
     */
    get tags() {
        return this._tags;
    }
    ;
    /**
     * Sets the tags property value. The tags property
     * @param value Value to set for the tags property.
     */
    set tags(value) {
        this._tags = value;
    }
    ;
    /**
     * Gets the uri property value. The uri property
     * @returns a string
     */
    get uri() {
        return this._uri;
    }
    ;
    /**
     * Sets the uri property value. The uri property
     * @param value Value to set for the uri property.
     */
    set uri(value) {
        this._uri = value;
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
     * Gets the visibility property value. The visibility property
     * @returns a string
     */
    get visibility() {
        return this._visibility;
    }
    ;
    /**
     * Sets the visibility property value. The visibility property
     * @param value Value to set for the visibility property.
     */
    set visibility(value) {
        this._visibility = value;
    }
    ;
}
exports.Status = Status;
