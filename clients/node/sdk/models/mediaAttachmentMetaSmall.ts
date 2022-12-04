import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaAttachmentMetaSmall implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The aspect property */
    private _aspect?: number | undefined;
    /** The height property */
    private _height?: number | undefined;
    /** The size property */
    private _size?: string | undefined;
    /** The width property */
    private _width?: number | undefined;
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
     * Gets the aspect property value. The aspect property
     * @returns a float
     */
    public get aspect() {
        return this._aspect;
    };
    /**
     * Sets the aspect property value. The aspect property
     * @param value Value to set for the aspect property.
     */
    public set aspect(value: number | undefined) {
        this._aspect = value;
    };
    /**
     * Instantiates a new MediaAttachmentMetaSmall and sets the default values.
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
            "aspect": n => { this.aspect = n.getNumberValue(); },
            "height": n => { this.height = n.getNumberValue(); },
            "size": n => { this.size = n.getStringValue(); },
            "width": n => { this.width = n.getNumberValue(); },
        };
    };
    /**
     * Gets the height property value. The height property
     * @returns a integer
     */
    public get height() {
        return this._height;
    };
    /**
     * Sets the height property value. The height property
     * @param value Value to set for the height property.
     */
    public set height(value: number | undefined) {
        this._height = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeNumberValue("aspect", this.aspect);
        writer.writeNumberValue("height", this.height);
        writer.writeStringValue("size", this.size);
        writer.writeNumberValue("width", this.width);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the size property value. The size property
     * @returns a string
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The size property
     * @param value Value to set for the size property.
     */
    public set size(value: string | undefined) {
        this._size = value;
    };
    /**
     * Gets the width property value. The width property
     * @returns a integer
     */
    public get width() {
        return this._width;
    };
    /**
     * Sets the width property value. The width property
     * @param value Value to set for the width property.
     */
    public set width(value: number | undefined) {
        this._width = value;
    };
}
