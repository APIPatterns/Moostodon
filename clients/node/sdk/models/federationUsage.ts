import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FederationUsage implements AdditionalDataHolder, Parsable {
    /** The active property */
    private _active?: number | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The receiving property */
    private _receiving?: number | undefined;
    /** The sending property */
    private _sending?: number | undefined;
    /**
     * Gets the active property value. The active property
     * @returns a int64
     */
    public get active() {
        return this._active;
    };
    /**
     * Sets the active property value. The active property
     * @param value Value to set for the active property.
     */
    public set active(value: number | undefined) {
        this._active = value;
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
     * Instantiates a new FederationUsage and sets the default values.
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
            "active": n => { this.active = n.getNumberValue(); },
            "receiving": n => { this.receiving = n.getNumberValue(); },
            "sending": n => { this.sending = n.getNumberValue(); },
        };
    };
    /**
     * Gets the receiving property value. The receiving property
     * @returns a int64
     */
    public get receiving() {
        return this._receiving;
    };
    /**
     * Sets the receiving property value. The receiving property
     * @param value Value to set for the receiving property.
     */
    public set receiving(value: number | undefined) {
        this._receiving = value;
    };
    /**
     * Gets the sending property value. The sending property
     * @returns a int64
     */
    public get sending() {
        return this._sending;
    };
    /**
     * Sets the sending property value. The sending property
     * @param value Value to set for the sending property.
     */
    public set sending(value: number | undefined) {
        this._sending = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("active", this.active);
        writer.writeNumberValue("receiving", this.receiving);
        writer.writeNumberValue("sending", this.sending);
        writer.writeAdditionalData(this.additionalData);
    };
}
