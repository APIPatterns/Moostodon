import {HomeRequestBuilder} from './home/homeRequestBuilder';
import {ListItemRequestBuilder} from './list/item/listItemRequestBuilder';
import {ListRequestBuilder} from './list/listRequestBuilder';
import {PublicRequestBuilder} from './public/publicRequestBuilder';
import {WithTagItemRequestBuilder} from './tag/item/withTagItemRequestBuilder';
import {TagRequestBuilder} from './tag/tagRequestBuilder';
import {getPathParameters, RequestAdapter} from '@microsoft/kiota-abstractions';

/** Builds and executes requests for operations under /api/v1/timelines */
export class TimelinesRequestBuilder {
    /** The home property */
    public get home(): HomeRequestBuilder {
        return new HomeRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The list property */
    public get list(): ListRequestBuilder {
        return new ListRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The public property */
    public get public(): PublicRequestBuilder {
        return new PublicRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The tag property */
    public get tag(): TagRequestBuilder {
        return new TagRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Instantiates a new TimelinesRequestBuilder and sets the default values.
     * @param pathParameters The raw url or the Url template parameters for the request.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public constructor(pathParameters: Record<string, unknown> | string | undefined, requestAdapter: RequestAdapter) {
        if(!pathParameters) throw new Error("pathParameters cannot be undefined");
        if(!requestAdapter) throw new Error("requestAdapter cannot be undefined");
        this.urlTemplate = "{+baseurl}/api/v1/timelines";
        const urlTplParams = getPathParameters(pathParameters);
        this.pathParameters = urlTplParams;
        this.requestAdapter = requestAdapter;
    };
    /**
     * Gets an item from the NotUsedButRequired.api.v1.timelines.list.item collection
     * @param id Unique identifier of the item
     * @returns a ListItemRequestBuilder
     */
    public listById(id: string) : ListItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["id"] = id
        return new ListItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
    /**
     * Gets an item from the NotUsedButRequired.api.v1.timelines.tag.item collection
     * @param id Unique identifier of the item
     * @returns a WithTagItemRequestBuilder
     */
    public tagById(id: string) : WithTagItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["tag"] = id
        return new WithTagItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
