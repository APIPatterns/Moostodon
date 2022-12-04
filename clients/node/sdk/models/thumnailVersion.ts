import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ThumnailVersion implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The Onex property */
    private _onex?: string | undefined;
    /** The Twox property */
    private _twox?: string | undefined;
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
     * Instantiates a new ThumnailVersion and sets the default values.
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
            "@1x": n => { this.onex = n.getStringValue(); },
            "@2x": n => { this.twox = n.getStringValue(); },
        };
    };
    /**
     * Gets the @1x property value. The Onex property
     * @returns a string
     */
    public get onex() {
        return this._onex;
    };
    /**
     * Sets the @1x property value. The Onex property
     * @param value Value to set for the Onex property.
     */
    public set onex(value: string | undefined) {
        this._onex = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("@1x", this.onex);
        writer.writeStringValue("@2x", this.twox);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the @2x property value. The Twox property
     * @returns a string
     */
    public get twox() {
        return this._twox;
    };
    /**
     * Sets the @2x property value. The Twox property
     * @param value Value to set for the Twox property.
     */
    public set twox(value: string | undefined) {
        this._twox = value;
    };
}
