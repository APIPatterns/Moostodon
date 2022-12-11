using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class ConfigurationPolls : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The max_characters_per_option property</summary>
        public int? Max_characters_per_option { get; set; }
        /// <summary>The max_expiration property</summary>
        public int? Max_expiration { get; set; }
        /// <summary>The max_options property</summary>
        public int? Max_options { get; set; }
        /// <summary>The min_expiration property</summary>
        public int? Min_expiration { get; set; }
        /// <summary>
        /// Instantiates a new ConfigurationPolls and sets the default values.
        /// </summary>
        public ConfigurationPolls() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static ConfigurationPolls CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new ConfigurationPolls();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"max_characters_per_option", n => { Max_characters_per_option = n.GetIntValue(); } },
                {"max_expiration", n => { Max_expiration = n.GetIntValue(); } },
                {"max_options", n => { Max_options = n.GetIntValue(); } },
                {"min_expiration", n => { Min_expiration = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteIntValue("max_characters_per_option", Max_characters_per_option);
            writer.WriteIntValue("max_expiration", Max_expiration);
            writer.WriteIntValue("max_options", Max_options);
            writer.WriteIntValue("min_expiration", Min_expiration);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
