from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

class ThumnailVersion(AdditionalDataHolder, Parsable):
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
        Instantiates a new ThumnailVersion and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The Onex property
        self._onex: Optional[str] = None
        # The Twox property
        self._twox: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> ThumnailVersion:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: ThumnailVersion
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return ThumnailVersion()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "@1x": lambda n : setattr(self, 'onex', n.get_str_value()),
            "@2x": lambda n : setattr(self, 'twox', n.get_str_value()),
        }
        return fields
    
    @property
    def onex(self,) -> Optional[str]:
        """
        Gets the @1x property value. The Onex property
        Returns: Optional[str]
        """
        return self._onex
    
    @onex.setter
    def onex(self,value: Optional[str] = None) -> None:
        """
        Sets the @1x property value. The Onex property
        Args:
            value: Value to set for the Onex property.
        """
        self._onex = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("@1x", self.onex)
        writer.write_str_value("@2x", self.twox)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def twox(self,) -> Optional[str]:
        """
        Gets the @2x property value. The Twox property
        Returns: Optional[str]
        """
        return self._twox
    
    @twox.setter
    def twox(self,value: Optional[str] = None) -> None:
        """
        Sets the @2x property value. The Twox property
        Args:
            value: Value to set for the Twox property.
        """
        self._twox = value
    

