"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStatusEditFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createStatusEditFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.StatusEdit();
}
exports.createStatusEditFromDiscriminatorValue = createStatusEditFromDiscriminatorValue;
