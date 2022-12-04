import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Registrations implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The approval_required property */
    private _approval_required?: boolean | undefined;
    /** The enabled property */
    private _enabled?: boolean | undefined;
    /** The message property */
    private _message?: string | undefined;
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
     * Gets the approval_required property value. The approval_required property
     * @returns a boolean
     */
    public get approval_required() {
        return this._approval_required;
    };
    /**
     * Sets the approval_required property value. The approval_required property
     * @param value Value to set for the approval_required property.
     */
    public set approval_required(value: boolean | undefined) {
        this._approval_required = value;
    };
    /**
     * Instantiates a new Registrations and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the enabled property value. The enabled property
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. The enabled property
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "approval_required": n => { this.approval_required = n.getBooleanValue(); },
            "enabled": n => { this.enabled = n.getBooleanValue(); },
            "message": n => { this.message = n.getStringValue(); },
        };
    };
    /**
     * Gets the message property value. The message property
     * @returns a string
     */
    public get message() {
        return this._message;
    };
    /**
     * Sets the message property value. The message property
     * @param value Value to set for the message property.
     */
    public set message(value: string | undefined) {
        this._message = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("approval_required", this.approval_required);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("message", this.message);
        writer.writeAdditionalData(this.additionalData);
    };
}
