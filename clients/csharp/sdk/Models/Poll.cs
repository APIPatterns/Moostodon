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
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Emoji>? Emojis { get; set; }
#nullable restore
#else
        public List<Emoji> Emojis { get; set; }
#endif
        /// <summary>The expired property</summary>
        public bool? Expired { get; set; }
        /// <summary>The expires_at property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? ExpiresAt { get; set; }
#nullable restore
#else
        public string ExpiresAt { get; set; }
#endif
        /// <summary>The id property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Id { get; set; }
#nullable restore
#else
        public string Id { get; set; }
#endif
        /// <summary>The multiple property</summary>
        public bool? Multiple { get; set; }
        /// <summary>The options property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<PollOption>? Options { get; set; }
#nullable restore
#else
        public List<PollOption> Options { get; set; }
#endif
        /// <summary>The own_votes property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<int?>? OwnVotes { get; set; }
#nullable restore
#else
        public List<int?> OwnVotes { get; set; }
#endif
        /// <summary>The voted property</summary>
        public bool? Voted { get; set; }
        /// <summary>The voters_count property</summary>
        public int? VotersCount { get; set; }
        /// <summary>The votes_count property</summary>
        public int? VotesCount { get; set; }
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
                {"expires_at", n => { ExpiresAt = n.GetStringValue(); } },
                {"id", n => { Id = n.GetStringValue(); } },
                {"multiple", n => { Multiple = n.GetBoolValue(); } },
                {"options", n => { Options = n.GetCollectionOfObjectValues<PollOption>(PollOption.CreateFromDiscriminatorValue)?.ToList(); } },
                {"own_votes", n => { OwnVotes = n.GetCollectionOfPrimitiveValues<int?>()?.ToList(); } },
                {"voted", n => { Voted = n.GetBoolValue(); } },
                {"voters_count", n => { VotersCount = n.GetIntValue(); } },
                {"votes_count", n => { VotesCount = n.GetIntValue(); } },
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
            writer.WriteStringValue("expires_at", ExpiresAt);
            writer.WriteStringValue("id", Id);
            writer.WriteBoolValue("multiple", Multiple);
            writer.WriteCollectionOfObjectValues<PollOption>("options", Options);
            writer.WriteCollectionOfPrimitiveValues<int?>("own_votes", OwnVotes);
            writer.WriteBoolValue("voted", Voted);
            writer.WriteIntValue("voters_count", VotersCount);
            writer.WriteIntValue("votes_count", VotesCount);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
