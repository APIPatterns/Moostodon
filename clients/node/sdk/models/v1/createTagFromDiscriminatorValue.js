"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTagFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createTagFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Tag();
}
exports.createTagFromDiscriminatorValue = createTagFromDiscriminatorValue;
