"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStatusSourceFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createStatusSourceFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.StatusSource();
}
exports.createStatusSourceFromDiscriminatorValue = createStatusSourceFromDiscriminatorValue;
