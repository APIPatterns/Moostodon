import {createHistoryItemFromDiscriminatorValue} from './createHistoryItemFromDiscriminatorValue';
import {HistoryItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Tag implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The following property */
    private _following?: boolean | undefined;
    /** The history property */
    private _history?: HistoryItem[] | undefined;
    /** The name property */
    private _name?: string | undefined;
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
     * Instantiates a new Tag and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the following property value. The following property
     * @returns a boolean
     */
    public get following() {
        return this._following;
    };
    /**
     * Sets the following property value. The following property
     * @param value Value to set for the following property.
     */
    public set following(value: boolean | undefined) {
        this._following = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "following": n => { this.following = n.getBooleanValue(); },
            "history": n => { this.history = n.getCollectionOfObjectValues<HistoryItem>(createHistoryItemFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "url": n => { this.url = n.getStringValue(); },
        };
    };
    /**
     * Gets the history property value. The history property
     * @returns a HistoryItem
     */
    public get history() {
        return this._history;
    };
    /**
     * Sets the history property value. The history property
     * @param value Value to set for the history property.
     */
    public set history(value: HistoryItem[] | undefined) {
        this._history = value;
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
        writer.writeBooleanValue("following", this.following);
        writer.writeCollectionOfObjectValues<HistoryItem>("history", this.history);
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("url", this.url);
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
}
