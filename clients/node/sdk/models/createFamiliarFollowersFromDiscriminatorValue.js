"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFamiliarFollowersFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createFamiliarFollowersFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.FamiliarFollowers();
}
exports.createFamiliarFollowersFromDiscriminatorValue = createFamiliarFollowersFromDiscriminatorValue;
