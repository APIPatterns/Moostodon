"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRuleFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createRuleFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Rule();
}
exports.createRuleFromDiscriminatorValue = createRuleFromDiscriminatorValue;
