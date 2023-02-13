from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

field = lazy_import('mastodon_client_lib.models.field')

class Source(AdditionalDataHolder, Parsable):
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
        Instantiates a new Source and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The fields property
        self._fields: Optional[List[field.Field]] = None
        # The follower_requests_count property
        self._follower_requests_count: Optional[int] = None
        # The language property
        self._language: Optional[str] = None
        # The note property
        self._note: Optional[str] = None
        # The privacy property
        self._privacy: Optional[str] = None
        # The sensitive property
        self._sensitive: Optional[bool] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Source:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Source
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Source()
    
    @property
    def fields(self,) -> Optional[List[field.Field]]:
        """
        Gets the fields property value. The fields property
        Returns: Optional[List[field.Field]]
        """
        return self._fields
    
    @fields.setter
    def fields(self,value: Optional[List[field.Field]] = None) -> None:
        """
        Sets the fields property value. The fields property
        Args:
            value: Value to set for the fields property.
        """
        self._fields = value
    
    @property
    def follower_requests_count(self,) -> Optional[int]:
        """
        Gets the follower_requests_count property value. The follower_requests_count property
        Returns: Optional[int]
        """
        return self._follower_requests_count
    
    @follower_requests_count.setter
    def follower_requests_count(self,value: Optional[int] = None) -> None:
        """
        Sets the follower_requests_count property value. The follower_requests_count property
        Args:
            value: Value to set for the follower_requests_count property.
        """
        self._follower_requests_count = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "fields": lambda n : setattr(self, 'fields', n.get_collection_of_object_values(field.Field)),
            "follower_requests_count": lambda n : setattr(self, 'follower_requests_count', n.get_int_value()),
            "language": lambda n : setattr(self, 'language', n.get_str_value()),
            "note": lambda n : setattr(self, 'note', n.get_str_value()),
            "privacy": lambda n : setattr(self, 'privacy', n.get_str_value()),
            "sensitive": lambda n : setattr(self, 'sensitive', n.get_bool_value()),
        }
        return fields
    
    @property
    def language(self,) -> Optional[str]:
        """
        Gets the language property value. The language property
        Returns: Optional[str]
        """
        return self._language
    
    @language.setter
    def language(self,value: Optional[str] = None) -> None:
        """
        Sets the language property value. The language property
        Args:
            value: Value to set for the language property.
        """
        self._language = value
    
    @property
    def note(self,) -> Optional[str]:
        """
        Gets the note property value. The note property
        Returns: Optional[str]
        """
        return self._note
    
    @note.setter
    def note(self,value: Optional[str] = None) -> None:
        """
        Sets the note property value. The note property
        Args:
            value: Value to set for the note property.
        """
        self._note = value
    
    @property
    def privacy(self,) -> Optional[str]:
        """
        Gets the privacy property value. The privacy property
        Returns: Optional[str]
        """
        return self._privacy
    
    @privacy.setter
    def privacy(self,value: Optional[str] = None) -> None:
        """
        Sets the privacy property value. The privacy property
        Args:
            value: Value to set for the privacy property.
        """
        self._privacy = value
    
    @property
    def sensitive(self,) -> Optional[bool]:
        """
        Gets the sensitive property value. The sensitive property
        Returns: Optional[bool]
        """
        return self._sensitive
    
    @sensitive.setter
    def sensitive(self,value: Optional[bool] = None) -> None:
        """
        Sets the sensitive property value. The sensitive property
        Args:
            value: Value to set for the sensitive property.
        """
        self._sensitive = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_collection_of_object_values("fields", self.fields)
        writer.write_int_value("follower_requests_count", self.follower_requests_count)
        writer.write_str_value("language", self.language)
        writer.write_str_value("note", self.note)
        writer.write_str_value("privacy", self.privacy)
        writer.write_bool_value("sensitive", self.sensitive)
        writer.write_additional_data_value(self.additional_data)
    

