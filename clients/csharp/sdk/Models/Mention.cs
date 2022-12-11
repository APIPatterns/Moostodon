using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Mention : IAdditionalDataHolder, IParsable {
        /// <summary>The acct property</summary>
        public string Acct { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The url property</summary>
        public string Url { get; set; }
        /// <summary>The username property</summary>
        public string Username { get; set; }
        /// <summary>
        /// Instantiates a new Mention and sets the default values.
        /// </summary>
        public Mention() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Mention CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Mention();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"acct", n => { Acct = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
                {"username", n => { Username = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("acct", Acct);
            writer.WriteStringValue("id", Id);
            writer.WriteStringValue("url", Url);
            writer.WriteStringValue("username", Username);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
