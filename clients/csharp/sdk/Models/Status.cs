using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Status : IAdditionalDataHolder, IParsable {
        /// <summary>Account that posted the status</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public Status_account? Account { get; set; }
#nullable restore
#else
        public Status_account Account { get; set; }
#endif
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The bookmarked property</summary>
        public bool? Bookmarked { get; set; }
        /// <summary>{url2}: URL of the card{title}: Title of the card{description}: Description of the card</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Card? Card { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Card Card { get; set; }
#endif
        /// <summary>HTML content of the status</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Content { get; set; }
#nullable restore
#else
        public string Content { get; set; }
#endif
        /// <summary>Date and time when the status was created</summary>
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
        /// <summary>The favourited property</summary>
        public bool? Favourited { get; set; }
        /// <summary>The favourites_count property</summary>
        public int? FavouritesCount { get; set; }
        /// <summary>Idenfier for a status message</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Id { get; set; }
#nullable restore
#else
        public string Id { get; set; }
#endif
        /// <summary>The in_reply_to_account_id property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? InReplyToAccountId { get; set; }
#nullable restore
#else
        public string InReplyToAccountId { get; set; }
#endif
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
        /// <summary>Media attachments for the status</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<MediaAttachment>? MediaAttachments { get; set; }
#nullable restore
#else
        public List<MediaAttachment> MediaAttachments { get; set; }
#endif
        /// <summary>Mentions for the status</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Mention>? Mentions { get; set; }
#nullable restore
#else
        public List<Mention> Mentions { get; set; }
#endif
        /// <summary>The muted property</summary>
        public bool? Muted { get; set; }
        /// <summary>The pinned property</summary>
        public bool? Pinned { get; set; }
        /// <summary>{id}: Id of the poll{expires_at}: Date and time when the poll expires{expired}: Whether the poll has expired{multiple}: Whether the poll allows multiple choices{votes_count}: Number of votes for the poll{voters_count}: Number of voters for the poll{options}: Options for the poll{emojis}: Emojis for the poll{voted}: Whether the authorized user has voted for the poll{own_votes}: Indexes of options voted for by the authorized user</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Poll? Poll { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Poll Poll { get; set; }
#endif
        /// <summary>The reblog property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public Status? Reblog { get; set; }
#nullable restore
#else
        public Status Reblog { get; set; }
#endif
        /// <summary>The reblogged property</summary>
        public bool? Reblogged { get; set; }
        /// <summary>The reblogs_count property</summary>
        public int? ReblogsCount { get; set; }
        /// <summary>The replies_count property</summary>
        public int? RepliesCount { get; set; }
        /// <summary>Whether the status is marked as sensitive</summary>
        public bool? Sensitive { get; set; }
        /// <summary>Text to be shown as a warning before the actual content</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? SpoilerText { get; set; }
#nullable restore
#else
        public string SpoilerText { get; set; }
#endif
        /// <summary>Tags for the status</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Tag>? Tags { get; set; }
#nullable restore
#else
        public List<Tag> Tags { get; set; }
#endif
        /// <summary>The text property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Text { get; set; }
#nullable restore
#else
        public string Text { get; set; }
#endif
        /// <summary>URI for a status message</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Uri { get; set; }
#nullable restore
#else
        public string Uri { get; set; }
#endif
        /// <summary>The url property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Url { get; set; }
#nullable restore
#else
        public string Url { get; set; }
#endif
        /// <summary>Visibility of the status</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Visibility { get; set; }
#nullable restore
#else
        public string Visibility { get; set; }
#endif
        /// <summary>
        /// Instantiates a new Status and sets the default values.
        /// </summary>
        public Status() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Status CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Status();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"account", n => { Account = n.GetObjectValue<Status_account>(Status_account.CreateFromDiscriminatorValue); } },
                {"bookmarked", n => { Bookmarked = n.GetBoolValue(); } },
                {"card", n => { Card = n.GetObjectValue<MastodonClientLib.Models.Card>(MastodonClientLib.Models.Card.CreateFromDiscriminatorValue); } },
                {"content", n => { Content = n.GetStringValue(); } },
                {"created_at", n => { CreatedAt = n.GetStringValue(); } },
                {"emojis", n => { Emojis = n.GetCollectionOfObjectValues<Emoji>(Emoji.CreateFromDiscriminatorValue)?.ToList(); } },
                {"favourited", n => { Favourited = n.GetBoolValue(); } },
                {"favourites_count", n => { FavouritesCount = n.GetIntValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"in_reply_to_account_id", n => { InReplyToAccountId = n.GetStringValue(); } },
                {"in_reply_to_id", n => { InReplyToId = n.GetStringValue(); } },
                {"language", n => { Language = n.GetStringValue(); } },
                {"media_attachments", n => { MediaAttachments = n.GetCollectionOfObjectValues<MediaAttachment>(MediaAttachment.CreateFromDiscriminatorValue)?.ToList(); } },
                {"mentions", n => { Mentions = n.GetCollectionOfObjectValues<Mention>(Mention.CreateFromDiscriminatorValue)?.ToList(); } },
                {"muted", n => { Muted = n.GetBoolValue(); } },
                {"pinned", n => { Pinned = n.GetBoolValue(); } },
                {"poll", n => { Poll = n.GetObjectValue<MastodonClientLib.Models.Poll>(MastodonClientLib.Models.Poll.CreateFromDiscriminatorValue); } },
                {"reblog", n => { Reblog = n.GetObjectValue<Status>(Status.CreateFromDiscriminatorValue); } },
                {"reblogged", n => { Reblogged = n.GetBoolValue(); } },
                {"reblogs_count", n => { ReblogsCount = n.GetIntValue(); } },
                {"replies_count", n => { RepliesCount = n.GetIntValue(); } },
                {"sensitive", n => { Sensitive = n.GetBoolValue(); } },
                {"spoiler_text", n => { SpoilerText = n.GetStringValue(); } },
                {"tags", n => { Tags = n.GetCollectionOfObjectValues<Tag>(Tag.CreateFromDiscriminatorValue)?.ToList(); } },
                {"text", n => { Text = n.GetStringValue(); } },
                {"uri", n => { Uri = n.GetStringValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
                {"visibility", n => { Visibility = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<Status_account>("account", Account);
            writer.WriteBoolValue("bookmarked", Bookmarked);
            writer.WriteObjectValue<MastodonClientLib.Models.Card>("card", Card);
            writer.WriteStringValue("content", Content);
            writer.WriteStringValue("created_at", CreatedAt);
            writer.WriteCollectionOfObjectValues<Emoji>("emojis", Emojis);
            writer.WriteBoolValue("favourited", Favourited);
            writer.WriteIntValue("favourites_count", FavouritesCount);
            writer.WriteStringValue("id", Id);
            writer.WriteStringValue("in_reply_to_account_id", InReplyToAccountId);
            writer.WriteStringValue("in_reply_to_id", InReplyToId);
            writer.WriteStringValue("language", Language);
            writer.WriteCollectionOfObjectValues<MediaAttachment>("media_attachments", MediaAttachments);
            writer.WriteCollectionOfObjectValues<Mention>("mentions", Mentions);
            writer.WriteBoolValue("muted", Muted);
            writer.WriteBoolValue("pinned", Pinned);
            writer.WriteObjectValue<MastodonClientLib.Models.Poll>("poll", Poll);
            writer.WriteObjectValue<Status>("reblog", Reblog);
            writer.WriteBoolValue("reblogged", Reblogged);
            writer.WriteIntValue("reblogs_count", ReblogsCount);
            writer.WriteIntValue("replies_count", RepliesCount);
            writer.WriteBoolValue("sensitive", Sensitive);
            writer.WriteStringValue("spoiler_text", SpoilerText);
            writer.WriteCollectionOfObjectValues<Tag>("tags", Tags);
            writer.WriteStringValue("text", Text);
            writer.WriteStringValue("uri", Uri);
            writer.WriteStringValue("url", Url);
            writer.WriteStringValue("visibility", Visibility);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
