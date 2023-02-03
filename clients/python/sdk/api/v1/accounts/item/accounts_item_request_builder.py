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

block_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.block.block_request_builder')
featured_tags_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.featured_tags.featured_tags_request_builder')
follow_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.follow.follow_request_builder')
followers_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.followers.followers_request_builder')
following_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.following.following_request_builder')
lists_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.lists.lists_request_builder')
mute_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.mute.mute_request_builder')
note_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.note.note_request_builder')
pin_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.pin.pin_request_builder')
remove_from_followers_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.remove_from_followers.remove_from_followers_request_builder')
statuses_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.statuses.statuses_request_builder')
unblock_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.unblock.unblock_request_builder')
unfollow_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.unfollow.unfollow_request_builder')
unmute_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.unmute.unmute_request_builder')
unpin_request_builder = lazy_import('mastodon_client_lib.api.v1.accounts.item.unpin.unpin_request_builder')
account = lazy_import('mastodon_client_lib.models.account')

class AccountsItemRequestBuilder():
    """
    Builds and executes requests for operations under /api/v1/accounts/{id}
    """
    @property
    def block(self) -> block_request_builder.BlockRequestBuilder:
        """
        The block property
        """
        return block_request_builder.BlockRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def featured_tags(self) -> featured_tags_request_builder.Featured_tagsRequestBuilder:
        """
        The featured_tags property
        """
        return featured_tags_request_builder.Featured_tagsRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def follow(self) -> follow_request_builder.FollowRequestBuilder:
        """
        The follow property
        """
        return follow_request_builder.FollowRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def followers(self) -> followers_request_builder.FollowersRequestBuilder:
        """
        The followers property
        """
        return followers_request_builder.FollowersRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def following(self) -> following_request_builder.FollowingRequestBuilder:
        """
        The following property
        """
        return following_request_builder.FollowingRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def lists(self) -> lists_request_builder.ListsRequestBuilder:
        """
        The lists property
        """
        return lists_request_builder.ListsRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def mute(self) -> mute_request_builder.MuteRequestBuilder:
        """
        The mute property
        """
        return mute_request_builder.MuteRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def note(self) -> note_request_builder.NoteRequestBuilder:
        """
        The note property
        """
        return note_request_builder.NoteRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def pin(self) -> pin_request_builder.PinRequestBuilder:
        """
        The pin property
        """
        return pin_request_builder.PinRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def remove_from_followers(self) -> remove_from_followers_request_builder.Remove_from_followersRequestBuilder:
        """
        The remove_from_followers property
        """
        return remove_from_followers_request_builder.Remove_from_followersRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def statuses(self) -> statuses_request_builder.StatusesRequestBuilder:
        """
        The statuses property
        """
        return statuses_request_builder.StatusesRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def unblock(self) -> unblock_request_builder.UnblockRequestBuilder:
        """
        The unblock property
        """
        return unblock_request_builder.UnblockRequestBuilder(self.request_adapter, self.path_parameters)
    
    @property
    def unfollow(self) -> unfollow_request_builder.UnfollowRequestBuilder:
        """
        The unfollow property
        """
        return unfollow_request_builder.UnfollowRequestBuilder(self.request_adapter, self.path_parameters)
    
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
    
    def __init__(self,request_adapter: RequestAdapter, path_parameters: Optional[Union[Dict[str, Any], str]] = None) -> None:
        """
        Instantiates a new AccountsItemRequestBuilder and sets the default values.
        Args:
            pathParameters: The raw url or the Url template parameters for the request.
            requestAdapter: The request adapter to use to execute the requests.
        """
        if path_parameters is None:
            raise Exception("path_parameters cannot be undefined")
        if request_adapter is None:
            raise Exception("request_adapter cannot be undefined")
        # Url template to use to build the URL for the current request builder
        self.url_template: str = "{+baseurl}/api/v1/accounts/{id}"

        url_tpl_params = get_path_parameters(path_parameters)
        self.path_parameters = url_tpl_params
        self.request_adapter = request_adapter
    
    async def get(self,request_configuration: Optional[AccountsItemRequestBuilderGetRequestConfiguration] = None) -> Optional[account.Account]:
        request_info = self.to_get_request_information(
            request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_async(request_info, account.Account, None)
    
    async def patch(self,body: Optional[account.Account] = None, request_configuration: Optional[AccountsItemRequestBuilderPatchRequestConfiguration] = None) -> Optional[account.Account]:
        if body is None:
            raise Exception("body cannot be undefined")
        request_info = self.to_patch_request_information(
            body, request_configuration
        )
        if not self.request_adapter:
            raise Exception("Http core is null") 
        return await self.request_adapter.send_async(request_info, account.Account, None)
    
    def to_get_request_information(self,request_configuration: Optional[AccountsItemRequestBuilderGetRequestConfiguration] = None) -> RequestInformation:
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.GET
        request_info.headers["Accept"] = "application/json"
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        return request_info
    
    def to_patch_request_information(self,body: Optional[account.Account] = None, request_configuration: Optional[AccountsItemRequestBuilderPatchRequestConfiguration] = None) -> RequestInformation:
        if body is None:
            raise Exception("body cannot be undefined")
        request_info = RequestInformation()
        request_info.url_template = self.url_template
        request_info.path_parameters = self.path_parameters
        request_info.http_method = Method.PATCH
        request_info.headers["Accept"] = "application/json"
        if request_configuration:
            request_info.add_request_headers(request_configuration.headers)
            request_info.add_request_options(request_configuration.options)
        request_info.set_content_from_parsable(self.request_adapter, "application/json", body)
        return request_info
    
    @dataclass
    class AccountsItemRequestBuilderGetRequestConfiguration():
        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request headers
        headers: Optional[Dict[str, str]] = None

        # Request options
        options: Optional[List[RequestOption]] = None

    
    @dataclass
    class AccountsItemRequestBuilderPatchRequestConfiguration():
        """
        Configuration for the request such as headers, query parameters, and middleware options.
        """
        # Request headers
        headers: Optional[Dict[str, str]] = None

        # Request options
        options: Optional[List[RequestOption]] = None

    

