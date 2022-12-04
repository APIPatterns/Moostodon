from __future__ import annotations
from dataclasses import dataclass
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.method import Method
from kiota_abstractions.request_adapter import RequestAdapter
from kiota_abstractions.request_information import RequestInformation
from kiota_abstractions.request_option import RequestOption
from kiota_abstractions.response_handler import ResponseHandler
from kiota_abstractions.serialization import Parsable, ParsableFactory
from typing import Any, Callable, Dict, List, Optional, Union

from ....models import account
from .familiar_followers import familiar_followers_request_builder
from .lookup import lookup_request_builder
from .relationships import relationships_request_builder
from .search import search_request_builder
from .update_credentials import update_credentials_request_builder
from .verify_credentials import verify_credentials_request_builder

class AccountsRequestBuilder():
    """
    Builds and executes requests for operations under /api/v1/accounts
    """
    def familiar_followers(self) -> familiar_followers_request_builder.Familiar_followersRequestBuilder:
        """
        The familiar_followers property
        """
        return familiar_followers_request_builder.Familiar_followersRequestBuilder(self.request_adapter, self.path_parameters)
    
    def lookup(self) -> lookup_request_builder.LookupRequestBuilder:
        """
        The lookup property
        """
        return lookup_request_builder.LookupRequestBuilder(self.request_adapter, self.path_parameters)
    
    def relationships(self) -> relationships_request_builder.RelationshipsRequestBuilder:
        """
        The relationships property
        """
        return relationships_request_builder.RelationshipsRequestBuilder(self.request_adapter, self.path_parameters)
    
    def search(self) -> search_request_builder.SearchRequestBuilder:
        """
        The search property
        """
        return search_request_builder.SearchRequestBuilder(self.request_adapter, self.path_parameters)
    
    def update_credentials(self) -> update_credentials_request_builder.Update_credentialsRequestBuilder:
        """
        The update_credentials property
        """
        return update_credentials_request_builder.Update_credentialsRequestBuilder(self.request_adapter, self.path_parameters)
    
    def verify_credentials(self) -> verify_credentials_request_builder.Verify_credentialsRequestBuilder:
        """
        The verify_credentials property
        """
        return verify_credentials_request_builder.Verify_credentialsRequestBuilder(self.request_adapter, self.path_parameters)
    
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new AccountsRequestBuilder and sets the default values.
        Args:
            pathParameters: The raw url or the Url template parameters for the request.
            requestAdapter: The request adapter to use to execute the requests.
        """
        if path_parameters is None:
            raise Exception("path_parameters cannot be undefined")
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}/api/v1/accounts"

        url_tpl_params = get_path_parameters(path_parameters)
        self.path_parameters = url_tpl_params
        self.request_adapter = request_adapter
    
    def create_post_request_information(self,body: bytes, request_configuration: Optional[AccountsRequestBuilderPostRequestConfiguration] = None) -> RequestInformation:
        if body is None:
            raise Exception("body cannot be undefined")
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.POST
        request_info.headers["Accept"] = "application/json"
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        request_info.set_stream_content(body)
        return request_info
    
    async def post(self,body: bytes, request_configuration: Optional[AccountsRequestBuilderPostRequestConfiguration] = None, response_handler: Optional[ResponseHandler] = None) -> Optional[account.Account]:
        if body is None:
            raise Exception("body cannot be undefined")
        request_info = self.create_post_request_information(
            body, request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_async(request_info, account.Account, response_handler, None)
    
    @dataclass
    class AccountsRequestBuilderPostRequestConfiguration():
        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request headers
        headers: Optional[Dict[str, str]] = None

        # Request options
        options: Optional[List[RequestOption]] = None

    

