from __future__ import annotations
from kiota_abstractions.api_client_builder import enable_backing_store_for_serialization_writer_factory, register_default_deserializer, register_default_serializer
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.request_adapter import RequestAdapter
from kiota_abstractions.serialization import ParseNodeFactoryRegistry, SerializationWriterFactoryRegistry
from kiota_abstractions.utils import lazy_import
from kiota_serialization_json.json_parse_node_factory import JsonParseNodeFactory
from kiota_serialization_json.json_serialization_writer_factory import JsonSerializationWriterFactory
from kiota_serialization_text.text_parse_node_factory import TextParseNodeFactory
from kiota_serialization_text.text_serialization_writer_factory import TextSerializationWriterFactory
from typing import Any, Callable, Dict, List, Optional, Union

api_request_builder = lazy_import('mastodon_client_lib.api.api_request_builder')
oauth_request_builder = lazy_import('mastodon_client_lib.oauth.oauth_request_builder')

class MastodonClient():
    """
    The main entry point of the SDK, exposes the configuration and the fluent API.
    """
    @property
    def api(self) -> api_request_builder.ApiRequestBuilder:
        """
        The api property
        """
        return api_request_builder.ApiRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def oauth(self) -> oauth_request_builder.OauthRequestBuilder:
        """
        The oauth property
        """
        return oauth_request_builder.OauthRequestBuilder(self.request_adapter, self.path_parameters)
    
    def __init__(self,request_adapter: RequestAdapter) -> None:
        """
        Instantiates a new MastodonClient and sets the default values.
        Args:
            requestAdapter: The request adapter to use to execute the requests.
        """
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Path parameters for the request
        self.path_parameters: Dict[str, Any] = {}

        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}"

        self.request_adapter = request_adapter
        register_default_serializer(JsonSerializationWriterFactory)
        register_default_serializer(TextSerializationWriterFactory)
        register_default_deserializer(JsonParseNodeFactory)
        register_default_deserializer(TextParseNodeFactory)
        if not request_adapter.base_url:
            request_adapter.base_url = "https://mastodon.example"
    

