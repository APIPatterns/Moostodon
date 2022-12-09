using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class UpdateCredentialsForm : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The avatar property</summary>
        public string Avatar { get; set; }
        /// <summary>The bot property</summary>
        public bool? Bot { get; set; }
        /// <summary>The discoverable property</summary>
        public bool? Discoverable { get; set; }
        /// <summary>The display_name property</summary>
        public string Display_name { get; set; }
        /// <summary>The header property</summary>
        public string Header { get; set; }
        /// <summary>The locked property</summary>
        public bool? Locked { get; set; }
        /// <summary>The note property</summary>
        public string Note { get; set; }
        /// <summary>The sourceLanguage property</summary>
        public string SourceLanguage { get; set; }
        /// <summary>The sourcePrivacy property</summary>
        public string SourcePrivacy { get; set; }
        /// <summary>The sourceSensitive property</summary>
        public bool? SourceSensitive { get; set; }
        /// <summary>
        /// Instantiates a new UpdateCredentialsForm and sets the default values.
        /// </summary>
        public UpdateCredentialsForm() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static UpdateCredentialsForm CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new UpdateCredentialsForm();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"avatar", n => { Avatar = n.GetStringValue(); } },
                {"bot", n => { Bot = n.GetBoolValue(); } },
                {"discoverable", n => { Discoverable = n.GetBoolValue(); } },
                {"display_name", n => { Display_name = n.GetStringValue(); } },
                {"header", n => { Header = n.GetStringValue(); } },
                {"locked", n => { Locked = n.GetBoolValue(); } },
                {"note", n => { Note = n.GetStringValue(); } },
                {"source[language]", n => { SourceLanguage = n.GetStringValue(); } },
                {"source[privacy]", n => { SourcePrivacy = n.GetStringValue(); } },
                {"source[sensitive]", n => { SourceSensitive = n.GetBoolValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("avatar", Avatar);
            writer.WriteBoolValue("bot", Bot);
            writer.WriteBoolValue("discoverable", Discoverable);
            writer.WriteStringValue("display_name", Display_name);
            writer.WriteStringValue("header", Header);
            writer.WriteBoolValue("locked", Locked);
            writer.WriteStringValue("note", Note);
            writer.WriteStringValue("source[language]", SourceLanguage);
            writer.WriteStringValue("source[privacy]", SourcePrivacy);
            writer.WriteBoolValue("source[sensitive]", SourceSensitive);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
