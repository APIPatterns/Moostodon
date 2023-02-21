from __future__ import annotations
from kiota_abstractions.api_error import APIError
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

class UnprocessableContentError(APIError):
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
        Instantiates a new UnprocessableContentError and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The error property
        self._error: Optional[str] = None
        # The error_description property
        self._error_description: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> UnprocessableContentError:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: UnprocessableContentError
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return UnprocessableContentError()
    
    @property
    def error(self,) -> Optional[str]:
        """
        Gets the error property value. The error property
        Returns: Optional[str]
        """
        return self._error
    
    @error.setter
    def error(self,value: Optional[str] = None) -> None:
        """
        Sets the error property value. The error property
        Args:
            value: Value to set for the error property.
        """
        self._error = value
    
    @property
    def error_description(self,) -> Optional[str]:
        """
        Gets the error_description property value. The error_description property
        Returns: Optional[str]
        """
        return self._error_description
    
    @error_description.setter
    def error_description(self,value: Optional[str] = None) -> None:
        """
        Sets the error_description property value. The error_description property
        Args:
            value: Value to set for the error_description property.
        """
        self._error_description = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "error": lambda n : setattr(self, 'error', n.get_str_value()),
            "error_description": lambda n : setattr(self, 'error_description', n.get_str_value()),
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
        writer.write_str_value("error", self.error)
        writer.write_str_value("error_description", self.error_description)
        writer.write_additional_data_value(self.additional_data)
    

