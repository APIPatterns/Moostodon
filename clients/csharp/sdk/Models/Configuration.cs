using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class Configuration : IParsable {
        /// <summary>The accounts property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public ConfigurationAccounts? Accounts { get; set; }
#nullable restore
#else
        public ConfigurationAccounts Accounts { get; set; }
#endif
        /// <summary>The media_attachments property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public ConfigurationMediaAttachments? MediaAttachments { get; set; }
#nullable restore
#else
        public ConfigurationMediaAttachments MediaAttachments { get; set; }
#endif
        /// <summary>The polls property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public ConfigurationPolls? Polls { get; set; }
#nullable restore
#else
        public ConfigurationPolls Polls { get; set; }
#endif
        /// <summary>The statuses property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public ConfigurationStatuses? Statuses { get; set; }
#nullable restore
#else
        public ConfigurationStatuses Statuses { get; set; }
#endif
        /// <summary>The translation property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public ConfigurationTranslation? Translation { get; set; }
#nullable restore
#else
        public ConfigurationTranslation Translation { get; set; }
#endif
        /// <summary>The urls property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public ConfigurationUrls? Urls { get; set; }
#nullable restore
#else
        public ConfigurationUrls Urls { get; set; }
#endif
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
                {"media_attachments", n => { MediaAttachments = n.GetObjectValue<ConfigurationMediaAttachments>(ConfigurationMediaAttachments.CreateFromDiscriminatorValue); } },
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
            writer.WriteObjectValue<ConfigurationMediaAttachments>("media_attachments", MediaAttachments);
            writer.WriteObjectValue<ConfigurationPolls>("polls", Polls);
            writer.WriteObjectValue<ConfigurationStatuses>("statuses", Statuses);
            writer.WriteObjectValue<ConfigurationTranslation>("translation", Translation);
            writer.WriteObjectValue<ConfigurationUrls>("urls", Urls);
        }
    }
}
