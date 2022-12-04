from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class ConfigurationAccounts(AdditionalDataHolder, Parsable):
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
        Instantiates a new ConfigurationAccounts and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The max_feature_tags property
        self._max_feature_tags: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> ConfigurationAccounts:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: ConfigurationAccounts
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return ConfigurationAccounts()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "max_feature_tags": lambda n : setattr(self, 'max_feature_tags', n.get_int_value()),
        }
        return fields
    
    @property
    def max_feature_tags(self,) -> Optional[int]:
        """
        Gets the max_feature_tags property value. The max_feature_tags property
        Returns: Optional[int]
        """
        return self._max_feature_tags
    
    @max_feature_tags.setter
    def max_feature_tags(self,value: Optional[int] = None) -> None:
        """
        Sets the max_feature_tags property value. The max_feature_tags property
        Args:
            value: Value to set for the max_feature_tags property.
        """
        self._max_feature_tags = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_int_value("max_feature_tags", self.max_feature_tags)
        writer.write_additional_data_value(self.additional_data)
    

