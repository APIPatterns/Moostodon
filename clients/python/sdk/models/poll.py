from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

emoji = lazy_import('mastodon_client_lib.models.emoji')
poll_option = lazy_import('mastodon_client_lib.models.poll_option')

class Poll(AdditionalDataHolder, Parsable):
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
        Instantiates a new Poll and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The emojis property
        self._emojis: Optional[List[emoji.Emoji]] = None
        # The expired property
        self._expired: Optional[bool] = None
        # The expires_at property
        self._expires_at: Optional[str] = None
        # The id property
        self._id: Optional[str] = None
        # The multiple property
        self._multiple: Optional[bool] = None
        # The options property
        self._options: Optional[List[poll_option.PollOption]] = None
        # The own_votes property
        self._own_votes: Optional[List[int]] = None
        # The voted property
        self._voted: Optional[bool] = None
        # The voters_count property
        self._voters_count: Optional[int] = None
        # The votes_count property
        self._votes_count: Optional[int] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Poll:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Poll
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Poll()
    
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
    def expired(self,) -> Optional[bool]:
        """
        Gets the expired property value. The expired property
        Returns: Optional[bool]
        """
        return self._expired
    
    @expired.setter
    def expired(self,value: Optional[bool] = None) -> None:
        """
        Sets the expired property value. The expired property
        Args:
            value: Value to set for the expired property.
        """
        self._expired = value
    
    @property
    def expires_at(self,) -> Optional[str]:
        """
        Gets the expires_at property value. The expires_at property
        Returns: Optional[str]
        """
        return self._expires_at
    
    @expires_at.setter
    def expires_at(self,value: Optional[str] = None) -> None:
        """
        Sets the expires_at property value. The expires_at property
        Args:
            value: Value to set for the expires_at property.
        """
        self._expires_at = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "emojis": lambda n : setattr(self, 'emojis', n.get_collection_of_object_values(emoji.Emoji)),
            "expired": lambda n : setattr(self, 'expired', n.get_bool_value()),
            "expires_at": lambda n : setattr(self, 'expires_at', n.get_str_value()),
            "id": lambda n : setattr(self, 'id', n.get_str_value()),
            "multiple": lambda n : setattr(self, 'multiple', n.get_bool_value()),
            "options": lambda n : setattr(self, 'options', n.get_collection_of_object_values(poll_option.PollOption)),
            "own_votes": lambda n : setattr(self, 'own_votes', n.get_collection_of_primitive_values(int)),
            "voted": lambda n : setattr(self, 'voted', n.get_bool_value()),
            "voters_count": lambda n : setattr(self, 'voters_count', n.get_int_value()),
            "votes_count": lambda n : setattr(self, 'votes_count', n.get_int_value()),
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
    def multiple(self,) -> Optional[bool]:
        """
        Gets the multiple property value. The multiple property
        Returns: Optional[bool]
        """
        return self._multiple
    
    @multiple.setter
    def multiple(self,value: Optional[bool] = None) -> None:
        """
        Sets the multiple property value. The multiple property
        Args:
            value: Value to set for the multiple property.
        """
        self._multiple = value
    
    @property
    def options(self,) -> Optional[List[poll_option.PollOption]]:
        """
        Gets the options property value. The options property
        Returns: Optional[List[poll_option.PollOption]]
        """
        return self._options
    
    @options.setter
    def options(self,value: Optional[List[poll_option.PollOption]] = None) -> None:
        """
        Sets the options property value. The options property
        Args:
            value: Value to set for the options property.
        """
        self._options = value
    
    @property
    def own_votes(self,) -> Optional[List[int]]:
        """
        Gets the own_votes property value. The own_votes property
        Returns: Optional[List[int]]
        """
        return self._own_votes
    
    @own_votes.setter
    def own_votes(self,value: Optional[List[int]] = None) -> None:
        """
        Sets the own_votes property value. The own_votes property
        Args:
            value: Value to set for the own_votes property.
        """
        self._own_votes = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_collection_of_object_values("emojis", self.emojis)
        writer.write_bool_value("expired", self.expired)
        writer.write_str_value("expires_at", self.expires_at)
        writer.write_str_value("id", self.id)
        writer.write_bool_value("multiple", self.multiple)
        writer.write_collection_of_object_values("options", self.options)
        writer.write_collection_of_primitive_values("own_votes", self.own_votes)
        writer.write_bool_value("voted", self.voted)
        writer.write_int_value("voters_count", self.voters_count)
        writer.write_int_value("votes_count", self.votes_count)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def voted(self,) -> Optional[bool]:
        """
        Gets the voted property value. The voted property
        Returns: Optional[bool]
        """
        return self._voted
    
    @voted.setter
    def voted(self,value: Optional[bool] = None) -> None:
        """
        Sets the voted property value. The voted property
        Args:
            value: Value to set for the voted property.
        """
        self._voted = value
    
    @property
    def voters_count(self,) -> Optional[int]:
        """
        Gets the voters_count property value. The voters_count property
        Returns: Optional[int]
        """
        return self._voters_count
    
    @voters_count.setter
    def voters_count(self,value: Optional[int] = None) -> None:
        """
        Sets the voters_count property value. The voters_count property
        Args:
            value: Value to set for the voters_count property.
        """
        self._voters_count = value
    
    @property
    def votes_count(self,) -> Optional[int]:
        """
        Gets the votes_count property value. The votes_count property
        Returns: Optional[int]
        """
        return self._votes_count
    
    @votes_count.setter
    def votes_count(self,value: Optional[int] = None) -> None:
        """
        Sets the votes_count property value. The votes_count property
        Args:
            value: Value to set for the votes_count property.
        """
        self._votes_count = value
    

