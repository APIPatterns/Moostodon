using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class CreateStatusForm : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The in_reply_to_id property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? InReplyToId { get; set; }
#nullable restore
#else
        public string InReplyToId { get; set; }
#endif
        /// <summary>The language property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Language { get; set; }
#nullable restore
#else
        public string Language { get; set; }
#endif
        /// <summary>The media_Ids property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<string>? MediaIds { get; set; }
#nullable restore
#else
        public List<string> MediaIds { get; set; }
#endif
        /// <summary>The pollExpires_in property</summary>
        public int? PollExpiresIn { get; set; }
        /// <summary>The pollHide_totals property</summary>
        public bool? PollHideTotals { get; set; }
        /// <summary>The pollMultiple property</summary>
        public bool? PollMultiple { get; set; }
        /// <summary>The pollOptions property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<string>? PollOptions { get; set; }
#nullable restore
#else
        public List<string> PollOptions { get; set; }
#endif
        /// <summary>The scheduled_at property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? ScheduledAt { get; set; }
#nullable restore
#else
        public string ScheduledAt { get; set; }
#endif
        /// <summary>The sensitive property</summary>
        public bool? Sensitive { get; set; }
        /// <summary>The spoiler_text property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? SpoilerText { get; set; }
#nullable restore
#else
        public string SpoilerText { get; set; }
#endif
        /// <summary>The status property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Status { get; set; }
#nullable restore
#else
        public string Status { get; set; }
#endif
        /// <summary>The visibility property</summary>
        public MastodonClientLib.Models.Visibility? Visibility { get; set; }
        /// <summary>
        /// Instantiates a new CreateStatusForm and sets the default values.
        /// </summary>
        public CreateStatusForm() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static CreateStatusForm CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new CreateStatusForm();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"in_reply_to_id", n => { InReplyToId = n.GetStringValue(); } },
                {"language", n => { Language = n.GetStringValue(); } },
                {"media_Ids", n => { MediaIds = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"poll[expires_in]", n => { PollExpiresIn = n.GetIntValue(); } },
                {"poll[hide_totals]", n => { PollHideTotals = n.GetBoolValue(); } },
                {"poll[multiple]", n => { PollMultiple = n.GetBoolValue(); } },
                {"poll[options]", n => { PollOptions = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"scheduled_at", n => { ScheduledAt = n.GetStringValue(); } },
                {"sensitive", n => { Sensitive = n.GetBoolValue(); } },
                {"spoiler_text", n => { SpoilerText = n.GetStringValue(); } },
                {"status", n => { Status = n.GetStringValue(); } },
                {"visibility", n => { Visibility = n.GetEnumValue<Visibility>(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("in_reply_to_id", InReplyToId);
            writer.WriteStringValue("language", Language);
            writer.WriteCollectionOfPrimitiveValues<string>("media_Ids", MediaIds);
            writer.WriteIntValue("poll[expires_in]", PollExpiresIn);
            writer.WriteBoolValue("poll[hide_totals]", PollHideTotals);
            writer.WriteBoolValue("poll[multiple]", PollMultiple);
            writer.WriteCollectionOfPrimitiveValues<string>("poll[options]", PollOptions);
            writer.WriteStringValue("scheduled_at", ScheduledAt);
            writer.WriteBoolValue("sensitive", Sensitive);
            writer.WriteStringValue("spoiler_text", SpoilerText);
            writer.WriteStringValue("status", Status);
            writer.WriteEnumValue<Visibility>("visibility", Visibility);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
