import {V1RequestBuilder} from './v1/v1RequestBuilder';
import {V2RequestBuilder} from './v2/v2RequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /api */
export class ApiRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** The v1 property */
    public get v1(): V1RequestBuilder {
        return new V1RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The v2 property */
    public get v2(): V2RequestBuilder {
        return new V2RequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new ApiRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
}
