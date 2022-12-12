import {AccountsRequestBuilder} from './accounts/accountsRequestBuilder';
import {AccountsItemRequestBuilder} from './accounts/item/accountsItemRequestBuilder';
import {AppsRequestBuilder} from './apps/appsRequestBuilder';
import {BlocksRequestBuilder} from './blocks/blocksRequestBuilder';
import {BookmarksRequestBuilder} from './bookmarks/bookmarksRequestBuilder';
import {Domain_blocksRequestBuilder} from './domain_blocks/domain_blocksRequestBuilder';
import {EndorsementsRequestBuilder} from './endorsements/endorsementsRequestBuilder';
import {FavouritesRequestBuilder} from './favourites/favouritesRequestBuilder';
import {InstanceRequestBuilder} from './instance/instanceRequestBuilder';
import {MutesRequestBuilder} from './mutes/mutesRequestBuilder';
import {StatusesItemRequestBuilder} from './statuses/item/statusesItemRequestBuilder';
import {StatusesRequestBuilder} from './statuses/statusesRequestBuilder';
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
    /** The blocks property */
    public get blocks(): BlocksRequestBuilder {
        return new BlocksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The bookmarks property */
    public get bookmarks(): BookmarksRequestBuilder {
        return new BookmarksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The domain_blocks property */
    public get domain_blocks(): Domain_blocksRequestBuilder {
        return new Domain_blocksRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The endorsements property */
    public get endorsements(): EndorsementsRequestBuilder {
        return new EndorsementsRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The favourites property */
    public get favourites(): FavouritesRequestBuilder {
        return new FavouritesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The instance property */
    public get instance(): InstanceRequestBuilder {
        return new InstanceRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The mutes property */
    public get mutes(): MutesRequestBuilder {
        return new MutesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Path parameters for the request */
    private pathParameters: Record<string, unknown>;
    /** The request adapter to use to execute the requests. */
    private requestAdapter: RequestAdapter;
    /** The statuses property */
    public get statuses(): StatusesRequestBuilder {
        return new StatusesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** The timelines property */
    public get timelines(): TimelinesRequestBuilder {
        return new TimelinesRequestBuilder(this.pathParameters, this.requestAdapter);
    }
    /** Url template to use to build the URL for the current request builder */
    private urlTemplate: string;
    /**
     * Gets an item from the NotUsedButRequired.api.v1.accounts.item collection
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
    /**
     * Gets an item from the NotUsedButRequired.api.v1.statuses.item collection
     * @param id Unique identifier of the item
     * @returns a StatusesItemRequestBuilder
     */
    public statusesById(id: string) : StatusesItemRequestBuilder {
        if(!id) throw new Error("id cannot be undefined");
        const urlTplParams = getPathParameters(this.pathParameters);
        urlTplParams["id"] = id
        return new StatusesItemRequestBuilder(urlTplParams, this.requestAdapter);
    };
}
