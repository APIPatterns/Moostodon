"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMentionFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createMentionFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Mention();
}
exports.createMentionFromDiscriminatorValue = createMentionFromDiscriminatorValue;
