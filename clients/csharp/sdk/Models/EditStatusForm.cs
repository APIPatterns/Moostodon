using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class EditStatusForm : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The media_Ids property</summary>
        public List<string> Media_Ids { get; set; }
        /// <summary>The pollExpires_in property</summary>
        public int? PollExpires_in { get; set; }
        /// <summary>The pollHide_totals property</summary>
        public bool? PollHide_totals { get; set; }
        /// <summary>The pollMultiple property</summary>
        public bool? PollMultiple { get; set; }
        /// <summary>The pollOptions property</summary>
        public List<string> PollOptions { get; set; }
        /// <summary>The sensitive property</summary>
        public bool? Sensitive { get; set; }
        /// <summary>The spoiler_text property</summary>
        public string Spoiler_text { get; set; }
        /// <summary>The status property</summary>
        public string Status { get; set; }
        /// <summary>
        /// Instantiates a new EditStatusForm and sets the default values.
        /// </summary>
        public EditStatusForm() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static EditStatusForm CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new EditStatusForm();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"media_Ids", n => { Media_Ids = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"poll[expires_in]", n => { PollExpires_in = n.GetIntValue(); } },
                {"poll[hide_totals]", n => { PollHide_totals = n.GetBoolValue(); } },
                {"poll[multiple]", n => { PollMultiple = n.GetBoolValue(); } },
                {"poll[options]", n => { PollOptions = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"sensitive", n => { Sensitive = n.GetBoolValue(); } },
                {"spoiler_text", n => { Spoiler_text = n.GetStringValue(); } },
                {"status", n => { Status = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteCollectionOfPrimitiveValues<string>("media_Ids", Media_Ids);
            writer.WriteIntValue("poll[expires_in]", PollExpires_in);
            writer.WriteBoolValue("poll[hide_totals]", PollHide_totals);
            writer.WriteBoolValue("poll[multiple]", PollMultiple);
            writer.WriteCollectionOfPrimitiveValues<string>("poll[options]", PollOptions);
            writer.WriteBoolValue("sensitive", Sensitive);
            writer.WriteStringValue("spoiler_text", Spoiler_text);
            writer.WriteStringValue("status", Status);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
