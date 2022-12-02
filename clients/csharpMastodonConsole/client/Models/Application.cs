using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Application : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The client_id property</summary>
        public string Client_id { get; set; }
        /// <summary>The client_secret property</summary>
        public string Client_secret { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The name property</summary>
        public string Name { get; set; }
        /// <summary>The redirect_uri property</summary>
        public string Redirect_uri { get; set; }
        /// <summary>The vapid_key property</summary>
        public string Vapid_key { get; set; }
        /// <summary>The website property</summary>
        public string Website { get; set; }
        /// <summary>
        /// Instantiates a new Application and sets the default values.
        /// </summary>
        public Application() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static Application CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Application();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"client_id", n => { Client_id = n.GetStringValue(); } },
                {"client_secret", n => { Client_secret = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"name", n => { Name = n.GetStringValue(); } },
                {"redirect_uri", n => { Redirect_uri = n.GetStringValue(); } },
                {"vapid_key", n => { Vapid_key = n.GetStringValue(); } },
                {"website", n => { Website = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("client_id", Client_id);
            writer.WriteStringValue("client_secret", Client_secret);
            writer.WriteStringValue("id", Id);
            writer.WriteStringValue("name", Name);
            writer.WriteStringValue("redirect_uri", Redirect_uri);
            writer.WriteStringValue("vapid_key", Vapid_key);
            writer.WriteStringValue("website", Website);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
