from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class Relationship(AdditionalDataHolder, Parsable):
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
    def blocked_by(self,) -> Optional[bool]:
        """
        Gets the blocked_by property value. The blocked_by property
        Returns: Optional[bool]
        """
        return self._blocked_by
    
    @blocked_by.setter
    def blocked_by(self,value: Optional[bool] = None) -> None:
        """
        Sets the blocked_by property value. The blocked_by property
        Args:
            value: Value to set for the blocked_by property.
        """
        self._blocked_by = value
    
    @property
    def blocking(self,) -> Optional[bool]:
        """
        Gets the blocking property value. The blocking property
        Returns: Optional[bool]
        """
        return self._blocking
    
    @blocking.setter
    def blocking(self,value: Optional[bool] = None) -> None:
        """
        Sets the blocking property value. The blocking property
        Args:
            value: Value to set for the blocking property.
        """
        self._blocking = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new Relationship and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The blocked_by property
        self._blocked_by: Optional[bool] = None
        # The blocking property
        self._blocking: Optional[bool] = None
        # The domain_blocking property
        self._domain_blocking: Optional[bool] = None
        # The endorsed property
        self._endorsed: Optional[bool] = None
        # The followed_by property
        self._followed_by: Optional[bool] = None
        # The following property
        self._following: Optional[bool] = None
        # The id property
        self._id: Optional[str] = None
        # The languages property
        self._languages: Optional[List[str]] = None
        # The muting property
        self._muting: Optional[bool] = None
        # The muting_notifications property
        self._muting_notifications: Optional[bool] = None
        # The note property
        self._note: Optional[str] = None
        # The notifying property
        self._notifying: Optional[bool] = None
        # The requested property
        self._requested: Optional[bool] = None
        # The showing_reblogs property
        self._showing_reblogs: Optional[bool] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Relationship:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Relationship
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Relationship()
    
    @property
    def domain_blocking(self,) -> Optional[bool]:
        """
        Gets the domain_blocking property value. The domain_blocking property
        Returns: Optional[bool]
        """
        return self._domain_blocking
    
    @domain_blocking.setter
    def domain_blocking(self,value: Optional[bool] = None) -> None:
        """
        Sets the domain_blocking property value. The domain_blocking property
        Args:
            value: Value to set for the domain_blocking property.
        """
        self._domain_blocking = value
    
    @property
    def endorsed(self,) -> Optional[bool]:
        """
        Gets the endorsed property value. The endorsed property
        Returns: Optional[bool]
        """
        return self._endorsed
    
    @endorsed.setter
    def endorsed(self,value: Optional[bool] = None) -> None:
        """
        Sets the endorsed property value. The endorsed property
        Args:
            value: Value to set for the endorsed property.
        """
        self._endorsed = value
    
    @property
    def followed_by(self,) -> Optional[bool]:
        """
        Gets the followed_by property value. The followed_by property
        Returns: Optional[bool]
        """
        return self._followed_by
    
    @followed_by.setter
    def followed_by(self,value: Optional[bool] = None) -> None:
        """
        Sets the followed_by property value. The followed_by property
        Args:
            value: Value to set for the followed_by property.
        """
        self._followed_by = value
    
    @property
    def following(self,) -> Optional[bool]:
        """
        Gets the following property value. The following property
        Returns: Optional[bool]
        """
        return self._following
    
    @following.setter
    def following(self,value: Optional[bool] = None) -> None:
        """
        Sets the following property value. The following property
        Args:
            value: Value to set for the following property.
        """
        self._following = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "blocked_by": lambda n : setattr(self, 'blocked_by', n.get_bool_value()),
            "blocking": lambda n : setattr(self, 'blocking', n.get_bool_value()),
            "domain_blocking": lambda n : setattr(self, 'domain_blocking', n.get_bool_value()),
            "endorsed": lambda n : setattr(self, 'endorsed', n.get_bool_value()),
            "followed_by": lambda n : setattr(self, 'followed_by', n.get_bool_value()),
            "following": lambda n : setattr(self, 'following', n.get_bool_value()),
            "id": lambda n : setattr(self, 'id', n.get_str_value()),
            "languages": lambda n : setattr(self, 'languages', n.get_collection_of_primitive_values(str)),
            "muting": lambda n : setattr(self, 'muting', n.get_bool_value()),
            "muting_notifications": lambda n : setattr(self, 'muting_notifications', n.get_bool_value()),
            "note": lambda n : setattr(self, 'note', n.get_str_value()),
            "notifying": lambda n : setattr(self, 'notifying', n.get_bool_value()),
            "requested": lambda n : setattr(self, 'requested', n.get_bool_value()),
            "showing_reblogs": lambda n : setattr(self, 'showing_reblogs', n.get_bool_value()),
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
    def languages(self,) -> Optional[List[str]]:
        """
        Gets the languages property value. The languages property
        Returns: Optional[List[str]]
        """
        return self._languages
    
    @languages.setter
    def languages(self,value: Optional[List[str]] = None) -> None:
        """
        Sets the languages property value. The languages property
        Args:
            value: Value to set for the languages property.
        """
        self._languages = value
    
    @property
    def muting(self,) -> Optional[bool]:
        """
        Gets the muting property value. The muting property
        Returns: Optional[bool]
        """
        return self._muting
    
    @muting.setter
    def muting(self,value: Optional[bool] = None) -> None:
        """
        Sets the muting property value. The muting property
        Args:
            value: Value to set for the muting property.
        """
        self._muting = value
    
    @property
    def muting_notifications(self,) -> Optional[bool]:
        """
        Gets the muting_notifications property value. The muting_notifications property
        Returns: Optional[bool]
        """
        return self._muting_notifications
    
    @muting_notifications.setter
    def muting_notifications(self,value: Optional[bool] = None) -> None:
        """
        Sets the muting_notifications property value. The muting_notifications property
        Args:
            value: Value to set for the muting_notifications property.
        """
        self._muting_notifications = value
    
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
    def notifying(self,) -> Optional[bool]:
        """
        Gets the notifying property value. The notifying property
        Returns: Optional[bool]
        """
        return self._notifying
    
    @notifying.setter
    def notifying(self,value: Optional[bool] = None) -> None:
        """
        Sets the notifying property value. The notifying property
        Args:
            value: Value to set for the notifying property.
        """
        self._notifying = value
    
    @property
    def requested(self,) -> Optional[bool]:
        """
        Gets the requested property value. The requested property
        Returns: Optional[bool]
        """
        return self._requested
    
    @requested.setter
    def requested(self,value: Optional[bool] = None) -> None:
        """
        Sets the requested property value. The requested property
        Args:
            value: Value to set for the requested property.
        """
        self._requested = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_bool_value("blocked_by", self.blocked_by)
        writer.write_bool_value("blocking", self.blocking)
        writer.write_bool_value("domain_blocking", self.domain_blocking)
        writer.write_bool_value("endorsed", self.endorsed)
        writer.write_bool_value("followed_by", self.followed_by)
        writer.write_bool_value("following", self.following)
        writer.write_str_value("id", self.id)
        writer.write_collection_of_primitive_values("languages", self.languages)
        writer.write_bool_value("muting", self.muting)
        writer.write_bool_value("muting_notifications", self.muting_notifications)
        writer.write_str_value("note", self.note)
        writer.write_bool_value("notifying", self.notifying)
        writer.write_bool_value("requested", self.requested)
        writer.write_bool_value("showing_reblogs", self.showing_reblogs)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def showing_reblogs(self,) -> Optional[bool]:
        """
        Gets the showing_reblogs property value. The showing_reblogs property
        Returns: Optional[bool]
        """
        return self._showing_reblogs
    
    @showing_reblogs.setter
    def showing_reblogs(self,value: Optional[bool] = None) -> None:
        """
        Sets the showing_reblogs property value. The showing_reblogs property
        Args:
            value: Value to set for the showing_reblogs property.
        """
        self._showing_reblogs = value
    

