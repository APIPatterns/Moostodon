from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

media_attachment_meta_original = lazy_import('mastodon_client_lib.models.media_attachment_meta_original')
media_attachment_meta_small = lazy_import('mastodon_client_lib.models.media_attachment_meta_small')

class MediaAttachmentMeta(AdditionalDataHolder, Parsable):
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
        Instantiates a new MediaAttachmentMeta and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The original property
        self._original: Optional[media_attachment_meta_original.MediaAttachmentMetaOriginal] = None
        # The small property
        self._small: Optional[media_attachment_meta_small.MediaAttachmentMetaSmall] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> MediaAttachmentMeta:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: MediaAttachmentMeta
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return MediaAttachmentMeta()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "original": lambda n : setattr(self, 'original', n.get_object_value(media_attachment_meta_original.MediaAttachmentMetaOriginal)),
            "small": lambda n : setattr(self, 'small', n.get_object_value(media_attachment_meta_small.MediaAttachmentMetaSmall)),
        }
        return fields
    
    @property
    def original(self,) -> Optional[media_attachment_meta_original.MediaAttachmentMetaOriginal]:
        """
        Gets the original property value. The original property
        Returns: Optional[media_attachment_meta_original.MediaAttachmentMetaOriginal]
        """
        return self._original
    
    @original.setter
    def original(self,value: Optional[media_attachment_meta_original.MediaAttachmentMetaOriginal] = None) -> None:
        """
        Sets the original property value. The original property
        Args:
            value: Value to set for the original property.
        """
        self._original = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_object_value("original", self.original)
        writer.write_object_value("small", self.small)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def small(self,) -> Optional[media_attachment_meta_small.MediaAttachmentMetaSmall]:
        """
        Gets the small property value. The small property
        Returns: Optional[media_attachment_meta_small.MediaAttachmentMetaSmall]
        """
        return self._small
    
    @small.setter
    def small(self,value: Optional[media_attachment_meta_small.MediaAttachmentMetaSmall] = None) -> None:
        """
        Sets the small property value. The small property
        Args:
            value: Value to set for the small property.
        """
        self._small = value
    

