import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FeaturedTag implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The id property */
    private _id?: string | undefined;
    /** The last_status_at property */
    private _last_status_at?: string | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The statuses_count property */
    private _statuses_count?: number | undefined;
    /** The url property */
    private _url?: string | undefined;
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
     * Instantiates a new FeaturedTag and sets the default values.
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
            "id": n => { this.id = n.getStringValue(); },
            "last_status_at": n => { this.last_status_at = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "statuses_count": n => { this.statuses_count = n.getNumberValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
    };
    /**
     * Gets the last_status_at property value. The last_status_at property
     * @returns a string
     */
    public get last_status_at() {
        return this._last_status_at;
    };
    /**
     * Sets the last_status_at property value. The last_status_at property
     * @param value Value to set for the last_status_at property.
     */
    public set last_status_at(value: string | undefined) {
        this._last_status_at = value;
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("id", this.id);
        writer.writeStringValue("last_status_at", this.last_status_at);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("statuses_count", this.statuses_count);
        writer.writeStringValue("url", this.url);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the statuses_count property value. The statuses_count property
     * @returns a integer
     */
    public get statuses_count() {
        return this._statuses_count;
    };
    /**
     * Sets the statuses_count property value. The statuses_count property
     * @param value Value to set for the statuses_count property.
     */
    public set statuses_count(value: number | undefined) {
        this._statuses_count = value;
    };
    /**
     * Gets the url property value. The url property
     * @returns a string
     */
    public get url() {
        return this._url;
    };
    /**
     * Sets the url property value. The url property
     * @param value Value to set for the url property.
     */
    public set url(value: string | undefined) {
        this._url = value;
    };
}
