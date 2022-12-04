"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMuteBodyFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createMuteBodyFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.MuteBody();
}
exports.createMuteBodyFromDiscriminatorValue = createMuteBodyFromDiscriminatorValue;
