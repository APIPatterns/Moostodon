using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Account : IAdditionalDataHolder, IParsable {
        /// <summary>The acct property</summary>
        public string Acct { get; set; }
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The avatar property</summary>
        public string Avatar { get; set; }
        /// <summary>The avatar_static property</summary>
        public string Avatar_static { get; set; }
        /// <summary>The bot property</summary>
        public bool? Bot { get; set; }
        /// <summary>The created_at property</summary>
        public string Created_at { get; set; }
        /// <summary>The discoverable property</summary>
        public bool? Discoverable { get; set; }
        /// <summary>The display_name property</summary>
        public string Display_name { get; set; }
        /// <summary>The emojis property</summary>
        public List<Emoji> Emojis { get; set; }
        /// <summary>The fields property</summary>
        public List<Field> Fields { get; set; }
        /// <summary>The followers_count property</summary>
        public int? Followers_count { get; set; }
        /// <summary>The following_count property</summary>
        public int? Following_count { get; set; }
        /// <summary>The header property</summary>
        public string Header { get; set; }
        /// <summary>The header_static property</summary>
        public string Header_static { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The last_status_at property</summary>
        public string Last_status_at { get; set; }
        /// <summary>The locked property</summary>
        public bool? Locked { get; set; }
        /// <summary>The moved property</summary>
        public Account Moved { get; set; }
        /// <summary>The mute_expires_at property</summary>
        public string Mute_expires_at { get; set; }
        /// <summary>The note property</summary>
        public string Note { get; set; }
        /// <summary>The souce property</summary>
        public Source Souce { get; set; }
        /// <summary>The statuses_count property</summary>
        public int? Statuses_count { get; set; }
        /// <summary>The suspended property</summary>
        public bool? Suspended { get; set; }
        /// <summary>The url property</summary>
        public string Url { get; set; }
        /// <summary>The username property</summary>
        public string Username { get; set; }
        /// <summary>
        /// Instantiates a new Account and sets the default values.
        /// </summary>
        public Account() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Account CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Account();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"acct", n => { Acct = n.GetStringValue(); } },
                {"avatar", n => { Avatar = n.GetStringValue(); } },
                {"avatar_static", n => { Avatar_static = n.GetStringValue(); } },
                {"bot", n => { Bot = n.GetBoolValue(); } },
                {"created_at", n => { Created_at = n.GetStringValue(); } },
                {"discoverable", n => { Discoverable = n.GetBoolValue(); } },
                {"display_name", n => { Display_name = n.GetStringValue(); } },
                {"emojis", n => { Emojis = n.GetCollectionOfObjectValues<Emoji>(Emoji.CreateFromDiscriminatorValue)?.ToList(); } },
                {"fields", n => { Fields = n.GetCollectionOfObjectValues<Field>(Field.CreateFromDiscriminatorValue)?.ToList(); } },
                {"followers_count", n => { Followers_count = n.GetIntValue(); } },
                {"following_count", n => { Following_count = n.GetIntValue(); } },
                {"header", n => { Header = n.GetStringValue(); } },
                {"header_static", n => { Header_static = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"last_status_at", n => { Last_status_at = n.GetStringValue(); } },
                {"locked", n => { Locked = n.GetBoolValue(); } },
                {"moved", n => { Moved = n.GetObjectValue<Account>(Account.CreateFromDiscriminatorValue); } },
                {"mute_expires_at", n => { Mute_expires_at = n.GetStringValue(); } },
                {"note", n => { Note = n.GetStringValue(); } },
                {"souce", n => { Souce = n.GetObjectValue<Source>(Source.CreateFromDiscriminatorValue); } },
                {"statuses_count", n => { Statuses_count = n.GetIntValue(); } },
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
            writer.WriteStringValue("avatar_static", Avatar_static);
            writer.WriteBoolValue("bot", Bot);
            writer.WriteStringValue("created_at", Created_at);
            writer.WriteBoolValue("discoverable", Discoverable);
            writer.WriteStringValue("display_name", Display_name);
            writer.WriteCollectionOfObjectValues<Emoji>("emojis", Emojis);
            writer.WriteCollectionOfObjectValues<Field>("fields", Fields);
            writer.WriteIntValue("followers_count", Followers_count);
            writer.WriteIntValue("following_count", Following_count);
            writer.WriteStringValue("header", Header);
            writer.WriteStringValue("header_static", Header_static);
            writer.WriteStringValue("id", Id);
            writer.WriteStringValue("last_status_at", Last_status_at);
            writer.WriteBoolValue("locked", Locked);
            writer.WriteObjectValue<Account>("moved", Moved);
            writer.WriteStringValue("mute_expires_at", Mute_expires_at);
            writer.WriteStringValue("note", Note);
            writer.WriteObjectValue<Source>("souce", Souce);
            writer.WriteIntValue("statuses_count", Statuses_count);
            writer.WriteBoolValue("suspended", Suspended);
            writer.WriteStringValue("url", Url);
            writer.WriteStringValue("username", Username);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
