using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class FollowBody : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The lanuages property</summary>
        public List<string> Lanuages { get; set; }
        /// <summary>The notify property</summary>
        public bool? Notify { get; set; }
        /// <summary>The reblogs property</summary>
        public bool? Reblogs { get; set; }
        /// <summary>
        /// Instantiates a new FollowBody and sets the default values.
        /// </summary>
        public FollowBody() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static FollowBody CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new FollowBody();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"lanuages", n => { Lanuages = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"notify", n => { Notify = n.GetBoolValue(); } },
                {"reblogs", n => { Reblogs = n.GetBoolValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteCollectionOfPrimitiveValues<string>("lanuages", Lanuages);
            writer.WriteBoolValue("notify", Notify);
            writer.WriteBoolValue("reblogs", Reblogs);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
