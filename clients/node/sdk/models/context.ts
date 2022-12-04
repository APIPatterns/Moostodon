import {createStatusFromDiscriminatorValue} from './createStatusFromDiscriminatorValue';
import {Status} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Context implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The ancestors property */
    private _ancestors?: Status[] | undefined;
    /** The descendants property */
    private _descendants?: Status[] | undefined;
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
     * Gets the ancestors property value. The ancestors property
     * @returns a Status
     */
    public get ancestors() {
        return this._ancestors;
    };
    /**
     * Sets the ancestors property value. The ancestors property
     * @param value Value to set for the ancestors property.
     */
    public set ancestors(value: Status[] | undefined) {
        this._ancestors = value;
    };
    /**
     * Instantiates a new Context and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the descendants property value. The descendants property
     * @returns a Status
     */
    public get descendants() {
        return this._descendants;
    };
    /**
     * Sets the descendants property value. The descendants property
     * @param value Value to set for the descendants property.
     */
    public set descendants(value: Status[] | undefined) {
        this._descendants = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "ancestors": n => { this.ancestors = n.getCollectionOfObjectValues<Status>(createStatusFromDiscriminatorValue); },
            "descendants": n => { this.descendants = n.getCollectionOfObjectValues<Status>(createStatusFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<Status>("ancestors", this.ancestors);
        writer.writeCollectionOfObjectValues<Status>("descendants", this.descendants);
        writer.writeAdditionalData(this.additionalData);
    };
}
