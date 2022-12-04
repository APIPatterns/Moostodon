using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Usage : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The federation property</summary>
        public FederationUsage Federation { get; set; }
        /// <summary>The local_posts property</summary>
        public long? Local_posts { get; set; }
        /// <summary>The users property</summary>
        public UserUsage Users { get; set; }
        /// <summary>
        /// Instantiates a new Usage and sets the default values.
        /// </summary>
        public Usage() {
            AdditionalData = new Dictionary<string, object>();
        }
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
                {"local_posts", n => { Local_posts = n.GetLongValue(); } },
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
            writer.WriteLongValue("local_posts", Local_posts);
            writer.WriteObjectValue<UserUsage>("users", Users);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
