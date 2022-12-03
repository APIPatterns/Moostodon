from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import history_item

class Tag(AdditionalDataHolder, Parsable):
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
        Instantiates a new Tag and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The following property
        self._following: Optional[bool] = None
        # The history property
        self._history: Optional[List[history_item.HistoryItem]] = None
        # The name property
        self._name: Optional[str] = None
        # The url property
        self._url: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Tag:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Tag
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Tag()
    
    @property
    def following(self,) -> Optional[bool]:
        """
        Gets the following property value. The following property
        Returns: Optional[bool]
        """
        return self._following
    
    @following.setter
    def following(self,value: Optional[bool] = None) -> None:
        """
        Sets the following property value. The following property
        Args:
            value: Value to set for the following property.
        """
        self._following = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "following": lambda n : setattr(self, 'following', n.get_bool_value()),
            "history": lambda n : setattr(self, 'history', n.get_collection_of_object_values(history_item.HistoryItem)),
            "name": lambda n : setattr(self, 'name', n.get_str_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
        }
        return fields
    
    @property
    def history(self,) -> Optional[List[history_item.HistoryItem]]:
        """
        Gets the history property value. The history property
        Returns: Optional[List[history_item.HistoryItem]]
        """
        return self._history
    
    @history.setter
    def history(self,value: Optional[List[history_item.HistoryItem]] = None) -> None:
        """
        Sets the history property value. The history property
        Args:
            value: Value to set for the history property.
        """
        self._history = value
    
    @property
    def name(self,) -> Optional[str]:
        """
        Gets the name property value. The name property
        Returns: Optional[str]
        """
        return self._name
    
    @name.setter
    def name(self,value: Optional[str] = None) -> None:
        """
        Sets the name property value. The name property
        Args:
            value: Value to set for the name property.
        """
        self._name = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_bool_value("following", self.following)
        writer.write_collection_of_object_values("history", self.history)
        writer.write_str_value("name", self.name)
        writer.write_str_value("url", self.url)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def url(self,) -> Optional[str]:
        """
        Gets the url property value. The url property
        Returns: Optional[str]
        """
        return self._url
    
    @url.setter
    def url(self,value: Optional[str] = None) -> None:
        """
        Sets the url property value. The url property
        Args:
            value: Value to set for the url property.
        """
        self._url = value
    

