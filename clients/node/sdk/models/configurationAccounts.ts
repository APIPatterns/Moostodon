import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConfigurationAccounts implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The max_feature_tags property */
    private _max_feature_tags?: number | undefined;
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
     * Instantiates a new ConfigurationAccounts and sets the default values.
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
            "max_feature_tags": n => { this.max_feature_tags = n.getNumberValue(); },
        };
    };
    /**
     * Gets the max_feature_tags property value. The max_feature_tags property
     * @returns a integer
     */
    public get max_feature_tags() {
        return this._max_feature_tags;
    };
    /**
     * Sets the max_feature_tags property value. The max_feature_tags property
     * @param value Value to set for the max_feature_tags property.
     */
    public set max_feature_tags(value: number | undefined) {
        this._max_feature_tags = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("max_feature_tags", this.max_feature_tags);
        writer.writeAdditionalData(this.additionalData);
    };
}
