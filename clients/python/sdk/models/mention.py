from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class Mention(AdditionalDataHolder, Parsable):
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
    
    def __init__(self,) -> None:
        """
        Instantiates a new Mention and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The acct property
        self._acct: Optional[str] = None
        # The id property
        self._id: Optional[str] = None
        # The url property
        self._url: Optional[str] = None
        # The username property
        self._username: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Mention:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Mention
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Mention()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "acct": lambda n : setattr(self, 'acct', n.get_str_value()),
            "id": lambda n : setattr(self, 'id', n.get_str_value()),
            "url": lambda n : setattr(self, 'url', n.get_str_value()),
            "username": lambda n : setattr(self, 'username', n.get_str_value()),
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
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("acct", self.acct)
        writer.write_str_value("id", self.id)
        writer.write_str_value("url", self.url)
        writer.write_str_value("username", self.username)
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
    

