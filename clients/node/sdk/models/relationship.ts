import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Relationship implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The blocked_by property */
    private _blocked_by?: boolean | undefined;
    /** The blocking property */
    private _blocking?: boolean | undefined;
    /** The domain_blocking property */
    private _domain_blocking?: boolean | undefined;
    /** The endorsed property */
    private _endorsed?: boolean | undefined;
    /** The followed_by property */
    private _followed_by?: boolean | undefined;
    /** The following property */
    private _following?: boolean | undefined;
    /** The id property */
    private _id?: string | undefined;
    /** The languages property */
    private _languages?: string[] | undefined;
    /** The muting property */
    private _muting?: boolean | undefined;
    /** The muting_notifications property */
    private _muting_notifications?: boolean | undefined;
    /** The note property */
    private _note?: string | undefined;
    /** The notifying property */
    private _notifying?: boolean | undefined;
    /** The requested property */
    private _requested?: boolean | undefined;
    /** The showing_reblogs property */
    private _showing_reblogs?: boolean | undefined;
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
     * Gets the blocked_by property value. The blocked_by property
     * @returns a boolean
     */
    public get blocked_by() {
        return this._blocked_by;
    };
    /**
     * Sets the blocked_by property value. The blocked_by property
     * @param value Value to set for the blocked_by property.
     */
    public set blocked_by(value: boolean | undefined) {
        this._blocked_by = value;
    };
    /**
     * Gets the blocking property value. The blocking property
     * @returns a boolean
     */
    public get blocking() {
        return this._blocking;
    };
    /**
     * Sets the blocking property value. The blocking property
     * @param value Value to set for the blocking property.
     */
    public set blocking(value: boolean | undefined) {
        this._blocking = value;
    };
    /**
     * Instantiates a new Relationship and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the domain_blocking property value. The domain_blocking property
     * @returns a boolean
     */
    public get domain_blocking() {
        return this._domain_blocking;
    };
    /**
     * Sets the domain_blocking property value. The domain_blocking property
     * @param value Value to set for the domain_blocking property.
     */
    public set domain_blocking(value: boolean | undefined) {
        this._domain_blocking = value;
    };
    /**
     * Gets the endorsed property value. The endorsed property
     * @returns a boolean
     */
    public get endorsed() {
        return this._endorsed;
    };
    /**
     * Sets the endorsed property value. The endorsed property
     * @param value Value to set for the endorsed property.
     */
    public set endorsed(value: boolean | undefined) {
        this._endorsed = value;
    };
    /**
     * Gets the followed_by property value. The followed_by property
     * @returns a boolean
     */
    public get followed_by() {
        return this._followed_by;
    };
    /**
     * Sets the followed_by property value. The followed_by property
     * @param value Value to set for the followed_by property.
     */
    public set followed_by(value: boolean | undefined) {
        this._followed_by = value;
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
            "blocked_by": n => { this.blocked_by = n.getBooleanValue(); },
            "blocking": n => { this.blocking = n.getBooleanValue(); },
            "domain_blocking": n => { this.domain_blocking = n.getBooleanValue(); },
            "endorsed": n => { this.endorsed = n.getBooleanValue(); },
            "followed_by": n => { this.followed_by = n.getBooleanValue(); },
            "following": n => { this.following = n.getBooleanValue(); },
            "id": n => { this.id = n.getStringValue(); },
            "languages": n => { this.languages = n.getCollectionOfPrimitiveValues<string>(); },
            "muting": n => { this.muting = n.getBooleanValue(); },
            "muting_notifications": n => { this.muting_notifications = n.getBooleanValue(); },
            "note": n => { this.note = n.getStringValue(); },
            "notifying": n => { this.notifying = n.getBooleanValue(); },
            "requested": n => { this.requested = n.getBooleanValue(); },
            "showing_reblogs": n => { this.showing_reblogs = n.getBooleanValue(); },
        };
    };
    /**
     * Gets the id property value. The id property
     * @returns a string
     */
    public get id() {
        return this._id;
    };
    /**
     * Sets the id property value. The id property
     * @param value Value to set for the id property.
     */
    public set id(value: string | undefined) {
        this._id = value;
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
     * Gets the muting property value. The muting property
     * @returns a boolean
     */
    public get muting() {
        return this._muting;
    };
    /**
     * Sets the muting property value. The muting property
     * @param value Value to set for the muting property.
     */
    public set muting(value: boolean | undefined) {
        this._muting = value;
    };
    /**
     * Gets the muting_notifications property value. The muting_notifications property
     * @returns a boolean
     */
    public get muting_notifications() {
        return this._muting_notifications;
    };
    /**
     * Sets the muting_notifications property value. The muting_notifications property
     * @param value Value to set for the muting_notifications property.
     */
    public set muting_notifications(value: boolean | undefined) {
        this._muting_notifications = value;
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
     * Gets the notifying property value. The notifying property
     * @returns a boolean
     */
    public get notifying() {
        return this._notifying;
    };
    /**
     * Sets the notifying property value. The notifying property
     * @param value Value to set for the notifying property.
     */
    public set notifying(value: boolean | undefined) {
        this._notifying = value;
    };
    /**
     * Gets the requested property value. The requested property
     * @returns a boolean
     */
    public get requested() {
        return this._requested;
    };
    /**
     * Sets the requested property value. The requested property
     * @param value Value to set for the requested property.
     */
    public set requested(value: boolean | undefined) {
        this._requested = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeBooleanValue("blocked_by", this.blocked_by);
        writer.writeBooleanValue("blocking", this.blocking);
        writer.writeBooleanValue("domain_blocking", this.domain_blocking);
        writer.writeBooleanValue("endorsed", this.endorsed);
        writer.writeBooleanValue("followed_by", this.followed_by);
        writer.writeBooleanValue("following", this.following);
        writer.writeStringValue("id", this.id);
        writer.writeCollectionOfPrimitiveValues<string>("languages", this.languages);
        writer.writeBooleanValue("muting", this.muting);
        writer.writeBooleanValue("muting_notifications", this.muting_notifications);
        writer.writeStringValue("note", this.note);
        writer.writeBooleanValue("notifying", this.notifying);
        writer.writeBooleanValue("requested", this.requested);
        writer.writeBooleanValue("showing_reblogs", this.showing_reblogs);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the showing_reblogs property value. The showing_reblogs property
     * @returns a boolean
     */
    public get showing_reblogs() {
        return this._showing_reblogs;
    };
    /**
     * Sets the showing_reblogs property value. The showing_reblogs property
     * @param value Value to set for the showing_reblogs property.
     */
    public set showing_reblogs(value: boolean | undefined) {
        this._showing_reblogs = value;
    };
}
