using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Configuration : IAdditionalDataHolder, IParsable {
        /// <summary>The accounts property</summary>
        public ConfigurationAccounts Accounts { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The media_attachments property</summary>
        public ConfigurationMediaAttachments Media_attachments { get; set; }
        /// <summary>The polls property</summary>
        public ConfigurationPolls Polls { get; set; }
        /// <summary>The statuses property</summary>
        public ConfigurationStatuses Statuses { get; set; }
        /// <summary>The translation property</summary>
        public ConfigurationTranslation Translation { get; set; }
        /// <summary>The urls property</summary>
        public ConfigurationUrls Urls { get; set; }
        /// <summary>
        /// Instantiates a new Configuration and sets the default values.
        /// </summary>
        public Configuration() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Configuration CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Configuration();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"accounts", n => { Accounts = n.GetObjectValue<ConfigurationAccounts>(ConfigurationAccounts.CreateFromDiscriminatorValue); } },
                {"media_attachments", n => { Media_attachments = n.GetObjectValue<ConfigurationMediaAttachments>(ConfigurationMediaAttachments.CreateFromDiscriminatorValue); } },
                {"polls", n => { Polls = n.GetObjectValue<ConfigurationPolls>(ConfigurationPolls.CreateFromDiscriminatorValue); } },
                {"statuses", n => { Statuses = n.GetObjectValue<ConfigurationStatuses>(ConfigurationStatuses.CreateFromDiscriminatorValue); } },
                {"translation", n => { Translation = n.GetObjectValue<ConfigurationTranslation>(ConfigurationTranslation.CreateFromDiscriminatorValue); } },
                {"urls", n => { Urls = n.GetObjectValue<ConfigurationUrls>(ConfigurationUrls.CreateFromDiscriminatorValue); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<ConfigurationAccounts>("accounts", Accounts);
            writer.WriteObjectValue<ConfigurationMediaAttachments>("media_attachments", Media_attachments);
            writer.WriteObjectValue<ConfigurationPolls>("polls", Polls);
            writer.WriteObjectValue<ConfigurationStatuses>("statuses", Statuses);
            writer.WriteObjectValue<ConfigurationTranslation>("translation", Translation);
            writer.WriteObjectValue<ConfigurationUrls>("urls", Urls);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
