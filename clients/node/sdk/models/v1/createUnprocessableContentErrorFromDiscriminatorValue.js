"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUnprocessableContentErrorFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createUnprocessableContentErrorFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.UnprocessableContentError();
}
exports.createUnprocessableContentErrorFromDiscriminatorValue = createUnprocessableContentErrorFromDiscriminatorValue;
