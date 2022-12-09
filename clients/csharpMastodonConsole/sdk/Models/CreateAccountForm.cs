using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class CreateAccountForm : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The agreement property</summary>
        public bool? Agreement { get; set; }
        /// <summary>The email property</summary>
        public string Email { get; set; }
        /// <summary>The locale property</summary>
        public string Locale { get; set; }
        /// <summary>The password property</summary>
        public string Password { get; set; }
        /// <summary>The reason property</summary>
        public string Reason { get; set; }
        /// <summary>The username property</summary>
        public string Username { get; set; }
        /// <summary>
        /// Instantiates a new CreateAccountForm and sets the default values.
        /// </summary>
        public CreateAccountForm() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static CreateAccountForm CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new CreateAccountForm();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"agreement", n => { Agreement = n.GetBoolValue(); } },
                {"email", n => { Email = n.GetStringValue(); } },
                {"locale", n => { Locale = n.GetStringValue(); } },
                {"password", n => { Password = n.GetStringValue(); } },
                {"reason", n => { Reason = n.GetStringValue(); } },
                {"username", n => { Username = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteBoolValue("agreement", Agreement);
            writer.WriteStringValue("email", Email);
            writer.WriteStringValue("locale", Locale);
            writer.WriteStringValue("password", Password);
            writer.WriteStringValue("reason", Reason);
            writer.WriteStringValue("username", Username);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
