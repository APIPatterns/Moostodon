import {createConfigurationAccountsFromDiscriminatorValue} from './createConfigurationAccountsFromDiscriminatorValue';
import {createConfigurationMediaAttachmentsFromDiscriminatorValue} from './createConfigurationMediaAttachmentsFromDiscriminatorValue';
import {createConfigurationPollsFromDiscriminatorValue} from './createConfigurationPollsFromDiscriminatorValue';
import {createConfigurationStatusesFromDiscriminatorValue} from './createConfigurationStatusesFromDiscriminatorValue';
import {createConfigurationTranslationFromDiscriminatorValue} from './createConfigurationTranslationFromDiscriminatorValue';
import {createConfigurationUrlsFromDiscriminatorValue} from './createConfigurationUrlsFromDiscriminatorValue';
import {ConfigurationAccounts, ConfigurationMediaAttachments, ConfigurationPolls, ConfigurationStatuses, ConfigurationTranslation, ConfigurationUrls} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Configuration implements AdditionalDataHolder, Parsable {
    /** The accounts property */
    private _accounts?: ConfigurationAccounts | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The media_attachments property */
    private _media_attachments?: ConfigurationMediaAttachments | undefined;
    /** The polls property */
    private _polls?: ConfigurationPolls | undefined;
    /** The statuses property */
    private _statuses?: ConfigurationStatuses | undefined;
    /** The translation property */
    private _translation?: ConfigurationTranslation | undefined;
    /** The urls property */
    private _urls?: ConfigurationUrls | undefined;
    /**
     * Gets the accounts property value. The accounts property
     * @returns a ConfigurationAccounts
     */
    public get accounts() {
        return this._accounts;
    };
    /**
     * Sets the accounts property value. The accounts property
     * @param value Value to set for the accounts property.
     */
    public set accounts(value: ConfigurationAccounts | undefined) {
        this._accounts = value;
    };
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
     * Instantiates a new Configuration and sets the default values.
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
            "accounts": n => { this.accounts = n.getObjectValue<ConfigurationAccounts>(createConfigurationAccountsFromDiscriminatorValue); },
            "media_attachments": n => { this.media_attachments = n.getObjectValue<ConfigurationMediaAttachments>(createConfigurationMediaAttachmentsFromDiscriminatorValue); },
            "polls": n => { this.polls = n.getObjectValue<ConfigurationPolls>(createConfigurationPollsFromDiscriminatorValue); },
            "statuses": n => { this.statuses = n.getObjectValue<ConfigurationStatuses>(createConfigurationStatusesFromDiscriminatorValue); },
            "translation": n => { this.translation = n.getObjectValue<ConfigurationTranslation>(createConfigurationTranslationFromDiscriminatorValue); },
            "urls": n => { this.urls = n.getObjectValue<ConfigurationUrls>(createConfigurationUrlsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the media_attachments property value. The media_attachments property
     * @returns a ConfigurationMediaAttachments
     */
    public get media_attachments() {
        return this._media_attachments;
    };
    /**
     * Sets the media_attachments property value. The media_attachments property
     * @param value Value to set for the media_attachments property.
     */
    public set media_attachments(value: ConfigurationMediaAttachments | undefined) {
        this._media_attachments = value;
    };
    /**
     * Gets the polls property value. The polls property
     * @returns a ConfigurationPolls
     */
    public get polls() {
        return this._polls;
    };
    /**
     * Sets the polls property value. The polls property
     * @param value Value to set for the polls property.
     */
    public set polls(value: ConfigurationPolls | undefined) {
        this._polls = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ConfigurationAccounts>("accounts", this.accounts);
        writer.writeObjectValue<ConfigurationMediaAttachments>("media_attachments", this.media_attachments);
        writer.writeObjectValue<ConfigurationPolls>("polls", this.polls);
        writer.writeObjectValue<ConfigurationStatuses>("statuses", this.statuses);
        writer.writeObjectValue<ConfigurationTranslation>("translation", this.translation);
        writer.writeObjectValue<ConfigurationUrls>("urls", this.urls);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the statuses property value. The statuses property
     * @returns a ConfigurationStatuses
     */
    public get statuses() {
        return this._statuses;
    };
    /**
     * Sets the statuses property value. The statuses property
     * @param value Value to set for the statuses property.
     */
    public set statuses(value: ConfigurationStatuses | undefined) {
        this._statuses = value;
    };
    /**
     * Gets the translation property value. The translation property
     * @returns a ConfigurationTranslation
     */
    public get translation() {
        return this._translation;
    };
    /**
     * Sets the translation property value. The translation property
     * @param value Value to set for the translation property.
     */
    public set translation(value: ConfigurationTranslation | undefined) {
        this._translation = value;
    };
    /**
     * Gets the urls property value. The urls property
     * @returns a ConfigurationUrls
     */
    public get urls() {
        return this._urls;
    };
    /**
     * Sets the urls property value. The urls property
     * @param value Value to set for the urls property.
     */
    public set urls(value: ConfigurationUrls | undefined) {
        this._urls = value;
    };
}
