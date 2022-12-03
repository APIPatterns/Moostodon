import {AccountsRequestBuilder} from './accounts/accountsRequestBuilder';
import {AccountsItemRequestBuilder} from './accounts/item/accountsItemRequestBuilder';
import {AppsRequestBuilder} from './apps/appsRequestBuilder';
import {OauthRequestBuilder} from './oauth/oauthRequestBuilder';
import {TimelinesRequestBuilder} from './timelines/timelinesRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /api/v1 */
export class V1RequestBuilder {
    /** The accounts property */
    public get accounts(): AccountsRequestBuilder {
        return new AccountsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The apps property */
    public get apps(): AppsRequestBuilder {
        return new AppsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The oauth property */
    public get oauth(): OauthRequestBuilder {
        return new OauthRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The timelines property */
    public get timelines(): TimelinesRequestBuilder {
        return new TimelinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Gets an item from the MoostodonSdk.api.v1.accounts.item collection
     * @param id Unique identifier of the item
     * @returns a AccountsItemRequestBuilder
     */
    public accountsById(id: string) : AccountsItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["id"] = id
        return new AccountsItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Instantiates a new V1RequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
