import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UnauthorizedError extends ApiError implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The error_description property */
    private _error_description?: string | undefined;
    /** The error property */
    private _error_escaped?: string | undefined;
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
     * Instantiates a new UnauthorizedError and sets the default values.
     */
    public constructor() {
        super();
        this._additionalData = {};
    };
    /**
     * Gets the error property value. The error property
     * @returns a string
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: string | undefined) {
        this._error_escaped = value;
    };
    /**
     * Gets the error_description property value. The error_description property
     * @returns a string
     */
    public get error_description() {
        return this._error_description;
    };
    /**
     * Sets the error_description property value. The error_description property
     * @param value Value to set for the error_description property.
     */
    public set error_description(value: string | undefined) {
        this._error_description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "error_description": n => { this.error_description = n.getStringValue(); },
            "error": n => { this.error_escaped = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("error_description", this.error_description);
        writer.writeStringValue("error", this.error_escaped);
        writer.writeAdditionalData(this.additionalData);
    };
}
