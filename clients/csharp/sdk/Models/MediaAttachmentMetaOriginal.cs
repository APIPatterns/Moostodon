using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class MediaAttachmentMetaOriginal : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The aspect property</summary>
        public float? Aspect { get; set; }
        /// <summary>The height property</summary>
        public int? Height { get; set; }
        /// <summary>The size property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Size { get; set; }
#nullable restore
#else
        public string Size { get; set; }
#endif
        /// <summary>The width property</summary>
        public int? Width { get; set; }
        /// <summary>
        /// Instantiates a new MediaAttachmentMetaOriginal and sets the default values.
        /// </summary>
        public MediaAttachmentMetaOriginal() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static MediaAttachmentMetaOriginal CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new MediaAttachmentMetaOriginal();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"aspect", n => { Aspect = n.GetFloatValue(); } },
                {"height", n => { Height = n.GetIntValue(); } },
                {"size", n => { Size = n.GetStringValue(); } },
                {"width", n => { Width = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteFloatValue("aspect", Aspect);
            writer.WriteIntValue("height", Height);
            writer.WriteStringValue("size", Size);
            writer.WriteIntValue("width", Width);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
