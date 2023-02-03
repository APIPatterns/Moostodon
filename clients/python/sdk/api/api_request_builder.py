from __future__ import annotations
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.request_adapter import RequestAdapter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

v1_request_builder = lazy_import('mastodon_client_lib.api.v1.v1_request_builder')
v2_request_builder = lazy_import('mastodon_client_lib.api.v2.v2_request_builder')

class ApiRequestBuilder():
    """
    Builds and executes requests for operations under /api
    """
    @property
    def v1(self) -> v1_request_builder.V1RequestBuilder:
        """
        The v1 property
        """
        return v1_request_builder.V1RequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def v2(self) -> v2_request_builder.V2RequestBuilder:
        """
        The v2 property
        """
        return v2_request_builder.V2RequestBuilder(self.request_adapter, self.path_parameters)
    
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new ApiRequestBuilder and sets the default values.
        Args:
            pathParameters: The raw url or the Url template parameters for the request.
            requestAdapter: The request adapter to use to execute the requests.
        """
        if path_parameters is None:
            raise Exception("path_parameters cannot be undefined")
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}/api"

        url_tpl_params = get_path_parameters(path_parameters)
        self.path_parameters = url_tpl_params
        self.request_adapter = request_adapter
    

