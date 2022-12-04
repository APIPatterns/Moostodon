import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserUsage implements AdditionalDataHolder, Parsable {
    /** The active_halfyear property */
    private _active_halfyear?: number | undefined;
    /** The active_month property */
    private _active_month?: number | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The total property */
    private _total?: number | undefined;
    /**
     * Gets the active_halfyear property value. The active_halfyear property
     * @returns a int64
     */
    public get active_halfyear() {
        return this._active_halfyear;
    };
    /**
     * Sets the active_halfyear property value. The active_halfyear property
     * @param value Value to set for the active_halfyear property.
     */
    public set active_halfyear(value: number | undefined) {
        this._active_halfyear = value;
    };
    /**
     * Gets the active_month property value. The active_month property
     * @returns a int64
     */
    public get active_month() {
        return this._active_month;
    };
    /**
     * Sets the active_month property value. The active_month property
     * @param value Value to set for the active_month property.
     */
    public set active_month(value: number | undefined) {
        this._active_month = value;
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
     * Instantiates a new UserUsage and sets the default values.
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
            "active_halfyear": n => { this.active_halfyear = n.getNumberValue(); },
            "active_month": n => { this.active_month = n.getNumberValue(); },
            "total": n => { this.total = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("active_halfyear", this.active_halfyear);
        writer.writeNumberValue("active_month", this.active_month);
        writer.writeNumberValue("total", this.total);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the total property value. The total property
     * @returns a int64
     */
    public get total() {
        return this._total;
    };
    /**
     * Sets the total property value. The total property
     * @param value Value to set for the total property.
     */
    public set total(value: number | undefined) {
        this._total = value;
    };
}
