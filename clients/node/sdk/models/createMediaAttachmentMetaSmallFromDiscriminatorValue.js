"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMediaAttachmentMetaSmallFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createMediaAttachmentMetaSmallFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.MediaAttachmentMetaSmall();
}
exports.createMediaAttachmentMetaSmallFromDiscriminatorValue = createMediaAttachmentMetaSmallFromDiscriminatorValue;
