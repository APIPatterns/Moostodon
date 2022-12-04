import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createStatusFromDiscriminatorValue} from './createStatusFromDiscriminatorValue';
import {createTagFromDiscriminatorValue} from './createTagFromDiscriminatorValue';
import {Account, Status, Tag} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SearchResult implements AdditionalDataHolder, Parsable {
    /** The accounts property */
    private _accounts?: Account[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The hashtags property */
    private _hashtags?: Tag[] | undefined;
    /** The statuses property */
    private _statuses?: Status[] | undefined;
    /**
     * Gets the accounts property value. The accounts property
     * @returns a Account
     */
    public get accounts() {
        return this._accounts;
    };
    /**
     * Sets the accounts property value. The accounts property
     * @param value Value to set for the accounts property.
     */
    public set accounts(value: Account[] | undefined) {
        this._accounts = value;
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
     * Instantiates a new SearchResult and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accounts": n => { this.accounts = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "hashtags": n => { this.hashtags = n.getCollectionOfObjectValues<Tag>(createTagFromDiscriminatorValue); },
            "statuses": n => { this.statuses = n.getCollectionOfObjectValues<Status>(createStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the hashtags property value. The hashtags property
     * @returns a Tag
     */
    public get hashtags() {
        return this._hashtags;
    };
    /**
     * Sets the hashtags property value. The hashtags property
     * @param value Value to set for the hashtags property.
     */
    public set hashtags(value: Tag[] | undefined) {
        this._hashtags = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<Account>("accounts", this.accounts);
        writer.writeCollectionOfObjectValues<Tag>("hashtags", this.hashtags);
        writer.writeCollectionOfObjectValues<Status>("statuses", this.statuses);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the statuses property value. The statuses property
     * @returns a Status
     */
    public get statuses() {
        return this._statuses;
    };
    /**
     * Sets the statuses property value. The statuses property
     * @param value Value to set for the statuses property.
     */
    public set statuses(value: Status[] | undefined) {
        this._statuses = value;
    };
}
