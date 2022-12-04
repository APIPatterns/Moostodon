from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from typing import Any, Callable, Dict, List, Optional, Union

from . import configuration_accounts, configuration_media_attachments, configuration_polls, configuration_statuses, configuration_translation, configuration_urls

class Configuration(AdditionalDataHolder, Parsable):
    @property
    def accounts(self,) -> Optional[configuration_accounts.ConfigurationAccounts]:
        """
        Gets the accounts property value. The accounts property
        Returns: Optional[configuration_accounts.ConfigurationAccounts]
        """
        return self._accounts
    
    @accounts.setter
    def accounts(self,value: Optional[configuration_accounts.ConfigurationAccounts] = None) -> None:
        """
        Sets the accounts property value. The accounts property
        Args:
            value: Value to set for the accounts property.
        """
        self._accounts = value
    
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
        Instantiates a new Configuration and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The accounts property
        self._accounts: Optional[configuration_accounts.ConfigurationAccounts] = None
        # The media_attachments property
        self._media_attachments: Optional[configuration_media_attachments.ConfigurationMediaAttachments] = None
        # The polls property
        self._polls: Optional[configuration_polls.ConfigurationPolls] = None
        # The statuses property
        self._statuses: Optional[configuration_statuses.ConfigurationStatuses] = None
        # The translation property
        self._translation: Optional[configuration_translation.ConfigurationTranslation] = None
        # The urls property
        self._urls: Optional[configuration_urls.ConfigurationUrls] = None
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Configuration:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Configuration
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Configuration()
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "accounts": lambda n : setattr(self, 'accounts', n.get_object_value(configuration_accounts.ConfigurationAccounts)),
            "media_attachments": lambda n : setattr(self, 'media_attachments', n.get_object_value(configuration_media_attachments.ConfigurationMediaAttachments)),
            "polls": lambda n : setattr(self, 'polls', n.get_object_value(configuration_polls.ConfigurationPolls)),
            "statuses": lambda n : setattr(self, 'statuses', n.get_object_value(configuration_statuses.ConfigurationStatuses)),
            "translation": lambda n : setattr(self, 'translation', n.get_object_value(configuration_translation.ConfigurationTranslation)),
            "urls": lambda n : setattr(self, 'urls', n.get_object_value(configuration_urls.ConfigurationUrls)),
        }
        return fields
    
    @property
    def media_attachments(self,) -> Optional[configuration_media_attachments.ConfigurationMediaAttachments]:
        """
        Gets the media_attachments property value. The media_attachments property
        Returns: Optional[configuration_media_attachments.ConfigurationMediaAttachments]
        """
        return self._media_attachments
    
    @media_attachments.setter
    def media_attachments(self,value: Optional[configuration_media_attachments.ConfigurationMediaAttachments] = None) -> None:
        """
        Sets the media_attachments property value. The media_attachments property
        Args:
            value: Value to set for the media_attachments property.
        """
        self._media_attachments = value
    
    @property
    def polls(self,) -> Optional[configuration_polls.ConfigurationPolls]:
        """
        Gets the polls property value. The polls property
        Returns: Optional[configuration_polls.ConfigurationPolls]
        """
        return self._polls
    
    @polls.setter
    def polls(self,value: Optional[configuration_polls.ConfigurationPolls] = None) -> None:
        """
        Sets the polls property value. The polls property
        Args:
            value: Value to set for the polls property.
        """
        self._polls = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_object_value("accounts", self.accounts)
        writer.write_object_value("media_attachments", self.media_attachments)
        writer.write_object_value("polls", self.polls)
        writer.write_object_value("statuses", self.statuses)
        writer.write_object_value("translation", self.translation)
        writer.write_object_value("urls", self.urls)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def statuses(self,) -> Optional[configuration_statuses.ConfigurationStatuses]:
        """
        Gets the statuses property value. The statuses property
        Returns: Optional[configuration_statuses.ConfigurationStatuses]
        """
        return self._statuses
    
    @statuses.setter
    def statuses(self,value: Optional[configuration_statuses.ConfigurationStatuses] = None) -> None:
        """
        Sets the statuses property value. The statuses property
        Args:
            value: Value to set for the statuses property.
        """
        self._statuses = value
    
    @property
    def translation(self,) -> Optional[configuration_translation.ConfigurationTranslation]:
        """
        Gets the translation property value. The translation property
        Returns: Optional[configuration_translation.ConfigurationTranslation]
        """
        return self._translation
    
    @translation.setter
    def translation(self,value: Optional[configuration_translation.ConfigurationTranslation] = None) -> None:
        """
        Sets the translation property value. The translation property
        Args:
            value: Value to set for the translation property.
        """
        self._translation = value
    
    @property
    def urls(self,) -> Optional[configuration_urls.ConfigurationUrls]:
        """
        Gets the urls property value. The urls property
        Returns: Optional[configuration_urls.ConfigurationUrls]
        """
        return self._urls
    
    @urls.setter
    def urls(self,value: Optional[configuration_urls.ConfigurationUrls] = None) -> None:
        """
        Sets the urls property value. The urls property
        Args:
            value: Value to set for the urls property.
        """
        self._urls = value
    

