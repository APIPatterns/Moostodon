"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MoostodonService_1 = require("./MoostodonService");
const service = new MoostodonService_1.MoostodonService("https://mastodon.social");
//Get Account by id
service.getAccount("108192895578262114").then((account) => {
    console.log(account === null || account === void 0 ? void 0 : account.username);
});
