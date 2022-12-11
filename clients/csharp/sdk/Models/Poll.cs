using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Poll : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The emojis property</summary>
        public List<Emoji> Emojis { get; set; }
        /// <summary>The expired property</summary>
        public bool? Expired { get; set; }
        /// <summary>The expires_at property</summary>
        public string Expires_at { get; set; }
        /// <summary>The id property</summary>
        public string Id { get; set; }
        /// <summary>The multiple property</summary>
        public bool? Multiple { get; set; }
        /// <summary>The options property</summary>
        public List<PollOption> Options { get; set; }
        /// <summary>The own_votes property</summary>
        public List<int?> Own_votes { get; set; }
        /// <summary>The voted property</summary>
        public bool? Voted { get; set; }
        /// <summary>The voters_count property</summary>
        public int? Voters_count { get; set; }
        /// <summary>The votes_count property</summary>
        public int? Votes_count { get; set; }
        /// <summary>
        /// Instantiates a new Poll and sets the default values.
        /// </summary>
        public Poll() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Poll CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Poll();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"emojis", n => { Emojis = n.GetCollectionOfObjectValues<Emoji>(Emoji.CreateFromDiscriminatorValue)?.ToList(); } },
                {"expired", n => { Expired = n.GetBoolValue(); } },
                {"expires_at", n => { Expires_at = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"multiple", n => { Multiple = n.GetBoolValue(); } },
                {"options", n => { Options = n.GetCollectionOfObjectValues<PollOption>(PollOption.CreateFromDiscriminatorValue)?.ToList(); } },
                {"own_votes", n => { Own_votes = n.GetCollectionOfPrimitiveValues<int?>()?.ToList(); } },
                {"voted", n => { Voted = n.GetBoolValue(); } },
                {"voters_count", n => { Voters_count = n.GetIntValue(); } },
                {"votes_count", n => { Votes_count = n.GetIntValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteCollectionOfObjectValues<Emoji>("emojis", Emojis);
            writer.WriteBoolValue("expired", Expired);
            writer.WriteStringValue("expires_at", Expires_at);
            writer.WriteStringValue("id", Id);
            writer.WriteBoolValue("multiple", Multiple);
            writer.WriteCollectionOfObjectValues<PollOption>("options", Options);
            writer.WriteCollectionOfPrimitiveValues<int?>("own_votes", Own_votes);
            writer.WriteBoolValue("voted", Voted);
            writer.WriteIntValue("voters_count", Voters_count);
            writer.WriteIntValue("votes_count", Votes_count);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
