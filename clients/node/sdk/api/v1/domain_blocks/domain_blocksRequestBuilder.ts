import {UnprocessableContentError} from '../../../models/';
import {createUnprocessableContentErrorFromDiscriminatorValue} from '../../../models/createUnprocessableContentErrorFromDiscriminatorValue';
import {Domain_blocksRequestBuilderDeleteRequestConfiguration} from './domain_blocksRequestBuilderDeleteRequestConfiguration';
import {Domain_blocksRequestBuilderGetRequestConfiguration} from './domain_blocksRequestBuilderGetRequestConfiguration';
import {Domain_blocksRequestBuilderPostRequestConfiguration} from './domain_blocksRequestBuilderPostRequestConfiguration';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /api/v1/domain_blocks */
export class Domain_blocksRequestBuilder {
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new Domain_blocksRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/domain_blocks{?max_Id*,sinceId*,min_Id*,limit*,domain*}";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    public createDeleteRequestInformation(requestConfiguration?: Domain_blocksRequestBuilderDeleteRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.DELETE;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    public createGetRequestInformation(requestConfiguration?: Domain_blocksRequestBuilderGetRequestConfiguration | undefined) : RequestInformation {
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.GET;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.setQueryStringParametersFromRawObject(requestConfiguration.queryParameters);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        return requestInfo;
    };
    public createPostRequestInformation(body: ArrayBuffer | undefined, requestConfiguration?: Domain_blocksRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = new RequestInformation();
        requestInfo.urlTemplate = this.urlTemplate;
        requestInfo.pathParameters = this.pathParameters;
        requestInfo.httpMethod = HttpMethod.POST;
        requestInfo.headers["Accept"] = "application/json";
        if (requestConfiguration) {
            requestInfo.addRequestHeaders(requestConfiguration.headers);
            requestInfo.addRequestOptions(requestConfiguration.options);
        }
        requestInfo.setStreamContent(body);
        return requestInfo;
    };
    public delete(requestConfiguration?: Domain_blocksRequestBuilderDeleteRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<string | undefined> {
        const requestInfo = this.createDeleteRequestInformation(
            requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "422": createUnprocessableContentErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendPrimitiveAsync<string>(requestInfo, "string", responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
    public get(requestConfiguration?: Domain_blocksRequestBuilderGetRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<string[] | undefined> {
        const requestInfo = this.createGetRequestInformation(
            requestConfiguration
        );
        return this.requestAdapter?.sendCollectionOfPrimitiveAsync<string>(requestInfo, "string", responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
    public post(body: ArrayBuffer | undefined, requestConfiguration?: Domain_blocksRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<string | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        const errorMapping: Record<string, ParsableFactory<Parsable>> = {
            "422": createUnprocessableContentErrorFromDiscriminatorValue,
        };
        return this.requestAdapter?.sendPrimitiveAsync<string>(requestInfo, "string", responseHandler, errorMapping) ?? Promise.reject(new Error('request adapter is null'));
    };
}
