using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class TokenResponse : IParsable {
        /// <summary>The access_token property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? AccessToken { get; set; }
#nullable restore
#else
        public string AccessToken { get; set; }
#endif
        /// <summary>The created_at property</summary>
        public int? CreatedAt { get; set; }
        /// <summary>The scope property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Scope { get; set; }
#nullable restore
#else
        public string Scope { get; set; }
#endif
        /// <summary>The token_type property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? TokenType { get; set; }
#nullable restore
#else
        public string TokenType { get; set; }
#endif
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static TokenResponse CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new TokenResponse();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"access_token", n => { AccessToken = n.GetStringValue(); } },
                {"created_at", n => { CreatedAt = n.GetIntValue(); } },
                {"scope", n => { Scope = n.GetStringValue(); } },
                {"token_type", n => { TokenType = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("access_token", AccessToken);
            writer.WriteIntValue("created_at", CreatedAt);
            writer.WriteStringValue("scope", Scope);
            writer.WriteStringValue("token_type", TokenType);
        }
    }
}
