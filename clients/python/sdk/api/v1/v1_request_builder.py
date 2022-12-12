from __future__ import annotations
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.request_adapter import RequestAdapter
from typing import Any, Callable, Dict, List, Optional, Union

from .accounts import accounts_request_builder
from .accounts.item import accounts_item_request_builder
from .apps import apps_request_builder
from .blocks import blocks_request_builder
from .bookmarks import bookmarks_request_builder
from .domain_blocks import domain_blocks_request_builder
from .endorsements import endorsements_request_builder
from .favourites import favourites_request_builder
from .instance import instance_request_builder
from .mutes import mutes_request_builder
from .statuses import statuses_request_builder
from .statuses.item import statuses_item_request_builder
from .timelines import timelines_request_builder

class V1RequestBuilder():
    """
    Builds and executes requests for operations under /api/v1
    """
    def accounts(self) -> accounts_request_builder.AccountsRequestBuilder:
        """
        The accounts property
        """
        return accounts_request_builder.AccountsRequestBuilder(self.request_adapter, self.path_parameters)
    
    def apps(self) -> apps_request_builder.AppsRequestBuilder:
        """
        The apps property
        """
        return apps_request_builder.AppsRequestBuilder(self.request_adapter, self.path_parameters)
    
    def blocks(self) -> blocks_request_builder.BlocksRequestBuilder:
        """
        The blocks property
        """
        return blocks_request_builder.BlocksRequestBuilder(self.request_adapter, self.path_parameters)
    
    def bookmarks(self) -> bookmarks_request_builder.BookmarksRequestBuilder:
        """
        The bookmarks property
        """
        return bookmarks_request_builder.BookmarksRequestBuilder(self.request_adapter, self.path_parameters)
    
    def domain_blocks(self) -> domain_blocks_request_builder.Domain_blocksRequestBuilder:
        """
        The domain_blocks property
        """
        return domain_blocks_request_builder.Domain_blocksRequestBuilder(self.request_adapter, self.path_parameters)
    
    def endorsements(self) -> endorsements_request_builder.EndorsementsRequestBuilder:
        """
        The endorsements property
        """
        return endorsements_request_builder.EndorsementsRequestBuilder(self.request_adapter, self.path_parameters)
    
    def favourites(self) -> favourites_request_builder.FavouritesRequestBuilder:
        """
        The favourites property
        """
        return favourites_request_builder.FavouritesRequestBuilder(self.request_adapter, self.path_parameters)
    
    def instance(self) -> instance_request_builder.InstanceRequestBuilder:
        """
        The instance property
        """
        return instance_request_builder.InstanceRequestBuilder(self.request_adapter, self.path_parameters)
    
    def mutes(self) -> mutes_request_builder.MutesRequestBuilder:
        """
        The mutes property
        """
        return mutes_request_builder.MutesRequestBuilder(self.request_adapter, self.path_parameters)
    
    def statuses(self) -> statuses_request_builder.StatusesRequestBuilder:
        """
        The statuses property
        """
        return statuses_request_builder.StatusesRequestBuilder(self.request_adapter, self.path_parameters)
    
    def timelines(self) -> timelines_request_builder.TimelinesRequestBuilder:
        """
        The timelines property
        """
        return timelines_request_builder.TimelinesRequestBuilder(self.request_adapter, self.path_parameters)
    
    def accounts_by_id(self,id: str) -> accounts_item_request_builder.AccountsItemRequestBuilder:
        """
        Gets an item from the MastodonClientLib.api.v1.accounts.item collection
        Args:
            id: Unique identifier of the item
        Returns: accounts_item_request_builder.AccountsItemRequestBuilder
        """
        if id is None:
            raise Exception("id cannot be undefined")
        url_tpl_params = get_path_parameters(self.path_parameters)
        url_tpl_params["id"] = id
        return accounts_item_request_builder.AccountsItemRequestBuilder(self.request_adapter, url_tpl_params)
    
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new V1RequestBuilder and sets the default values.
        Args:
            pathParameters: The raw url or the Url template parameters for the request.
            requestAdapter: The request adapter to use to execute the requests.
        """
        if path_parameters is None:
            raise Exception("path_parameters cannot be undefined")
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}/api/v1"

        url_tpl_params = get_path_parameters(path_parameters)
        self.path_parameters = url_tpl_params
        self.request_adapter = request_adapter
    
    def statuses_by_id(self,id: str) -> statuses_item_request_builder.StatusesItemRequestBuilder:
        """
        Gets an item from the MastodonClientLib.api.v1.statuses.item collection
        Args:
            id: Unique identifier of the item
        Returns: statuses_item_request_builder.StatusesItemRequestBuilder
        """
        if id is None:
            raise Exception("id cannot be undefined")
        url_tpl_params = get_path_parameters(self.path_parameters)
        url_tpl_params["id"] = id
        return statuses_item_request_builder.StatusesItemRequestBuilder(self.request_adapter, url_tpl_params)
    

