using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    /// <summary>
    /// {shortcode}: Shortcode for the emoji{static_url}: Static URL for the emoji{url}: URL for the emoji{visible_in_picker}: Whether the emoji is visible in the picker
    /// </summary>
    public class Emoji : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The shortcode property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Shortcode { get; set; }
#nullable restore
#else
        public string Shortcode { get; set; }
#endif
        /// <summary>The static_url property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? StaticUrl { get; set; }
#nullable restore
#else
        public string StaticUrl { get; set; }
#endif
        /// <summary>The url property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Url { get; set; }
#nullable restore
#else
        public string Url { get; set; }
#endif
        /// <summary>The visible_in_picker property</summary>
        public bool? VisibleInPicker { get; set; }
        /// <summary>
        /// Instantiates a new Emoji and sets the default values.
        /// </summary>
        public Emoji() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Emoji CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Emoji();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"shortcode", n => { Shortcode = n.GetStringValue(); } },
                {"static_url", n => { StaticUrl = n.GetStringValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
                {"visible_in_picker", n => { VisibleInPicker = n.GetBoolValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("shortcode", Shortcode);
            writer.WriteStringValue("static_url", StaticUrl);
            writer.WriteStringValue("url", Url);
            writer.WriteBoolValue("visible_in_picker", VisibleInPicker);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
