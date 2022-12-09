using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class CreateAppForm : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The client_name property</summary>
        public string Client_name { get; set; }
        /// <summary>The redirect_uris property</summary>
        public string Redirect_uris { get; set; }
        /// <summary>The scopes property</summary>
        public string Scopes { get; set; }
        /// <summary>The website property</summary>
        public string Website { get; set; }
        /// <summary>
        /// Instantiates a new CreateAppForm and sets the default values.
        /// </summary>
        public CreateAppForm() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static CreateAppForm CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new CreateAppForm();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"client_name", n => { Client_name = n.GetStringValue(); } },
                {"redirect_uris", n => { Redirect_uris = n.GetStringValue(); } },
                {"scopes", n => { Scopes = n.GetStringValue(); } },
                {"website", n => { Website = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("client_name", Client_name);
            writer.WriteStringValue("redirect_uris", Redirect_uris);
            writer.WriteStringValue("scopes", Scopes);
            writer.WriteStringValue("website", Website);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
