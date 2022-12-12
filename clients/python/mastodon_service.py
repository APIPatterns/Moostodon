import asyncio

from typing import List
from kiota_http.httpx_request_adapter import HttpxRequestAdapter
from kiota_abstractions.authentication.anonymous_authentication_provider import AnonymousAuthenticationProvider
from sdk.models.status import Status
from sdk.models.account import Account
from sdk.mastodon_client import MastodonClient
from sdk.api.v2.search.search_request_builder import SearchRequestBuilder


class MastodonService():
    """
    This class is responsible for the communication with the Mastodon API using the MoostodonClient.
    """
    def __init__(self, base_url: str) -> None:
        """
        Instantiates a new MoostodonService and sets the default values.
        """
        
        provider = AnonymousAuthenticationProvider()
        request_adapter = HttpxRequestAdapter(provider)
        self.client = MastodonClient(request_adapter)
        request_adapter.base_url = base_url
    
    def get_public_statuses(self) -> List[Status]:
        """
        Gets the statuses from the Moostodon API.
        Returns:
            The list of statuses.
        """
        statuses = asyncio.run(self.client.api().v1().timelines().public().get())
        return statuses

    def get_account(self, account_id: str) -> Account:
        """
        Get account details for a user.
        """
        
        return asyncio.run(self.client.api().v1().accounts_by_id(account_id).get())

    def search_accounts(self, q: str) -> List[Account]:
        """
        Search for accounts
        """
        config = SearchRequestBuilder.SearchRequestBuilderGetRequestConfiguration()
        config.query_parameters = SearchRequestBuilder.SearchRequestBuilderGetQueryParameters()
        config.query_parameters.q = q
        config.query_parameters.type = "accounts"
        searchResult = asyncio.run(self.client.api().v2().search().get(request_configuration=config))
        return searchResult.accounts


