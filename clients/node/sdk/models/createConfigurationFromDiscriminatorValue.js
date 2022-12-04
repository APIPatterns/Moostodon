"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createConfigurationFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Configuration();
}
exports.createConfigurationFromDiscriminatorValue = createConfigurationFromDiscriminatorValue;
