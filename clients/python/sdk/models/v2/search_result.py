from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from ..v1 import account, status, tag

class SearchResult(AdditionalDataHolder, Parsable):
    @property
    def accounts(self,) -> Optional[List[account.Account]]:
        """
        Gets the accounts property value. The accounts property
        Returns: Optional[List[account.Account]]
        """
        return self._accounts
    
    @accounts.setter
    def accounts(self,value: Optional[List[account.Account]] = None) -> None:
        """
        Sets the accounts property value. The accounts property
        Args:
            value: Value to set for the accounts property.
        """
        self._accounts = value
    
    @property
    def additional_data(self,) -> Dict[str, Any]:
        """
        Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        Returns: Dict[str, Any]
        """
        return self._additional_data
    
    @additional_data.setter
    def additional_data(self,value: Dict[str, Any]) -> None:
        """
        Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        Args:
            value: Value to set for the AdditionalData property.
        """
        self._additional_data = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new SearchResult and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The accounts property
        self._accounts: Optional[List[account.Account]] = None
        # The hashtags property
        self._hashtags: Optional[List[tag.Tag]] = None
        # The statuses property
        self._statuses: Optional[List[status.Status]] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> SearchResult:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: SearchResult
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return SearchResult()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "accounts": lambda n : setattr(self, 'accounts', n.get_collection_of_object_values(account.Account)),
            "hashtags": lambda n : setattr(self, 'hashtags', n.get_collection_of_object_values(tag.Tag)),
            "statuses": lambda n : setattr(self, 'statuses', n.get_collection_of_object_values(status.Status)),
        }
        return fields
    
    @property
    def hashtags(self,) -> Optional[List[tag.Tag]]:
        """
        Gets the hashtags property value. The hashtags property
        Returns: Optional[List[tag.Tag]]
        """
        return self._hashtags
    
    @hashtags.setter
    def hashtags(self,value: Optional[List[tag.Tag]] = None) -> None:
        """
        Sets the hashtags property value. The hashtags property
        Args:
            value: Value to set for the hashtags property.
        """
        self._hashtags = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_collection_of_object_values("accounts", self.accounts)
        writer.write_collection_of_object_values("hashtags", self.hashtags)
        writer.write_collection_of_object_values("statuses", self.statuses)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def statuses(self,) -> Optional[List[status.Status]]:
        """
        Gets the statuses property value. The statuses property
        Returns: Optional[List[status.Status]]
        """
        return self._statuses
    
    @statuses.setter
    def statuses(self,value: Optional[List[status.Status]] = None) -> None:
        """
        Sets the statuses property value. The statuses property
        Args:
            value: Value to set for the statuses property.
        """
        self._statuses = value
    

