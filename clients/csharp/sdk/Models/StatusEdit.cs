using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class StatusEdit : IAdditionalDataHolder, IParsable {
        /// <summary>The account property</summary>
        public MastodonClientLib.Models.Account Account { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The content property</summary>
        public string Content { get; set; }
        /// <summary>The created_at property</summary>
        public string Created_at { get; set; }
        /// <summary>The emojis property</summary>
        public List<Emoji> Emojis { get; set; }
        /// <summary>The media_attachments property</summary>
        public List<MediaAttachment> Media_attachments { get; set; }
        /// <summary>The poll property</summary>
        public MastodonClientLib.Models.Poll Poll { get; set; }
        /// <summary>The sensitive property</summary>
        public bool? Sensitive { get; set; }
        /// <summary>The spoiler_text property</summary>
        public string Spoiler_text { get; set; }
        /// <summary>
        /// Instantiates a new StatusEdit and sets the default values.
        /// </summary>
        public StatusEdit() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static StatusEdit CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new StatusEdit();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"account", n => { Account = n.GetObjectValue<MastodonClientLib.Models.Account>(MastodonClientLib.Models.Account.CreateFromDiscriminatorValue); } },
                {"content", n => { Content = n.GetStringValue(); } },
                {"created_at", n => { Created_at = n.GetStringValue(); } },
                {"emojis", n => { Emojis = n.GetCollectionOfObjectValues<Emoji>(Emoji.CreateFromDiscriminatorValue)?.ToList(); } },
                {"media_attachments", n => { Media_attachments = n.GetCollectionOfObjectValues<MediaAttachment>(MediaAttachment.CreateFromDiscriminatorValue)?.ToList(); } },
                {"poll", n => { Poll = n.GetObjectValue<MastodonClientLib.Models.Poll>(MastodonClientLib.Models.Poll.CreateFromDiscriminatorValue); } },
                {"sensitive", n => { Sensitive = n.GetBoolValue(); } },
                {"spoiler_text", n => { Spoiler_text = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<MastodonClientLib.Models.Account>("account", Account);
            writer.WriteStringValue("content", Content);
            writer.WriteStringValue("created_at", Created_at);
            writer.WriteCollectionOfObjectValues<Emoji>("emojis", Emojis);
            writer.WriteCollectionOfObjectValues<MediaAttachment>("media_attachments", Media_attachments);
            writer.WriteObjectValue<MastodonClientLib.Models.Poll>("poll", Poll);
            writer.WriteBoolValue("sensitive", Sensitive);
            writer.WriteStringValue("spoiler_text", Spoiler_text);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
