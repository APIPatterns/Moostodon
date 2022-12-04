import {createFieldFromDiscriminatorValue} from './createFieldFromDiscriminatorValue';
import {createSourceFromDiscriminatorValue} from './createSourceFromDiscriminatorValue';
import {Field, Source} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UpdateCredentialsBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The avatar property */
    private _avatar?: string | undefined;
    /** The bot property */
    private _bot?: boolean | undefined;
    /** The discoverable property */
    private _discoverable?: boolean | undefined;
    /** The display_name property */
    private _display_name?: string | undefined;
    /** The fields property */
    private _fields?: Field[] | undefined;
    /** The header property */
    private _header?: string | undefined;
    /** The locked property */
    private _locked?: boolean | undefined;
    /** The note property */
    private _note?: string | undefined;
    /** The source property */
    private _source?: Source | undefined;
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
     * Gets the avatar property value. The avatar property
     * @returns a string
     */
    public get avatar() {
        return this._avatar;
    };
    /**
     * Sets the avatar property value. The avatar property
     * @param value Value to set for the avatar property.
     */
    public set avatar(value: string | undefined) {
        this._avatar = value;
    };
    /**
     * Gets the bot property value. The bot property
     * @returns a boolean
     */
    public get bot() {
        return this._bot;
    };
    /**
     * Sets the bot property value. The bot property
     * @param value Value to set for the bot property.
     */
    public set bot(value: boolean | undefined) {
        this._bot = value;
    };
    /**
     * Instantiates a new UpdateCredentialsBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the discoverable property value. The discoverable property
     * @returns a boolean
     */
    public get discoverable() {
        return this._discoverable;
    };
    /**
     * Sets the discoverable property value. The discoverable property
     * @param value Value to set for the discoverable property.
     */
    public set discoverable(value: boolean | undefined) {
        this._discoverable = value;
    };
    /**
     * Gets the display_name property value. The display_name property
     * @returns a string
     */
    public get display_name() {
        return this._display_name;
    };
    /**
     * Sets the display_name property value. The display_name property
     * @param value Value to set for the display_name property.
     */
    public set display_name(value: string | undefined) {
        this._display_name = value;
    };
    /**
     * Gets the fields property value. The fields property
     * @returns a Field
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. The fields property
     * @param value Value to set for the fields property.
     */
    public set fields(value: Field[] | undefined) {
        this._fields = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "avatar": n => { this.avatar = n.getStringValue(); },
            "bot": n => { this.bot = n.getBooleanValue(); },
            "discoverable": n => { this.discoverable = n.getBooleanValue(); },
            "display_name": n => { this.display_name = n.getStringValue(); },
            "fields": n => { this.fields = n.getCollectionOfObjectValues<Field>(createFieldFromDiscriminatorValue); },
            "header": n => { this.header = n.getStringValue(); },
            "locked": n => { this.locked = n.getBooleanValue(); },
            "note": n => { this.note = n.getStringValue(); },
            "source": n => { this.source = n.getObjectValue<Source>(createSourceFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the header property value. The header property
     * @returns a string
     */
    public get header() {
        return this._header;
    };
    /**
     * Sets the header property value. The header property
     * @param value Value to set for the header property.
     */
    public set header(value: string | undefined) {
        this._header = value;
    };
    /**
     * Gets the locked property value. The locked property
     * @returns a boolean
     */
    public get locked() {
        return this._locked;
    };
    /**
     * Sets the locked property value. The locked property
     * @param value Value to set for the locked property.
     */
    public set locked(value: boolean | undefined) {
        this._locked = value;
    };
    /**
     * Gets the note property value. The note property
     * @returns a string
     */
    public get note() {
        return this._note;
    };
    /**
     * Sets the note property value. The note property
     * @param value Value to set for the note property.
     */
    public set note(value: string | undefined) {
        this._note = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("avatar", this.avatar);
        writer.writeBooleanValue("bot", this.bot);
        writer.writeBooleanValue("discoverable", this.discoverable);
        writer.writeStringValue("display_name", this.display_name);
        writer.writeCollectionOfObjectValues<Field>("fields", this.fields);
        writer.writeStringValue("header", this.header);
        writer.writeBooleanValue("locked", this.locked);
        writer.writeStringValue("note", this.note);
        writer.writeObjectValue<Source>("source", this.source);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the source property value. The source property
     * @returns a Source
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. The source property
     * @param value Value to set for the source property.
     */
    public set source(value: Source | undefined) {
        this._source = value;
    };
}
