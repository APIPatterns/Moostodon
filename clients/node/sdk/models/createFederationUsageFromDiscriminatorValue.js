"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFederationUsageFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createFederationUsageFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.FederationUsage();
}
exports.createFederationUsageFromDiscriminatorValue = createFederationUsageFromDiscriminatorValue;
