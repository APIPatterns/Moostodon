import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createEmojiFromDiscriminatorValue} from './createEmojiFromDiscriminatorValue';
import {createFieldFromDiscriminatorValue} from './createFieldFromDiscriminatorValue';
import {createSourceFromDiscriminatorValue} from './createSourceFromDiscriminatorValue';
import {Emoji, Field, Source} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Account implements AdditionalDataHolder, Parsable {
    /** The acct property */
    private _acct?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The avatar property */
    private _avatar?: string | undefined;
    /** The avatar_static property */
    private _avatar_static?: string | undefined;
    /** The bot property */
    private _bot?: boolean | undefined;
    /** The created_at property */
    private _created_at?: string | undefined;
    /** The discoverable property */
    private _discoverable?: boolean | undefined;
    /** The display_name property */
    private _display_name?: string | undefined;
    /** The emojis property */
    private _emojis?: Emoji[] | undefined;
    /** The fields property */
    private _fields?: Field[] | undefined;
    /** The followers_count property */
    private _followers_count?: number | undefined;
    /** The following_count property */
    private _following_count?: number | undefined;
    /** The header property */
    private _header?: string | undefined;
    /** The header_static property */
    private _header_static?: string | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The last_status_at property */
    private _last_status_at?: string | undefined;
    /** The locked property */
    private _locked?: boolean | undefined;
    /** The moved property */
    private _moved?: Account | undefined;
    /** The mute_expires_at property */
    private _mute_expires_at?: string | undefined;
    /** The note property */
    private _note?: string | undefined;
    /** The souce property */
    private _souce?: Source | undefined;
    /** The statuses_count property */
    private _statuses_count?: number | undefined;
    /** The suspended property */
    private _suspended?: boolean | undefined;
    /** The url property */
    private _url?: string | undefined;
    /** The username property */
    private _username?: string | undefined;
    /**
     * Gets the acct property value. The acct property
     * @returns a string
     */
    public get acct() {
        return this._acct;
    };
    /**
     * Sets the acct property value. The acct property
     * @param value Value to set for the acct property.
     */
    public set acct(value: string | undefined) {
        this._acct = value;
    };
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the avatar property value. The avatar property
     * @returns a string
     */
    public get avatar() {
        return this._avatar;
    };
    /**
     * Sets the avatar property value. The avatar property
     * @param value Value to set for the avatar property.
     */
    public set avatar(value: string | undefined) {
        this._avatar = value;
    };
    /**
     * Gets the avatar_static property value. The avatar_static property
     * @returns a string
     */
    public get avatar_static() {
        return this._avatar_static;
    };
    /**
     * Sets the avatar_static property value. The avatar_static property
     * @param value Value to set for the avatar_static property.
     */
    public set avatar_static(value: string | undefined) {
        this._avatar_static = value;
    };
    /**
     * Gets the bot property value. The bot property
     * @returns a boolean
     */
    public get bot() {
        return this._bot;
    };
    /**
     * Sets the bot property value. The bot property
     * @param value Value to set for the bot property.
     */
    public set bot(value: boolean | undefined) {
        this._bot = value;
    };
    /**
     * Instantiates a new Account and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a string
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: string | undefined) {
        this._created_at = value;
    };
    /**
     * Gets the discoverable property value. The discoverable property
     * @returns a boolean
     */
    public get discoverable() {
        return this._discoverable;
    };
    /**
     * Sets the discoverable property value. The discoverable property
     * @param value Value to set for the discoverable property.
     */
    public set discoverable(value: boolean | undefined) {
        this._discoverable = value;
    };
    /**
     * Gets the display_name property value. The display_name property
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. The display_name property
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * Gets the emojis property value. The emojis property
     * @returns a Emoji
     */
    public get emojis() {
        return this._emojis;
    };
    /**
     * Sets the emojis property value. The emojis property
     * @param value Value to set for the emojis property.
     */
    public set emojis(value: Emoji[] | undefined) {
        this._emojis = value;
    };
    /**
     * Gets the fields property value. The fields property
     * @returns a Field
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. The fields property
     * @param value Value to set for the fields property.
     */
    public set fields(value: Field[] | undefined) {
        this._fields = value;
    };
    /**
     * Gets the followers_count property value. The followers_count property
     * @returns a integer
     */
    public get followers_count() {
        return this._followers_count;
    };
    /**
     * Sets the followers_count property value. The followers_count property
     * @param value Value to set for the followers_count property.
     */
    public set followers_count(value: number | undefined) {
        this._followers_count = value;
    };
    /**
     * Gets the following_count property value. The following_count property
     * @returns a integer
     */
    public get following_count() {
        return this._following_count;
    };
    /**
     * Sets the following_count property value. The following_count property
     * @param value Value to set for the following_count property.
     */
    public set following_count(value: number | undefined) {
        this._following_count = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "acct": n => { this.acct = n.getStringValue(); },
            "avatar": n => { this.avatar = n.getStringValue(); },
            "avatar_static": n => { this.avatar_static = n.getStringValue(); },
            "bot": n => { this.bot = n.getBooleanValue(); },
            "created_at": n => { this.created_at = n.getStringValue(); },
            "discoverable": n => { this.discoverable = n.getBooleanValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "emojis": n => { this.emojis = n.getCollectionOfObjectValues<Emoji>(createEmojiFromDiscriminatorValue); },
            "fields": n => { this.fields = n.getCollectionOfObjectValues<Field>(createFieldFromDiscriminatorValue); },
            "followers_count": n => { this.followers_count = n.getNumberValue(); },
            "following_count": n => { this.following_count = n.getNumberValue(); },
            "header": n => { this.header = n.getStringValue(); },
            "header_static": n => { this.header_static = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "last_status_at": n => { this.last_status_at = n.getStringValue(); },
            "locked": n => { this.locked = n.getBooleanValue(); },
            "moved": n => { this.moved = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "mute_expires_at": n => { this.mute_expires_at = n.getStringValue(); },
            "note": n => { this.note = n.getStringValue(); },
            "souce": n => { this.souce = n.getObjectValue<Source>(createSourceFromDiscriminatorValue); },
            "statuses_count": n => { this.statuses_count = n.getNumberValue(); },
            "suspended": n => { this.suspended = n.getBooleanValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "username": n => { this.username = n.getStringValue(); },
        };
    };
    /**
     * Gets the header property value. The header property
     * @returns a string
     */
    public get header() {
        return this._header;
    };
    /**
     * Sets the header property value. The header property
     * @param value Value to set for the header property.
     */
    public set header(value: string | undefined) {
        this._header = value;
    };
    /**
     * Gets the header_static property value. The header_static property
     * @returns a string
     */
    public get header_static() {
        return this._header_static;
    };
    /**
     * Sets the header_static property value. The header_static property
     * @param value Value to set for the header_static property.
     */
    public set header_static(value: string | undefined) {
        this._header_static = value;
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the last_status_at property value. The last_status_at property
     * @returns a string
     */
    public get last_status_at() {
        return this._last_status_at;
    };
    /**
     * Sets the last_status_at property value. The last_status_at property
     * @param value Value to set for the last_status_at property.
     */
    public set last_status_at(value: string | undefined) {
        this._last_status_at = value;
    };
    /**
     * Gets the locked property value. The locked property
     * @returns a boolean
     */
    public get locked() {
        return this._locked;
    };
    /**
     * Sets the locked property value. The locked property
     * @param value Value to set for the locked property.
     */
    public set locked(value: boolean | undefined) {
        this._locked = value;
    };
    /**
     * Gets the moved property value. The moved property
     * @returns a Account
     */
    public get moved() {
        return this._moved;
    };
    /**
     * Sets the moved property value. The moved property
     * @param value Value to set for the moved property.
     */
    public set moved(value: Account | undefined) {
        this._moved = value;
    };
    /**
     * Gets the mute_expires_at property value. The mute_expires_at property
     * @returns a string
     */
    public get mute_expires_at() {
        return this._mute_expires_at;
    };
    /**
     * Sets the mute_expires_at property value. The mute_expires_at property
     * @param value Value to set for the mute_expires_at property.
     */
    public set mute_expires_at(value: string | undefined) {
        this._mute_expires_at = value;
    };
    /**
     * Gets the note property value. The note property
     * @returns a string
     */
    public get note() {
        return this._note;
    };
    /**
     * Sets the note property value. The note property
     * @param value Value to set for the note property.
     */
    public set note(value: string | undefined) {
        this._note = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("acct", this.acct);
        writer.writeStringValue("avatar", this.avatar);
        writer.writeStringValue("avatar_static", this.avatar_static);
        writer.writeBooleanValue("bot", this.bot);
        writer.writeStringValue("created_at", this.created_at);
        writer.writeBooleanValue("discoverable", this.discoverable);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeCollectionOfObjectValues<Emoji>("emojis", this.emojis);
        writer.writeCollectionOfObjectValues<Field>("fields", this.fields);
        writer.writeNumberValue("followers_count", this.followers_count);
        writer.writeNumberValue("following_count", this.following_count);
        writer.writeStringValue("header", this.header);
        writer.writeStringValue("header_static", this.header_static);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("last_status_at", this.last_status_at);
        writer.writeBooleanValue("locked", this.locked);
        writer.writeObjectValue<Account>("moved", this.moved);
        writer.writeStringValue("mute_expires_at", this.mute_expires_at);
        writer.writeStringValue("note", this.note);
        writer.writeObjectValue<Source>("souce", this.souce);
        writer.writeNumberValue("statuses_count", this.statuses_count);
        writer.writeBooleanValue("suspended", this.suspended);
        writer.writeStringValue("url", this.url);
        writer.writeStringValue("username", this.username);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the souce property value. The souce property
     * @returns a Source
     */
    public get souce() {
        return this._souce;
    };
    /**
     * Sets the souce property value. The souce property
     * @param value Value to set for the souce property.
     */
    public set souce(value: Source | undefined) {
        this._souce = value;
    };
    /**
     * Gets the statuses_count property value. The statuses_count property
     * @returns a integer
     */
    public get statuses_count() {
        return this._statuses_count;
    };
    /**
     * Sets the statuses_count property value. The statuses_count property
     * @param value Value to set for the statuses_count property.
     */
    public set statuses_count(value: number | undefined) {
        this._statuses_count = value;
    };
    /**
     * Gets the suspended property value. The suspended property
     * @returns a boolean
     */
    public get suspended() {
        return this._suspended;
    };
    /**
     * Sets the suspended property value. The suspended property
     * @param value Value to set for the suspended property.
     */
    public set suspended(value: boolean | undefined) {
        this._suspended = value;
    };
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
    /**
     * Gets the username property value. The username property
     * @returns a string
     */
    public get username() {
        return this._username;
    };
    /**
     * Sets the username property value. The username property
     * @param value Value to set for the username property.
     */
    public set username(value: string | undefined) {
        this._username = value;
    };
}
