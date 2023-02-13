from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

class HistoryItem(AdditionalDataHolder, Parsable):
    @property
    def accounts(self,) -> Optional[str]:
        """
        Gets the accounts property value. The accounts property
        Returns: Optional[str]
        """
        return self._accounts
    
    @accounts.setter
    def accounts(self,value: Optional[str] = None) -> None:
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
        Instantiates a new HistoryItem and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The accounts property
        self._accounts: Optional[str] = None
        # The day property
        self._day: Optional[str] = None
        # The uses property
        self._uses: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> HistoryItem:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: HistoryItem
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return HistoryItem()
    
    @property
    def day(self,) -> Optional[str]:
        """
        Gets the day property value. The day property
        Returns: Optional[str]
        """
        return self._day
    
    @day.setter
    def day(self,value: Optional[str] = None) -> None:
        """
        Sets the day property value. The day property
        Args:
            value: Value to set for the day property.
        """
        self._day = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "accounts": lambda n : setattr(self, 'accounts', n.get_str_value()),
            "day": lambda n : setattr(self, 'day', n.get_str_value()),
            "uses": lambda n : setattr(self, 'uses', n.get_str_value()),
        }
        return fields
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("accounts", self.accounts)
        writer.write_str_value("day", self.day)
        writer.write_str_value("uses", self.uses)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def uses(self,) -> Optional[str]:
        """
        Gets the uses property value. The uses property
        Returns: Optional[str]
        """
        return self._uses
    
    @uses.setter
    def uses(self,value: Optional[str] = None) -> None:
        """
        Sets the uses property value. The uses property
        Args:
            value: Value to set for the uses property.
        """
        self._uses = value
    

