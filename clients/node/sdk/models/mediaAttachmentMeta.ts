import {createMediaAttachmentMetaOriginalFromDiscriminatorValue} from './createMediaAttachmentMetaOriginalFromDiscriminatorValue';
import {createMediaAttachmentMetaSmallFromDiscriminatorValue} from './createMediaAttachmentMetaSmallFromDiscriminatorValue';
import {MediaAttachmentMetaOriginal, MediaAttachmentMetaSmall} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MediaAttachmentMeta implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The original property */
    private _original?: MediaAttachmentMetaOriginal | undefined;
    /** The small property */
    private _small?: MediaAttachmentMetaSmall | undefined;
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
     * Instantiates a new MediaAttachmentMeta and sets the default values.
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
            "original": n => { this.original = n.getObjectValue<MediaAttachmentMetaOriginal>(createMediaAttachmentMetaOriginalFromDiscriminatorValue); },
            "small": n => { this.small = n.getObjectValue<MediaAttachmentMetaSmall>(createMediaAttachmentMetaSmallFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the original property value. The original property
     * @returns a MediaAttachmentMetaOriginal
     */
    public get original() {
        return this._original;
    };
    /**
     * Sets the original property value. The original property
     * @param value Value to set for the original property.
     */
    public set original(value: MediaAttachmentMetaOriginal | undefined) {
        this._original = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<MediaAttachmentMetaOriginal>("original", this.original);
        writer.writeObjectValue<MediaAttachmentMetaSmall>("small", this.small);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the small property value. The small property
     * @returns a MediaAttachmentMetaSmall
     */
    public get small() {
        return this._small;
    };
    /**
     * Sets the small property value. The small property
     * @param value Value to set for the small property.
     */
    public set small(value: MediaAttachmentMetaSmall | undefined) {
        this._small = value;
    };
}
