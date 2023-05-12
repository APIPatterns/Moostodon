using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class MediaAttachmentMeta : IParsable {
        /// <summary>The original property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MediaAttachmentMetaOriginal? Original { get; set; }
#nullable restore
#else
        public MediaAttachmentMetaOriginal Original { get; set; }
#endif
        /// <summary>The small property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MediaAttachmentMetaSmall? Small { get; set; }
#nullable restore
#else
        public MediaAttachmentMetaSmall Small { get; set; }
#endif
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
        }
    }
}
