using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class FederationUsage : IAdditionalDataHolder, IParsable {
        /// <summary>The active property</summary>
        public long? Active { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The receiving property</summary>
        public long? Receiving { get; set; }
        /// <summary>The sending property</summary>
        public long? Sending { get; set; }
        /// <summary>
        /// Instantiates a new FederationUsage and sets the default values.
        /// </summary>
        public FederationUsage() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static FederationUsage CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new FederationUsage();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"active", n => { Active = n.GetLongValue(); } },
                {"receiving", n => { Receiving = n.GetLongValue(); } },
                {"sending", n => { Sending = n.GetLongValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteLongValue("active", Active);
            writer.WriteLongValue("receiving", Receiving);
            writer.WriteLongValue("sending", Sending);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}