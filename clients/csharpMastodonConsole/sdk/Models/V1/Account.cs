using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models.V1 {
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
        /// <summary>The display_name property</summary>
        public string Display_name { get; set; }
        /// <summary>The emojis property</summary>
        public List<string> Emojis { get; set; }
        /// <summary>The fields property</summary>
        public List<string> Fields { get; set; }
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
        /// <summary>The locked property</summary>
        public bool? Locked { get; set; }
        /// <summary>The moved property</summary>
        public string Moved { get; set; }
        /// <summary>The note property</summary>
        public string Note { get; set; }
        /// <summary>The statuses_count property</summary>
        public int? Statuses_count { get; set; }
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
                {"display_name", n => { Display_name = n.GetStringValue(); } },
                {"emojis", n => { Emojis = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"fields", n => { Fields = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"followers_count", n => { Followers_count = n.GetIntValue(); } },
                {"following_count", n => { Following_count = n.GetIntValue(); } },
                {"header", n => { Header = n.GetStringValue(); } },
                {"header_static", n => { Header_static = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"locked", n => { Locked = n.GetBoolValue(); } },
                {"moved", n => { Moved = n.GetStringValue(); } },
                {"note", n => { Note = n.GetStringValue(); } },
                {"statuses_count", n => { Statuses_count = n.GetIntValue(); } },
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
            writer.WriteStringValue("display_name", Display_name);
            writer.WriteCollectionOfPrimitiveValues<string>("emojis", Emojis);
            writer.WriteCollectionOfPrimitiveValues<string>("fields", Fields);
            writer.WriteIntValue("followers_count", Followers_count);
            writer.WriteIntValue("following_count", Following_count);
            writer.WriteStringValue("header", Header);
            writer.WriteStringValue("header_static", Header_static);
            writer.WriteStringValue("id", Id);
            writer.WriteBoolValue("locked", Locked);
            writer.WriteStringValue("moved", Moved);
            writer.WriteStringValue("note", Note);
            writer.WriteIntValue("statuses_count", Statuses_count);
            writer.WriteStringValue("url", Url);
            writer.WriteStringValue("username", Username);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
