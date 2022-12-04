"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaAttachmentFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createMediaAttachmentFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.MediaAttachment();
}
exports.createMediaAttachmentFromDiscriminatorValue = createMediaAttachmentFromDiscriminatorValue;
