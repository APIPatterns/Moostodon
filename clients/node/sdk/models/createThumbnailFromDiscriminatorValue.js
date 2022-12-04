"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThumbnailFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createThumbnailFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Thumbnail();
}
exports.createThumbnailFromDiscriminatorValue = createThumbnailFromDiscriminatorValue;
