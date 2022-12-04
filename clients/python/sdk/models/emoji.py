from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class Emoji(AdditionalDataHolder, Parsable):
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
        Instantiates a new Emoji and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The shortcode property
        self._shortcode: Optional[str] = None
        # The static_url property
        self._static_url: Optional[str] = None
        # The url property
        self._url: Optional[str] = None
        # The visible_in_picker property
        self._visible_in_picker: Optional[bool] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Emoji:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Emoji
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Emoji()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "shortcode": lambda n : setattr(self, 'shortcode', n.get_str_value()),
            "static_url": lambda n : setattr(self, 'static_url', n.get_str_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
            "visible_in_picker": lambda n : setattr(self, 'visible_in_picker', n.get_bool_value()),
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
        writer.write_str_value("shortcode", self.shortcode)
        writer.write_str_value("static_url", self.static_url)
        writer.write_str_value("url", self.url)
        writer.write_bool_value("visible_in_picker", self.visible_in_picker)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def shortcode(self,) -> Optional[str]:
        """
        Gets the shortcode property value. The shortcode property
        Returns: Optional[str]
        """
        return self._shortcode
    
    @shortcode.setter
    def shortcode(self,value: Optional[str] = None) -> None:
        """
        Sets the shortcode property value. The shortcode property
        Args:
            value: Value to set for the shortcode property.
        """
        self._shortcode = value
    
    @property
    def static_url(self,) -> Optional[str]:
        """
        Gets the static_url property value. The static_url property
        Returns: Optional[str]
        """
        return self._static_url
    
    @static_url.setter
    def static_url(self,value: Optional[str] = None) -> None:
        """
        Sets the static_url property value. The static_url property
        Args:
            value: Value to set for the static_url property.
        """
        self._static_url = value
    
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
    
    @property
    def visible_in_picker(self,) -> Optional[bool]:
        """
        Gets the visible_in_picker property value. The visible_in_picker property
        Returns: Optional[bool]
        """
        return self._visible_in_picker
    
    @visible_in_picker.setter
    def visible_in_picker(self,value: Optional[bool] = None) -> None:
        """
        Sets the visible_in_picker property value. The visible_in_picker property
        Args:
            value: Value to set for the visible_in_picker property.
        """
        self._visible_in_picker = value
    

