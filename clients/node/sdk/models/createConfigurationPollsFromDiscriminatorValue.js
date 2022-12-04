"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationPollsFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createConfigurationPollsFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.ConfigurationPolls();
}
exports.createConfigurationPollsFromDiscriminatorValue = createConfigurationPollsFromDiscriminatorValue;
