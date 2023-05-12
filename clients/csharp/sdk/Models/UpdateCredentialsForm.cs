using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class UpdateCredentialsForm : IParsable {
        /// <summary>The avatar property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Avatar { get; set; }
#nullable restore
#else
        public string Avatar { get; set; }
#endif
        /// <summary>The bot property</summary>
        public bool? Bot { get; set; }
        /// <summary>The discoverable property</summary>
        public bool? Discoverable { get; set; }
        /// <summary>The display_name property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? DisplayName { get; set; }
#nullable restore
#else
        public string DisplayName { get; set; }
#endif
        /// <summary>The header property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Header { get; set; }
#nullable restore
#else
        public string Header { get; set; }
#endif
        /// <summary>The locked property</summary>
        public bool? Locked { get; set; }
        /// <summary>The note property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Note { get; set; }
#nullable restore
#else
        public string Note { get; set; }
#endif
        /// <summary>The sourceLanguage property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? SourceLanguage { get; set; }
#nullable restore
#else
        public string SourceLanguage { get; set; }
#endif
        /// <summary>The sourcePrivacy property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? SourcePrivacy { get; set; }
#nullable restore
#else
        public string SourcePrivacy { get; set; }
#endif
        /// <summary>The sourceSensitive property</summary>
        public bool? SourceSensitive { get; set; }
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
                {"display_name", n => { DisplayName = n.GetStringValue(); } },
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
            writer.WriteStringValue("display_name", DisplayName);
            writer.WriteStringValue("header", Header);
            writer.WriteBoolValue("locked", Locked);
            writer.WriteStringValue("note", Note);
            writer.WriteStringValue("source[language]", SourceLanguage);
            writer.WriteStringValue("source[privacy]", SourcePrivacy);
            writer.WriteBoolValue("source[sensitive]", SourceSensitive);
        }
    }
}
