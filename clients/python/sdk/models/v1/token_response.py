from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

class TokenResponse(AdditionalDataHolder, Parsable):
    @property
    def access_token(self,) -> Optional[str]:
        """
        Gets the access_token property value. The access_token property
        Returns: Optional[str]
        """
        return self._access_token
    
    @access_token.setter
    def access_token(self,value: Optional[str] = None) -> None:
        """
        Sets the access_token property value. The access_token property
        Args:
            value: Value to set for the access_token property.
        """
        self._access_token = value
    
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
        Instantiates a new TokenResponse and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The access_token property
        self._access_token: Optional[str] = None
        # The created_at property
        self._created_at: Optional[int] = None
        # The scope property
        self._scope: Optional[str] = None
        # The token_type property
        self._token_type: Optional[str] = None
    
    @property
    def created_at(self,) -> Optional[int]:
        """
        Gets the created_at property value. The created_at property
        Returns: Optional[int]
        """
        return self._created_at
    
    @created_at.setter
    def created_at(self,value: Optional[int] = None) -> None:
        """
        Sets the created_at property value. The created_at property
        Args:
            value: Value to set for the created_at property.
        """
        self._created_at = value
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> TokenResponse:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: TokenResponse
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return TokenResponse()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "access_token": lambda n : setattr(self, 'access_token', n.get_str_value()),
            "created_at": lambda n : setattr(self, 'created_at', n.get_int_value()),
            "scope": lambda n : setattr(self, 'scope', n.get_str_value()),
            "token_type": lambda n : setattr(self, 'token_type', n.get_str_value()),
        }
        return fields
    
    @property
    def scope(self,) -> Optional[str]:
        """
        Gets the scope property value. The scope property
        Returns: Optional[str]
        """
        return self._scope
    
    @scope.setter
    def scope(self,value: Optional[str] = None) -> None:
        """
        Sets the scope property value. The scope property
        Args:
            value: Value to set for the scope property.
        """
        self._scope = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_str_value("access_token", self.access_token)
        writer.write_int_value("created_at", self.created_at)
        writer.write_str_value("scope", self.scope)
        writer.write_str_value("token_type", self.token_type)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def token_type(self,) -> Optional[str]:
        """
        Gets the token_type property value. The token_type property
        Returns: Optional[str]
        """
        return self._token_type
    
    @token_type.setter
    def token_type(self,value: Optional[str] = None) -> None:
        """
        Sets the token_type property value. The token_type property
        Args:
            value: Value to set for the token_type property.
        """
        self._token_type = value
    

