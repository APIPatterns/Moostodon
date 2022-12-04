using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class MediaAttachmentMeta : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The original property</summary>
        public MediaAttachmentMetaOriginal Original { get; set; }
        /// <summary>The small property</summary>
        public MediaAttachmentMetaSmall Small { get; set; }
        /// <summary>
        /// Instantiates a new MediaAttachmentMeta and sets the default values.
        /// </summary>
        public MediaAttachmentMeta() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static MediaAttachmentMeta CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new MediaAttachmentMeta();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"original", n => { Original = n.GetObjectValue<MediaAttachmentMetaOriginal>(MediaAttachmentMetaOriginal.CreateFromDiscriminatorValue); } },
                {"small", n => { Small = n.GetObjectValue<MediaAttachmentMetaSmall>(MediaAttachmentMetaSmall.CreateFromDiscriminatorValue); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<MediaAttachmentMetaOriginal>("original", Original);
            writer.WriteObjectValue<MediaAttachmentMetaSmall>("small", Small);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
