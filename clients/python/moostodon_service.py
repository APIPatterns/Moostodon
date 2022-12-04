import asyncio

from typing import List
from kiota_http.httpx_request_adapter import HttpxRequestAdapter
from kiota_serialization_json.json_parse_node_factory import JsonParseNodeFactory
from kiota_serialization_json.json_serialization_writer_factory import JsonSerializationWriterFactory
from kiota_abstractions.authentication.anonymous_authentication_provider import AnonymousAuthenticationProvider
from sdk.models.status import Status
from sdk.models.account import Account
from sdk.moostodon_client import MoostodonClient



class MoostodonService():
    """
    This class is responsible for the communication with the Mastodon API using the MoostodonClient.
    """
    def __init__(self, base_url: str) -> None:
        """
        Instantiates a new MoostodonService and sets the default values.
        """
        provider = AnonymousAuthenticationProvider()
        request_adapter = HttpxRequestAdapter(provider)
        self.client = MoostodonClient(request_adapter)
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
