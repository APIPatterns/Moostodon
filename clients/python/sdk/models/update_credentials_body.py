from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import field, source

class UpdateCredentialsBody(AdditionalDataHolder, Parsable):
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
    def avatar(self,) -> Optional[str]:
        """
        Gets the avatar property value. The avatar property
        Returns: Optional[str]
        """
        return self._avatar
    
    @avatar.setter
    def avatar(self,value: Optional[str] = None) -> None:
        """
        Sets the avatar property value. The avatar property
        Args:
            value: Value to set for the avatar property.
        """
        self._avatar = value
    
    @property
    def bot(self,) -> Optional[bool]:
        """
        Gets the bot property value. The bot property
        Returns: Optional[bool]
        """
        return self._bot
    
    @bot.setter
    def bot(self,value: Optional[bool] = None) -> None:
        """
        Sets the bot property value. The bot property
        Args:
            value: Value to set for the bot property.
        """
        self._bot = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new UpdateCredentialsBody and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The avatar property
        self._avatar: Optional[str] = None
        # The bot property
        self._bot: Optional[bool] = None
        # The discoverable property
        self._discoverable: Optional[bool] = None
        # The display_name property
        self._display_name: Optional[str] = None
        # The fields property
        self._fields: Optional[List[field.Field]] = None
        # The header property
        self._header: Optional[str] = None
        # The locked property
        self._locked: Optional[bool] = None
        # The note property
        self._note: Optional[str] = None
        # The source property
        self._source: Optional[source.Source] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> UpdateCredentialsBody:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: UpdateCredentialsBody
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return UpdateCredentialsBody()
    
    @property
    def discoverable(self,) -> Optional[bool]:
        """
        Gets the discoverable property value. The discoverable property
        Returns: Optional[bool]
        """
        return self._discoverable
    
    @discoverable.setter
    def discoverable(self,value: Optional[bool] = None) -> None:
        """
        Sets the discoverable property value. The discoverable property
        Args:
            value: Value to set for the discoverable property.
        """
        self._discoverable = value
    
    @property
    def display_name(self,) -> Optional[str]:
        """
        Gets the display_name property value. The display_name property
        Returns: Optional[str]
        """
        return self._display_name
    
    @display_name.setter
    def display_name(self,value: Optional[str] = None) -> None:
        """
        Sets the display_name property value. The display_name property
        Args:
            value: Value to set for the display_name property.
        """
        self._display_name = value
    
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
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "avatar": lambda n : setattr(self, 'avatar', n.get_str_value()),
            "bot": lambda n : setattr(self, 'bot', n.get_bool_value()),
            "discoverable": lambda n : setattr(self, 'discoverable', n.get_bool_value()),
            "display_name": lambda n : setattr(self, 'display_name', n.get_str_value()),
            "fields": lambda n : setattr(self, 'fields', n.get_collection_of_object_values(field.Field)),
            "header": lambda n : setattr(self, 'header', n.get_str_value()),
            "locked": lambda n : setattr(self, 'locked', n.get_bool_value()),
            "note": lambda n : setattr(self, 'note', n.get_str_value()),
            "source": lambda n : setattr(self, 'source', n.get_object_value(source.Source)),
        }
        return fields
    
    @property
    def header(self,) -> Optional[str]:
        """
        Gets the header property value. The header property
        Returns: Optional[str]
        """
        return self._header
    
    @header.setter
    def header(self,value: Optional[str] = None) -> None:
        """
        Sets the header property value. The header property
        Args:
            value: Value to set for the header property.
        """
        self._header = value
    
    @property
    def locked(self,) -> Optional[bool]:
        """
        Gets the locked property value. The locked property
        Returns: Optional[bool]
        """
        return self._locked
    
    @locked.setter
    def locked(self,value: Optional[bool] = None) -> None:
        """
        Sets the locked property value. The locked property
        Args:
            value: Value to set for the locked property.
        """
        self._locked = value
    
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
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("avatar", self.avatar)
        writer.write_bool_value("bot", self.bot)
        writer.write_bool_value("discoverable", self.discoverable)
        writer.write_str_value("display_name", self.display_name)
        writer.write_collection_of_object_values("fields", self.fields)
        writer.write_str_value("header", self.header)
        writer.write_bool_value("locked", self.locked)
        writer.write_str_value("note", self.note)
        writer.write_object_value("source", self.source)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def source(self,) -> Optional[source.Source]:
        """
        Gets the source property value. The source property
        Returns: Optional[source.Source]
        """
        return self._source
    
    @source.setter
    def source(self,value: Optional[source.Source] = None) -> None:
        """
        Sets the source property value. The source property
        Args:
            value: Value to set for the source property.
        """
        self._source = value
    

