from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import emoji, field, source

class Account(AdditionalDataHolder, Parsable):
    @property
    def acct(self,) -> Optional[str]:
        """
        Gets the acct property value. The acct property
        Returns: Optional[str]
        """
        return self._acct
    
    @acct.setter
    def acct(self,value: Optional[str] = None) -> None:
        """
        Sets the acct property value. The acct property
        Args:
            value: Value to set for the acct property.
        """
        self._acct = value
    
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
    def avatar_static(self,) -> Optional[str]:
        """
        Gets the avatar_static property value. The avatar_static property
        Returns: Optional[str]
        """
        return self._avatar_static
    
    @avatar_static.setter
    def avatar_static(self,value: Optional[str] = None) -> None:
        """
        Sets the avatar_static property value. The avatar_static property
        Args:
            value: Value to set for the avatar_static property.
        """
        self._avatar_static = value
    
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
        Instantiates a new Account and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The acct property
        self._acct: Optional[str] = None
        # The avatar property
        self._avatar: Optional[str] = None
        # The avatar_static property
        self._avatar_static: Optional[str] = None
        # The bot property
        self._bot: Optional[bool] = None
        # The created_at property
        self._created_at: Optional[str] = None
        # The discoverable property
        self._discoverable: Optional[bool] = None
        # The display_name property
        self._display_name: Optional[str] = None
        # The emojis property
        self._emojis: Optional[List[emoji.Emoji]] = None
        # The fields property
        self._fields: Optional[List[field.Field]] = None
        # The followers_count property
        self._followers_count: Optional[int] = None
        # The following_count property
        self._following_count: Optional[int] = None
        # The header property
        self._header: Optional[str] = None
        # The header_static property
        self._header_static: Optional[str] = None
        # The id property
        self._id: Optional[str] = None
        # The last_status_at property
        self._last_status_at: Optional[str] = None
        # The locked property
        self._locked: Optional[bool] = None
        # The moved property
        self._moved: Optional[Account] = None
        # The mute_expires_at property
        self._mute_expires_at: Optional[str] = None
        # The note property
        self._note: Optional[str] = None
        # The souce property
        self._souce: Optional[source.Source] = None
        # The statuses_count property
        self._statuses_count: Optional[int] = None
        # The suspended property
        self._suspended: Optional[bool] = None
        # The url property
        self._url: Optional[str] = None
        # The username property
        self._username: Optional[str] = None
    
    @property
    def created_at(self,) -> Optional[str]:
        """
        Gets the created_at property value. The created_at property
        Returns: Optional[str]
        """
        return self._created_at
    
    @created_at.setter
    def created_at(self,value: Optional[str] = None) -> None:
        """
        Sets the created_at property value. The created_at property
        Args:
            value: Value to set for the created_at property.
        """
        self._created_at = value
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Account:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Account
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Account()
    
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
    def emojis(self,) -> Optional[List[emoji.Emoji]]:
        """
        Gets the emojis property value. The emojis property
        Returns: Optional[List[emoji.Emoji]]
        """
        return self._emojis
    
    @emojis.setter
    def emojis(self,value: Optional[List[emoji.Emoji]] = None) -> None:
        """
        Sets the emojis property value. The emojis property
        Args:
            value: Value to set for the emojis property.
        """
        self._emojis = value
    
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
    def followers_count(self,) -> Optional[int]:
        """
        Gets the followers_count property value. The followers_count property
        Returns: Optional[int]
        """
        return self._followers_count
    
    @followers_count.setter
    def followers_count(self,value: Optional[int] = None) -> None:
        """
        Sets the followers_count property value. The followers_count property
        Args:
            value: Value to set for the followers_count property.
        """
        self._followers_count = value
    
    @property
    def following_count(self,) -> Optional[int]:
        """
        Gets the following_count property value. The following_count property
        Returns: Optional[int]
        """
        return self._following_count
    
    @following_count.setter
    def following_count(self,value: Optional[int] = None) -> None:
        """
        Sets the following_count property value. The following_count property
        Args:
            value: Value to set for the following_count property.
        """
        self._following_count = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "acct": lambda n : setattr(self, 'acct', n.get_str_value()),
            "avatar": lambda n : setattr(self, 'avatar', n.get_str_value()),
            "avatar_static": lambda n : setattr(self, 'avatar_static', n.get_str_value()),
            "bot": lambda n : setattr(self, 'bot', n.get_bool_value()),
            "created_at": lambda n : setattr(self, 'created_at', n.get_str_value()),
            "discoverable": lambda n : setattr(self, 'discoverable', n.get_bool_value()),
            "display_name": lambda n : setattr(self, 'display_name', n.get_str_value()),
            "emojis": lambda n : setattr(self, 'emojis', n.get_collection_of_object_values(emoji.Emoji)),
            "fields": lambda n : setattr(self, 'fields', n.get_collection_of_object_values(field.Field)),
            "followers_count": lambda n : setattr(self, 'followers_count', n.get_int_value()),
            "following_count": lambda n : setattr(self, 'following_count', n.get_int_value()),
            "header": lambda n : setattr(self, 'header', n.get_str_value()),
            "header_static": lambda n : setattr(self, 'header_static', n.get_str_value()),
            "id": lambda n : setattr(self, 'id', n.get_str_value()),
            "last_status_at": lambda n : setattr(self, 'last_status_at', n.get_str_value()),
            "locked": lambda n : setattr(self, 'locked', n.get_bool_value()),
            "moved": lambda n : setattr(self, 'moved', n.get_object_value(Account)),
            "mute_expires_at": lambda n : setattr(self, 'mute_expires_at', n.get_str_value()),
            "note": lambda n : setattr(self, 'note', n.get_str_value()),
            "souce": lambda n : setattr(self, 'souce', n.get_object_value(source.Source)),
            "statuses_count": lambda n : setattr(self, 'statuses_count', n.get_int_value()),
            "suspended": lambda n : setattr(self, 'suspended', n.get_bool_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
            "username": lambda n : setattr(self, 'username', n.get_str_value()),
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
    def header_static(self,) -> Optional[str]:
        """
        Gets the header_static property value. The header_static property
        Returns: Optional[str]
        """
        return self._header_static
    
    @header_static.setter
    def header_static(self,value: Optional[str] = None) -> None:
        """
        Sets the header_static property value. The header_static property
        Args:
            value: Value to set for the header_static property.
        """
        self._header_static = value
    
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
    def last_status_at(self,) -> Optional[str]:
        """
        Gets the last_status_at property value. The last_status_at property
        Returns: Optional[str]
        """
        return self._last_status_at
    
    @last_status_at.setter
    def last_status_at(self,value: Optional[str] = None) -> None:
        """
        Sets the last_status_at property value. The last_status_at property
        Args:
            value: Value to set for the last_status_at property.
        """
        self._last_status_at = value
    
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
    def moved(self,) -> Optional[Account]:
        """
        Gets the moved property value. The moved property
        Returns: Optional[Account]
        """
        return self._moved
    
    @moved.setter
    def moved(self,value: Optional[Account] = None) -> None:
        """
        Sets the moved property value. The moved property
        Args:
            value: Value to set for the moved property.
        """
        self._moved = value
    
    @property
    def mute_expires_at(self,) -> Optional[str]:
        """
        Gets the mute_expires_at property value. The mute_expires_at property
        Returns: Optional[str]
        """
        return self._mute_expires_at
    
    @mute_expires_at.setter
    def mute_expires_at(self,value: Optional[str] = None) -> None:
        """
        Sets the mute_expires_at property value. The mute_expires_at property
        Args:
            value: Value to set for the mute_expires_at property.
        """
        self._mute_expires_at = value
    
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
        writer.write_str_value("acct", self.acct)
        writer.write_str_value("avatar", self.avatar)
        writer.write_str_value("avatar_static", self.avatar_static)
        writer.write_bool_value("bot", self.bot)
        writer.write_str_value("created_at", self.created_at)
        writer.write_bool_value("discoverable", self.discoverable)
        writer.write_str_value("display_name", self.display_name)
        writer.write_collection_of_object_values("emojis", self.emojis)
        writer.write_collection_of_object_values("fields", self.fields)
        writer.write_int_value("followers_count", self.followers_count)
        writer.write_int_value("following_count", self.following_count)
        writer.write_str_value("header", self.header)
        writer.write_str_value("header_static", self.header_static)
        writer.write_str_value("id", self.id)
        writer.write_str_value("last_status_at", self.last_status_at)
        writer.write_bool_value("locked", self.locked)
        writer.write_object_value("moved", self.moved)
        writer.write_str_value("mute_expires_at", self.mute_expires_at)
        writer.write_str_value("note", self.note)
        writer.write_object_value("souce", self.souce)
        writer.write_int_value("statuses_count", self.statuses_count)
        writer.write_bool_value("suspended", self.suspended)
        writer.write_str_value("url", self.url)
        writer.write_str_value("username", self.username)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def souce(self,) -> Optional[source.Source]:
        """
        Gets the souce property value. The souce property
        Returns: Optional[source.Source]
        """
        return self._souce
    
    @souce.setter
    def souce(self,value: Optional[source.Source] = None) -> None:
        """
        Sets the souce property value. The souce property
        Args:
            value: Value to set for the souce property.
        """
        self._souce = value
    
    @property
    def statuses_count(self,) -> Optional[int]:
        """
        Gets the statuses_count property value. The statuses_count property
        Returns: Optional[int]
        """
        return self._statuses_count
    
    @statuses_count.setter
    def statuses_count(self,value: Optional[int] = None) -> None:
        """
        Sets the statuses_count property value. The statuses_count property
        Args:
            value: Value to set for the statuses_count property.
        """
        self._statuses_count = value
    
    @property
    def suspended(self,) -> Optional[bool]:
        """
        Gets the suspended property value. The suspended property
        Returns: Optional[bool]
        """
        return self._suspended
    
    @suspended.setter
    def suspended(self,value: Optional[bool] = None) -> None:
        """
        Sets the suspended property value. The suspended property
        Args:
            value: Value to set for the suspended property.
        """
        self._suspended = value
    
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
    def username(self,) -> Optional[str]:
        """
        Gets the username property value. The username property
        Returns: Optional[str]
        """
        return self._username
    
    @username.setter
    def username(self,value: Optional[str] = None) -> None:
        """
        Sets the username property value. The username property
        Args:
            value: Value to set for the username property.
        """
        self._username = value
    

