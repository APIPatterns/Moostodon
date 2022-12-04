"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaAttachmentMetaFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createMediaAttachmentMetaFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.MediaAttachmentMeta();
}
exports.createMediaAttachmentMetaFromDiscriminatorValue = createMediaAttachmentMetaFromDiscriminatorValue;
