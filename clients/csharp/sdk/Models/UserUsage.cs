using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class UserUsage : IAdditionalDataHolder, IParsable {
        /// <summary>The active_halfyear property</summary>
        public long? ActiveHalfyear { get; set; }
        /// <summary>The active_month property</summary>
        public long? ActiveMonth { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The total property</summary>
        public long? Total { get; set; }
        /// <summary>
        /// Instantiates a new UserUsage and sets the default values.
        /// </summary>
        public UserUsage() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static UserUsage CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new UserUsage();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"active_halfyear", n => { ActiveHalfyear = n.GetLongValue(); } },
                {"active_month", n => { ActiveMonth = n.GetLongValue(); } },
                {"total", n => { Total = n.GetLongValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteLongValue("active_halfyear", ActiveHalfyear);
            writer.WriteLongValue("active_month", ActiveMonth);
            writer.WriteLongValue("total", Total);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
