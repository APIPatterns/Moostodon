"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MastodonService_1 = require("./MastodonService");
const service = new MastodonService_1.MoostodonService("https://mastodon.social");
service.getPublicTimeline().then((statuses) => {
    console.log(statuses);
});
