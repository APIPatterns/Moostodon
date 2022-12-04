"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResult = void 0;
const createAccountFromDiscriminatorValue_1 = require("./createAccountFromDiscriminatorValue");
const createStatusFromDiscriminatorValue_1 = require("./createStatusFromDiscriminatorValue");
const createTagFromDiscriminatorValue_1 = require("./createTagFromDiscriminatorValue");
class SearchResult {
    /**
     * Gets the accounts property value. The accounts property
     * @returns a Account
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
     * Instantiates a new SearchResult and sets the default values.
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
            "accounts": n => { this.accounts = n.getCollectionOfObjectValues(createAccountFromDiscriminatorValue_1.createAccountFromDiscriminatorValue); },
            "hashtags": n => { this.hashtags = n.getCollectionOfObjectValues(createTagFromDiscriminatorValue_1.createTagFromDiscriminatorValue); },
            "statuses": n => { this.statuses = n.getCollectionOfObjectValues(createStatusFromDiscriminatorValue_1.createStatusFromDiscriminatorValue); },
        };
    }
    ;
    /**
     * Gets the hashtags property value. The hashtags property
     * @returns a Tag
     */
    get hashtags() {
        return this._hashtags;
    }
    ;
    /**
     * Sets the hashtags property value. The hashtags property
     * @param value Value to set for the hashtags property.
     */
    set hashtags(value) {
        this._hashtags = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues("accounts", this.accounts);
        writer.writeCollectionOfObjectValues("hashtags", this.hashtags);
        writer.writeCollectionOfObjectValues("statuses", this.statuses);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the statuses property value. The statuses property
     * @returns a Status
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
}
exports.SearchResult = SearchResult;
