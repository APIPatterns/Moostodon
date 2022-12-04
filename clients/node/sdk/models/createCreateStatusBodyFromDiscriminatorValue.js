"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCreateStatusBodyFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createCreateStatusBodyFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.CreateStatusBody();
}
exports.createCreateStatusBodyFromDiscriminatorValue = createCreateStatusBodyFromDiscriminatorValue;
