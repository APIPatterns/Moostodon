from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import account, emoji, media_attachment, poll

class StatusEdit(AdditionalDataHolder, Parsable):
    @property
    def account(self,) -> Optional[account.Account]:
        """
        Gets the account property value. The account property
        Returns: Optional[account.Account]
        """
        return self._account
    
    @account.setter
    def account(self,value: Optional[account.Account] = None) -> None:
        """
        Sets the account property value. The account property
        Args:
            value: Value to set for the account property.
        """
        self._account = value
    
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
        Instantiates a new StatusEdit and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The account property
        self._account: Optional[account.Account] = None
        # The content property
        self._content: Optional[str] = None
        # The created_at property
        self._created_at: Optional[str] = None
        # The emojis property
        self._emojis: Optional[List[emoji.Emoji]] = None
        # The media_attachments property
        self._media_attachments: Optional[List[media_attachment.MediaAttachment]] = None
        # The poll property
        self._poll: Optional[poll.Poll] = None
        # The sensitive property
        self._sensitive: Optional[bool] = None
        # The spoiler_text property
        self._spoiler_text: Optional[str] = None
    
    @property
    def content(self,) -> Optional[str]:
        """
        Gets the content property value. The content property
        Returns: Optional[str]
        """
        return self._content
    
    @content.setter
    def content(self,value: Optional[str] = None) -> None:
        """
        Sets the content property value. The content property
        Args:
            value: Value to set for the content property.
        """
        self._content = value
    
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
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> StatusEdit:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: StatusEdit
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return StatusEdit()
    
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
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "account": lambda n : setattr(self, 'account', n.get_object_value(account.Account)),
            "content": lambda n : setattr(self, 'content', n.get_str_value()),
            "created_at": lambda n : setattr(self, 'created_at', n.get_str_value()),
            "emojis": lambda n : setattr(self, 'emojis', n.get_collection_of_object_values(emoji.Emoji)),
            "media_attachments": lambda n : setattr(self, 'media_attachments', n.get_collection_of_object_values(media_attachment.MediaAttachment)),
            "poll": lambda n : setattr(self, 'poll', n.get_object_value(poll.Poll)),
            "sensitive": lambda n : setattr(self, 'sensitive', n.get_bool_value()),
            "spoiler_text": lambda n : setattr(self, 'spoiler_text', n.get_str_value()),
        }
        return fields
    
    @property
    def media_attachments(self,) -> Optional[List[media_attachment.MediaAttachment]]:
        """
        Gets the media_attachments property value. The media_attachments property
        Returns: Optional[List[media_attachment.MediaAttachment]]
        """
        return self._media_attachments
    
    @media_attachments.setter
    def media_attachments(self,value: Optional[List[media_attachment.MediaAttachment]] = None) -> None:
        """
        Sets the media_attachments property value. The media_attachments property
        Args:
            value: Value to set for the media_attachments property.
        """
        self._media_attachments = value
    
    @property
    def poll(self,) -> Optional[poll.Poll]:
        """
        Gets the poll property value. The poll property
        Returns: Optional[poll.Poll]
        """
        return self._poll
    
    @poll.setter
    def poll(self,value: Optional[poll.Poll] = None) -> None:
        """
        Sets the poll property value. The poll property
        Args:
            value: Value to set for the poll property.
        """
        self._poll = value
    
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
        writer.write_object_value("account", self.account)
        writer.write_str_value("content", self.content)
        writer.write_str_value("created_at", self.created_at)
        writer.write_collection_of_object_values("emojis", self.emojis)
        writer.write_collection_of_object_values("media_attachments", self.media_attachments)
        writer.write_object_value("poll", self.poll)
        writer.write_bool_value("sensitive", self.sensitive)
        writer.write_str_value("spoiler_text", self.spoiler_text)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def spoiler_text(self,) -> Optional[str]:
        """
        Gets the spoiler_text property value. The spoiler_text property
        Returns: Optional[str]
        """
        return self._spoiler_text
    
    @spoiler_text.setter
    def spoiler_text(self,value: Optional[str] = None) -> None:
        """
        Sets the spoiler_text property value. The spoiler_text property
        Args:
            value: Value to set for the spoiler_text property.
        """
        self._spoiler_text = value
    

