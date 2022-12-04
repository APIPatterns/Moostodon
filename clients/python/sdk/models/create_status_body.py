from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import visibility

class CreateStatusBody(AdditionalDataHolder, Parsable):
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
        Instantiates a new CreateStatusBody and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The in_reply_to_id property
        self._in_reply_to_id: Optional[str] = None
        # The language property
        self._language: Optional[str] = None
        # The media_Ids property
        self._media_ids: Optional[List[str]] = None
        # The pollExpires_in property
        self._poll_expires_in: Optional[int] = None
        # The pollHide_totals property
        self._poll_hide_totals: Optional[bool] = None
        # The pollMultiple property
        self._poll_multiple: Optional[bool] = None
        # The pollOptions property
        self._poll_options: Optional[List[str]] = None
        # The scheduled_at property
        self._scheduled_at: Optional[str] = None
        # The sensitive property
        self._sensitive: Optional[bool] = None
        # The spoiler_text property
        self._spoiler_text: Optional[str] = None
        # The status property
        self._status: Optional[str] = None
        # The visibility property
        self._visibility: Optional[visibility.Visibility] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> CreateStatusBody:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: CreateStatusBody
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return CreateStatusBody()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "in_reply_to_id": lambda n : setattr(self, 'in_reply_to_id', n.get_str_value()),
            "language": lambda n : setattr(self, 'language', n.get_str_value()),
            "media_ids": lambda n : setattr(self, 'media_ids', n.get_collection_of_primitive_values(str)),
            "poll[expires_in]": lambda n : setattr(self, 'poll_expires_in', n.get_int_value()),
            "poll[hide_totals]": lambda n : setattr(self, 'poll_hide_totals', n.get_bool_value()),
            "poll[multiple]": lambda n : setattr(self, 'poll_multiple', n.get_bool_value()),
            "poll[options]": lambda n : setattr(self, 'poll_options', n.get_collection_of_primitive_values(str)),
            "scheduled_at": lambda n : setattr(self, 'scheduled_at', n.get_str_value()),
            "sensitive": lambda n : setattr(self, 'sensitive', n.get_bool_value()),
            "spoiler_text": lambda n : setattr(self, 'spoiler_text', n.get_str_value()),
            "status": lambda n : setattr(self, 'status', n.get_str_value()),
            "visibility": lambda n : setattr(self, 'visibility', n.get_enum_value(visibility.Visibility)),
        }
        return fields
    
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
    def media_ids(self,) -> Optional[List[str]]:
        """
        Gets the media_Ids property value. The media_Ids property
        Returns: Optional[List[str]]
        """
        return self._media_ids
    
    @media_ids.setter
    def media_ids(self,value: Optional[List[str]] = None) -> None:
        """
        Sets the media_Ids property value. The media_Ids property
        Args:
            value: Value to set for the media_Ids property.
        """
        self._media_ids = value
    
    @property
    def poll_expires_in(self,) -> Optional[int]:
        """
        Gets the poll[expires_in] property value. The pollExpires_in property
        Returns: Optional[int]
        """
        return self._poll_expires_in
    
    @poll_expires_in.setter
    def poll_expires_in(self,value: Optional[int] = None) -> None:
        """
        Sets the poll[expires_in] property value. The pollExpires_in property
        Args:
            value: Value to set for the pollExpires_in property.
        """
        self._poll_expires_in = value
    
    @property
    def poll_hide_totals(self,) -> Optional[bool]:
        """
        Gets the poll[hide_totals] property value. The pollHide_totals property
        Returns: Optional[bool]
        """
        return self._poll_hide_totals
    
    @poll_hide_totals.setter
    def poll_hide_totals(self,value: Optional[bool] = None) -> None:
        """
        Sets the poll[hide_totals] property value. The pollHide_totals property
        Args:
            value: Value to set for the pollHide_totals property.
        """
        self._poll_hide_totals = value
    
    @property
    def poll_multiple(self,) -> Optional[bool]:
        """
        Gets the poll[multiple] property value. The pollMultiple property
        Returns: Optional[bool]
        """
        return self._poll_multiple
    
    @poll_multiple.setter
    def poll_multiple(self,value: Optional[bool] = None) -> None:
        """
        Sets the poll[multiple] property value. The pollMultiple property
        Args:
            value: Value to set for the pollMultiple property.
        """
        self._poll_multiple = value
    
    @property
    def poll_options(self,) -> Optional[List[str]]:
        """
        Gets the poll[options] property value. The pollOptions property
        Returns: Optional[List[str]]
        """
        return self._poll_options
    
    @poll_options.setter
    def poll_options(self,value: Optional[List[str]] = None) -> None:
        """
        Sets the poll[options] property value. The pollOptions property
        Args:
            value: Value to set for the pollOptions property.
        """
        self._poll_options = value
    
    @property
    def scheduled_at(self,) -> Optional[str]:
        """
        Gets the scheduled_at property value. The scheduled_at property
        Returns: Optional[str]
        """
        return self._scheduled_at
    
    @scheduled_at.setter
    def scheduled_at(self,value: Optional[str] = None) -> None:
        """
        Sets the scheduled_at property value. The scheduled_at property
        Args:
            value: Value to set for the scheduled_at property.
        """
        self._scheduled_at = value
    
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
        writer.write_str_value("in_reply_to_id", self.in_reply_to_id)
        writer.write_str_value("language", self.language)
        writer.write_collection_of_primitive_values("media_Ids", self.media_ids)
        writer.write_int_value("poll[expires_in]", self.poll_expires_in)
        writer.write_bool_value("poll[hide_totals]", self.poll_hide_totals)
        writer.write_bool_value("poll[multiple]", self.poll_multiple)
        writer.write_collection_of_primitive_values("poll[options]", self.poll_options)
        writer.write_str_value("scheduled_at", self.scheduled_at)
        writer.write_bool_value("sensitive", self.sensitive)
        writer.write_str_value("spoiler_text", self.spoiler_text)
        writer.write_str_value("status", self.status)
        writer.write_enum_value("visibility", self.visibility)
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
    def status(self,) -> Optional[str]:
        """
        Gets the status property value. The status property
        Returns: Optional[str]
        """
        return self._status
    
    @status.setter
    def status(self,value: Optional[str] = None) -> None:
        """
        Sets the status property value. The status property
        Args:
            value: Value to set for the status property.
        """
        self._status = value
    
    @property
    def visibility(self,) -> Optional[visibility.Visibility]:
        """
        Gets the visibility property value. The visibility property
        Returns: Optional[visibility.Visibility]
        """
        return self._visibility
    
    @visibility.setter
    def visibility(self,value: Optional[visibility.Visibility] = None) -> None:
        """
        Sets the visibility property value. The visibility property
        Args:
            value: Value to set for the visibility property.
        """
        self._visibility = value
    

