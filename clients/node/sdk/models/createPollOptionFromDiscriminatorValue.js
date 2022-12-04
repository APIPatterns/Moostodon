"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPollOptionFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createPollOptionFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.PollOption();
}
exports.createPollOptionFromDiscriminatorValue = createPollOptionFromDiscriminatorValue;
