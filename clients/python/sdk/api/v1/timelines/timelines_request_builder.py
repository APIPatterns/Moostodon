from __future__ import annotations
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.request_adapter import RequestAdapter
from typing import Any, Callable, Dict, List, Optional, Union

from .public import public_request_builder
from .tag import tag_request_builder
from .tag.item import with_tag_item_request_builder

class TimelinesRequestBuilder():
    """
    Builds and executes requests for operations under /api/v1/timelines
    """
    def public(self) -> public_request_builder.PublicRequestBuilder:
        """
        The public property
        """
        return public_request_builder.PublicRequestBuilder(self.request_adapter, self.path_parameters)
    
    def tag(self) -> tag_request_builder.TagRequestBuilder:
        """
        The tag property
        """
        return tag_request_builder.TagRequestBuilder(self.request_adapter, self.path_parameters)
    
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new TimelinesRequestBuilder and sets the default values.
        Args:
            pathParameters: The raw url or the Url template parameters for the request.
            requestAdapter: The request adapter to use to execute the requests.
        """
        if path_parameters is None:
            raise Exception("path_parameters cannot be undefined")
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}/api/v1/timelines"

        url_tpl_params = get_path_parameters(path_parameters)
        self.path_parameters = url_tpl_params
        self.request_adapter = request_adapter
    
    def tag_by_id(self,id: str) -> with_tag_item_request_builder.WithTagItemRequestBuilder:
        """
        Gets an item from the moostodonSdk.api.v1.timelines.tag.item collection
        Args:
            id: Unique identifier of the item
        Returns: with_tag_item_request_builder.WithTagItemRequestBuilder
        """
        if id is None:
            raise Exception("id cannot be undefined")
        url_tpl_params = get_path_parameters(self.path_parameters)
        url_tpl_params["tag"] = id
        return with_tag_item_request_builder.WithTagItemRequestBuilder(self.request_adapter, url_tpl_params)
    

