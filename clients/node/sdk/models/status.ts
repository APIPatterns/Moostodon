import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createCardFromDiscriminatorValue} from './createCardFromDiscriminatorValue';
import {createEmojiFromDiscriminatorValue} from './createEmojiFromDiscriminatorValue';
import {createMediaAttachmentFromDiscriminatorValue} from './createMediaAttachmentFromDiscriminatorValue';
import {createMentionFromDiscriminatorValue} from './createMentionFromDiscriminatorValue';
import {createPollFromDiscriminatorValue} from './createPollFromDiscriminatorValue';
import {createStatusFromDiscriminatorValue} from './createStatusFromDiscriminatorValue';
import {createTagFromDiscriminatorValue} from './createTagFromDiscriminatorValue';
import {Account, Card, Emoji, MediaAttachment, Mention, Poll, Tag} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Status implements AdditionalDataHolder, Parsable {
    /** The account property */
    private _account?: Account | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The bookmarked property */
    private _bookmarked?: boolean | undefined;
    /** The card property */
    private _card?: Card | undefined;
    /** The content property */
    private _content?: string | undefined;
    /** The created_at property */
    private _created_at?: string | undefined;
    /** The emojis property */
    private _emojis?: Emoji[] | undefined;
    /** The favourited property */
    private _favourited?: boolean | undefined;
    /** The favourites_count property */
    private _favourites_count?: number | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The in_reply_to_account_id property */
    private _in_reply_to_account_id?: string | undefined;
    /** The in_reply_to_id property */
    private _in_reply_to_id?: string | undefined;
    /** The language property */
    private _language?: string | undefined;
    /** The media_attachments property */
    private _media_attachments?: MediaAttachment[] | undefined;
    /** The mentions property */
    private _mentions?: Mention[] | undefined;
    /** The muted property */
    private _muted?: boolean | undefined;
    /** The pinned property */
    private _pinned?: boolean | undefined;
    /** The poll property */
    private _poll?: Poll | undefined;
    /** The reblog property */
    private _reblog?: Status | undefined;
    /** The reblogged property */
    private _reblogged?: boolean | undefined;
    /** The reblogs_count property */
    private _reblogs_count?: number | undefined;
    /** The replies_count property */
    private _replies_count?: number | undefined;
    /** The sensitive property */
    private _sensitive?: boolean | undefined;
    /** The spoiler_text property */
    private _spoiler_text?: string | undefined;
    /** The tags property */
    private _tags?: Tag[] | undefined;
    /** The text property */
    private _text?: string | undefined;
    /** The uri property */
    private _uri?: string | undefined;
    /** The url property */
    private _url?: string | undefined;
    /** The visibility property */
    private _visibility?: string | undefined;
    /**
     * Gets the account property value. The account property
     * @returns a Account
     */
    public get account() {
        return this._account;
    };
    /**
     * Sets the account property value. The account property
     * @param value Value to set for the account property.
     */
    public set account(value: Account | undefined) {
        this._account = value;
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
     * Gets the bookmarked property value. The bookmarked property
     * @returns a boolean
     */
    public get bookmarked() {
        return this._bookmarked;
    };
    /**
     * Sets the bookmarked property value. The bookmarked property
     * @param value Value to set for the bookmarked property.
     */
    public set bookmarked(value: boolean | undefined) {
        this._bookmarked = value;
    };
    /**
     * Gets the card property value. The card property
     * @returns a Card
     */
    public get card() {
        return this._card;
    };
    /**
     * Sets the card property value. The card property
     * @param value Value to set for the card property.
     */
    public set card(value: Card | undefined) {
        this._card = value;
    };
    /**
     * Instantiates a new Status and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the content property value. The content property
     * @returns a string
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content property
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
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
     * Gets the favourited property value. The favourited property
     * @returns a boolean
     */
    public get favourited() {
        return this._favourited;
    };
    /**
     * Sets the favourited property value. The favourited property
     * @param value Value to set for the favourited property.
     */
    public set favourited(value: boolean | undefined) {
        this._favourited = value;
    };
    /**
     * Gets the favourites_count property value. The favourites_count property
     * @returns a integer
     */
    public get favourites_count() {
        return this._favourites_count;
    };
    /**
     * Sets the favourites_count property value. The favourites_count property
     * @param value Value to set for the favourites_count property.
     */
    public set favourites_count(value: number | undefined) {
        this._favourites_count = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "account": n => { this.account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "bookmarked": n => { this.bookmarked = n.getBooleanValue(); },
            "card": n => { this.card = n.getObjectValue<Card>(createCardFromDiscriminatorValue); },
            "content": n => { this.content = n.getStringValue(); },
            "created_at": n => { this.created_at = n.getStringValue(); },
            "emojis": n => { this.emojis = n.getCollectionOfObjectValues<Emoji>(createEmojiFromDiscriminatorValue); },
            "favourited": n => { this.favourited = n.getBooleanValue(); },
            "favourites_count": n => { this.favourites_count = n.getNumberValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "in_reply_to_account_id": n => { this.in_reply_to_account_id = n.getStringValue(); },
            "in_reply_to_id": n => { this.in_reply_to_id = n.getStringValue(); },
            "language": n => { this.language = n.getStringValue(); },
            "media_attachments": n => { this.media_attachments = n.getCollectionOfObjectValues<MediaAttachment>(createMediaAttachmentFromDiscriminatorValue); },
            "mentions": n => { this.mentions = n.getCollectionOfObjectValues<Mention>(createMentionFromDiscriminatorValue); },
            "muted": n => { this.muted = n.getBooleanValue(); },
            "pinned": n => { this.pinned = n.getBooleanValue(); },
            "poll": n => { this.poll = n.getObjectValue<Poll>(createPollFromDiscriminatorValue); },
            "reblog": n => { this.reblog = n.getObjectValue<Status>(createStatusFromDiscriminatorValue); },
            "reblogged": n => { this.reblogged = n.getBooleanValue(); },
            "reblogs_count": n => { this.reblogs_count = n.getNumberValue(); },
            "replies_count": n => { this.replies_count = n.getNumberValue(); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
            "spoiler_text": n => { this.spoiler_text = n.getStringValue(); },
            "tags": n => { this.tags = n.getCollectionOfObjectValues<Tag>(createTagFromDiscriminatorValue); },
            "text": n => { this.text = n.getStringValue(); },
            "uri": n => { this.uri = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "visibility": n => { this.visibility = n.getStringValue(); },
        };
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
     * Gets the in_reply_to_account_id property value. The in_reply_to_account_id property
     * @returns a string
     */
    public get in_reply_to_account_id() {
        return this._in_reply_to_account_id;
    };
    /**
     * Sets the in_reply_to_account_id property value. The in_reply_to_account_id property
     * @param value Value to set for the in_reply_to_account_id property.
     */
    public set in_reply_to_account_id(value: string | undefined) {
        this._in_reply_to_account_id = value;
    };
    /**
     * Gets the in_reply_to_id property value. The in_reply_to_id property
     * @returns a string
     */
    public get in_reply_to_id() {
        return this._in_reply_to_id;
    };
    /**
     * Sets the in_reply_to_id property value. The in_reply_to_id property
     * @param value Value to set for the in_reply_to_id property.
     */
    public set in_reply_to_id(value: string | undefined) {
        this._in_reply_to_id = value;
    };
    /**
     * Gets the language property value. The language property
     * @returns a string
     */
    public get language() {
        return this._language;
    };
    /**
     * Sets the language property value. The language property
     * @param value Value to set for the language property.
     */
    public set language(value: string | undefined) {
        this._language = value;
    };
    /**
     * Gets the media_attachments property value. The media_attachments property
     * @returns a MediaAttachment
     */
    public get media_attachments() {
        return this._media_attachments;
    };
    /**
     * Sets the media_attachments property value. The media_attachments property
     * @param value Value to set for the media_attachments property.
     */
    public set media_attachments(value: MediaAttachment[] | undefined) {
        this._media_attachments = value;
    };
    /**
     * Gets the mentions property value. The mentions property
     * @returns a Mention
     */
    public get mentions() {
        return this._mentions;
    };
    /**
     * Sets the mentions property value. The mentions property
     * @param value Value to set for the mentions property.
     */
    public set mentions(value: Mention[] | undefined) {
        this._mentions = value;
    };
    /**
     * Gets the muted property value. The muted property
     * @returns a boolean
     */
    public get muted() {
        return this._muted;
    };
    /**
     * Sets the muted property value. The muted property
     * @param value Value to set for the muted property.
     */
    public set muted(value: boolean | undefined) {
        this._muted = value;
    };
    /**
     * Gets the pinned property value. The pinned property
     * @returns a boolean
     */
    public get pinned() {
        return this._pinned;
    };
    /**
     * Sets the pinned property value. The pinned property
     * @param value Value to set for the pinned property.
     */
    public set pinned(value: boolean | undefined) {
        this._pinned = value;
    };
    /**
     * Gets the poll property value. The poll property
     * @returns a Poll
     */
    public get poll() {
        return this._poll;
    };
    /**
     * Sets the poll property value. The poll property
     * @param value Value to set for the poll property.
     */
    public set poll(value: Poll | undefined) {
        this._poll = value;
    };
    /**
     * Gets the reblog property value. The reblog property
     * @returns a Status
     */
    public get reblog() {
        return this._reblog;
    };
    /**
     * Sets the reblog property value. The reblog property
     * @param value Value to set for the reblog property.
     */
    public set reblog(value: Status | undefined) {
        this._reblog = value;
    };
    /**
     * Gets the reblogged property value. The reblogged property
     * @returns a boolean
     */
    public get reblogged() {
        return this._reblogged;
    };
    /**
     * Sets the reblogged property value. The reblogged property
     * @param value Value to set for the reblogged property.
     */
    public set reblogged(value: boolean | undefined) {
        this._reblogged = value;
    };
    /**
     * Gets the reblogs_count property value. The reblogs_count property
     * @returns a integer
     */
    public get reblogs_count() {
        return this._reblogs_count;
    };
    /**
     * Sets the reblogs_count property value. The reblogs_count property
     * @param value Value to set for the reblogs_count property.
     */
    public set reblogs_count(value: number | undefined) {
        this._reblogs_count = value;
    };
    /**
     * Gets the replies_count property value. The replies_count property
     * @returns a integer
     */
    public get replies_count() {
        return this._replies_count;
    };
    /**
     * Sets the replies_count property value. The replies_count property
     * @param value Value to set for the replies_count property.
     */
    public set replies_count(value: number | undefined) {
        this._replies_count = value;
    };
    /**
     * Gets the sensitive property value. The sensitive property
     * @returns a boolean
     */
    public get sensitive() {
        return this._sensitive;
    };
    /**
     * Sets the sensitive property value. The sensitive property
     * @param value Value to set for the sensitive property.
     */
    public set sensitive(value: boolean | undefined) {
        this._sensitive = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Account>("account", this.account);
        writer.writeBooleanValue("bookmarked", this.bookmarked);
        writer.writeObjectValue<Card>("card", this.card);
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("created_at", this.created_at);
        writer.writeCollectionOfObjectValues<Emoji>("emojis", this.emojis);
        writer.writeBooleanValue("favourited", this.favourited);
        writer.writeNumberValue("favourites_count", this.favourites_count);
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("in_reply_to_account_id", this.in_reply_to_account_id);
        writer.writeStringValue("in_reply_to_id", this.in_reply_to_id);
        writer.writeStringValue("language", this.language);
        writer.writeCollectionOfObjectValues<MediaAttachment>("media_attachments", this.media_attachments);
        writer.writeCollectionOfObjectValues<Mention>("mentions", this.mentions);
        writer.writeBooleanValue("muted", this.muted);
        writer.writeBooleanValue("pinned", this.pinned);
        writer.writeObjectValue<Poll>("poll", this.poll);
        writer.writeObjectValue<Status>("reblog", this.reblog);
        writer.writeBooleanValue("reblogged", this.reblogged);
        writer.writeNumberValue("reblogs_count", this.reblogs_count);
        writer.writeNumberValue("replies_count", this.replies_count);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeStringValue("spoiler_text", this.spoiler_text);
        writer.writeCollectionOfObjectValues<Tag>("tags", this.tags);
        writer.writeStringValue("text", this.text);
        writer.writeStringValue("uri", this.uri);
        writer.writeStringValue("url", this.url);
        writer.writeStringValue("visibility", this.visibility);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the spoiler_text property value. The spoiler_text property
     * @returns a string
     */
    public get spoiler_text() {
        return this._spoiler_text;
    };
    /**
     * Sets the spoiler_text property value. The spoiler_text property
     * @param value Value to set for the spoiler_text property.
     */
    public set spoiler_text(value: string | undefined) {
        this._spoiler_text = value;
    };
    /**
     * Gets the tags property value. The tags property
     * @returns a Tag
     */
    public get tags() {
        return this._tags;
    };
    /**
     * Sets the tags property value. The tags property
     * @param value Value to set for the tags property.
     */
    public set tags(value: Tag[] | undefined) {
        this._tags = value;
    };
    /**
     * Gets the text property value. The text property
     * @returns a string
     */
    public get text() {
        return this._text;
    };
    /**
     * Sets the text property value. The text property
     * @param value Value to set for the text property.
     */
    public set text(value: string | undefined) {
        this._text = value;
    };
    /**
     * Gets the uri property value. The uri property
     * @returns a string
     */
    public get uri() {
        return this._uri;
    };
    /**
     * Sets the uri property value. The uri property
     * @param value Value to set for the uri property.
     */
    public set uri(value: string | undefined) {
        this._uri = value;
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
     * Gets the visibility property value. The visibility property
     * @returns a string
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. The visibility property
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: string | undefined) {
        this._visibility = value;
    };
}
