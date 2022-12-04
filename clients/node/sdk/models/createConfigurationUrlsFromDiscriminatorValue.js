"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationUrlsFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createConfigurationUrlsFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.ConfigurationUrls();
}
exports.createConfigurationUrlsFromDiscriminatorValue = createConfigurationUrlsFromDiscriminatorValue;
