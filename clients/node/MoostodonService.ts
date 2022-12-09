import { MoostodonClient } from "./sdk/moostodonClient";
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { AuthenticationProvider, RequestInformation } from "@microsoft/kiota-abstractions";
import { Account } from "./sdk/models/account";
import { Status } from "./sdk/models/status";

// Create Wrapper service around the MoostodonClient
export class MoostodonService {
    private _client: MoostodonClient;

    constructor(baseurl: string) {
        const adapter = new FetchRequestAdapter(new AnonymousAuthProvider());        
        this._client = new MoostodonClient(adapter);
        adapter.baseUrl = baseurl;
        console.log("initialized client with baseurl: " + adapter.baseUrl);
    }

    public get client(): MoostodonClient {
        return this._client;
    }

    // Get a  user's account details from the Moostodon Client
    public async getAccount(accountId: string): Promise<Account| undefined> {
        console.log("getting account");
        return await this._client.api.v1.accountsById(accountId).get();
    }

    // Get the mastodon public timeline
    public async getPublicTimeline(): Promise<Status[] | undefined> {
        return await this._client.api.v1.timelines.public.get();
    }
}

class AnonymousAuthProvider implements AuthenticationProvider {
    async authenticateRequest(request: RequestInformation, additionalAuthenticationContext?: Record<string, unknown>): Promise<void> {
        // do nothing
    }
}
