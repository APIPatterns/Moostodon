using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class FeaturedTag : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The last_status_at property</summary>
        public string Last_status_at { get; set; }
        /// <summary>The name property</summary>
        public string Name { get; set; }
        /// <summary>The statuses_count property</summary>
        public int? Statuses_count { get; set; }
        /// <summary>The url property</summary>
        public string Url { get; set; }
        /// <summary>
        /// Instantiates a new FeaturedTag and sets the default values.
        /// </summary>
        public FeaturedTag() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static FeaturedTag CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new FeaturedTag();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"id", n => { Id = n.GetStringValue(); } },
                {"last_status_at", n => { Last_status_at = n.GetStringValue(); } },
                {"name", n => { Name = n.GetStringValue(); } },
                {"statuses_count", n => { Statuses_count = n.GetIntValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("id", Id);
            writer.WriteStringValue("last_status_at", Last_status_at);
            writer.WriteStringValue("name", Name);
            writer.WriteIntValue("statuses_count", Statuses_count);
            writer.WriteStringValue("url", Url);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
