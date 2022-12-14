using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Source : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The fields property</summary>
        public List<Field> Fields { get; set; }
        /// <summary>The follower_requests_count property</summary>
        public int? Follower_requests_count { get; set; }
        /// <summary>The language property</summary>
        public string Language { get; set; }
        /// <summary>The note property</summary>
        public string Note { get; set; }
        /// <summary>The privacy property</summary>
        public string Privacy { get; set; }
        /// <summary>The sensitive property</summary>
        public bool? Sensitive { get; set; }
        /// <summary>
        /// Instantiates a new Source and sets the default values.
        /// </summary>
        public Source() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Source CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Source();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"fields", n => { Fields = n.GetCollectionOfObjectValues<Field>(Field.CreateFromDiscriminatorValue)?.ToList(); } },
                {"follower_requests_count", n => { Follower_requests_count = n.GetIntValue(); } },
                {"language", n => { Language = n.GetStringValue(); } },
                {"note", n => { Note = n.GetStringValue(); } },
                {"privacy", n => { Privacy = n.GetStringValue(); } },
                {"sensitive", n => { Sensitive = n.GetBoolValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteCollectionOfObjectValues<Field>("fields", Fields);
            writer.WriteIntValue("follower_requests_count", Follower_requests_count);
            writer.WriteStringValue("language", Language);
            writer.WriteStringValue("note", Note);
            writer.WriteStringValue("privacy", Privacy);
            writer.WriteBoolValue("sensitive", Sensitive);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
