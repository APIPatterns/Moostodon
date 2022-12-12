import {AuthorizeRequestBuilder} from './authorize/authorizeRequestBuilder';
import {RevokeRequestBuilder} from './revoke/revokeRequestBuilder';
import {TokenRequestBuilder} from './token/tokenRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /oauth */
export class OauthRequestBuilder {
    /** The authorize property */
    public get authorize(): AuthorizeRequestBuilder {
        return new AuthorizeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The revoke property */
    public get revoke(): RevokeRequestBuilder {
        return new RevokeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The token property */
    public get token(): TokenRequestBuilder {
        return new TokenRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new OauthRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/oauth";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
