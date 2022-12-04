using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class ConfigurationStatuses : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The characters_reserved_per_url property</summary>
        public int? Characters_reserved_per_url { get; set; }
        /// <summary>The max_characters property</summary>
        public int? Max_characters { get; set; }
        /// <summary>The max_media_attachments property</summary>
        public int? Max_media_attachments { get; set; }
        /// <summary>
        /// Instantiates a new ConfigurationStatuses and sets the default values.
        /// </summary>
        public ConfigurationStatuses() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static ConfigurationStatuses CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new ConfigurationStatuses();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"characters_reserved_per_url", n => { Characters_reserved_per_url = n.GetIntValue(); } },
                {"max_characters", n => { Max_characters = n.GetIntValue(); } },
                {"max_media_attachments", n => { Max_media_attachments = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteIntValue("characters_reserved_per_url", Characters_reserved_per_url);
            writer.WriteIntValue("max_characters", Max_characters);
            writer.WriteIntValue("max_media_attachments", Max_media_attachments);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
