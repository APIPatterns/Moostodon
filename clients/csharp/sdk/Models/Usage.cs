using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class Usage : IParsable {
        /// <summary>The federation property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public FederationUsage? Federation { get; set; }
#nullable restore
#else
        public FederationUsage Federation { get; set; }
#endif
        /// <summary>The local_posts property</summary>
        public long? LocalPosts { get; set; }
        /// <summary>The users property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public UserUsage? Users { get; set; }
#nullable restore
#else
        public UserUsage Users { get; set; }
#endif
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Usage CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Usage();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"federation", n => { Federation = n.GetObjectValue<FederationUsage>(FederationUsage.CreateFromDiscriminatorValue); } },
                {"local_posts", n => { LocalPosts = n.GetLongValue(); } },
                {"users", n => { Users = n.GetObjectValue<UserUsage>(UserUsage.CreateFromDiscriminatorValue); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<FederationUsage>("federation", Federation);
            writer.WriteLongValue("local_posts", LocalPosts);
            writer.WriteObjectValue<UserUsage>("users", Users);
        }
    }
}
