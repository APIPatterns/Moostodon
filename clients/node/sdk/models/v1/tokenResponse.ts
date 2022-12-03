import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TokenResponse implements AdditionalDataHolder, Parsable {
    /** The access_token property */
    private _access_token?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The created_at property */
    private _created_at?: number | undefined;
    /** The scope property */
    private _scope?: string | undefined;
    /** The token_type property */
    private _token_type?: string | undefined;
    /**
     * Gets the access_token property value. The access_token property
     * @returns a string
     */
    public get access_token() {
        return this._access_token;
    };
    /**
     * Sets the access_token property value. The access_token property
     * @param value Value to set for the access_token property.
     */
    public set access_token(value: string | undefined) {
        this._access_token = value;
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
     * Instantiates a new TokenResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the created_at property value. The created_at property
     * @returns a integer
     */
    public get created_at() {
        return this._created_at;
    };
    /**
     * Sets the created_at property value. The created_at property
     * @param value Value to set for the created_at property.
     */
    public set created_at(value: number | undefined) {
        this._created_at = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "access_token": n => { this.access_token = n.getStringValue(); },
            "created_at": n => { this.created_at = n.getNumberValue(); },
            "scope": n => { this.scope = n.getStringValue(); },
            "token_type": n => { this.token_type = n.getStringValue(); },
        };
    };
    /**
     * Gets the scope property value. The scope property
     * @returns a string
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. The scope property
     * @param value Value to set for the scope property.
     */
    public set scope(value: string | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("access_token", this.access_token);
        writer.writeNumberValue("created_at", this.created_at);
        writer.writeStringValue("scope", this.scope);
        writer.writeStringValue("token_type", this.token_type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the token_type property value. The token_type property
     * @returns a string
     */
    public get token_type() {
        return this._token_type;
    };
    /**
     * Sets the token_type property value. The token_type property
     * @param value Value to set for the token_type property.
     */
    public set token_type(value: string | undefined) {
        this._token_type = value;
    };
}
