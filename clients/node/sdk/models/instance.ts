import {createConfigurationFromDiscriminatorValue} from './createConfigurationFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createRegistrationsFromDiscriminatorValue} from './createRegistrationsFromDiscriminatorValue';
import {createRuleFromDiscriminatorValue} from './createRuleFromDiscriminatorValue';
import {createThumbnailFromDiscriminatorValue} from './createThumbnailFromDiscriminatorValue';
import {createUsageFromDiscriminatorValue} from './createUsageFromDiscriminatorValue';
import {Configuration, Contact, Registrations, Rule, Thumbnail, Usage} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Instance implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The configuration property */
    private _configuration?: Configuration | undefined;
    /** The contact property */
    private _contact?: Contact | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The domain property */
    private _domain?: string | undefined;
    /** The languages property */
    private _languages?: string[] | undefined;
    /** The registrations property */
    private _registrations?: Registrations | undefined;
    /** The rules property */
    private _rules?: Rule[] | undefined;
    /** The source_url property */
    private _source_url?: string | undefined;
    /** The thumbnail property */
    private _thumbnail?: Thumbnail | undefined;
    /** The title property */
    private _title?: string | undefined;
    /** The usage property */
    private _usage?: Usage | undefined;
    /** The version property */
    private _version?: string | undefined;
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
     * Gets the configuration property value. The configuration property
     * @returns a Configuration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. The configuration property
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: Configuration | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new Instance and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contact property value. The contact property
     * @returns a Contact
     */
    public get contact() {
        return this._contact;
    };
    /**
     * Sets the contact property value. The contact property
     * @param value Value to set for the contact property.
     */
    public set contact(value: Contact | undefined) {
        this._contact = value;
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the domain property value. The domain property
     * @returns a string
     */
    public get domain() {
        return this._domain;
    };
    /**
     * Sets the domain property value. The domain property
     * @param value Value to set for the domain property.
     */
    public set domain(value: string | undefined) {
        this._domain = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "configuration": n => { this.configuration = n.getObjectValue<Configuration>(createConfigurationFromDiscriminatorValue); },
            "contact": n => { this.contact = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "domain": n => { this.domain = n.getStringValue(); },
            "languages": n => { this.languages = n.getCollectionOfPrimitiveValues<string>(); },
            "registrations": n => { this.registrations = n.getObjectValue<Registrations>(createRegistrationsFromDiscriminatorValue); },
            "rules": n => { this.rules = n.getCollectionOfObjectValues<Rule>(createRuleFromDiscriminatorValue); },
            "source_url": n => { this.source_url = n.getStringValue(); },
            "thumbnail": n => { this.thumbnail = n.getObjectValue<Thumbnail>(createThumbnailFromDiscriminatorValue); },
            "title": n => { this.title = n.getStringValue(); },
            "usage": n => { this.usage = n.getObjectValue<Usage>(createUsageFromDiscriminatorValue); },
            "version": n => { this.version = n.getStringValue(); },
        };
    };
    /**
     * Gets the languages property value. The languages property
     * @returns a string
     */
    public get languages() {
        return this._languages;
    };
    /**
     * Sets the languages property value. The languages property
     * @param value Value to set for the languages property.
     */
    public set languages(value: string[] | undefined) {
        this._languages = value;
    };
    /**
     * Gets the registrations property value. The registrations property
     * @returns a Registrations
     */
    public get registrations() {
        return this._registrations;
    };
    /**
     * Sets the registrations property value. The registrations property
     * @param value Value to set for the registrations property.
     */
    public set registrations(value: Registrations | undefined) {
        this._registrations = value;
    };
    /**
     * Gets the rules property value. The rules property
     * @returns a Rule
     */
    public get rules() {
        return this._rules;
    };
    /**
     * Sets the rules property value. The rules property
     * @param value Value to set for the rules property.
     */
    public set rules(value: Rule[] | undefined) {
        this._rules = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<Configuration>("configuration", this.configuration);
        writer.writeObjectValue<Contact>("contact", this.contact);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("domain", this.domain);
        writer.writeCollectionOfPrimitiveValues<string>("languages", this.languages);
        writer.writeObjectValue<Registrations>("registrations", this.registrations);
        writer.writeCollectionOfObjectValues<Rule>("rules", this.rules);
        writer.writeStringValue("source_url", this.source_url);
        writer.writeObjectValue<Thumbnail>("thumbnail", this.thumbnail);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue<Usage>("usage", this.usage);
        writer.writeStringValue("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the source_url property value. The source_url property
     * @returns a string
     */
    public get source_url() {
        return this._source_url;
    };
    /**
     * Sets the source_url property value. The source_url property
     * @param value Value to set for the source_url property.
     */
    public set source_url(value: string | undefined) {
        this._source_url = value;
    };
    /**
     * Gets the thumbnail property value. The thumbnail property
     * @returns a Thumbnail
     */
    public get thumbnail() {
        return this._thumbnail;
    };
    /**
     * Sets the thumbnail property value. The thumbnail property
     * @param value Value to set for the thumbnail property.
     */
    public set thumbnail(value: Thumbnail | undefined) {
        this._thumbnail = value;
    };
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the usage property value. The usage property
     * @returns a Usage
     */
    public get usage() {
        return this._usage;
    };
    /**
     * Sets the usage property value. The usage property
     * @param value Value to set for the usage property.
     */
    public set usage(value: Usage | undefined) {
        this._usage = value;
    };
    /**
     * Gets the version property value. The version property
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version property
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
