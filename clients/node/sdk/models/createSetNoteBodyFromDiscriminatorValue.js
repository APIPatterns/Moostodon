"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSetNoteBodyFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createSetNoteBodyFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.SetNoteBody();
}
exports.createSetNoteBodyFromDiscriminatorValue = createSetNoteBodyFromDiscriminatorValue;
