"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usage = void 0;
const createFederationUsageFromDiscriminatorValue_1 = require("./createFederationUsageFromDiscriminatorValue");
const createUserUsageFromDiscriminatorValue_1 = require("./createUserUsageFromDiscriminatorValue");
class Usage {
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
     * Instantiates a new Usage and sets the default values.
     */
    constructor() {
        this._additionalData = {};
    }
    ;
    /**
     * Gets the federation property value. The federation property
     * @returns a FederationUsage
     */
    get federation() {
        return this._federation;
    }
    ;
    /**
     * Sets the federation property value. The federation property
     * @param value Value to set for the federation property.
     */
    set federation(value) {
        this._federation = value;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return {
            "federation": n => { this.federation = n.getObjectValue(createFederationUsageFromDiscriminatorValue_1.createFederationUsageFromDiscriminatorValue); },
            "local_posts": n => { this.local_posts = n.getNumberValue(); },
            "users": n => { this.users = n.getObjectValue(createUserUsageFromDiscriminatorValue_1.createUserUsageFromDiscriminatorValue); },
        };
    }
    ;
    /**
     * Gets the local_posts property value. The local_posts property
     * @returns a int64
     */
    get local_posts() {
        return this._local_posts;
    }
    ;
    /**
     * Sets the local_posts property value. The local_posts property
     * @param value Value to set for the local_posts property.
     */
    set local_posts(value) {
        this._local_posts = value;
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        writer.writeObjectValue("federation", this.federation);
        writer.writeNumberValue("local_posts", this.local_posts);
        writer.writeObjectValue("users", this.users);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Gets the users property value. The users property
     * @returns a UserUsage
     */
    get users() {
        return this._users;
    }
    ;
    /**
     * Sets the users property value. The users property
     * @param value Value to set for the users property.
     */
    set users(value) {
        this._users = value;
    }
    ;
}
exports.Usage = Usage;
