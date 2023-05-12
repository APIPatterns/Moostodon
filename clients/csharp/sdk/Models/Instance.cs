using Microsoft.Kiota.Abstractions.Serialization;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System;
namespace MastodonClientLib.Models {
    public class Instance : IParsable {
        /// <summary>The configuration property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Configuration? Configuration { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Configuration Configuration { get; set; }
#endif
        /// <summary>The contact property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Contact? Contact { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Contact Contact { get; set; }
#endif
        /// <summary>The description property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Description { get; set; }
#nullable restore
#else
        public string Description { get; set; }
#endif
        /// <summary>The domain property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Domain { get; set; }
#nullable restore
#else
        public string Domain { get; set; }
#endif
        /// <summary>The languages property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<string>? Languages { get; set; }
#nullable restore
#else
        public List<string> Languages { get; set; }
#endif
        /// <summary>The registrations property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Registrations? Registrations { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Registrations Registrations { get; set; }
#endif
        /// <summary>The rules property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public List<Rule>? Rules { get; set; }
#nullable restore
#else
        public List<Rule> Rules { get; set; }
#endif
        /// <summary>The source_url property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? SourceUrl { get; set; }
#nullable restore
#else
        public string SourceUrl { get; set; }
#endif
        /// <summary>The thumbnail property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Thumbnail? Thumbnail { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Thumbnail Thumbnail { get; set; }
#endif
        /// <summary>The title property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Title { get; set; }
#nullable restore
#else
        public string Title { get; set; }
#endif
        /// <summary>The usage property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public MastodonClientLib.Models.Usage? Usage { get; set; }
#nullable restore
#else
        public MastodonClientLib.Models.Usage Usage { get; set; }
#endif
        /// <summary>The version property</summary>
#if NETSTANDARD2_1_OR_GREATER || NETCOREAPP3_1_OR_GREATER
#nullable enable
        public string? Version { get; set; }
#nullable restore
#else
        public string Version { get; set; }
#endif
        /// <summary>
        /// Creates a new instance of the appropriate class based on discriminator value
        /// </summary>
        /// <param name="parseNode">The parse node to use to read the discriminator value and create the object</param>
        public static Instance CreateFromDiscriminatorValue(IParseNode parseNode) {
            _ = parseNode ?? throw new ArgumentNullException(nameof(parseNode));
            return new Instance();
        }
        /// <summary>
        /// The deserialization information for the current model
        /// </summary>
        public IDictionary<string, Action<IParseNode>> GetFieldDeserializers() {
            return new Dictionary<string, Action<IParseNode>> {
                {"configuration", n => { Configuration = n.GetObjectValue<MastodonClientLib.Models.Configuration>(MastodonClientLib.Models.Configuration.CreateFromDiscriminatorValue); } },
                {"contact", n => { Contact = n.GetObjectValue<MastodonClientLib.Models.Contact>(MastodonClientLib.Models.Contact.CreateFromDiscriminatorValue); } },
                {"description", n => { Description = n.GetStringValue(); } },
                {"domain", n => { Domain = n.GetStringValue(); } },
                {"languages", n => { Languages = n.GetCollectionOfPrimitiveValues<string>()?.ToList(); } },
                {"registrations", n => { Registrations = n.GetObjectValue<MastodonClientLib.Models.Registrations>(MastodonClientLib.Models.Registrations.CreateFromDiscriminatorValue); } },
                {"rules", n => { Rules = n.GetCollectionOfObjectValues<Rule>(Rule.CreateFromDiscriminatorValue)?.ToList(); } },
                {"source_url", n => { SourceUrl = n.GetStringValue(); } },
                {"thumbnail", n => { Thumbnail = n.GetObjectValue<MastodonClientLib.Models.Thumbnail>(MastodonClientLib.Models.Thumbnail.CreateFromDiscriminatorValue); } },
                {"title", n => { Title = n.GetStringValue(); } },
                {"usage", n => { Usage = n.GetObjectValue<MastodonClientLib.Models.Usage>(MastodonClientLib.Models.Usage.CreateFromDiscriminatorValue); } },
                {"version", n => { Version = n.GetStringValue(); } },
            };
        }
        /// <summary>
        /// Serializes information the current object
        /// </summary>
        /// <param name="writer">Serialization writer to use to serialize this model</param>
        public void Serialize(ISerializationWriter writer) {
            _ = writer ?? throw new ArgumentNullException(nameof(writer));
            writer.WriteObjectValue<MastodonClientLib.Models.Configuration>("configuration", Configuration);
            writer.WriteObjectValue<MastodonClientLib.Models.Contact>("contact", Contact);
            writer.WriteStringValue("description", Description);
            writer.WriteStringValue("domain", Domain);
            writer.WriteCollectionOfPrimitiveValues<string>("languages", Languages);
            writer.WriteObjectValue<MastodonClientLib.Models.Registrations>("registrations", Registrations);
            writer.WriteCollectionOfObjectValues<Rule>("rules", Rules);
            writer.WriteStringValue("source_url", SourceUrl);
            writer.WriteObjectValue<MastodonClientLib.Models.Thumbnail>("thumbnail", Thumbnail);
            writer.WriteStringValue("title", Title);
            writer.WriteObjectValue<MastodonClientLib.Models.Usage>("usage", Usage);
            writer.WriteStringValue("version", Version);
        }
    }
}
