using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class SearchResult : IAdditionalDataHolder, IParsable {
        /// <summary>The accounts property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Account>? Accounts { get; set; }
#nullable restore
#else
        public List<Account> Accounts { get; set; }
#endif
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The hashtags property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Tag>? Hashtags { get; set; }
#nullable restore
#else
        public List<Tag> Hashtags { get; set; }
#endif
        /// <summary>The statuses property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Status>? Statuses { get; set; }
#nullable restore
#else
        public List<Status> Statuses { get; set; }
#endif
        /// <summary>
        /// Instantiates a new SearchResult and sets the default values.
        /// </summary>
        public SearchResult() {
            AdditionalData = new Dictionary<string, object>();
        }
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static SearchResult CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new SearchResult();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"accounts", n => { Accounts = n.GetCollectionOfObjectValues<Account>(Account.CreateFromDiscriminatorValue)?.ToList(); } },
                {"hashtags", n => { Hashtags = n.GetCollectionOfObjectValues<Tag>(Tag.CreateFromDiscriminatorValue)?.ToList(); } },
                {"statuses", n => { Statuses = n.GetCollectionOfObjectValues<Status>(Status.CreateFromDiscriminatorValue)?.ToList(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteCollectionOfObjectValues<Account>("accounts", Accounts);
            writer.WriteCollectionOfObjectValues<Tag>("hashtags", Hashtags);
            writer.WriteCollectionOfObjectValues<Status>("statuses", Statuses);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
