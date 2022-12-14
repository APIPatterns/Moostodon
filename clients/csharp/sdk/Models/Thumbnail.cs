using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Thumbnail : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The blurhash property</summary>
        public string Blurhash { get; set; }
        /// <summary>The url property</summary>
        public string Url { get; set; }
        /// <summary>The versions property</summary>
        public ThumnailVersion Versions { get; set; }
        /// <summary>
        /// Instantiates a new Thumbnail and sets the default values.
        /// </summary>
        public Thumbnail() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Thumbnail CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Thumbnail();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"blurhash", n => { Blurhash = n.GetStringValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
                {"versions", n => { Versions = n.GetObjectValue<ThumnailVersion>(ThumnailVersion.CreateFromDiscriminatorValue); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("blurhash", Blurhash);
            writer.WriteStringValue("url", Url);
            writer.WriteObjectValue<ThumnailVersion>("versions", Versions);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
