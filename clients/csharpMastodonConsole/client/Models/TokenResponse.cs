using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class TokenResponse : IAdditionalDataHolder, IParsable {
        /// <summary>The access_token property</summary>
        public string Access_token { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The created_at property</summary>
        public int? Created_at { get; set; }
        /// <summary>The scope property</summary>
        public string Scope { get; set; }
        /// <summary>The token_type property</summary>
        public string Token_type { get; set; }
        /// <summary>
        /// Instantiates a new TokenResponse and sets the default values.
        /// </summary>
        public TokenResponse() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        /// </summary>
        public static TokenResponse CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new TokenResponse();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"access_token", n => { Access_token = n.GetStringValue(); } },
                {"created_at", n => { Created_at = n.GetIntValue(); } },
                {"scope", n => { Scope = n.GetStringValue(); } },
                {"token_type", n => { Token_type = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        /// </summary>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("access_token", Access_token);
            writer.WriteIntValue("created_at", Created_at);
            writer.WriteStringValue("scope", Scope);
            writer.WriteStringValue("token_type", Token_type);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
