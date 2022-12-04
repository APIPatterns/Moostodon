"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegistrationsFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createRegistrationsFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.Registrations();
}
exports.createRegistrationsFromDiscriminatorValue = createRegistrationsFromDiscriminatorValue;
