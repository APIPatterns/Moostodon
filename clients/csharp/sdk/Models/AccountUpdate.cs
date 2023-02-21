using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class AccountUpdate : IAdditionalDataHolder, IParsable {
        /// <summary>The acct property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Acct { get; set; }
#nullable restore
#else
        public string Acct { get; set; }
#endif
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The avatar property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Avatar { get; set; }
#nullable restore
#else
        public string Avatar { get; set; }
#endif
        /// <summary>The avatar_static property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? AvatarStatic { get; set; }
#nullable restore
#else
        public string AvatarStatic { get; set; }
#endif
        /// <summary>The bot property</summary>
        public bool? Bot { get; set; }
        /// <summary>The created_at property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? CreatedAt { get; set; }
#nullable restore
#else
        public string CreatedAt { get; set; }
#endif
        /// <summary>The discoverable property</summary>
        public bool? Discoverable { get; set; }
        /// <summary>The display_name property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? DisplayName { get; set; }
#nullable restore
#else
        public string DisplayName { get; set; }
#endif
        /// <summary>The emojis property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Emoji>? Emojis { get; set; }
#nullable restore
#else
        public List<Emoji> Emojis { get; set; }
#endif
        /// <summary>The fields property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Field>? Fields { get; set; }
#nullable restore
#else
        public List<Field> Fields { get; set; }
#endif
        /// <summary>The followers_count property</summary>
        public int? FollowersCount { get; set; }
        /// <summary>The following_count property</summary>
        public int? FollowingCount { get; set; }
        /// <summary>The header property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Header { get; set; }
#nullable restore
#else
        public string Header { get; set; }
#endif
        /// <summary>The header_static property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? HeaderStatic { get; set; }
#nullable restore
#else
        public string HeaderStatic { get; set; }
#endif
        /// <summary>The id property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Id { get; set; }
#nullable restore
#else
        public string Id { get; set; }
#endif
        /// <summary>The last_status_at property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? LastStatusAt { get; set; }
#nullable restore
#else
        public string LastStatusAt { get; set; }
#endif
        /// <summary>The locked property</summary>
        public bool? Locked { get; set; }
        /// <summary>The moved property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public AccountUpdate? Moved { get; set; }
#nullable restore
#else
        public AccountUpdate Moved { get; set; }
#endif
        /// <summary>The mute_expires_at property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? MuteExpiresAt { get; set; }
#nullable restore
#else
        public string MuteExpiresAt { get; set; }
#endif
        /// <summary>The note property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Note { get; set; }
#nullable restore
#else
        public string Note { get; set; }
#endif
        /// <summary>The souce property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public SourceUpdate? Souce { get; set; }
#nullable restore
#else
        public SourceUpdate Souce { get; set; }
#endif
        /// <summary>The statuses_count property</summary>
        public int? StatusesCount { get; set; }
        /// <summary>The suspended property</summary>
        public bool? Suspended { get; set; }
        /// <summary>The url property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Url { get; set; }
#nullable restore
#else
        public string Url { get; set; }
#endif
        /// <summary>The username property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Username { get; set; }
#nullable restore
#else
        public string Username { get; set; }
#endif
        /// <summary>
        /// Instantiates a new AccountUpdate and sets the default values.
        /// </summary>
        public AccountUpdate() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static AccountUpdate CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new AccountUpdate();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"acct", n => { Acct = n.GetStringValue(); } },
                {"avatar", n => { Avatar = n.GetStringValue(); } },
                {"avatar_static", n => { AvatarStatic = n.GetStringValue(); } },
                {"bot", n => { Bot = n.GetBoolValue(); } },
                {"created_at", n => { CreatedAt = n.GetStringValue(); } },
                {"discoverable", n => { Discoverable = n.GetBoolValue(); } },
                {"display_name", n => { DisplayName = n.GetStringValue(); } },
                {"emojis", n => { Emojis = n.GetCollectionOfObjectValues<Emoji>(Emoji.CreateFromDiscriminatorValue)?.ToList(); } },
                {"fields", n => { Fields = n.GetCollectionOfObjectValues<Field>(Field.CreateFromDiscriminatorValue)?.ToList(); } },
                {"followers_count", n => { FollowersCount = n.GetIntValue(); } },
                {"following_count", n => { FollowingCount = n.GetIntValue(); } },
                {"header", n => { Header = n.GetStringValue(); } },
                {"header_static", n => { HeaderStatic = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"last_status_at", n => { LastStatusAt = n.GetStringValue(); } },
                {"locked", n => { Locked = n.GetBoolValue(); } },
                {"moved", n => { Moved = n.GetObjectValue<AccountUpdate>(AccountUpdate.CreateFromDiscriminatorValue); } },
                {"mute_expires_at", n => { MuteExpiresAt = n.GetStringValue(); } },
                {"note", n => { Note = n.GetStringValue(); } },
                {"souce", n => { Souce = n.GetObjectValue<SourceUpdate>(SourceUpdate.CreateFromDiscriminatorValue); } },
                {"statuses_count", n => { StatusesCount = n.GetIntValue(); } },
                {"suspended", n => { Suspended = n.GetBoolValue(); } },
                {"url", n => { Url = n.GetStringValue(); } },
                {"username", n => { Username = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteStringValue("acct", Acct);
            writer.WriteStringValue("avatar", Avatar);
            writer.WriteStringValue("avatar_static", AvatarStatic);
            writer.WriteBoolValue("bot", Bot);
            writer.WriteStringValue("created_at", CreatedAt);
            writer.WriteBoolValue("discoverable", Discoverable);
            writer.WriteStringValue("display_name", DisplayName);
            writer.WriteCollectionOfObjectValues<Emoji>("emojis", Emojis);
            writer.WriteCollectionOfObjectValues<Field>("fields", Fields);
            writer.WriteIntValue("followers_count", FollowersCount);
            writer.WriteIntValue("following_count", FollowingCount);
            writer.WriteStringValue("header", Header);
            writer.WriteStringValue("header_static", HeaderStatic);
            writer.WriteStringValue("id", Id);
            writer.WriteStringValue("last_status_at", LastStatusAt);
            writer.WriteBoolValue("locked", Locked);
            writer.WriteObjectValue<AccountUpdate>("moved", Moved);
            writer.WriteStringValue("mute_expires_at", MuteExpiresAt);
            writer.WriteStringValue("note", Note);
            writer.WriteObjectValue<SourceUpdate>("souce", Souce);
            writer.WriteIntValue("statuses_count", StatusesCount);
            writer.WriteBoolValue("suspended", Suspended);
            writer.WriteStringValue("url", Url);
            writer.WriteStringValue("username", Username);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
