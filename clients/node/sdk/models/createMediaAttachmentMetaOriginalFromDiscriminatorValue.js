"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaAttachmentMetaOriginalFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createMediaAttachmentMetaOriginalFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.MediaAttachmentMetaOriginal();
}
exports.createMediaAttachmentMetaOriginalFromDiscriminatorValue = createMediaAttachmentMetaOriginalFromDiscriminatorValue;
