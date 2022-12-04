"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createContactFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Contact();
}
exports.createContactFromDiscriminatorValue = createContactFromDiscriminatorValue;
