using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class TokenForm : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The client_id property</summary>
        public string Client_id { get; set; }
        /// <summary>The client_secret property</summary>
        public string Client_secret { get; set; }
        /// <summary>The code property</summary>
        public string Code { get; set; }
        /// <summary>The grant_type property</summary>
        public string Grant_type { get; set; }
        /// <summary>The redirect_uri property</summary>
        public string Redirect_uri { get; set; }
        /// <summary>The scopes property</summary>
        public string Scopes { get; set; }
        /// <summary>
        /// Instantiates a new TokenForm and sets the default values.
        /// </summary>
        public TokenForm() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static TokenForm CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new TokenForm();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"client_id", n => { Client_id = n.GetStringValue(); } },
                {"client_secret", n => { Client_secret = n.GetStringValue(); } },
                {"code", n => { Code = n.GetStringValue(); } },
                {"grant_type", n => { Grant_type = n.GetStringValue(); } },
                {"redirect_uri", n => { Redirect_uri = n.GetStringValue(); } },
                {"scopes", n => { Scopes = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("client_id", Client_id);
            writer.WriteStringValue("client_secret", Client_secret);
            writer.WriteStringValue("code", Code);
            writer.WriteStringValue("grant_type", Grant_type);
            writer.WriteStringValue("redirect_uri", Redirect_uri);
            writer.WriteStringValue("scopes", Scopes);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
