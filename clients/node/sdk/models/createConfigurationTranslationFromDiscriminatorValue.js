"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfigurationTranslationFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createConfigurationTranslationFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.ConfigurationTranslation();
}
exports.createConfigurationTranslationFromDiscriminatorValue = createConfigurationTranslationFromDiscriminatorValue;
