from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

class ConfigurationMediaAttachments(AdditionalDataHolder, Parsable):
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
        Instantiates a new ConfigurationMediaAttachments and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The image_matrix_limit property
        self._image_matrix_limit: Optional[int] = None
        # The image_size_limit property
        self._image_size_limit: Optional[int] = None
        # The supported_mime_types property
        self._supported_mime_types: Optional[List[str]] = None
        # The video_matrix_limit property
        self._video_matrix_limit: Optional[int] = None
        # The video_size_limit property
        self._video_size_limit: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> ConfigurationMediaAttachments:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: ConfigurationMediaAttachments
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return ConfigurationMediaAttachments()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "image_matrix_limit": lambda n : setattr(self, 'image_matrix_limit', n.get_int_value()),
            "image_size_limit": lambda n : setattr(self, 'image_size_limit', n.get_int_value()),
            "supported_mime_types": lambda n : setattr(self, 'supported_mime_types', n.get_collection_of_primitive_values(str)),
            "video_matrix_limit": lambda n : setattr(self, 'video_matrix_limit', n.get_int_value()),
            "video_size_limit": lambda n : setattr(self, 'video_size_limit', n.get_int_value()),
        }
        return fields
    
    @property
    def image_matrix_limit(self,) -> Optional[int]:
        """
        Gets the image_matrix_limit property value. The image_matrix_limit property
        Returns: Optional[int]
        """
        return self._image_matrix_limit
    
    @image_matrix_limit.setter
    def image_matrix_limit(self,value: Optional[int] = None) -> None:
        """
        Sets the image_matrix_limit property value. The image_matrix_limit property
        Args:
            value: Value to set for the image_matrix_limit property.
        """
        self._image_matrix_limit = value
    
    @property
    def image_size_limit(self,) -> Optional[int]:
        """
        Gets the image_size_limit property value. The image_size_limit property
        Returns: Optional[int]
        """
        return self._image_size_limit
    
    @image_size_limit.setter
    def image_size_limit(self,value: Optional[int] = None) -> None:
        """
        Sets the image_size_limit property value. The image_size_limit property
        Args:
            value: Value to set for the image_size_limit property.
        """
        self._image_size_limit = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_int_value("image_matrix_limit", self.image_matrix_limit)
        writer.write_int_value("image_size_limit", self.image_size_limit)
        writer.write_collection_of_primitive_values("supported_mime_types", self.supported_mime_types)
        writer.write_int_value("video_matrix_limit", self.video_matrix_limit)
        writer.write_int_value("video_size_limit", self.video_size_limit)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def supported_mime_types(self,) -> Optional[List[str]]:
        """
        Gets the supported_mime_types property value. The supported_mime_types property
        Returns: Optional[List[str]]
        """
        return self._supported_mime_types
    
    @supported_mime_types.setter
    def supported_mime_types(self,value: Optional[List[str]] = None) -> None:
        """
        Sets the supported_mime_types property value. The supported_mime_types property
        Args:
            value: Value to set for the supported_mime_types property.
        """
        self._supported_mime_types = value
    
    @property
    def video_matrix_limit(self,) -> Optional[int]:
        """
        Gets the video_matrix_limit property value. The video_matrix_limit property
        Returns: Optional[int]
        """
        return self._video_matrix_limit
    
    @video_matrix_limit.setter
    def video_matrix_limit(self,value: Optional[int] = None) -> None:
        """
        Sets the video_matrix_limit property value. The video_matrix_limit property
        Args:
            value: Value to set for the video_matrix_limit property.
        """
        self._video_matrix_limit = value
    
    @property
    def video_size_limit(self,) -> Optional[int]:
        """
        Gets the video_size_limit property value. The video_size_limit property
        Returns: Optional[int]
        """
        return self._video_size_limit
    
    @video_size_limit.setter
    def video_size_limit(self,value: Optional[int] = None) -> None:
        """
        Sets the video_size_limit property value. The video_size_limit property
        Args:
            value: Value to set for the video_size_limit property.
        """
        self._video_size_limit = value
    

