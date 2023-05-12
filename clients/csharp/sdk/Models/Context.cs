using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class Context : IParsable {
        /// <summary>The ancestors property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Status>? Ancestors { get; set; }
#nullable restore
#else
        public List<Status> Ancestors { get; set; }
#endif
        /// <summary>The descendants property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Status>? Descendants { get; set; }
#nullable restore
#else
        public List<Status> Descendants { get; set; }
#endif
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Context CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Context();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"ancestors", n => { Ancestors = n.GetCollectionOfObjectValues<Status>(Status.CreateFromDiscriminatorValue)?.ToList(); } },
                {"descendants", n => { Descendants = n.GetCollectionOfObjectValues<Status>(Status.CreateFromDiscriminatorValue)?.ToList(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteCollectionOfObjectValues<Status>("ancestors", Ancestors);
            writer.WriteCollectionOfObjectValues<Status>("descendants", Descendants);
        }
    }
}
