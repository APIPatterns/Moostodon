from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

class UserUsage(AdditionalDataHolder, Parsable):
    @property
    def active_halfyear(self,) -> Optional[int]:
        """
        Gets the active_halfyear property value. The active_halfyear property
        Returns: Optional[int]
        """
        return self._active_halfyear
    
    @active_halfyear.setter
    def active_halfyear(self,value: Optional[int] = None) -> None:
        """
        Sets the active_halfyear property value. The active_halfyear property
        Args:
            value: Value to set for the active_halfyear property.
        """
        self._active_halfyear = value
    
    @property
    def active_month(self,) -> Optional[int]:
        """
        Gets the active_month property value. The active_month property
        Returns: Optional[int]
        """
        return self._active_month
    
    @active_month.setter
    def active_month(self,value: Optional[int] = None) -> None:
        """
        Sets the active_month property value. The active_month property
        Args:
            value: Value to set for the active_month property.
        """
        self._active_month = value
    
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
        Instantiates a new UserUsage and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The active_halfyear property
        self._active_halfyear: Optional[int] = None
        # The active_month property
        self._active_month: Optional[int] = None
        # The total property
        self._total: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> UserUsage:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: UserUsage
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return UserUsage()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "active_halfyear": lambda n : setattr(self, 'active_halfyear', n.get_int_value()),
            "active_month": lambda n : setattr(self, 'active_month', n.get_int_value()),
            "total": lambda n : setattr(self, 'total', n.get_int_value()),
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
        writer.write_int_value("active_halfyear", self.active_halfyear)
        writer.write_int_value("active_month", self.active_month)
        writer.write_int_value("total", self.total)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def total(self,) -> Optional[int]:
        """
        Gets the total property value. The total property
        Returns: Optional[int]
        """
        return self._total
    
    @total.setter
    def total(self,value: Optional[int] = None) -> None:
        """
        Sets the total property value. The total property
        Args:
            value: Value to set for the total property.
        """
        self._total = value
    

