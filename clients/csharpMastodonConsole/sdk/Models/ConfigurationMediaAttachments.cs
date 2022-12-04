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
        public int? Image_matrix_limit { get; set; }
        /// <summary>The image_size_limit property</summary>
        public int? Image_size_limit { get; set; }
        /// <summary>The supported_mime_types property</summary>
        public List<string> Supported_mime_types { get; set; }
        /// <summary>The video_matrix_limit property</summary>
        public int? Video_matrix_limit { get; set; }
        /// <summary>The video_size_limit property</summary>
        public int? Video_size_limit { get; set; }
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
                {"image_matrix_limit", n => { Image_matrix_limit = n.GetIntValue(); } },
                {"image_size_limit", n => { Image_size_limit = n.GetIntValue(); } },
                {"supported_mime_types", n => { Supported_mime_types = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"video_matrix_limit", n => { Video_matrix_limit = n.GetIntValue(); } },
                {"video_size_limit", n => { Video_size_limit = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteIntValue("image_matrix_limit", Image_matrix_limit);
            writer.WriteIntValue("image_size_limit", Image_size_limit);
            writer.WriteCollectionOfPrimitiveValues<string>("supported_mime_types", Supported_mime_types);
            writer.WriteIntValue("video_matrix_limit", Video_matrix_limit);
            writer.WriteIntValue("video_size_limit", Video_size_limit);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
