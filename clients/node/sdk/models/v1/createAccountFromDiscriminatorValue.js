"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createAccountFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Account();
}
exports.createAccountFromDiscriminatorValue = createAccountFromDiscriminatorValue;
