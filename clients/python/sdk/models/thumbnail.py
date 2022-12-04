from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import thumnail_version

class Thumbnail(AdditionalDataHolder, Parsable):
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
    def blurhash(self,) -> Optional[str]:
        """
        Gets the blurhash property value. The blurhash property
        Returns: Optional[str]
        """
        return self._blurhash
    
    @blurhash.setter
    def blurhash(self,value: Optional[str] = None) -> None:
        """
        Sets the blurhash property value. The blurhash property
        Args:
            value: Value to set for the blurhash property.
        """
        self._blurhash = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new Thumbnail and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The blurhash property
        self._blurhash: Optional[str] = None
        # The url property
        self._url: Optional[str] = None
        # The versions property
        self._versions: Optional[thumnail_version.ThumnailVersion] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Thumbnail:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Thumbnail
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Thumbnail()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "blurhash": lambda n : setattr(self, 'blurhash', n.get_str_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
            "versions": lambda n : setattr(self, 'versions', n.get_object_value(thumnail_version.ThumnailVersion)),
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
        writer.write_str_value("blurhash", self.blurhash)
        writer.write_str_value("url", self.url)
        writer.write_object_value("versions", self.versions)
        writer.write_additional_data_value(self.additional_data)
    
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
    
    @property
    def versions(self,) -> Optional[thumnail_version.ThumnailVersion]:
        """
        Gets the versions property value. The versions property
        Returns: Optional[thumnail_version.ThumnailVersion]
        """
        return self._versions
    
    @versions.setter
    def versions(self,value: Optional[thumnail_version.ThumnailVersion] = None) -> None:
        """
        Sets the versions property value. The versions property
        Args:
            value: Value to set for the versions property.
        """
        self._versions = value
    

