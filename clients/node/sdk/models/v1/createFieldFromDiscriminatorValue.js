"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFieldFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createFieldFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Field();
}
exports.createFieldFromDiscriminatorValue = createFieldFromDiscriminatorValue;
