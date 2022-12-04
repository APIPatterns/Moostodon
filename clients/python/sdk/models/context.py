from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import status

class Context(AdditionalDataHolder, Parsable):
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
    def ancestors(self,) -> Optional[List[status.Status]]:
        """
        Gets the ancestors property value. The ancestors property
        Returns: Optional[List[status.Status]]
        """
        return self._ancestors
    
    @ancestors.setter
    def ancestors(self,value: Optional[List[status.Status]] = None) -> None:
        """
        Sets the ancestors property value. The ancestors property
        Args:
            value: Value to set for the ancestors property.
        """
        self._ancestors = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new Context and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The ancestors property
        self._ancestors: Optional[List[status.Status]] = None
        # The descendants property
        self._descendants: Optional[List[status.Status]] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Context:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Context
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Context()
    
    @property
    def descendants(self,) -> Optional[List[status.Status]]:
        """
        Gets the descendants property value. The descendants property
        Returns: Optional[List[status.Status]]
        """
        return self._descendants
    
    @descendants.setter
    def descendants(self,value: Optional[List[status.Status]] = None) -> None:
        """
        Sets the descendants property value. The descendants property
        Args:
            value: Value to set for the descendants property.
        """
        self._descendants = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "ancestors": lambda n : setattr(self, 'ancestors', n.get_collection_of_object_values(status.Status)),
            "descendants": lambda n : setattr(self, 'descendants', n.get_collection_of_object_values(status.Status)),
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
        writer.write_collection_of_object_values("ancestors", self.ancestors)
        writer.write_collection_of_object_values("descendants", self.descendants)
        writer.write_additional_data_value(self.additional_data)
    

