from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import federation_usage, user_usage

class Usage(AdditionalDataHolder, Parsable):
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
        Instantiates a new Usage and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The federation property
        self._federation: Optional[federation_usage.FederationUsage] = None
        # The local_posts property
        self._local_posts: Optional[int] = None
        # The users property
        self._users: Optional[user_usage.UserUsage] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Usage:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Usage
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Usage()
    
    @property
    def federation(self,) -> Optional[federation_usage.FederationUsage]:
        """
        Gets the federation property value. The federation property
        Returns: Optional[federation_usage.FederationUsage]
        """
        return self._federation
    
    @federation.setter
    def federation(self,value: Optional[federation_usage.FederationUsage] = None) -> None:
        """
        Sets the federation property value. The federation property
        Args:
            value: Value to set for the federation property.
        """
        self._federation = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "federation": lambda n : setattr(self, 'federation', n.get_object_value(federation_usage.FederationUsage)),
            "local_posts": lambda n : setattr(self, 'local_posts', n.get_int_value()),
            "users": lambda n : setattr(self, 'users', n.get_object_value(user_usage.UserUsage)),
        }
        return fields
    
    @property
    def local_posts(self,) -> Optional[int]:
        """
        Gets the local_posts property value. The local_posts property
        Returns: Optional[int]
        """
        return self._local_posts
    
    @local_posts.setter
    def local_posts(self,value: Optional[int] = None) -> None:
        """
        Sets the local_posts property value. The local_posts property
        Args:
            value: Value to set for the local_posts property.
        """
        self._local_posts = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_object_value("federation", self.federation)
        writer.write_int_value("local_posts", self.local_posts)
        writer.write_object_value("users", self.users)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def users(self,) -> Optional[user_usage.UserUsage]:
        """
        Gets the users property value. The users property
        Returns: Optional[user_usage.UserUsage]
        """
        return self._users
    
    @users.setter
    def users(self,value: Optional[user_usage.UserUsage] = None) -> None:
        """
        Sets the users property value. The users property
        Args:
            value: Value to set for the users property.
        """
        self._users = value
    

