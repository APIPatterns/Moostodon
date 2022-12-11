using Microsoft.Kiota.Abstractions.Serialization;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
namespace MastodonClientLib.Models {
    public class Instance : IAdditionalDataHolder, IParsable {
        /// <summary>Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.</summary>
        public IDictionary<string, object> AdditionalData { get; set; }
        /// <summary>The configuration property</summary>
        public MastodonClientLib.Models.Configuration Configuration { get; set; }
        /// <summary>The contact property</summary>
        public MastodonClientLib.Models.Contact Contact { get; set; }
        /// <summary>The description property</summary>
        public string Description { get; set; }
        /// <summary>The domain property</summary>
        public string Domain { get; set; }
        /// <summary>The languages property</summary>
        public List<string> Languages { get; set; }
        /// <summary>The registrations property</summary>
        public MastodonClientLib.Models.Registrations Registrations { get; set; }
        /// <summary>The rules property</summary>
        public List<Rule> Rules { get; set; }
        /// <summary>The source_url property</summary>
        public string Source_url { get; set; }
        /// <summary>The thumbnail property</summary>
        public MastodonClientLib.Models.Thumbnail Thumbnail { get; set; }
        /// <summary>The title property</summary>
        public string Title { get; set; }
        /// <summary>The usage property</summary>
        public MastodonClientLib.Models.Usage Usage { get; set; }
        /// <summary>The version property</summary>
        public string Version { get; set; }
        /// <summary>
        /// Instantiates a new Instance and sets the default values.
        /// </summary>
        public Instance() {
            AdditionalData = new Dictionary<string, object>();
        }
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
                {"source_url", n => { Source_url = n.GetStringValue(); } },
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
            writer.WriteStringValue("source_url", Source_url);
            writer.WriteObjectValue<MastodonClientLib.Models.Thumbnail>("thumbnail", Thumbnail);
            writer.WriteStringValue("title", Title);
            writer.WriteObjectValue<MastodonClientLib.Models.Usage>("usage", Usage);
            writer.WriteStringValue("version", Version);
            writer.WriteAdditionalData(AdditionalData);
        }
    }
}
