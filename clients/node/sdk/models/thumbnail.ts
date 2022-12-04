import {createThumnailVersionFromDiscriminatorValue} from './createThumnailVersionFromDiscriminatorValue';
import {ThumnailVersion} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Thumbnail implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The blurhash property */
    private _blurhash?: string | undefined;
    /** The url property */
    private _url?: string | undefined;
    /** The versions property */
    private _versions?: ThumnailVersion | undefined;
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
     * Gets the blurhash property value. The blurhash property
     * @returns a string
     */
    public get blurhash() {
        return this._blurhash;
    };
    /**
     * Sets the blurhash property value. The blurhash property
     * @param value Value to set for the blurhash property.
     */
    public set blurhash(value: string | undefined) {
        this._blurhash = value;
    };
    /**
     * Instantiates a new Thumbnail and sets the default values.
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
            "blurhash": n => { this.blurhash = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
            "versions": n => { this.versions = n.getObjectValue<ThumnailVersion>(createThumnailVersionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("blurhash", this.blurhash);
        writer.writeStringValue("url", this.url);
        writer.writeObjectValue<ThumnailVersion>("versions", this.versions);
        writer.writeAdditionalData(this.additionalData);
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
    /**
     * Gets the versions property value. The versions property
     * @returns a ThumnailVersion
     */
    public get versions() {
        return this._versions;
    };
    /**
     * Sets the versions property value. The versions property
     * @param value Value to set for the versions property.
     */
    public set versions(value: ThumnailVersion | undefined) {
        this._versions = value;
    };
}
