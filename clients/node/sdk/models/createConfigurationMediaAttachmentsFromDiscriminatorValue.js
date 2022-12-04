"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationMediaAttachmentsFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createConfigurationMediaAttachmentsFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.ConfigurationMediaAttachments();
}
exports.createConfigurationMediaAttachmentsFromDiscriminatorValue = createConfigurationMediaAttachmentsFromDiscriminatorValue;
