using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class ConfigurationPolls : IParsable {
        /// <summary>The max_characters_per_option property</summary>
        public int? MaxCharactersPerOption { get; set; }
        /// <summary>The max_expiration property</summary>
        public int? MaxExpiration { get; set; }
        /// <summary>The max_options property</summary>
        public int? MaxOptions { get; set; }
        /// <summary>The min_expiration property</summary>
        public int? MinExpiration { get; set; }
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
                {"max_characters_per_option", n => { MaxCharactersPerOption = n.GetIntValue(); } },
                {"max_expiration", n => { MaxExpiration = n.GetIntValue(); } },
                {"max_options", n => { MaxOptions = n.GetIntValue(); } },
                {"min_expiration", n => { MinExpiration = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteIntValue("max_characters_per_option", MaxCharactersPerOption);
            writer.WriteIntValue("max_expiration", MaxExpiration);
            writer.WriteIntValue("max_options", MaxOptions);
            writer.WriteIntValue("min_expiration", MinExpiration);
        }
    }
}
