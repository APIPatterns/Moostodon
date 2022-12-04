"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContextFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createContextFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Context();
}
exports.createContextFromDiscriminatorValue = createContextFromDiscriminatorValue;
