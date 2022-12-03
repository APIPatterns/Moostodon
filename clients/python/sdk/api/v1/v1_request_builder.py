from __future__ import annotations
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.request_adapter import RequestAdapter
from typing import Any, Callable, Dict, List, Optional, Union

from .accounts import accounts_request_builder
from .accounts.item import accounts_item_request_builder
from .apps import apps_request_builder
from .oauth import oauth_request_builder
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
    
    def oauth(self) -> oauth_request_builder.OauthRequestBuilder:
        """
        The oauth property
        """
        return oauth_request_builder.OauthRequestBuilder(self.request_adapter, self.path_parameters)
    
    def timelines(self) -> timelines_request_builder.TimelinesRequestBuilder:
        """
        The timelines property
        """
        return timelines_request_builder.TimelinesRequestBuilder(self.request_adapter, self.path_parameters)
    
    def accounts_by_id(self,id: str) -> accounts_item_request_builder.AccountsItemRequestBuilder:
        """
        Gets an item from the moostodonSdk.api.v1.accounts.item collection
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
    

