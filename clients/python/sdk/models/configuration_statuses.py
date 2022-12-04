from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class ConfigurationStatuses(AdditionalDataHolder, Parsable):
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
    
    @property
    def characters_reserved_per_url(self,) -> Optional[int]:
        """
        Gets the characters_reserved_per_url property value. The characters_reserved_per_url property
        Returns: Optional[int]
        """
        return self._characters_reserved_per_url
    
    @characters_reserved_per_url.setter
    def characters_reserved_per_url(self,value: Optional[int] = None) -> None:
        """
        Sets the characters_reserved_per_url property value. The characters_reserved_per_url property
        Args:
            value: Value to set for the characters_reserved_per_url property.
        """
        self._characters_reserved_per_url = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new ConfigurationStatuses and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The characters_reserved_per_url property
        self._characters_reserved_per_url: Optional[int] = None
        # The max_characters property
        self._max_characters: Optional[int] = None
        # The max_media_attachments property
        self._max_media_attachments: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> ConfigurationStatuses:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: ConfigurationStatuses
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return ConfigurationStatuses()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "characters_reserved_per_url": lambda n : setattr(self, 'characters_reserved_per_url', n.get_int_value()),
            "max_characters": lambda n : setattr(self, 'max_characters', n.get_int_value()),
            "max_media_attachments": lambda n : setattr(self, 'max_media_attachments', n.get_int_value()),
        }
        return fields
    
    @property
    def max_characters(self,) -> Optional[int]:
        """
        Gets the max_characters property value. The max_characters property
        Returns: Optional[int]
        """
        return self._max_characters
    
    @max_characters.setter
    def max_characters(self,value: Optional[int] = None) -> None:
        """
        Sets the max_characters property value. The max_characters property
        Args:
            value: Value to set for the max_characters property.
        """
        self._max_characters = value
    
    @property
    def max_media_attachments(self,) -> Optional[int]:
        """
        Gets the max_media_attachments property value. The max_media_attachments property
        Returns: Optional[int]
        """
        return self._max_media_attachments
    
    @max_media_attachments.setter
    def max_media_attachments(self,value: Optional[int] = None) -> None:
        """
        Sets the max_media_attachments property value. The max_media_attachments property
        Args:
            value: Value to set for the max_media_attachments property.
        """
        self._max_media_attachments = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_int_value("characters_reserved_per_url", self.characters_reserved_per_url)
        writer.write_int_value("max_characters", self.max_characters)
        writer.write_int_value("max_media_attachments", self.max_media_attachments)
        writer.write_additional_data_value(self.additional_data)
    

