from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class PollOption(AdditionalDataHolder, Parsable):
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
        Instantiates a new PollOption and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The title property
        self._title: Optional[str] = None
        # The votes_count property
        self._votes_count: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> PollOption:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: PollOption
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return PollOption()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "title": lambda n : setattr(self, 'title', n.get_str_value()),
            "votes_count": lambda n : setattr(self, 'votes_count', n.get_int_value()),
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
        writer.write_str_value("title", self.title)
        writer.write_int_value("votes_count", self.votes_count)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def title(self,) -> Optional[str]:
        """
        Gets the title property value. The title property
        Returns: Optional[str]
        """
        return self._title
    
    @title.setter
    def title(self,value: Optional[str] = None) -> None:
        """
        Sets the title property value. The title property
        Args:
            value: Value to set for the title property.
        """
        self._title = value
    
    @property
    def votes_count(self,) -> Optional[int]:
        """
        Gets the votes_count property value. The votes_count property
        Returns: Optional[int]
        """
        return self._votes_count
    
    @votes_count.setter
    def votes_count(self,value: Optional[int] = None) -> None:
        """
        Sets the votes_count property value. The votes_count property
        Args:
            value: Value to set for the votes_count property.
        """
        self._votes_count = value
    

