using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Relationship : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The blocked_by property</summary>
        public bool? BlockedBy { get; set; }
        /// <summary>The blocking property</summary>
        public bool? Blocking { get; set; }
        /// <summary>The domain_blocking property</summary>
        public bool? DomainBlocking { get; set; }
        /// <summary>The endorsed property</summary>
        public bool? Endorsed { get; set; }
        /// <summary>The followed_by property</summary>
        public bool? FollowedBy { get; set; }
        /// <summary>The following property</summary>
        public bool? Following { get; set; }
        /// <summary>The id property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Id { get; set; }
#nullable restore
#else
        public string Id { get; set; }
#endif
        /// <summary>The languages property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<string>? Languages { get; set; }
#nullable restore
#else
        public List<string> Languages { get; set; }
#endif
        /// <summary>The muting property</summary>
        public bool? Muting { get; set; }
        /// <summary>The muting_notifications property</summary>
        public bool? MutingNotifications { get; set; }
        /// <summary>The note property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Note { get; set; }
#nullable restore
#else
        public string Note { get; set; }
#endif
        /// <summary>The notifying property</summary>
        public bool? Notifying { get; set; }
        /// <summary>The requested property</summary>
        public bool? Requested { get; set; }
        /// <summary>The showing_reblogs property</summary>
        public bool? ShowingReblogs { get; set; }
        /// <summary>
        /// Instantiates a new Relationship and sets the default values.
        /// </summary>
        public Relationship() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Relationship CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Relationship();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"blocked_by", n => { BlockedBy = n.GetBoolValue(); } },
                {"blocking", n => { Blocking = n.GetBoolValue(); } },
                {"domain_blocking", n => { DomainBlocking = n.GetBoolValue(); } },
                {"endorsed", n => { Endorsed = n.GetBoolValue(); } },
                {"followed_by", n => { FollowedBy = n.GetBoolValue(); } },
                {"following", n => { Following = n.GetBoolValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"languages", n => { Languages = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"muting", n => { Muting = n.GetBoolValue(); } },
                {"muting_notifications", n => { MutingNotifications = n.GetBoolValue(); } },
                {"note", n => { Note = n.GetStringValue(); } },
                {"notifying", n => { Notifying = n.GetBoolValue(); } },
                {"requested", n => { Requested = n.GetBoolValue(); } },
                {"showing_reblogs", n => { ShowingReblogs = n.GetBoolValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteBoolValue("blocked_by", BlockedBy);
            writer.WriteBoolValue("blocking", Blocking);
            writer.WriteBoolValue("domain_blocking", DomainBlocking);
            writer.WriteBoolValue("endorsed", Endorsed);
            writer.WriteBoolValue("followed_by", FollowedBy);
            writer.WriteBoolValue("following", Following);
            writer.WriteStringValue("id", Id);
            writer.WriteCollectionOfPrimitiveValues<string>("languages", Languages);
            writer.WriteBoolValue("muting", Muting);
            writer.WriteBoolValue("muting_notifications", MutingNotifications);
            writer.WriteStringValue("note", Note);
            writer.WriteBoolValue("notifying", Notifying);
            writer.WriteBoolValue("requested", Requested);
            writer.WriteBoolValue("showing_reblogs", ShowingReblogs);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
