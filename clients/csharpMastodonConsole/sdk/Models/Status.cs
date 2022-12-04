using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Status : IAdditionalDataHolder, IParsable {
        /// <summary>The account property</summary>
        public MastodonClientLib.Models.Account Account { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The bookmarked property</summary>
        public bool? Bookmarked { get; set; }
        /// <summary>The card property</summary>
        public MastodonClientLib.Models.Card Card { get; set; }
        /// <summary>The content property</summary>
        public string Content { get; set; }
        /// <summary>The created_at property</summary>
        public string Created_at { get; set; }
        /// <summary>The emojis property</summary>
        public List<Emoji> Emojis { get; set; }
        /// <summary>The favourited property</summary>
        public bool? Favourited { get; set; }
        /// <summary>The favourites_count property</summary>
        public int? Favourites_count { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The in_reply_to_account_id property</summary>
        public string In_reply_to_account_id { get; set; }
        /// <summary>The in_reply_to_id property</summary>
        public string In_reply_to_id { get; set; }
        /// <summary>The language property</summary>
        public string Language { get; set; }
        /// <summary>The media_attachments property</summary>
        public List<MediaAttachment> Media_attachments { get; set; }
        /// <summary>The mentions property</summary>
        public List<Mention> Mentions { get; set; }
        /// <summary>The muted property</summary>
        public bool? Muted { get; set; }
        /// <summary>The pinned property</summary>
        public bool? Pinned { get; set; }
        /// <summary>The poll property</summary>
        public MastodonClientLib.Models.Poll Poll { get; set; }
        /// <summary>The reblog property</summary>
        public Status Reblog { get; set; }
        /// <summary>The reblogged property</summary>
        public bool? Reblogged { get; set; }
        /// <summary>The reblogs_count property</summary>
        public int? Reblogs_count { get; set; }
        /// <summary>The replies_count property</summary>
        public int? Replies_count { get; set; }
        /// <summary>The sensitive property</summary>
        public bool? Sensitive { get; set; }
        /// <summary>The spoiler_text property</summary>
        public string Spoiler_text { get; set; }
        /// <summary>The tags property</summary>
        public List<Tag> Tags { get; set; }
        /// <summary>The text property</summary>
        public string Text { get; set; }
        /// <summary>The uri property</summary>
        public string Uri { get; set; }
        /// <summary>The url property</summary>
        public string Url { get; set; }
        /// <summary>The visibility property</summary>
        public string Visibility { get; set; }
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
                {"account", n => { Account = n.GetObjectValue<MastodonClientLib.Models.Account>(MastodonClientLib.Models.Account.CreateFromDiscriminatorValue); } },
                {"bookmarked", n => { Bookmarked = n.GetBoolValue(); } },
                {"card", n => { Card = n.GetObjectValue<MastodonClientLib.Models.Card>(MastodonClientLib.Models.Card.CreateFromDiscriminatorValue); } },
                {"content", n => { Content = n.GetStringValue(); } },
                {"created_at", n => { Created_at = n.GetStringValue(); } },
                {"emojis", n => { Emojis = n.GetCollectionOfObjectValues<Emoji>(Emoji.CreateFromDiscriminatorValue)?.ToList(); } },
                {"favourited", n => { Favourited = n.GetBoolValue(); } },
                {"favourites_count", n => { Favourites_count = n.GetIntValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"in_reply_to_account_id", n => { In_reply_to_account_id = n.GetStringValue(); } },
                {"in_reply_to_id", n => { In_reply_to_id = n.GetStringValue(); } },
                {"language", n => { Language = n.GetStringValue(); } },
                {"media_attachments", n => { Media_attachments = n.GetCollectionOfObjectValues<MediaAttachment>(MediaAttachment.CreateFromDiscriminatorValue)?.ToList(); } },
                {"mentions", n => { Mentions = n.GetCollectionOfObjectValues<Mention>(Mention.CreateFromDiscriminatorValue)?.ToList(); } },
                {"muted", n => { Muted = n.GetBoolValue(); } },
                {"pinned", n => { Pinned = n.GetBoolValue(); } },
                {"poll", n => { Poll = n.GetObjectValue<MastodonClientLib.Models.Poll>(MastodonClientLib.Models.Poll.CreateFromDiscriminatorValue); } },
                {"reblog", n => { Reblog = n.GetObjectValue<Status>(Status.CreateFromDiscriminatorValue); } },
                {"reblogged", n => { Reblogged = n.GetBoolValue(); } },
                {"reblogs_count", n => { Reblogs_count = n.GetIntValue(); } },
                {"replies_count", n => { Replies_count = n.GetIntValue(); } },
                {"sensitive", n => { Sensitive = n.GetBoolValue(); } },
                {"spoiler_text", n => { Spoiler_text = n.GetStringValue(); } },
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
            writer.WriteObjectValue<MastodonClientLib.Models.Account>("account", Account);
            writer.WriteBoolValue("bookmarked", Bookmarked);
            writer.WriteObjectValue<MastodonClientLib.Models.Card>("card", Card);
            writer.WriteStringValue("content", Content);
            writer.WriteStringValue("created_at", Created_at);
            writer.WriteCollectionOfObjectValues<Emoji>("emojis", Emojis);
            writer.WriteBoolValue("favourited", Favourited);
            writer.WriteIntValue("favourites_count", Favourites_count);
            writer.WriteStringValue("id", Id);
            writer.WriteStringValue("in_reply_to_account_id", In_reply_to_account_id);
            writer.WriteStringValue("in_reply_to_id", In_reply_to_id);
            writer.WriteStringValue("language", Language);
            writer.WriteCollectionOfObjectValues<MediaAttachment>("media_attachments", Media_attachments);
            writer.WriteCollectionOfObjectValues<Mention>("mentions", Mentions);
            writer.WriteBoolValue("muted", Muted);
            writer.WriteBoolValue("pinned", Pinned);
            writer.WriteObjectValue<MastodonClientLib.Models.Poll>("poll", Poll);
            writer.WriteObjectValue<Status>("reblog", Reblog);
            writer.WriteBoolValue("reblogged", Reblogged);
            writer.WriteIntValue("reblogs_count", Reblogs_count);
            writer.WriteIntValue("replies_count", Replies_count);
            writer.WriteBoolValue("sensitive", Sensitive);
            writer.WriteStringValue("spoiler_text", Spoiler_text);
            writer.WriteCollectionOfObjectValues<Tag>("tags", Tags);
            writer.WriteStringValue("text", Text);
            writer.WriteStringValue("uri", Uri);
            writer.WriteStringValue("url", Url);
            writer.WriteStringValue("visibility", Visibility);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
