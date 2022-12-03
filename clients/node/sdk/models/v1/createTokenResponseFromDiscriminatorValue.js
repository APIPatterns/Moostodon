"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTokenResponseFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createTokenResponseFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.TokenResponse();
}
exports.createTokenResponseFromDiscriminatorValue = createTokenResponseFromDiscriminatorValue;
