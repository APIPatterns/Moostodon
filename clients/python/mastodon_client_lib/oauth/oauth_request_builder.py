from __future__ import annotations
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.request_adapter import RequestAdapter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

authorize_request_builder = lazy_import('mastodon_client_lib.oauth.authorize.authorize_request_builder')
revoke_request_builder = lazy_import('mastodon_client_lib.oauth.revoke.revoke_request_builder')
token_request_builder = lazy_import('mastodon_client_lib.oauth.token.token_request_builder')

class OauthRequestBuilder():
    """
    Builds and executes requests for operations under /oauth
    """
    @property
    def authorize(self) -> authorize_request_builder.AuthorizeRequestBuilder:
        """
        The authorize property
        """
        return authorize_request_builder.AuthorizeRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def revoke(self) -> revoke_request_builder.RevokeRequestBuilder:
        """
        The revoke property
        """
        return revoke_request_builder.RevokeRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def token(self) -> token_request_builder.TokenRequestBuilder:
        """
        The token property
        """
        return token_request_builder.TokenRequestBuilder(self.request_adapter, self.path_parameters)
    
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new OauthRequestBuilder and sets the default values.
        Args:
            pathParameters: The raw url or the Url template parameters for the request.
            requestAdapter: The request adapter to use to execute the requests.
        """
        if path_parameters is None:
            raise Exception("path_parameters cannot be undefined")
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}/oauth"

        url_tpl_params = get_path_parameters(path_parameters)
        self.path_parameters = url_tpl_params
        self.request_adapter = request_adapter
    

