"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = void 0;
const createEmojiFromDiscriminatorValue_1 = require("./createEmojiFromDiscriminatorValue");
const createPollOptionFromDiscriminatorValue_1 = require("./createPollOptionFromDiscriminatorValue");
class Poll {
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
     * Instantiates a new Poll and sets the default values.
     */
    constructor() {
        this._additionalData = {};
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
     * Gets the expired property value. The expired property
     * @returns a boolean
     */
    get expired() {
        return this._expired;
    }
    ;
    /**
     * Sets the expired property value. The expired property
     * @param value Value to set for the expired property.
     */
    set expired(value) {
        this._expired = value;
    }
    ;
    /**
     * Gets the expires_at property value. The expires_at property
     * @returns a string
     */
    get expires_at() {
        return this._expires_at;
    }
    ;
    /**
     * Sets the expires_at property value. The expires_at property
     * @param value Value to set for the expires_at property.
     */
    set expires_at(value) {
        this._expires_at = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "emojis": n => { this.emojis = n.getCollectionOfObjectValues(createEmojiFromDiscriminatorValue_1.createEmojiFromDiscriminatorValue); },
            "expired": n => { this.expired = n.getBooleanValue(); },
            "expires_at": n => { this.expires_at = n.getStringValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "multiple": n => { this.multiple = n.getBooleanValue(); },
            "options": n => { this.options = n.getCollectionOfObjectValues(createPollOptionFromDiscriminatorValue_1.createPollOptionFromDiscriminatorValue); },
            "own_votes": n => { this.own_votes = n.getCollectionOfPrimitiveValues(); },
            "voted": n => { this.voted = n.getBooleanValue(); },
            "voters_count": n => { this.voters_count = n.getNumberValue(); },
            "votes_count": n => { this.votes_count = n.getNumberValue(); },
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
     * Gets the multiple property value. The multiple property
     * @returns a boolean
     */
    get multiple() {
        return this._multiple;
    }
    ;
    /**
     * Sets the multiple property value. The multiple property
     * @param value Value to set for the multiple property.
     */
    set multiple(value) {
        this._multiple = value;
    }
    ;
    /**
     * Gets the options property value. The options property
     * @returns a PollOption
     */
    get options() {
        return this._options;
    }
    ;
    /**
     * Sets the options property value. The options property
     * @param value Value to set for the options property.
     */
    set options(value) {
        this._options = value;
    }
    ;
    /**
     * Gets the own_votes property value. The own_votes property
     * @returns a integer
     */
    get own_votes() {
        return this._own_votes;
    }
    ;
    /**
     * Sets the own_votes property value. The own_votes property
     * @param value Value to set for the own_votes property.
     */
    set own_votes(value) {
        this._own_votes = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues("emojis", this.emojis);
        writer.writeBooleanValue("expired", this.expired);
        writer.writeStringValue("expires_at", this.expires_at);
        writer.writeStringValue("id", this.id);
        writer.writeBooleanValue("multiple", this.multiple);
        writer.writeCollectionOfObjectValues("options", this.options);
        writer.writeCollectionOfPrimitiveValues("own_votes", this.own_votes);
        writer.writeBooleanValue("voted", this.voted);
        writer.writeNumberValue("voters_count", this.voters_count);
        writer.writeNumberValue("votes_count", this.votes_count);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the voted property value. The voted property
     * @returns a boolean
     */
    get voted() {
        return this._voted;
    }
    ;
    /**
     * Sets the voted property value. The voted property
     * @param value Value to set for the voted property.
     */
    set voted(value) {
        this._voted = value;
    }
    ;
    /**
     * Gets the voters_count property value. The voters_count property
     * @returns a integer
     */
    get voters_count() {
        return this._voters_count;
    }
    ;
    /**
     * Sets the voters_count property value. The voters_count property
     * @param value Value to set for the voters_count property.
     */
    set voters_count(value) {
        this._voters_count = value;
    }
    ;
    /**
     * Gets the votes_count property value. The votes_count property
     * @returns a integer
     */
    get votes_count() {
        return this._votes_count;
    }
    ;
    /**
     * Sets the votes_count property value. The votes_count property
     * @param value Value to set for the votes_count property.
     */
    set votes_count(value) {
        this._votes_count = value;
    }
    ;
}
exports.Poll = Poll;
