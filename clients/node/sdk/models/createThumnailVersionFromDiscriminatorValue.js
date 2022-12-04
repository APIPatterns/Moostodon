"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThumnailVersionFromDiscriminatorValue = void 0;
const index_1 = require("./index");
function createThumnailVersionFromDiscriminatorValue(parseNode) {
    if (!parseNode)
        throw new Error("parseNode cannot be undefined");
    return new index_1.ThumnailVersion();
}
exports.createThumnailVersionFromDiscriminatorValue = createThumnailVersionFromDiscriminatorValue;
