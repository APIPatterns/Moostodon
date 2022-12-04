"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUnauthorizedErrorFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createUnauthorizedErrorFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.UnauthorizedError();
}
exports.createUnauthorizedErrorFromDiscriminatorValue = createUnauthorizedErrorFromDiscriminatorValue;
