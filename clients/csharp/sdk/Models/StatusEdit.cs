using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class StatusEdit : IParsable {
        /// <summary>The account property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Account? Account { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Account Account { get; set; }
#endif
        /// <summary>The content property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Content { get; set; }
#nullable restore
#else
        public string Content { get; set; }
#endif
        /// <summary>The created_at property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? CreatedAt { get; set; }
#nullable restore
#else
        public string CreatedAt { get; set; }
#endif
        /// <summary>The emojis property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Emoji>? Emojis { get; set; }
#nullable restore
#else
        public List<Emoji> Emojis { get; set; }
#endif
        /// <summary>The media_attachments property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<MediaAttachment>? MediaAttachments { get; set; }
#nullable restore
#else
        public List<MediaAttachment> MediaAttachments { get; set; }
#endif
        /// <summary>{id}: Id of the poll{expires_at}: Date and time when the poll expires{expired}: Whether the poll has expired{multiple}: Whether the poll allows multiple choices{votes_count}: Number of votes for the poll{voters_count}: Number of voters for the poll{options}: Options for the poll{emojis}: Emojis for the poll{voted}: Whether the authorized user has voted for the poll{own_votes}: Indexes of options voted for by the authorized user</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Poll? Poll { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Poll Poll { get; set; }
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
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static StatusEdit CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new StatusEdit();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"account", n => { Account = n.GetObjectValue<MastodonClientLib.Models.Account>(MastodonClientLib.Models.Account.CreateFromDiscriminatorValue); } },
                {"content", n => { Content = n.GetStringValue(); } },
                {"created_at", n => { CreatedAt = n.GetStringValue(); } },
                {"emojis", n => { Emojis = n.GetCollectionOfObjectValues<Emoji>(Emoji.CreateFromDiscriminatorValue)?.ToList(); } },
                {"media_attachments", n => { MediaAttachments = n.GetCollectionOfObjectValues<MediaAttachment>(MediaAttachment.CreateFromDiscriminatorValue)?.ToList(); } },
                {"poll", n => { Poll = n.GetObjectValue<MastodonClientLib.Models.Poll>(MastodonClientLib.Models.Poll.CreateFromDiscriminatorValue); } },
                {"sensitive", n => { Sensitive = n.GetBoolValue(); } },
                {"spoiler_text", n => { SpoilerText = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<MastodonClientLib.Models.Account>("account", Account);
            writer.WriteStringValue("content", Content);
            writer.WriteStringValue("created_at", CreatedAt);
            writer.WriteCollectionOfObjectValues<Emoji>("emojis", Emojis);
            writer.WriteCollectionOfObjectValues<MediaAttachment>("media_attachments", MediaAttachments);
            writer.WriteObjectValue<MastodonClientLib.Models.Poll>("poll", Poll);
            writer.WriteBoolValue("sensitive", Sensitive);
            writer.WriteStringValue("spoiler_text", SpoilerText);
        }
    }
}
