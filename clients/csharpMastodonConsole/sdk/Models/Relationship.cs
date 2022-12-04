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
        public bool? Blocked_by { get; set; }
        /// <summary>The blocking property</summary>
        public bool? Blocking { get; set; }
        /// <summary>The domain_blocking property</summary>
        public bool? Domain_blocking { get; set; }
        /// <summary>The endorsed property</summary>
        public bool? Endorsed { get; set; }
        /// <summary>The followed_by property</summary>
        public bool? Followed_by { get; set; }
        /// <summary>The following property</summary>
        public bool? Following { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The languages property</summary>
        public List<string> Languages { get; set; }
        /// <summary>The muting property</summary>
        public bool? Muting { get; set; }
        /// <summary>The muting_notifications property</summary>
        public bool? Muting_notifications { get; set; }
        /// <summary>The note property</summary>
        public string Note { get; set; }
        /// <summary>The notifying property</summary>
        public bool? Notifying { get; set; }
        /// <summary>The requested property</summary>
        public bool? Requested { get; set; }
        /// <summary>The showing_reblogs property</summary>
        public bool? Showing_reblogs { get; set; }
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
                {"blocked_by", n => { Blocked_by = n.GetBoolValue(); } },
                {"blocking", n => { Blocking = n.GetBoolValue(); } },
                {"domain_blocking", n => { Domain_blocking = n.GetBoolValue(); } },
                {"endorsed", n => { Endorsed = n.GetBoolValue(); } },
                {"followed_by", n => { Followed_by = n.GetBoolValue(); } },
                {"following", n => { Following = n.GetBoolValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"languages", n => { Languages = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"muting", n => { Muting = n.GetBoolValue(); } },
                {"muting_notifications", n => { Muting_notifications = n.GetBoolValue(); } },
                {"note", n => { Note = n.GetStringValue(); } },
                {"notifying", n => { Notifying = n.GetBoolValue(); } },
                {"requested", n => { Requested = n.GetBoolValue(); } },
                {"showing_reblogs", n => { Showing_reblogs = n.GetBoolValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteBoolValue("blocked_by", Blocked_by);
            writer.WriteBoolValue("blocking", Blocking);
            writer.WriteBoolValue("domain_blocking", Domain_blocking);
            writer.WriteBoolValue("endorsed", Endorsed);
            writer.WriteBoolValue("followed_by", Followed_by);
            writer.WriteBoolValue("following", Following);
            writer.WriteStringValue("id", Id);
            writer.WriteCollectionOfPrimitiveValues<string>("languages", Languages);
            writer.WriteBoolValue("muting", Muting);
            writer.WriteBoolValue("muting_notifications", Muting_notifications);
            writer.WriteStringValue("note", Note);
            writer.WriteBoolValue("notifying", Notifying);
            writer.WriteBoolValue("requested", Requested);
            writer.WriteBoolValue("showing_reblogs", Showing_reblogs);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
