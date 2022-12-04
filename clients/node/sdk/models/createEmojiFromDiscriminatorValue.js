"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmojiFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createEmojiFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Emoji();
}
exports.createEmojiFromDiscriminatorValue = createEmojiFromDiscriminatorValue;
