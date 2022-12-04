import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FollowBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The lanuages property */
    private _lanuages?: string[] | undefined;
    /** The notify property */
    private _notify?: boolean | undefined;
    /** The reblogs property */
    private _reblogs?: boolean | undefined;
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
     * Instantiates a new FollowBody and sets the default values.
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
            "lanuages": n => { this.lanuages = n.getCollectionOfPrimitiveValues<string>(); },
            "notify": n => { this.notify = n.getBooleanValue(); },
            "reblogs": n => { this.reblogs = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the lanuages property value. The lanuages property
     * @returns a string
     */
    public get lanuages() {
        return this._lanuages;
    };
    /**
     * Sets the lanuages property value. The lanuages property
     * @param value Value to set for the lanuages property.
     */
    public set lanuages(value: string[] | undefined) {
        this._lanuages = value;
    };
    /**
     * Gets the notify property value. The notify property
     * @returns a boolean
     */
    public get notify() {
        return this._notify;
    };
    /**
     * Sets the notify property value. The notify property
     * @param value Value to set for the notify property.
     */
    public set notify(value: boolean | undefined) {
        this._notify = value;
    };
    /**
     * Gets the reblogs property value. The reblogs property
     * @returns a boolean
     */
    public get reblogs() {
        return this._reblogs;
    };
    /**
     * Sets the reblogs property value. The reblogs property
     * @param value Value to set for the reblogs property.
     */
    public set reblogs(value: boolean | undefined) {
        this._reblogs = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("lanuages", this.lanuages);
        writer.writeBooleanValue("notify", this.notify);
        writer.writeBooleanValue("reblogs", this.reblogs);
        writer.writeAdditionalData(this.additionalData);
    };
}
