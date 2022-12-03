import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class HistoryItem implements AdditionalDataHolder, Parsable {
    /** The accounts property */
    private _accounts?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The day property */
    private _day?: string | undefined;
    /** The uses property */
    private _uses?: string | undefined;
    /**
     * Gets the accounts property value. The accounts property
     * @returns a string
     */
    public get accounts() {
        return this._accounts;
    };
    /**
     * Sets the accounts property value. The accounts property
     * @param value Value to set for the accounts property.
     */
    public set accounts(value: string | undefined) {
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
     * Instantiates a new HistoryItem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the day property value. The day property
     * @returns a string
     */
    public get day() {
        return this._day;
    };
    /**
     * Sets the day property value. The day property
     * @param value Value to set for the day property.
     */
    public set day(value: string | undefined) {
        this._day = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "accounts": n => { this.accounts = n.getStringValue(); },
            "day": n => { this.day = n.getStringValue(); },
            "uses": n => { this.uses = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("accounts", this.accounts);
        writer.writeStringValue("day", this.day);
        writer.writeStringValue("uses", this.uses);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the uses property value. The uses property
     * @returns a string
     */
    public get uses() {
        return this._uses;
    };
    /**
     * Sets the uses property value. The uses property
     * @param value Value to set for the uses property.
     */
    public set uses(value: string | undefined) {
        this._uses = value;
    };
}
