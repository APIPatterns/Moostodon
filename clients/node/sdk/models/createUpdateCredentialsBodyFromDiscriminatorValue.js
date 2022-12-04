"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUpdateCredentialsBodyFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createUpdateCredentialsBodyFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.UpdateCredentialsBody();
}
exports.createUpdateCredentialsBodyFromDiscriminatorValue = createUpdateCredentialsBodyFromDiscriminatorValue;
