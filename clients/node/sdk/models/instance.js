"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = void 0;
const createConfigurationFromDiscriminatorValue_1 = require("./createConfigurationFromDiscriminatorValue");
const createContactFromDiscriminatorValue_1 = require("./createContactFromDiscriminatorValue");
const createRegistrationsFromDiscriminatorValue_1 = require("./createRegistrationsFromDiscriminatorValue");
const createRuleFromDiscriminatorValue_1 = require("./createRuleFromDiscriminatorValue");
const createThumbnailFromDiscriminatorValue_1 = require("./createThumbnailFromDiscriminatorValue");
const createUsageFromDiscriminatorValue_1 = require("./createUsageFromDiscriminatorValue");
class Instance {
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    get additionalData() {
        return this._additionalData;
    }
    ;
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value) {
        this._additionalData = value;
    }
    ;
    /**
     * Gets the configuration property value. The configuration property
     * @returns a Configuration
     */
    get configuration() {
        return this._configuration;
    }
    ;
    /**
     * Sets the configuration property value. The configuration property
     * @param value Value to set for the configuration property.
     */
    set configuration(value) {
        this._configuration = value;
    }
    ;
    /**
     * Instantiates a new Instance and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the contact property value. The contact property
     * @returns a Contact
     */
    get contact() {
        return this._contact;
    }
    ;
    /**
     * Sets the contact property value. The contact property
     * @param value Value to set for the contact property.
     */
    set contact(value) {
        this._contact = value;
    }
    ;
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    get description() {
        return this._description;
    }
    ;
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    set description(value) {
        this._description = value;
    }
    ;
    /**
     * Gets the domain property value. The domain property
     * @returns a string
     */
    get domain() {
        return this._domain;
    }
    ;
    /**
     * Sets the domain property value. The domain property
     * @param value Value to set for the domain property.
     */
    set domain(value) {
        this._domain = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "configuration": n => { this.configuration = n.getObjectValue(createConfigurationFromDiscriminatorValue_1.createConfigurationFromDiscriminatorValue); },
            "contact": n => { this.contact = n.getObjectValue(createContactFromDiscriminatorValue_1.createContactFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "domain": n => { this.domain = n.getStringValue(); },
            "languages": n => { this.languages = n.getCollectionOfPrimitiveValues(); },
            "registrations": n => { this.registrations = n.getObjectValue(createRegistrationsFromDiscriminatorValue_1.createRegistrationsFromDiscriminatorValue); },
            "rules": n => { this.rules = n.getCollectionOfObjectValues(createRuleFromDiscriminatorValue_1.createRuleFromDiscriminatorValue); },
            "source_url": n => { this.source_url = n.getStringValue(); },
            "thumbnail": n => { this.thumbnail = n.getObjectValue(createThumbnailFromDiscriminatorValue_1.createThumbnailFromDiscriminatorValue); },
            "title": n => { this.title = n.getStringValue(); },
            "usage": n => { this.usage = n.getObjectValue(createUsageFromDiscriminatorValue_1.createUsageFromDiscriminatorValue); },
            "version": n => { this.version = n.getStringValue(); },
        };
    }
    ;
    /**
     * Gets the languages property value. The languages property
     * @returns a string
     */
    get languages() {
        return this._languages;
    }
    ;
    /**
     * Sets the languages property value. The languages property
     * @param value Value to set for the languages property.
     */
    set languages(value) {
        this._languages = value;
    }
    ;
    /**
     * Gets the registrations property value. The registrations property
     * @returns a Registrations
     */
    get registrations() {
        return this._registrations;
    }
    ;
    /**
     * Sets the registrations property value. The registrations property
     * @param value Value to set for the registrations property.
     */
    set registrations(value) {
        this._registrations = value;
    }
    ;
    /**
     * Gets the rules property value. The rules property
     * @returns a Rule
     */
    get rules() {
        return this._rules;
    }
    ;
    /**
     * Sets the rules property value. The rules property
     * @param value Value to set for the rules property.
     */
    set rules(value) {
        this._rules = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("configuration", this.configuration);
        writer.writeObjectValue("contact", this.contact);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("domain", this.domain);
        writer.writeCollectionOfPrimitiveValues("languages", this.languages);
        writer.writeObjectValue("registrations", this.registrations);
        writer.writeCollectionOfObjectValues("rules", this.rules);
        writer.writeStringValue("source_url", this.source_url);
        writer.writeObjectValue("thumbnail", this.thumbnail);
        writer.writeStringValue("title", this.title);
        writer.writeObjectValue("usage", this.usage);
        writer.writeStringValue("version", this.version);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the source_url property value. The source_url property
     * @returns a string
     */
    get source_url() {
        return this._source_url;
    }
    ;
    /**
     * Sets the source_url property value. The source_url property
     * @param value Value to set for the source_url property.
     */
    set source_url(value) {
        this._source_url = value;
    }
    ;
    /**
     * Gets the thumbnail property value. The thumbnail property
     * @returns a Thumbnail
     */
    get thumbnail() {
        return this._thumbnail;
    }
    ;
    /**
     * Sets the thumbnail property value. The thumbnail property
     * @param value Value to set for the thumbnail property.
     */
    set thumbnail(value) {
        this._thumbnail = value;
    }
    ;
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    get title() {
        return this._title;
    }
    ;
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    set title(value) {
        this._title = value;
    }
    ;
    /**
     * Gets the usage property value. The usage property
     * @returns a Usage
     */
    get usage() {
        return this._usage;
    }
    ;
    /**
     * Sets the usage property value. The usage property
     * @param value Value to set for the usage property.
     */
    set usage(value) {
        this._usage = value;
    }
    ;
    /**
     * Gets the version property value. The version property
     * @returns a string
     */
    get version() {
        return this._version;
    }
    ;
    /**
     * Sets the version property value. The version property
     * @param value Value to set for the version property.
     */
    set version(value) {
        this._version = value;
    }
    ;
}
exports.Instance = Instance;
