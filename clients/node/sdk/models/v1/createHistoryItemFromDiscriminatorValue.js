"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHistoryItemFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createHistoryItemFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.HistoryItem();
}
exports.createHistoryItemFromDiscriminatorValue = createHistoryItemFromDiscriminatorValue;
