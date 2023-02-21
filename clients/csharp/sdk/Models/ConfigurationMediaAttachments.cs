using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class ConfigurationMediaAttachments : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The image_matrix_limit property</summary>
        public int? ImageMatrixLimit { get; set; }
        /// <summary>The image_size_limit property</summary>
        public int? ImageSizeLimit { get; set; }
        /// <summary>The supported_mime_types property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<string>? SupportedMimeTypes { get; set; }
#nullable restore
#else
        public List<string> SupportedMimeTypes { get; set; }
#endif
        /// <summary>The video_matrix_limit property</summary>
        public int? VideoMatrixLimit { get; set; }
        /// <summary>The video_size_limit property</summary>
        public int? VideoSizeLimit { get; set; }
        /// <summary>
        /// Instantiates a new ConfigurationMediaAttachments and sets the default values.
        /// </summary>
        public ConfigurationMediaAttachments() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static ConfigurationMediaAttachments CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new ConfigurationMediaAttachments();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"image_matrix_limit", n => { ImageMatrixLimit = n.GetIntValue(); } },
                {"image_size_limit", n => { ImageSizeLimit = n.GetIntValue(); } },
                {"supported_mime_types", n => { SupportedMimeTypes = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"video_matrix_limit", n => { VideoMatrixLimit = n.GetIntValue(); } },
                {"video_size_limit", n => { VideoSizeLimit = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteIntValue("image_matrix_limit", ImageMatrixLimit);
            writer.WriteIntValue("image_size_limit", ImageSizeLimit);
            writer.WriteCollectionOfPrimitiveValues<string>("supported_mime_types", SupportedMimeTypes);
            writer.WriteIntValue("video_matrix_limit", VideoMatrixLimit);
            writer.WriteIntValue("video_size_limit", VideoSizeLimit);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
