import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {Account} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FamiliarFollowers implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The followers property */
    private _followers?: Account[] | undefined;
    /** The id property */
    private _id?: string | undefined;
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
     * Instantiates a new FamiliarFollowers and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the followers property value. The followers property
     * @returns a Account
     */
    public get followers() {
        return this._followers;
    };
    /**
     * Sets the followers property value. The followers property
     * @param value Value to set for the followers property.
     */
    public set followers(value: Account[] | undefined) {
        this._followers = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "followers": n => { this.followers = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<Account>("followers", this.followers);
        writer.writeStringValue("id", this.id);
        writer.writeAdditionalData(this.additionalData);
    };
}
