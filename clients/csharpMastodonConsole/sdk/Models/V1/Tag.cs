using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models.V1 {
    public class Tag : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The following property</summary>
        public bool? Following { get; set; }
        /// <summary>The history property</summary>
        public List<HistoryItem> History { get; set; }
        /// <summary>The name property</summary>
        public string Name { get; set; }
        /// <summary>The url property</summary>
        public string Url { get; set; }
        /// <summary>
        /// Instantiates a new Tag and sets the default values.
        /// </summary>
        public Tag() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Tag CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Tag();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"following", n => { Following = n.GetBoolValue(); } },
                {"history", n => { History = n.GetCollectionOfObjectValues<HistoryItem>(HistoryItem.CreateFromDiscriminatorValue)?.ToList(); } },
                {"name", n => { Name = n.GetStringValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteBoolValue("following", Following);
            writer.WriteCollectionOfObjectValues<HistoryItem>("history", History);
            writer.WriteStringValue("name", Name);
            writer.WriteStringValue("url", Url);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
