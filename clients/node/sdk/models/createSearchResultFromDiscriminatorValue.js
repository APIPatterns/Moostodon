"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSearchResultFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createSearchResultFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.SearchResult();
}
exports.createSearchResultFromDiscriminatorValue = createSearchResultFromDiscriminatorValue;
