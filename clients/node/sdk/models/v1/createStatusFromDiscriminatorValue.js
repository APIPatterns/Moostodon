"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStatusFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createStatusFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Status();
}
exports.createStatusFromDiscriminatorValue = createStatusFromDiscriminatorValue;
