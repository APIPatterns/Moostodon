from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class ConfigurationPolls(AdditionalDataHolder, Parsable):
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
        Instantiates a new ConfigurationPolls and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The max_characters_per_option property
        self._max_characters_per_option: Optional[int] = None
        # The max_expiration property
        self._max_expiration: Optional[int] = None
        # The max_options property
        self._max_options: Optional[int] = None
        # The min_expiration property
        self._min_expiration: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> ConfigurationPolls:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: ConfigurationPolls
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return ConfigurationPolls()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "max_characters_per_option": lambda n : setattr(self, 'max_characters_per_option', n.get_int_value()),
            "max_expiration": lambda n : setattr(self, 'max_expiration', n.get_int_value()),
            "max_options": lambda n : setattr(self, 'max_options', n.get_int_value()),
            "min_expiration": lambda n : setattr(self, 'min_expiration', n.get_int_value()),
        }
        return fields
    
    @property
    def max_characters_per_option(self,) -> Optional[int]:
        """
        Gets the max_characters_per_option property value. The max_characters_per_option property
        Returns: Optional[int]
        """
        return self._max_characters_per_option
    
    @max_characters_per_option.setter
    def max_characters_per_option(self,value: Optional[int] = None) -> None:
        """
        Sets the max_characters_per_option property value. The max_characters_per_option property
        Args:
            value: Value to set for the max_characters_per_option property.
        """
        self._max_characters_per_option = value
    
    @property
    def max_expiration(self,) -> Optional[int]:
        """
        Gets the max_expiration property value. The max_expiration property
        Returns: Optional[int]
        """
        return self._max_expiration
    
    @max_expiration.setter
    def max_expiration(self,value: Optional[int] = None) -> None:
        """
        Sets the max_expiration property value. The max_expiration property
        Args:
            value: Value to set for the max_expiration property.
        """
        self._max_expiration = value
    
    @property
    def max_options(self,) -> Optional[int]:
        """
        Gets the max_options property value. The max_options property
        Returns: Optional[int]
        """
        return self._max_options
    
    @max_options.setter
    def max_options(self,value: Optional[int] = None) -> None:
        """
        Sets the max_options property value. The max_options property
        Args:
            value: Value to set for the max_options property.
        """
        self._max_options = value
    
    @property
    def min_expiration(self,) -> Optional[int]:
        """
        Gets the min_expiration property value. The min_expiration property
        Returns: Optional[int]
        """
        return self._min_expiration
    
    @min_expiration.setter
    def min_expiration(self,value: Optional[int] = None) -> None:
        """
        Sets the min_expiration property value. The min_expiration property
        Args:
            value: Value to set for the min_expiration property.
        """
        self._min_expiration = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_int_value("max_characters_per_option", self.max_characters_per_option)
        writer.write_int_value("max_expiration", self.max_expiration)
        writer.write_int_value("max_options", self.max_options)
        writer.write_int_value("min_expiration", self.min_expiration)
        writer.write_additional_data_value(self.additional_data)
    

