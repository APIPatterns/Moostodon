from __future__ import annotations
from kiota_abstractions.serialization import AdditionalDataHolder, Parsable, ParseNode, SerializationWriter
from kiota_abstractions.utils import lazy_import
from typing import Any, Callable, Dict, List, Optional, Union

configuration = lazy_import('mastodon_client_lib.models.configuration')
contact = lazy_import('mastodon_client_lib.models.contact')
registrations = lazy_import('mastodon_client_lib.models.registrations')
rule = lazy_import('mastodon_client_lib.models.rule')
thumbnail = lazy_import('mastodon_client_lib.models.thumbnail')
usage = lazy_import('mastodon_client_lib.models.usage')

class Instance(AdditionalDataHolder, Parsable):
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
    def configuration(self,) -> Optional[configuration.Configuration]:
        """
        Gets the configuration property value. The configuration property
        Returns: Optional[configuration.Configuration]
        """
        return self._configuration
    
    @configuration.setter
    def configuration(self,value: Optional[configuration.Configuration] = None) -> None:
        """
        Sets the configuration property value. The configuration property
        Args:
            value: Value to set for the configuration property.
        """
        self._configuration = value
    
    def __init__(self,) -> None:
        """
        Instantiates a new Instance and sets the default values.
        """
        # Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
        self._additional_data: Dict[str, Any] = {}

        # The configuration property
        self._configuration: Optional[configuration.Configuration] = None
        # The contact property
        self._contact: Optional[contact.Contact] = None
        # The description property
        self._description: Optional[str] = None
        # The domain property
        self._domain: Optional[str] = None
        # The languages property
        self._languages: Optional[List[str]] = None
        # The registrations property
        self._registrations: Optional[registrations.Registrations] = None
        # The rules property
        self._rules: Optional[List[rule.Rule]] = None
        # The source_url property
        self._source_url: Optional[str] = None
        # The thumbnail property
        self._thumbnail: Optional[thumbnail.Thumbnail] = None
        # The title property
        self._title: Optional[str] = None
        # The usage property
        self._usage: Optional[usage.Usage] = None
        # The version property
        self._version: Optional[str] = None
    
    @property
    def contact(self,) -> Optional[contact.Contact]:
        """
        Gets the contact property value. The contact property
        Returns: Optional[contact.Contact]
        """
        return self._contact
    
    @contact.setter
    def contact(self,value: Optional[contact.Contact] = None) -> None:
        """
        Sets the contact property value. The contact property
        Args:
            value: Value to set for the contact property.
        """
        self._contact = value
    
    @staticmethod
    def create_from_discriminator_value(parse_node: Optional[ParseNode] = None) -> Instance:
        """
        Creates a new instance of the appropriate class based on discriminator value
        Args:
            parseNode: The parse node to use to read the discriminator value and create the object
        Returns: Instance
        """
        if parse_node is None:
            raise Exception("parse_node cannot be undefined")
        return Instance()
    
    @property
    def description(self,) -> Optional[str]:
        """
        Gets the description property value. The description property
        Returns: Optional[str]
        """
        return self._description
    
    @description.setter
    def description(self,value: Optional[str] = None) -> None:
        """
        Sets the description property value. The description property
        Args:
            value: Value to set for the description property.
        """
        self._description = value
    
    @property
    def domain(self,) -> Optional[str]:
        """
        Gets the domain property value. The domain property
        Returns: Optional[str]
        """
        return self._domain
    
    @domain.setter
    def domain(self,value: Optional[str] = None) -> None:
        """
        Sets the domain property value. The domain property
        Args:
            value: Value to set for the domain property.
        """
        self._domain = value
    
    def get_field_deserializers(self,) -> Dict[str, Callable[[ParseNode], None]]:
        """
        The deserialization information for the current model
        Returns: Dict[str, Callable[[ParseNode], None]]
        """
        fields = {
            "configuration": lambda n : setattr(self, 'configuration', n.get_object_value(configuration.Configuration)),
            "contact": lambda n : setattr(self, 'contact', n.get_object_value(contact.Contact)),
            "description": lambda n : setattr(self, 'description', n.get_str_value()),
            "domain": lambda n : setattr(self, 'domain', n.get_str_value()),
            "languages": lambda n : setattr(self, 'languages', n.get_collection_of_primitive_values(str)),
            "registrations": lambda n : setattr(self, 'registrations', n.get_object_value(registrations.Registrations)),
            "rules": lambda n : setattr(self, 'rules', n.get_collection_of_object_values(rule.Rule)),
            "source_url": lambda n : setattr(self, 'source_url', n.get_str_value()),
            "thumbnail": lambda n : setattr(self, 'thumbnail', n.get_object_value(thumbnail.Thumbnail)),
            "title": lambda n : setattr(self, 'title', n.get_str_value()),
            "usage": lambda n : setattr(self, 'usage', n.get_object_value(usage.Usage)),
            "version": lambda n : setattr(self, 'version', n.get_str_value()),
        }
        return fields
    
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
    def registrations(self,) -> Optional[registrations.Registrations]:
        """
        Gets the registrations property value. The registrations property
        Returns: Optional[registrations.Registrations]
        """
        return self._registrations
    
    @registrations.setter
    def registrations(self,value: Optional[registrations.Registrations] = None) -> None:
        """
        Sets the registrations property value. The registrations property
        Args:
            value: Value to set for the registrations property.
        """
        self._registrations = value
    
    @property
    def rules(self,) -> Optional[List[rule.Rule]]:
        """
        Gets the rules property value. The rules property
        Returns: Optional[List[rule.Rule]]
        """
        return self._rules
    
    @rules.setter
    def rules(self,value: Optional[List[rule.Rule]] = None) -> None:
        """
        Sets the rules property value. The rules property
        Args:
            value: Value to set for the rules property.
        """
        self._rules = value
    
    def serialize(self,writer: SerializationWriter) -> None:
        """
        Serializes information the current object
        Args:
            writer: Serialization writer to use to serialize this model
        """
        if writer is None:
            raise Exception("writer cannot be undefined")
        writer.write_object_value("configuration", self.configuration)
        writer.write_object_value("contact", self.contact)
        writer.write_str_value("description", self.description)
        writer.write_str_value("domain", self.domain)
        writer.write_collection_of_primitive_values("languages", self.languages)
        writer.write_object_value("registrations", self.registrations)
        writer.write_collection_of_object_values("rules", self.rules)
        writer.write_str_value("source_url", self.source_url)
        writer.write_object_value("thumbnail", self.thumbnail)
        writer.write_str_value("title", self.title)
        writer.write_object_value("usage", self.usage)
        writer.write_str_value("version", self.version)
        writer.write_additional_data_value(self.additional_data)
    
    @property
    def source_url(self,) -> Optional[str]:
        """
        Gets the source_url property value. The source_url property
        Returns: Optional[str]
        """
        return self._source_url
    
    @source_url.setter
    def source_url(self,value: Optional[str] = None) -> None:
        """
        Sets the source_url property value. The source_url property
        Args:
            value: Value to set for the source_url property.
        """
        self._source_url = value
    
    @property
    def thumbnail(self,) -> Optional[thumbnail.Thumbnail]:
        """
        Gets the thumbnail property value. The thumbnail property
        Returns: Optional[thumbnail.Thumbnail]
        """
        return self._thumbnail
    
    @thumbnail.setter
    def thumbnail(self,value: Optional[thumbnail.Thumbnail] = None) -> None:
        """
        Sets the thumbnail property value. The thumbnail property
        Args:
            value: Value to set for the thumbnail property.
        """
        self._thumbnail = value
    
    @property
    def title(self,) -> Optional[str]:
        """
        Gets the title property value. The title property
        Returns: Optional[str]
        """
        return self._title
    
    @title.setter
    def title(self,value: Optional[str] = None) -> None:
        """
        Sets the title property value. The title property
        Args:
            value: Value to set for the title property.
        """
        self._title = value
    
    @property
    def usage(self,) -> Optional[usage.Usage]:
        """
        Gets the usage property value. The usage property
        Returns: Optional[usage.Usage]
        """
        return self._usage
    
    @usage.setter
    def usage(self,value: Optional[usage.Usage] = None) -> None:
        """
        Sets the usage property value. The usage property
        Args:
            value: Value to set for the usage property.
        """
        self._usage = value
    
    @property
    def version(self,) -> Optional[str]:
        """
        Gets the version property value. The version property
        Returns: Optional[str]
        """
        return self._version
    
    @version.setter
    def version(self,value: Optional[str] = None) -> None:
        """
        Sets the version property value. The version property
        Args:
            value: Value to set for the version property.
        """
        self._version = value
    

