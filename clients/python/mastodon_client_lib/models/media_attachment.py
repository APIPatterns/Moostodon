from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

media_attachment_meta = lazy_import('mastodon_client_lib.models.media_attachment_meta')

class MediaAttachment(AdditionalDataHolder, Parsable):
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
        Instantiates a new MediaAttachment and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The description property
        self._description: Optional[str] = None
        # The id property
        self._id: Optional[str] = None
        # The meta property
        self._meta: Optional[media_attachment_meta.MediaAttachmentMeta] = None
        # The preview_url property
        self._preview_url: Optional[str] = None
        # The remote_url property
        self._remote_url: Optional[str] = None
        # The text_url property
        self._text_url: Optional[str] = None
        # The type property
        self._type: Optional[str] = None
        # The url property
        self._url: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> MediaAttachment:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: MediaAttachment
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return MediaAttachment()
    
    @property
    def description(self,) -> Optional[str]:
        """
        Gets the description property value. The description property
        Returns: Optional[str]
        """
        return self._description
    
    @description.setter
    def description(self,value: Optional[str] = None) -> None:
        """
        Sets the description property value. The description property
        Args:
            value: Value to set for the description property.
        """
        self._description = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "description": lambda n : setattr(self, 'description', n.get_str_value()),
            "id": lambda n : setattr(self, 'id', n.get_str_value()),
            "meta": lambda n : setattr(self, 'meta', n.get_object_value(media_attachment_meta.MediaAttachmentMeta)),
            "preview_url": lambda n : setattr(self, 'preview_url', n.get_str_value()),
            "remote_url": lambda n : setattr(self, 'remote_url', n.get_str_value()),
            "text_url": lambda n : setattr(self, 'text_url', n.get_str_value()),
            "type": lambda n : setattr(self, 'type', n.get_str_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
        }
        return fields
    
    @property
    def id(self,) -> Optional[str]:
        """
        Gets the id property value. The id property
        Returns: Optional[str]
        """
        return self._id
    
    @id.setter
    def id(self,value: Optional[str] = None) -> None:
        """
        Sets the id property value. The id property
        Args:
            value: Value to set for the id property.
        """
        self._id = value
    
    @property
    def meta(self,) -> Optional[media_attachment_meta.MediaAttachmentMeta]:
        """
        Gets the meta property value. The meta property
        Returns: Optional[media_attachment_meta.MediaAttachmentMeta]
        """
        return self._meta
    
    @meta.setter
    def meta(self,value: Optional[media_attachment_meta.MediaAttachmentMeta] = None) -> None:
        """
        Sets the meta property value. The meta property
        Args:
            value: Value to set for the meta property.
        """
        self._meta = value
    
    @property
    def preview_url(self,) -> Optional[str]:
        """
        Gets the preview_url property value. The preview_url property
        Returns: Optional[str]
        """
        return self._preview_url
    
    @preview_url.setter
    def preview_url(self,value: Optional[str] = None) -> None:
        """
        Sets the preview_url property value. The preview_url property
        Args:
            value: Value to set for the preview_url property.
        """
        self._preview_url = value
    
    @property
    def remote_url(self,) -> Optional[str]:
        """
        Gets the remote_url property value. The remote_url property
        Returns: Optional[str]
        """
        return self._remote_url
    
    @remote_url.setter
    def remote_url(self,value: Optional[str] = None) -> None:
        """
        Sets the remote_url property value. The remote_url property
        Args:
            value: Value to set for the remote_url property.
        """
        self._remote_url = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("description", self.description)
        writer.write_str_value("id", self.id)
        writer.write_object_value("meta", self.meta)
        writer.write_str_value("preview_url", self.preview_url)
        writer.write_str_value("remote_url", self.remote_url)
        writer.write_str_value("text_url", self.text_url)
        writer.write_str_value("type", self.type)
        writer.write_str_value("url", self.url)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def text_url(self,) -> Optional[str]:
        """
        Gets the text_url property value. The text_url property
        Returns: Optional[str]
        """
        return self._text_url
    
    @text_url.setter
    def text_url(self,value: Optional[str] = None) -> None:
        """
        Sets the text_url property value. The text_url property
        Args:
            value: Value to set for the text_url property.
        """
        self._text_url = value
    
    @property
    def type(self,) -> Optional[str]:
        """
        Gets the type property value. The type property
        Returns: Optional[str]
        """
        return self._type
    
    @type.setter
    def type(self,value: Optional[str] = None) -> None:
        """
        Sets the type property value. The type property
        Args:
            value: Value to set for the type property.
        """
        self._type = value
    
    @property
    def url(self,) -> Optional[str]:
        """
        Gets the url property value. The url property
        Returns: Optional[str]
        """
        return self._url
    
    @url.setter
    def url(self,value: Optional[str] = None) -> None:
        """
        Sets the url property value. The url property
        Args:
            value: Value to set for the url property.
        """
        self._url = value
    

