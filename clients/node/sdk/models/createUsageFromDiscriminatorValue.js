"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsageFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createUsageFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Usage();
}
exports.createUsageFromDiscriminatorValue = createUsageFromDiscriminatorValue;
