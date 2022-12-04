from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class Card(AdditionalDataHolder, Parsable):
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
        Instantiates a new Card and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The description property
        self._description: Optional[str] = None
        # The image property
        self._image: Optional[str] = None
        # The title property
        self._title: Optional[str] = None
        # The url property
        self._url: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Card:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Card
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Card()
    
    @property
    def description(self,) -> Optional[str]:
        """
        Gets the description property value. The description property
        Returns: Optional[str]
        """
        return self._description
    
    @description.setter
    def description(self,value: Optional[str] = None) -> None:
        """
        Sets the description property value. The description property
        Args:
            value: Value to set for the description property.
        """
        self._description = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "description": lambda n : setattr(self, 'description', n.get_str_value()),
            "image": lambda n : setattr(self, 'image', n.get_str_value()),
            "title": lambda n : setattr(self, 'title', n.get_str_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
        }
        return fields
    
    @property
    def image(self,) -> Optional[str]:
        """
        Gets the image property value. The image property
        Returns: Optional[str]
        """
        return self._image
    
    @image.setter
    def image(self,value: Optional[str] = None) -> None:
        """
        Sets the image property value. The image property
        Args:
            value: Value to set for the image property.
        """
        self._image = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("description", self.description)
        writer.write_str_value("image", self.image)
        writer.write_str_value("title", self.title)
        writer.write_str_value("url", self.url)
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
    

