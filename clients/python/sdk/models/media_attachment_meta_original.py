from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class MediaAttachmentMetaOriginal(AdditionalDataHolder, Parsable):
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
    def aspect(self,) -> Optional[float]:
        """
        Gets the aspect property value. The aspect property
        Returns: Optional[float]
        """
        return self._aspect
    
    @aspect.setter
    def aspect(self,value: Optional[float] = None) -> None:
        """
        Sets the aspect property value. The aspect property
        Args:
            value: Value to set for the aspect property.
        """
        self._aspect = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new MediaAttachmentMetaOriginal and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The aspect property
        self._aspect: Optional[float] = None
        # The height property
        self._height: Optional[int] = None
        # The size property
        self._size: Optional[str] = None
        # The width property
        self._width: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> MediaAttachmentMetaOriginal:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: MediaAttachmentMetaOriginal
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return MediaAttachmentMetaOriginal()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "aspect": lambda n : setattr(self, 'aspect', n.get_float_value()),
            "height": lambda n : setattr(self, 'height', n.get_int_value()),
            "size": lambda n : setattr(self, 'size', n.get_str_value()),
            "width": lambda n : setattr(self, 'width', n.get_int_value()),
        }
        return fields
    
    @property
    def height(self,) -> Optional[int]:
        """
        Gets the height property value. The height property
        Returns: Optional[int]
        """
        return self._height
    
    @height.setter
    def height(self,value: Optional[int] = None) -> None:
        """
        Sets the height property value. The height property
        Args:
            value: Value to set for the height property.
        """
        self._height = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_float_value("aspect", self.aspect)
        writer.write_int_value("height", self.height)
        writer.write_str_value("size", self.size)
        writer.write_int_value("width", self.width)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def size(self,) -> Optional[str]:
        """
        Gets the size property value. The size property
        Returns: Optional[str]
        """
        return self._size
    
    @size.setter
    def size(self,value: Optional[str] = None) -> None:
        """
        Sets the size property value. The size property
        Args:
            value: Value to set for the size property.
        """
        self._size = value
    
    @property
    def width(self,) -> Optional[int]:
        """
        Gets the width property value. The width property
        Returns: Optional[int]
        """
        return self._width
    
    @width.setter
    def width(self,value: Optional[int] = None) -> None:
        """
        Sets the width property value. The width property
        Args:
            value: Value to set for the width property.
        """
        self._width = value
    

