"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourceFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createSourceFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Source();
}
exports.createSourceFromDiscriminatorValue = createSourceFromDiscriminatorValue;
