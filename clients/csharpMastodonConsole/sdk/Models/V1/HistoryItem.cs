using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models.V1 {
    public class HistoryItem : IAdditionalDataHolder, IParsable {
        /// <summary>The accounts property</summary>
        public string Accounts { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The day property</summary>
        public string Day { get; set; }
        /// <summary>The uses property</summary>
        public string Uses { get; set; }
        /// <summary>
        /// Instantiates a new HistoryItem and sets the default values.
        /// </summary>
        public HistoryItem() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static HistoryItem CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new HistoryItem();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"accounts", n => { Accounts = n.GetStringValue(); } },
                {"day", n => { Day = n.GetStringValue(); } },
                {"uses", n => { Uses = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("accounts", Accounts);
            writer.WriteStringValue("day", Day);
            writer.WriteStringValue("uses", Uses);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
