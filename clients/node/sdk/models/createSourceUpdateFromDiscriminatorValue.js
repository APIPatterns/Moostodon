"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSourceUpdateFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createSourceUpdateFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.SourceUpdate();
}
exports.createSourceUpdateFromDiscriminatorValue = createSourceUpdateFromDiscriminatorValue;
