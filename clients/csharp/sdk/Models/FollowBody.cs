using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class FollowBody : IParsable {
        /// <summary>The lanuages property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<string>? Lanuages { get; set; }
#nullable restore
#else
        public List<string> Lanuages { get; set; }
#endif
        /// <summary>The notify property</summary>
        public bool? Notify { get; set; }
        /// <summary>The reblogs property</summary>
        public bool? Reblogs { get; set; }
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
        }
    }
}
