import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConfigurationStatuses implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The characters_reserved_per_url property */
    private _characters_reserved_per_url?: number | undefined;
    /** The max_characters property */
    private _max_characters?: number | undefined;
    /** The max_media_attachments property */
    private _max_media_attachments?: number | undefined;
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
     * Gets the characters_reserved_per_url property value. The characters_reserved_per_url property
     * @returns a integer
     */
    public get characters_reserved_per_url() {
        return this._characters_reserved_per_url;
    };
    /**
     * Sets the characters_reserved_per_url property value. The characters_reserved_per_url property
     * @param value Value to set for the characters_reserved_per_url property.
     */
    public set characters_reserved_per_url(value: number | undefined) {
        this._characters_reserved_per_url = value;
    };
    /**
     * Instantiates a new ConfigurationStatuses and sets the default values.
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
            "characters_reserved_per_url": n => { this.characters_reserved_per_url = n.getNumberValue(); },
            "max_characters": n => { this.max_characters = n.getNumberValue(); },
            "max_media_attachments": n => { this.max_media_attachments = n.getNumberValue(); },
        };
    };
    /**
     * Gets the max_characters property value. The max_characters property
     * @returns a integer
     */
    public get max_characters() {
        return this._max_characters;
    };
    /**
     * Sets the max_characters property value. The max_characters property
     * @param value Value to set for the max_characters property.
     */
    public set max_characters(value: number | undefined) {
        this._max_characters = value;
    };
    /**
     * Gets the max_media_attachments property value. The max_media_attachments property
     * @returns a integer
     */
    public get max_media_attachments() {
        return this._max_media_attachments;
    };
    /**
     * Sets the max_media_attachments property value. The max_media_attachments property
     * @param value Value to set for the max_media_attachments property.
     */
    public set max_media_attachments(value: number | undefined) {
        this._max_media_attachments = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("characters_reserved_per_url", this.characters_reserved_per_url);
        writer.writeNumberValue("max_characters", this.max_characters);
        writer.writeNumberValue("max_media_attachments", this.max_media_attachments);
        writer.writeAdditionalData(this.additionalData);
    };
}
