"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoostodonService = void 0;
const mastodonClient_1 = require("./sdk/mastodonClient");
const kiota_http_fetchlibrary_1 = require("@microsoft/kiota-http-fetchlibrary");
// Create Wrapper service around the MoostodonClient
class MoostodonService {
    constructor(baseurl) {
        const adapter = new kiota_http_fetchlibrary_1.FetchRequestAdapter(new AnonymousAuthProvider());
        this._client = new mastodonClient_1.MastodonClient(adapter);
        adapter.baseUrl = baseurl;
        console.log("initialized client with baseurl: " + adapter.baseUrl);
    }
    get client() {
        return this._client;
    }
    // Get a  user's account details from the Moostodon Client
    getAccount(accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("getting account");
            return yield this._client.api.v1.accountsById(accountId).get();
        });
    }
    // Get the mastodon public timeline
    getPublicTimeline() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._client.api.v1.timelines.public.get();
        });
    }
}
exports.MoostodonService = MoostodonService;
class AnonymousAuthProvider {
    authenticateRequest(request, additionalAuthenticationContext) {
        return __awaiter(this, void 0, void 0, function* () {
            // do nothing
        });
    }
}
