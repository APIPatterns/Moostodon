import {createEmojiFromDiscriminatorValue} from './createEmojiFromDiscriminatorValue';
import {createPollOptionFromDiscriminatorValue} from './createPollOptionFromDiscriminatorValue';
import {Emoji, PollOption} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Poll implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The emojis property */
    private _emojis?: Emoji[] | undefined;
    /** The expired property */
    private _expired?: boolean | undefined;
    /** The expires_at property */
    private _expires_at?: string | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The multiple property */
    private _multiple?: boolean | undefined;
    /** The options property */
    private _options?: PollOption[] | undefined;
    /** The own_votes property */
    private _own_votes?: number[] | undefined;
    /** The voted property */
    private _voted?: boolean | undefined;
    /** The voters_count property */
    private _voters_count?: number | undefined;
    /** The votes_count property */
    private _votes_count?: number | undefined;
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
     * Instantiates a new Poll and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
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
     * Gets the expired property value. The expired property
     * @returns a boolean
     */
    public get expired() {
        return this._expired;
    };
    /**
     * Sets the expired property value. The expired property
     * @param value Value to set for the expired property.
     */
    public set expired(value: boolean | undefined) {
        this._expired = value;
    };
    /**
     * Gets the expires_at property value. The expires_at property
     * @returns a string
     */
    public get expires_at() {
        return this._expires_at;
    };
    /**
     * Sets the expires_at property value. The expires_at property
     * @param value Value to set for the expires_at property.
     */
    public set expires_at(value: string | undefined) {
        this._expires_at = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "emojis": n => { this.emojis = n.getCollectionOfObjectValues<Emoji>(createEmojiFromDiscriminatorValue); },
            "expired": n => { this.expired = n.getBooleanValue(); },
            "expires_at": n => { this.expires_at = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "multiple": n => { this.multiple = n.getBooleanValue(); },
            "options": n => { this.options = n.getCollectionOfObjectValues<PollOption>(createPollOptionFromDiscriminatorValue); },
            "own_votes": n => { this.own_votes = n.getCollectionOfPrimitiveValues<number>(); },
            "voted": n => { this.voted = n.getBooleanValue(); },
            "voters_count": n => { this.voters_count = n.getNumberValue(); },
            "votes_count": n => { this.votes_count = n.getNumberValue(); },
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
     * Gets the multiple property value. The multiple property
     * @returns a boolean
     */
    public get multiple() {
        return this._multiple;
    };
    /**
     * Sets the multiple property value. The multiple property
     * @param value Value to set for the multiple property.
     */
    public set multiple(value: boolean | undefined) {
        this._multiple = value;
    };
    /**
     * Gets the options property value. The options property
     * @returns a PollOption
     */
    public get options() {
        return this._options;
    };
    /**
     * Sets the options property value. The options property
     * @param value Value to set for the options property.
     */
    public set options(value: PollOption[] | undefined) {
        this._options = value;
    };
    /**
     * Gets the own_votes property value. The own_votes property
     * @returns a integer
     */
    public get own_votes() {
        return this._own_votes;
    };
    /**
     * Sets the own_votes property value. The own_votes property
     * @param value Value to set for the own_votes property.
     */
    public set own_votes(value: number[] | undefined) {
        this._own_votes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<Emoji>("emojis", this.emojis);
        writer.writeBooleanValue("expired", this.expired);
        writer.writeStringValue("expires_at", this.expires_at);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("multiple", this.multiple);
        writer.writeCollectionOfObjectValues<PollOption>("options", this.options);
        writer.writeCollectionOfPrimitiveValues<number>("own_votes", this.own_votes);
        writer.writeBooleanValue("voted", this.voted);
        writer.writeNumberValue("voters_count", this.voters_count);
        writer.writeNumberValue("votes_count", this.votes_count);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the voted property value. The voted property
     * @returns a boolean
     */
    public get voted() {
        return this._voted;
    };
    /**
     * Sets the voted property value. The voted property
     * @param value Value to set for the voted property.
     */
    public set voted(value: boolean | undefined) {
        this._voted = value;
    };
    /**
     * Gets the voters_count property value. The voters_count property
     * @returns a integer
     */
    public get voters_count() {
        return this._voters_count;
    };
    /**
     * Sets the voters_count property value. The voters_count property
     * @param value Value to set for the voters_count property.
     */
    public set voters_count(value: number | undefined) {
        this._voters_count = value;
    };
    /**
     * Gets the votes_count property value. The votes_count property
     * @returns a integer
     */
    public get votes_count() {
        return this._votes_count;
    };
    /**
     * Sets the votes_count property value. The votes_count property
     * @param value Value to set for the votes_count property.
     */
    public set votes_count(value: number | undefined) {
        this._votes_count = value;
    };
}
