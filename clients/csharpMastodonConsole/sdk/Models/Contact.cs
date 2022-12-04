using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Contact : IAdditionalDataHolder, IParsable {
        /// <summary>The account property</summary>
        public MastodonClientLib.Models.Account Account { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The email property</summary>
        public string Email { get; set; }
        /// <summary>
        /// Instantiates a new Contact and sets the default values.
        /// </summary>
        public Contact() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Contact CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Contact();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"account", n => { Account = n.GetObjectValue<MastodonClientLib.Models.Account>(MastodonClientLib.Models.Account.CreateFromDiscriminatorValue); } },
                {"email", n => { Email = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<MastodonClientLib.Models.Account>("account", Account);
            writer.WriteStringValue("email", Email);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
