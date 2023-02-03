from __future__ import annotations
from dataclasses import dataclass
from kiota_abstractions.get_path_parameters import get_path_parameters
from kiota_abstractions.method import Method
from kiota_abstractions.request_adapter import RequestAdapter
from kiota_abstractions.request_information import RequestInformation
from kiota_abstractions.request_option import RequestOption
from kiota_abstractions.response_handler import ResponseHandler
from kiota_abstractions.serialization import Parsable, ParsableFactory
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

bookmark_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.bookmark.bookmark_request_builder')
context_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.context.context_request_builder')
favourite_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.favourite.favourite_request_builder')
favourited_by_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.favourited_by.favourited_by_request_builder')
history_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.history.history_request_builder')
mute_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.mute.mute_request_builder')
pin_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.pin.pin_request_builder')
reblog_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.reblog.reblog_request_builder')
reblogged_by_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.reblogged_by.reblogged_by_request_builder')
source_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.source.source_request_builder')
unbookmark_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.unbookmark.unbookmark_request_builder')
unfavourite_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.unfavourite.unfavourite_request_builder')
unmute_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.unmute.unmute_request_builder')
unpin_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.unpin.unpin_request_builder')
unreblog_request_builder = lazy_import('mastodon_client_lib.api.v1.statuses.item.unreblog.unreblog_request_builder')
status = lazy_import('mastodon_client_lib.models.status')

class StatusesItemRequestBuilder():
    """
    Builds and executes requests for operations under /api/v1/statuses/{id}
    """
    @property
    def bookmark(self) -> bookmark_request_builder.BookmarkRequestBuilder:
        """
        The bookmark property
        """
        return bookmark_request_builder.BookmarkRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def context(self) -> context_request_builder.ContextRequestBuilder:
        """
        The context property
        """
        return context_request_builder.ContextRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def favourite(self) -> favourite_request_builder.FavouriteRequestBuilder:
        """
        The favourite property
        """
        return favourite_request_builder.FavouriteRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def favourited_by(self) -> favourited_by_request_builder.Favourited_byRequestBuilder:
        """
        The favourited_by property
        """
        return favourited_by_request_builder.Favourited_byRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def history(self) -> history_request_builder.HistoryRequestBuilder:
        """
        The history property
        """
        return history_request_builder.HistoryRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def mute(self) -> mute_request_builder.MuteRequestBuilder:
        """
        The mute property
        """
        return mute_request_builder.MuteRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def pin(self) -> pin_request_builder.PinRequestBuilder:
        """
        The pin property
        """
        return pin_request_builder.PinRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def reblog(self) -> reblog_request_builder.ReblogRequestBuilder:
        """
        The reblog property
        """
        return reblog_request_builder.ReblogRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def reblogged_by(self) -> reblogged_by_request_builder.Reblogged_byRequestBuilder:
        """
        The reblogged_by property
        """
        return reblogged_by_request_builder.Reblogged_byRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def source(self) -> source_request_builder.SourceRequestBuilder:
        """
        The source property
        """
        return source_request_builder.SourceRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def unbookmark(self) -> unbookmark_request_builder.UnbookmarkRequestBuilder:
        """
        The unbookmark property
        """
        return unbookmark_request_builder.UnbookmarkRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def unfavourite(self) -> unfavourite_request_builder.UnfavouriteRequestBuilder:
        """
        The unfavourite property
        """
        return unfavourite_request_builder.UnfavouriteRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def unmute(self) -> unmute_request_builder.UnmuteRequestBuilder:
        """
        The unmute property
        """
        return unmute_request_builder.UnmuteRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def unpin(self) -> unpin_request_builder.UnpinRequestBuilder:
        """
        The unpin property
        """
        return unpin_request_builder.UnpinRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def unreblog(self) -> unreblog_request_builder.UnreblogRequestBuilder:
        """
        The unreblog property
        """
        return unreblog_request_builder.UnreblogRequestBuilder(self.request_adapter, self.path_parameters)
    
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new StatusesItemRequestBuilder and sets the default values.
        Args:
            pathParameters: The raw url or the Url template parameters for the request.
            requestAdapter: The request adapter to use to execute the requests.
        """
        if path_parameters is None:
            raise Exception("path_parameters cannot be undefined")
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}/api/v1/statuses/{id}"

        url_tpl_params = get_path_parameters(path_parameters)
        self.path_parameters = url_tpl_params
        self.request_adapter = request_adapter
    
    async def delete(self,request_configuration: Optional[StatusesItemRequestBuilderDeleteRequestConfiguration] = None) -> Optional[status.Status]:
        request_info = self.to_delete_request_information(
            request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_async(request_info, status.Status, None)
    
    async def get(self,request_configuration: Optional[StatusesItemRequestBuilderGetRequestConfiguration] = None) -> Optional[status.Status]:
        request_info = self.to_get_request_information(
            request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_async(request_info, status.Status, None)
    
    async def put(self,body: bytes, request_configuration: Optional[StatusesItemRequestBuilderPutRequestConfiguration] = None) -> Optional[status.Status]:
        if body is None:
            raise Exception("body cannot be undefined")
        request_info = self.to_put_request_information(
            body, request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_async(request_info, status.Status, None)
    
    def to_delete_request_information(self,request_configuration: Optional[StatusesItemRequestBuilderDeleteRequestConfiguration] = None) -> RequestInformation:
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.DELETE
        request_info.headers["Accept"] = "application/json"
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        return request_info
    
    def to_get_request_information(self,request_configuration: Optional[StatusesItemRequestBuilderGetRequestConfiguration] = None) -> RequestInformation:
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.GET
        request_info.headers["Accept"] = "application/json"
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        return request_info
    
    def to_put_request_information(self,body: bytes, request_configuration: Optional[StatusesItemRequestBuilderPutRequestConfiguration] = None) -> RequestInformation:
        if body is None:
            raise Exception("body cannot be undefined")
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.PUT
        request_info.headers["Accept"] = "application/json"
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        request_info.set_stream_content(body)
        return request_info
    
    @dataclass
    class StatusesItemRequestBuilderDeleteRequestConfiguration():
        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request headers
        headers: Optional[Dict[str, str]] = None

        # Request options
        options: Optional[List[RequestOption]] = None

    
    @dataclass
    class StatusesItemRequestBuilderGetRequestConfiguration():
        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request headers
        headers: Optional[Dict[str, str]] = None

        # Request options
        options: Optional[List[RequestOption]] = None

    
    @dataclass
    class StatusesItemRequestBuilderPutRequestConfiguration():
        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request headers
        headers: Optional[Dict[str, str]] = None

        # Request options
        options: Optional[List[RequestOption]] = None

    

