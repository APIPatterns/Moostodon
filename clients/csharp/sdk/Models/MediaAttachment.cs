using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class MediaAttachment : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The description property</summary>
        public string Description { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The meta property</summary>
        public MediaAttachmentMeta Meta { get; set; }
        /// <summary>The preview_url property</summary>
        public string Preview_url { get; set; }
        /// <summary>The remote_url property</summary>
        public string Remote_url { get; set; }
        /// <summary>The text_url property</summary>
        public string Text_url { get; set; }
        /// <summary>The type property</summary>
        public string Type { get; set; }
        /// <summary>The url property</summary>
        public string Url { get; set; }
        /// <summary>
        /// Instantiates a new MediaAttachment and sets the default values.
        /// </summary>
        public MediaAttachment() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static MediaAttachment CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new MediaAttachment();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"description", n => { Description = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"meta", n => { Meta = n.GetObjectValue<MediaAttachmentMeta>(MediaAttachmentMeta.CreateFromDiscriminatorValue); } },
                {"preview_url", n => { Preview_url = n.GetStringValue(); } },
                {"remote_url", n => { Remote_url = n.GetStringValue(); } },
                {"text_url", n => { Text_url = n.GetStringValue(); } },
                {"type", n => { Type = n.GetStringValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("description", Description);
            writer.WriteStringValue("id", Id);
            writer.WriteObjectValue<MediaAttachmentMeta>("meta", Meta);
            writer.WriteStringValue("preview_url", Preview_url);
            writer.WriteStringValue("remote_url", Remote_url);
            writer.WriteStringValue("text_url", Text_url);
            writer.WriteStringValue("type", Type);
            writer.WriteStringValue("url", Url);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
