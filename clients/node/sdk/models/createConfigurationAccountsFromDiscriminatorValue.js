"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationAccountsFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createConfigurationAccountsFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.ConfigurationAccounts();
}
exports.createConfigurationAccountsFromDiscriminatorValue = createConfigurationAccountsFromDiscriminatorValue;
