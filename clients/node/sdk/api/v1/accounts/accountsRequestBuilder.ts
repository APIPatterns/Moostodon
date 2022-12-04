import {Account} from '../../../models/';
import {createAccountFromDiscriminatorValue} from '../../../models/createAccountFromDiscriminatorValue';
import {AccountsRequestBuilderPostRequestConfiguration} from './accountsRequestBuilderPostRequestConfiguration';
import {Familiar_followersRequestBuilder} from './familiar_followers/familiar_followersRequestBuilder';
import {LookupRequestBuilder} from './lookup/lookupRequestBuilder';
import {RelationshipsRequestBuilder} from './relationships/relationshipsRequestBuilder';
import {SearchRequestBuilder} from './search/searchRequestBuilder';
import {Update_credentialsRequestBuilder} from './update_credentials/update_credentialsRequestBuilder';
import {Verify_credentialsRequestBuilder} from './verify_credentials/verify_credentialsRequestBuilder';
import {getPathParameters, HttpMethod, Parsable, ParsableFactory, RequestAdapter, RequestInformation, RequestOption, ResponseHandler} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /api/v1/accounts */
export class AccountsRequestBuilder {
    /** The familiar_followers property */
    public get familiar_followers(): Familiar_followersRequestBuilder {
        return new Familiar_followersRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The lookup property */
    public get lookup(): LookupRequestBuilder {
        return new LookupRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The relationships property */
    public get relationships(): RelationshipsRequestBuilder {
        return new RelationshipsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The search property */
    public get search(): SearchRequestBuilder {
        return new SearchRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The update_credentials property */
    public get update_credentials(): Update_credentialsRequestBuilder {
        return new Update_credentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /** The verify_credentials property */
    public get verify_credentials(): Verify_credentialsRequestBuilder {
        return new Verify_credentialsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /**
     * Instantiates a new AccountsRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/accounts";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    public createPostRequestInformation(body: ArrayBuffer | undefined, requestConfiguration?: AccountsRequestBuilderPostRequestConfiguration | undefined) : RequestInformation {
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
    public post(body: ArrayBuffer | undefined, requestConfiguration?: AccountsRequestBuilderPostRequestConfiguration | undefined, responseHandler?: ResponseHandler | undefined) : Promise<Account | undefined> {
        if(!body) throw new Error("body cannot be undefined");
        const requestInfo = this.createPostRequestInformation(
            body, requestConfiguration
        );
        return this.requestAdapter?.sendAsync<Account>(requestInfo, createAccountFromDiscriminatorValue, responseHandler, undefined) ?? Promise.reject(new Error('request adapter is null'));
    };
}
