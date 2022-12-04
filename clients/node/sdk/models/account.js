"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const createAccountFromDiscriminatorValue_1 = require("./createAccountFromDiscriminatorValue");
const createEmojiFromDiscriminatorValue_1 = require("./createEmojiFromDiscriminatorValue");
const createFieldFromDiscriminatorValue_1 = require("./createFieldFromDiscriminatorValue");
const createSourceFromDiscriminatorValue_1 = require("./createSourceFromDiscriminatorValue");
class Account {
    /**
     * Gets the acct property value. The acct property
     * @returns a string
     */
    get acct() {
        return this._acct;
    }
    ;
    /**
     * Sets the acct property value. The acct property
     * @param value Value to set for the acct property.
     */
    set acct(value) {
        this._acct = value;
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
     * Gets the avatar property value. The avatar property
     * @returns a string
     */
    get avatar() {
        return this._avatar;
    }
    ;
    /**
     * Sets the avatar property value. The avatar property
     * @param value Value to set for the avatar property.
     */
    set avatar(value) {
        this._avatar = value;
    }
    ;
    /**
     * Gets the avatar_static property value. The avatar_static property
     * @returns a string
     */
    get avatar_static() {
        return this._avatar_static;
    }
    ;
    /**
     * Sets the avatar_static property value. The avatar_static property
     * @param value Value to set for the avatar_static property.
     */
    set avatar_static(value) {
        this._avatar_static = value;
    }
    ;
    /**
     * Gets the bot property value. The bot property
     * @returns a boolean
     */
    get bot() {
        return this._bot;
    }
    ;
    /**
     * Sets the bot property value. The bot property
     * @param value Value to set for the bot property.
     */
    set bot(value) {
        this._bot = value;
    }
    ;
    /**
     * Instantiates a new Account and sets the default values.
     */
    constructor() {
        this._additionalData = {};
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
     * Gets the discoverable property value. The discoverable property
     * @returns a boolean
     */
    get discoverable() {
        return this._discoverable;
    }
    ;
    /**
     * Sets the discoverable property value. The discoverable property
     * @param value Value to set for the discoverable property.
     */
    set discoverable(value) {
        this._discoverable = value;
    }
    ;
    /**
     * Gets the display_name property value. The display_name property
     * @returns a string
     */
    get display_name() {
        return this._display_name;
    }
    ;
    /**
     * Sets the display_name property value. The display_name property
     * @param value Value to set for the display_name property.
     */
    set display_name(value) {
        this._display_name = value;
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
     * Gets the fields property value. The fields property
     * @returns a Field
     */
    get fields() {
        return this._fields;
    }
    ;
    /**
     * Sets the fields property value. The fields property
     * @param value Value to set for the fields property.
     */
    set fields(value) {
        this._fields = value;
    }
    ;
    /**
     * Gets the followers_count property value. The followers_count property
     * @returns a integer
     */
    get followers_count() {
        return this._followers_count;
    }
    ;
    /**
     * Sets the followers_count property value. The followers_count property
     * @param value Value to set for the followers_count property.
     */
    set followers_count(value) {
        this._followers_count = value;
    }
    ;
    /**
     * Gets the following_count property value. The following_count property
     * @returns a integer
     */
    get following_count() {
        return this._following_count;
    }
    ;
    /**
     * Sets the following_count property value. The following_count property
     * @param value Value to set for the following_count property.
     */
    set following_count(value) {
        this._following_count = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "acct": n => { this.acct = n.getStringValue(); },
            "avatar": n => { this.avatar = n.getStringValue(); },
            "avatar_static": n => { this.avatar_static = n.getStringValue(); },
            "bot": n => { this.bot = n.getBooleanValue(); },
            "created_at": n => { this.created_at = n.getStringValue(); },
            "discoverable": n => { this.discoverable = n.getBooleanValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "emojis": n => { this.emojis = n.getCollectionOfObjectValues(createEmojiFromDiscriminatorValue_1.createEmojiFromDiscriminatorValue); },
            "fields": n => { this.fields = n.getCollectionOfObjectValues(createFieldFromDiscriminatorValue_1.createFieldFromDiscriminatorValue); },
            "followers_count": n => { this.followers_count = n.getNumberValue(); },
            "following_count": n => { this.following_count = n.getNumberValue(); },
            "header": n => { this.header = n.getStringValue(); },
            "header_static": n => { this.header_static = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "last_status_at": n => { this.last_status_at = n.getStringValue(); },
            "locked": n => { this.locked = n.getBooleanValue(); },
            "moved": n => { this.moved = n.getObjectValue(createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue); },
            "mute_expires_at": n => { this.mute_expires_at = n.getStringValue(); },
            "note": n => { this.note = n.getStringValue(); },
            "souce": n => { this.souce = n.getObjectValue(createSourceFromDiscriminatorValue_1.createSourceFromDiscriminatorValue); },
            "statuses_count": n => { this.statuses_count = n.getNumberValue(); },
            "suspended": n => { this.suspended = n.getBooleanValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "username": n => { this.username = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the header property value. The header property
     * @returns a string
     */
    get header() {
        return this._header;
    }
    ;
    /**
     * Sets the header property value. The header property
     * @param value Value to set for the header property.
     */
    set header(value) {
        this._header = value;
    }
    ;
    /**
     * Gets the header_static property value. The header_static property
     * @returns a string
     */
    get header_static() {
        return this._header_static;
    }
    ;
    /**
     * Sets the header_static property value. The header_static property
     * @param value Value to set for the header_static property.
     */
    set header_static(value) {
        this._header_static = value;
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
     * Gets the locked property value. The locked property
     * @returns a boolean
     */
    get locked() {
        return this._locked;
    }
    ;
    /**
     * Sets the locked property value. The locked property
     * @param value Value to set for the locked property.
     */
    set locked(value) {
        this._locked = value;
    }
    ;
    /**
     * Gets the moved property value. The moved property
     * @returns a Account
     */
    get moved() {
        return this._moved;
    }
    ;
    /**
     * Sets the moved property value. The moved property
     * @param value Value to set for the moved property.
     */
    set moved(value) {
        this._moved = value;
    }
    ;
    /**
     * Gets the mute_expires_at property value. The mute_expires_at property
     * @returns a string
     */
    get mute_expires_at() {
        return this._mute_expires_at;
    }
    ;
    /**
     * Sets the mute_expires_at property value. The mute_expires_at property
     * @param value Value to set for the mute_expires_at property.
     */
    set mute_expires_at(value) {
        this._mute_expires_at = value;
    }
    ;
    /**
     * Gets the note property value. The note property
     * @returns a string
     */
    get note() {
        return this._note;
    }
    ;
    /**
     * Sets the note property value. The note property
     * @param value Value to set for the note property.
     */
    set note(value) {
        this._note = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeStringValue("acct", this.acct);
        writer.writeStringValue("avatar", this.avatar);
        writer.writeStringValue("avatar_static", this.avatar_static);
        writer.writeBooleanValue("bot", this.bot);
        writer.writeStringValue("created_at", this.created_at);
        writer.writeBooleanValue("discoverable", this.discoverable);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeCollectionOfObjectValues("emojis", this.emojis);
        writer.writeCollectionOfObjectValues("fields", this.fields);
        writer.writeNumberValue("followers_count", this.followers_count);
        writer.writeNumberValue("following_count", this.following_count);
        writer.writeStringValue("header", this.header);
        writer.writeStringValue("header_static", this.header_static);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("last_status_at", this.last_status_at);
        writer.writeBooleanValue("locked", this.locked);
        writer.writeObjectValue("moved", this.moved);
        writer.writeStringValue("mute_expires_at", this.mute_expires_at);
        writer.writeStringValue("note", this.note);
        writer.writeObjectValue("souce", this.souce);
        writer.writeNumberValue("statuses_count", this.statuses_count);
        writer.writeBooleanValue("suspended", this.suspended);
        writer.writeStringValue("url", this.url);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the souce property value. The souce property
     * @returns a Source
     */
    get souce() {
        return this._souce;
    }
    ;
    /**
     * Sets the souce property value. The souce property
     * @param value Value to set for the souce property.
     */
    set souce(value) {
        this._souce = value;
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
     * Gets the suspended property value. The suspended property
     * @returns a boolean
     */
    get suspended() {
        return this._suspended;
    }
    ;
    /**
     * Sets the suspended property value. The suspended property
     * @param value Value to set for the suspended property.
     */
    set suspended(value) {
        this._suspended = value;
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
     * Gets the username property value. The username property
     * @returns a string
     */
    get username() {
        return this._username;
    }
    ;
    /**
     * Sets the username property value. The username property
     * @param value Value to set for the username property.
     */
    set username(value) {
        this._username = value;
    }
    ;
}
exports.Account = Account;
