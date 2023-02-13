from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

class FederationUsage(AdditionalDataHolder, Parsable):
    @property
    def active(self,) -> Optional[int]:
        """
        Gets the active property value. The active property
        Returns: Optional[int]
        """
        return self._active
    
    @active.setter
    def active(self,value: Optional[int] = None) -> None:
        """
        Sets the active property value. The active property
        Args:
            value: Value to set for the active property.
        """
        self._active = value
    
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
        Instantiates a new FederationUsage and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The active property
        self._active: Optional[int] = None
        # The receiving property
        self._receiving: Optional[int] = None
        # The sending property
        self._sending: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> FederationUsage:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: FederationUsage
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return FederationUsage()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "active": lambda n : setattr(self, 'active', n.get_int_value()),
            "receiving": lambda n : setattr(self, 'receiving', n.get_int_value()),
            "sending": lambda n : setattr(self, 'sending', n.get_int_value()),
        }
        return fields
    
    @property
    def receiving(self,) -> Optional[int]:
        """
        Gets the receiving property value. The receiving property
        Returns: Optional[int]
        """
        return self._receiving
    
    @receiving.setter
    def receiving(self,value: Optional[int] = None) -> None:
        """
        Sets the receiving property value. The receiving property
        Args:
            value: Value to set for the receiving property.
        """
        self._receiving = value
    
    @property
    def sending(self,) -> Optional[int]:
        """
        Gets the sending property value. The sending property
        Returns: Optional[int]
        """
        return self._sending
    
    @sending.setter
    def sending(self,value: Optional[int] = None) -> None:
        """
        Sets the sending property value. The sending property
        Args:
            value: Value to set for the sending property.
        """
        self._sending = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_int_value("active", self.active)
        writer.write_int_value("receiving", self.receiving)
        writer.write_int_value("sending", self.sending)
        writer.write_additional_data_value(self.additional_data)
    

