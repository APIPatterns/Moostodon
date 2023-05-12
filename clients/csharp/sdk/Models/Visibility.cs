using System.Runtime.Serialization;
using System;
namespace MastodonClientLib.Models {
    public enum Visibility {
        [EnumMember(Value = "public")]
        Public,
        [EnumMember(Value = "unlisted")]
        Unlisted,
        [EnumMember(Value = "private")]
        Private,
        [EnumMember(Value = "direct")]
        Direct,
    }
}
