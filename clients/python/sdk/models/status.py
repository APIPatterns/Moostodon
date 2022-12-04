from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import account, card, emoji, media_attachment, mention, poll, tag

class Status(AdditionalDataHolder, Parsable):
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
    
    @property
    def bookmarked(self,) -> Optional[bool]:
        """
        Gets the bookmarked property value. The bookmarked property
        Returns: Optional[bool]
        """
        return self._bookmarked
    
    @bookmarked.setter
    def bookmarked(self,value: Optional[bool] = None) -> None:
        """
        Sets the bookmarked property value. The bookmarked property
        Args:
            value: Value to set for the bookmarked property.
        """
        self._bookmarked = value
    
    @property
    def card(self,) -> Optional[card.Card]:
        """
        Gets the card property value. The card property
        Returns: Optional[card.Card]
        """
        return self._card
    
    @card.setter
    def card(self,value: Optional[card.Card] = None) -> None:
        """
        Sets the card property value. The card property
        Args:
            value: Value to set for the card property.
        """
        self._card = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new Status and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The account property
        self._account: Optional[account.Account] = None
        # The bookmarked property
        self._bookmarked: Optional[bool] = None
        # The card property
        self._card: Optional[card.Card] = None
        # The content property
        self._content: Optional[str] = None
        # The created_at property
        self._created_at: Optional[str] = None
        # The emojis property
        self._emojis: Optional[List[emoji.Emoji]] = None
        # The favourited property
        self._favourited: Optional[bool] = None
        # The favourites_count property
        self._favourites_count: Optional[int] = None
        # The id property
        self._id: Optional[str] = None
        # The in_reply_to_account_id property
        self._in_reply_to_account_id: Optional[str] = None
        # The in_reply_to_id property
        self._in_reply_to_id: Optional[str] = None
        # The language property
        self._language: Optional[str] = None
        # The media_attachments property
        self._media_attachments: Optional[List[media_attachment.MediaAttachment]] = None
        # The mentions property
        self._mentions: Optional[List[mention.Mention]] = None
        # The muted property
        self._muted: Optional[bool] = None
        # The pinned property
        self._pinned: Optional[bool] = None
        # The poll property
        self._poll: Optional[poll.Poll] = None
        # The reblog property
        self._reblog: Optional[Status] = None
        # The reblogged property
        self._reblogged: Optional[bool] = None
        # The reblogs_count property
        self._reblogs_count: Optional[int] = None
        # The replies_count property
        self._replies_count: Optional[int] = None
        # The sensitive property
        self._sensitive: Optional[bool] = None
        # The spoiler_text property
        self._spoiler_text: Optional[str] = None
        # The tags property
        self._tags: Optional[List[tag.Tag]] = None
        # The text property
        self._text: Optional[str] = None
        # The uri property
        self._uri: Optional[str] = None
        # The url property
        self._url: Optional[str] = None
        # The visibility property
        self._visibility: Optional[str] = None
    
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
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Status:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Status
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Status()
    
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
    def favourited(self,) -> Optional[bool]:
        """
        Gets the favourited property value. The favourited property
        Returns: Optional[bool]
        """
        return self._favourited
    
    @favourited.setter
    def favourited(self,value: Optional[bool] = None) -> None:
        """
        Sets the favourited property value. The favourited property
        Args:
            value: Value to set for the favourited property.
        """
        self._favourited = value
    
    @property
    def favourites_count(self,) -> Optional[int]:
        """
        Gets the favourites_count property value. The favourites_count property
        Returns: Optional[int]
        """
        return self._favourites_count
    
    @favourites_count.setter
    def favourites_count(self,value: Optional[int] = None) -> None:
        """
        Sets the favourites_count property value. The favourites_count property
        Args:
            value: Value to set for the favourites_count property.
        """
        self._favourites_count = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "account": lambda n : setattr(self, 'account', n.get_object_value(account.Account)),
            "bookmarked": lambda n : setattr(self, 'bookmarked', n.get_bool_value()),
            "card": lambda n : setattr(self, 'card', n.get_object_value(card.Card)),
            "content": lambda n : setattr(self, 'content', n.get_str_value()),
            "created_at": lambda n : setattr(self, 'created_at', n.get_str_value()),
            "emojis": lambda n : setattr(self, 'emojis', n.get_collection_of_object_values(emoji.Emoji)),
            "favourited": lambda n : setattr(self, 'favourited', n.get_bool_value()),
            "favourites_count": lambda n : setattr(self, 'favourites_count', n.get_int_value()),
            "id": lambda n : setattr(self, 'id', n.get_str_value()),
            "in_reply_to_account_id": lambda n : setattr(self, 'in_reply_to_account_id', n.get_str_value()),
            "in_reply_to_id": lambda n : setattr(self, 'in_reply_to_id', n.get_str_value()),
            "language": lambda n : setattr(self, 'language', n.get_str_value()),
            "media_attachments": lambda n : setattr(self, 'media_attachments', n.get_collection_of_object_values(media_attachment.MediaAttachment)),
            "mentions": lambda n : setattr(self, 'mentions', n.get_collection_of_object_values(mention.Mention)),
            "muted": lambda n : setattr(self, 'muted', n.get_bool_value()),
            "pinned": lambda n : setattr(self, 'pinned', n.get_bool_value()),
            "poll": lambda n : setattr(self, 'poll', n.get_object_value(poll.Poll)),
            "reblog": lambda n : setattr(self, 'reblog', n.get_object_value(Status)),
            "reblogged": lambda n : setattr(self, 'reblogged', n.get_bool_value()),
            "reblogs_count": lambda n : setattr(self, 'reblogs_count', n.get_int_value()),
            "replies_count": lambda n : setattr(self, 'replies_count', n.get_int_value()),
            "sensitive": lambda n : setattr(self, 'sensitive', n.get_bool_value()),
            "spoiler_text": lambda n : setattr(self, 'spoiler_text', n.get_str_value()),
            "tags": lambda n : setattr(self, 'tags', n.get_collection_of_object_values(tag.Tag)),
            "text": lambda n : setattr(self, 'text', n.get_str_value()),
            "uri": lambda n : setattr(self, 'uri', n.get_str_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
            "visibility": lambda n : setattr(self, 'visibility', n.get_str_value()),
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
    def in_reply_to_account_id(self,) -> Optional[str]:
        """
        Gets the in_reply_to_account_id property value. The in_reply_to_account_id property
        Returns: Optional[str]
        """
        return self._in_reply_to_account_id
    
    @in_reply_to_account_id.setter
    def in_reply_to_account_id(self,value: Optional[str] = None) -> None:
        """
        Sets the in_reply_to_account_id property value. The in_reply_to_account_id property
        Args:
            value: Value to set for the in_reply_to_account_id property.
        """
        self._in_reply_to_account_id = value
    
    @property
    def in_reply_to_id(self,) -> Optional[str]:
        """
        Gets the in_reply_to_id property value. The in_reply_to_id property
        Returns: Optional[str]
        """
        return self._in_reply_to_id
    
    @in_reply_to_id.setter
    def in_reply_to_id(self,value: Optional[str] = None) -> None:
        """
        Sets the in_reply_to_id property value. The in_reply_to_id property
        Args:
            value: Value to set for the in_reply_to_id property.
        """
        self._in_reply_to_id = value
    
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
    def mentions(self,) -> Optional[List[mention.Mention]]:
        """
        Gets the mentions property value. The mentions property
        Returns: Optional[List[mention.Mention]]
        """
        return self._mentions
    
    @mentions.setter
    def mentions(self,value: Optional[List[mention.Mention]] = None) -> None:
        """
        Sets the mentions property value. The mentions property
        Args:
            value: Value to set for the mentions property.
        """
        self._mentions = value
    
    @property
    def muted(self,) -> Optional[bool]:
        """
        Gets the muted property value. The muted property
        Returns: Optional[bool]
        """
        return self._muted
    
    @muted.setter
    def muted(self,value: Optional[bool] = None) -> None:
        """
        Sets the muted property value. The muted property
        Args:
            value: Value to set for the muted property.
        """
        self._muted = value
    
    @property
    def pinned(self,) -> Optional[bool]:
        """
        Gets the pinned property value. The pinned property
        Returns: Optional[bool]
        """
        return self._pinned
    
    @pinned.setter
    def pinned(self,value: Optional[bool] = None) -> None:
        """
        Sets the pinned property value. The pinned property
        Args:
            value: Value to set for the pinned property.
        """
        self._pinned = value
    
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
    def reblog(self,) -> Optional[Status]:
        """
        Gets the reblog property value. The reblog property
        Returns: Optional[Status]
        """
        return self._reblog
    
    @reblog.setter
    def reblog(self,value: Optional[Status] = None) -> None:
        """
        Sets the reblog property value. The reblog property
        Args:
            value: Value to set for the reblog property.
        """
        self._reblog = value
    
    @property
    def reblogged(self,) -> Optional[bool]:
        """
        Gets the reblogged property value. The reblogged property
        Returns: Optional[bool]
        """
        return self._reblogged
    
    @reblogged.setter
    def reblogged(self,value: Optional[bool] = None) -> None:
        """
        Sets the reblogged property value. The reblogged property
        Args:
            value: Value to set for the reblogged property.
        """
        self._reblogged = value
    
    @property
    def reblogs_count(self,) -> Optional[int]:
        """
        Gets the reblogs_count property value. The reblogs_count property
        Returns: Optional[int]
        """
        return self._reblogs_count
    
    @reblogs_count.setter
    def reblogs_count(self,value: Optional[int] = None) -> None:
        """
        Sets the reblogs_count property value. The reblogs_count property
        Args:
            value: Value to set for the reblogs_count property.
        """
        self._reblogs_count = value
    
    @property
    def replies_count(self,) -> Optional[int]:
        """
        Gets the replies_count property value. The replies_count property
        Returns: Optional[int]
        """
        return self._replies_count
    
    @replies_count.setter
    def replies_count(self,value: Optional[int] = None) -> None:
        """
        Sets the replies_count property value. The replies_count property
        Args:
            value: Value to set for the replies_count property.
        """
        self._replies_count = value
    
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
        writer.write_bool_value("bookmarked", self.bookmarked)
        writer.write_object_value("card", self.card)
        writer.write_str_value("content", self.content)
        writer.write_str_value("created_at", self.created_at)
        writer.write_collection_of_object_values("emojis", self.emojis)
        writer.write_bool_value("favourited", self.favourited)
        writer.write_int_value("favourites_count", self.favourites_count)
        writer.write_str_value("id", self.id)
        writer.write_str_value("in_reply_to_account_id", self.in_reply_to_account_id)
        writer.write_str_value("in_reply_to_id", self.in_reply_to_id)
        writer.write_str_value("language", self.language)
        writer.write_collection_of_object_values("media_attachments", self.media_attachments)
        writer.write_collection_of_object_values("mentions", self.mentions)
        writer.write_bool_value("muted", self.muted)
        writer.write_bool_value("pinned", self.pinned)
        writer.write_object_value("poll", self.poll)
        writer.write_object_value("reblog", self.reblog)
        writer.write_bool_value("reblogged", self.reblogged)
        writer.write_int_value("reblogs_count", self.reblogs_count)
        writer.write_int_value("replies_count", self.replies_count)
        writer.write_bool_value("sensitive", self.sensitive)
        writer.write_str_value("spoiler_text", self.spoiler_text)
        writer.write_collection_of_object_values("tags", self.tags)
        writer.write_str_value("text", self.text)
        writer.write_str_value("uri", self.uri)
        writer.write_str_value("url", self.url)
        writer.write_str_value("visibility", self.visibility)
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
    
    @property
    def tags(self,) -> Optional[List[tag.Tag]]:
        """
        Gets the tags property value. The tags property
        Returns: Optional[List[tag.Tag]]
        """
        return self._tags
    
    @tags.setter
    def tags(self,value: Optional[List[tag.Tag]] = None) -> None:
        """
        Sets the tags property value. The tags property
        Args:
            value: Value to set for the tags property.
        """
        self._tags = value
    
    @property
    def text(self,) -> Optional[str]:
        """
        Gets the text property value. The text property
        Returns: Optional[str]
        """
        return self._text
    
    @text.setter
    def text(self,value: Optional[str] = None) -> None:
        """
        Sets the text property value. The text property
        Args:
            value: Value to set for the text property.
        """
        self._text = value
    
    @property
    def uri(self,) -> Optional[str]:
        """
        Gets the uri property value. The uri property
        Returns: Optional[str]
        """
        return self._uri
    
    @uri.setter
    def uri(self,value: Optional[str] = None) -> None:
        """
        Sets the uri property value. The uri property
        Args:
            value: Value to set for the uri property.
        """
        self._uri = value
    
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
    def visibility(self,) -> Optional[str]:
        """
        Gets the visibility property value. The visibility property
        Returns: Optional[str]
        """
        return self._visibility
    
    @visibility.setter
    def visibility(self,value: Optional[str] = None) -> None:
        """
        Sets the visibility property value. The visibility property
        Args:
            value: Value to set for the visibility property.
        """
        self._visibility = value
    

