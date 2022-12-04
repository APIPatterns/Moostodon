from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class Application(AdditionalDataHolder, Parsable):
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
    def client_id(self,) -> Optional[str]:
        """
        Gets the client_id property value. The client_id property
        Returns: Optional[str]
        """
        return self._client_id
    
    @client_id.setter
    def client_id(self,value: Optional[str] = None) -> None:
        """
        Sets the client_id property value. The client_id property
        Args:
            value: Value to set for the client_id property.
        """
        self._client_id = value
    
    @property
    def client_secret(self,) -> Optional[str]:
        """
        Gets the client_secret property value. The client_secret property
        Returns: Optional[str]
        """
        return self._client_secret
    
    @client_secret.setter
    def client_secret(self,value: Optional[str] = None) -> None:
        """
        Sets the client_secret property value. The client_secret property
        Args:
            value: Value to set for the client_secret property.
        """
        self._client_secret = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new Application and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The client_id property
        self._client_id: Optional[str] = None
        # The client_secret property
        self._client_secret: Optional[str] = None
        # The id property
        self._id: Optional[str] = None
        # The name property
        self._name: Optional[str] = None
        # The redirect_uri property
        self._redirect_uri: Optional[str] = None
        # The vapid_key property
        self._vapid_key: Optional[str] = None
        # The website property
        self._website: Optional[str] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Application:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Application
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Application()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "client_id": lambda n : setattr(self, 'client_id', n.get_str_value()),
            "client_secret": lambda n : setattr(self, 'client_secret', n.get_str_value()),
            "id": lambda n : setattr(self, 'id', n.get_str_value()),
            "name": lambda n : setattr(self, 'name', n.get_str_value()),
            "redirect_uri": lambda n : setattr(self, 'redirect_uri', n.get_str_value()),
            "vapid_key": lambda n : setattr(self, 'vapid_key', n.get_str_value()),
            "website": lambda n : setattr(self, 'website', n.get_str_value()),
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
    def name(self,) -> Optional[str]:
        """
        Gets the name property value. The name property
        Returns: Optional[str]
        """
        return self._name
    
    @name.setter
    def name(self,value: Optional[str] = None) -> None:
        """
        Sets the name property value. The name property
        Args:
            value: Value to set for the name property.
        """
        self._name = value
    
    @property
    def redirect_uri(self,) -> Optional[str]:
        """
        Gets the redirect_uri property value. The redirect_uri property
        Returns: Optional[str]
        """
        return self._redirect_uri
    
    @redirect_uri.setter
    def redirect_uri(self,value: Optional[str] = None) -> None:
        """
        Sets the redirect_uri property value. The redirect_uri property
        Args:
            value: Value to set for the redirect_uri property.
        """
        self._redirect_uri = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("client_id", self.client_id)
        writer.write_str_value("client_secret", self.client_secret)
        writer.write_str_value("id", self.id)
        writer.write_str_value("name", self.name)
        writer.write_str_value("redirect_uri", self.redirect_uri)
        writer.write_str_value("vapid_key", self.vapid_key)
        writer.write_str_value("website", self.website)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def vapid_key(self,) -> Optional[str]:
        """
        Gets the vapid_key property value. The vapid_key property
        Returns: Optional[str]
        """
        return self._vapid_key
    
    @vapid_key.setter
    def vapid_key(self,value: Optional[str] = None) -> None:
        """
        Sets the vapid_key property value. The vapid_key property
        Args:
            value: Value to set for the vapid_key property.
        """
        self._vapid_key = value
    
    @property
    def website(self,) -> Optional[str]:
        """
        Gets the website property value. The website property
        Returns: Optional[str]
        """
        return self._website
    
    @website.setter
    def website(self,value: Optional[str] = None) -> None:
        """
        Sets the website property value. The website property
        Args:
            value: Value to set for the website property.
        """
        self._website = value
    

