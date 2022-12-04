import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createEmojiFromDiscriminatorValue} from './createEmojiFromDiscriminatorValue';
import {createMediaAttachmentFromDiscriminatorValue} from './createMediaAttachmentFromDiscriminatorValue';
import {createPollFromDiscriminatorValue} from './createPollFromDiscriminatorValue';
import {Account, Emoji, MediaAttachment, Poll} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StatusEdit implements AdditionalDataHolder, Parsable {
    /** The account property */
    private _account?: Account | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The content property */
    private _content?: string | undefined;
    /** The created_at property */
    private _created_at?: string | undefined;
    /** The emojis property */
    private _emojis?: Emoji[] | undefined;
    /** The media_attachments property */
    private _media_attachments?: MediaAttachment[] | undefined;
    /** The poll property */
    private _poll?: Poll | undefined;
    /** The sensitive property */
    private _sensitive?: boolean | undefined;
    /** The spoiler_text property */
    private _spoiler_text?: string | undefined;
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
     * Instantiates a new StatusEdit and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "account": n => { this.account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "content": n => { this.content = n.getStringValue(); },
            "created_at": n => { this.created_at = n.getStringValue(); },
            "emojis": n => { this.emojis = n.getCollectionOfObjectValues<Emoji>(createEmojiFromDiscriminatorValue); },
            "media_attachments": n => { this.media_attachments = n.getCollectionOfObjectValues<MediaAttachment>(createMediaAttachmentFromDiscriminatorValue); },
            "poll": n => { this.poll = n.getObjectValue<Poll>(createPollFromDiscriminatorValue); },
            "sensitive": n => { this.sensitive = n.getBooleanValue(); },
            "spoiler_text": n => { this.spoiler_text = n.getStringValue(); },
        };
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
        writer.writeStringValue("content", this.content);
        writer.writeStringValue("created_at", this.created_at);
        writer.writeCollectionOfObjectValues<Emoji>("emojis", this.emojis);
        writer.writeCollectionOfObjectValues<MediaAttachment>("media_attachments", this.media_attachments);
        writer.writeObjectValue<Poll>("poll", this.poll);
        writer.writeBooleanValue("sensitive", this.sensitive);
        writer.writeStringValue("spoiler_text", this.spoiler_text);
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
}
