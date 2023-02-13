"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccountUpdateFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createAccountUpdateFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.AccountUpdate();
}
exports.createAccountUpdateFromDiscriminatorValue = createAccountUpdateFromDiscriminatorValue;
