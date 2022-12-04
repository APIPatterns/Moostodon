import {createFederationUsageFromDiscriminatorValue} from './createFederationUsageFromDiscriminatorValue';
import {createUserUsageFromDiscriminatorValue} from './createUserUsageFromDiscriminatorValue';
import {FederationUsage, UserUsage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Usage implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The federation property */
    private _federation?: FederationUsage | undefined;
    /** The local_posts property */
    private _local_posts?: number | undefined;
    /** The users property */
    private _users?: UserUsage | undefined;
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
     * Instantiates a new Usage and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the federation property value. The federation property
     * @returns a FederationUsage
     */
    public get federation() {
        return this._federation;
    };
    /**
     * Sets the federation property value. The federation property
     * @param value Value to set for the federation property.
     */
    public set federation(value: FederationUsage | undefined) {
        this._federation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "federation": n => { this.federation = n.getObjectValue<FederationUsage>(createFederationUsageFromDiscriminatorValue); },
            "local_posts": n => { this.local_posts = n.getNumberValue(); },
            "users": n => { this.users = n.getObjectValue<UserUsage>(createUserUsageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the local_posts property value. The local_posts property
     * @returns a int64
     */
    public get local_posts() {
        return this._local_posts;
    };
    /**
     * Sets the local_posts property value. The local_posts property
     * @param value Value to set for the local_posts property.
     */
    public set local_posts(value: number | undefined) {
        this._local_posts = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<FederationUsage>("federation", this.federation);
        writer.writeNumberValue("local_posts", this.local_posts);
        writer.writeObjectValue<UserUsage>("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the users property value. The users property
     * @returns a UserUsage
     */
    public get users() {
        return this._users;
    };
    /**
     * Sets the users property value. The users property
     * @param value Value to set for the users property.
     */
    public set users(value: UserUsage | undefined) {
        this._users = value;
    };
}
