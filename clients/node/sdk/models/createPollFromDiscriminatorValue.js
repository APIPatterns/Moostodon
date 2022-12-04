"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPollFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createPollFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Poll();
}
exports.createPollFromDiscriminatorValue = createPollFromDiscriminatorValue;
