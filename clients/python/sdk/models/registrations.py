from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class Registrations(AdditionalDataHolder, Parsable):
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
    def approval_required(self,) -> Optional[bool]:
        """
        Gets the approval_required property value. The approval_required property
        Returns: Optional[bool]
        """
        return self._approval_required
    
    @approval_required.setter
    def approval_required(self,value: Optional[bool] = None) -> None:
        """
        Sets the approval_required property value. The approval_required property
        Args:
            value: Value to set for the approval_required property.
        """
        self._approval_required = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new Registrations and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The approval_required property
        self._approval_required: Optional[bool] = None
        # The enabled property
        self._enabled: Optional[bool] = None
        # The message property
        self._message: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Registrations:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Registrations
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Registrations()
    
    @property
    def enabled(self,) -> Optional[bool]:
        """
        Gets the enabled property value. The enabled property
        Returns: Optional[bool]
        """
        return self._enabled
    
    @enabled.setter
    def enabled(self,value: Optional[bool] = None) -> None:
        """
        Sets the enabled property value. The enabled property
        Args:
            value: Value to set for the enabled property.
        """
        self._enabled = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "approval_required": lambda n : setattr(self, 'approval_required', n.get_bool_value()),
            "enabled": lambda n : setattr(self, 'enabled', n.get_bool_value()),
            "message": lambda n : setattr(self, 'message', n.get_str_value()),
        }
        return fields
    
    @property
    def message(self,) -> Optional[str]:
        """
        Gets the message property value. The message property
        Returns: Optional[str]
        """
        return self._message
    
    @message.setter
    def message(self,value: Optional[str] = None) -> None:
        """
        Sets the message property value. The message property
        Args:
            value: Value to set for the message property.
        """
        self._message = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_bool_value("approval_required", self.approval_required)
        writer.write_bool_value("enabled", self.enabled)
        writer.write_str_value("message", self.message)
        writer.write_additional_data_value(self.additional_data)
    

