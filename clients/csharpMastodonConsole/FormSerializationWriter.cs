using Microsoft.Kiota.Abstractions;
using Microsoft.Kiota.Abstractions.Serialization;

internal class FormSerializationWriter : ISerializationWriter
{
    private Dictionary<string, string> _values;

    public Action<IParsable> OnBeforeObjectSerialization { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    public Action<IParsable> OnAfterObjectSerialization { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }
    public Action<IParsable, ISerializationWriter> OnStartObjectSerialization { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

    public FormSerializationWriter()
    {
        _values = new Dictionary<string, string>();
    }

    public void Dispose()
    {
        
    }

    public Stream GetSerializedContent()
    {
        var content = new FormUrlEncodedContent(_values);
        return content.ReadAsStream();
    }

    public void WriteAdditionalData(IDictionary<string, object> value)
    {
        foreach (var key in value.Keys)
        {
            _values.Add(key, value[key].ToString());  // Will not work for object types
        }   
    }

    public void WriteBoolValue(string key, bool? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());
        }
    }

    public void WriteByteArrayValue(string key, byte[] value)
    {
        throw new NotImplementedException();
    }

    public void WriteByteValue(string key, byte? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());
        }
    }

    public void WriteCollectionOfObjectValues<T>(string key, IEnumerable<T> values) where T : IParsable
    {
        throw new NotImplementedException();
    }

    public void WriteCollectionOfPrimitiveValues<T>(string key, IEnumerable<T> values)
    {
        
    }

    public void WriteDateTimeOffsetValue(string key, DateTimeOffset? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());  // What date format?
        }
    }

    public void WriteDateValue(string key, Date? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());  // What date format?
        }
    }

    public void WriteDecimalValue(string key, decimal? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());
        }
    }

    public void WriteDoubleValue(string key, double? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());
        }
    }

    public void WriteFloatValue(string key, float? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());
        }
    }

    public void WriteGuidValue(string key, Guid? value)
    {
        throw new NotImplementedException();
    }

    public void WriteIntValue(string key, int? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());
        }
    }

    public void WriteLongValue(string key, long? value)
    {
        if (value.HasValue) {
            _values.Add(key,value.ToString());
        }
    }

    public void WriteNullValue(string key)
    {
    }

    public void WriteObjectValue<T>(string key, T value, params IParsable[] additionalValuesToMerge) where T : IParsable
    {
        IParsable obj = value;
        value.Serialize(this);
    }

    public void WriteSbyteValue(string key, sbyte? value)
    {
        throw new NotImplementedException();
    }

    public void WriteStringValue(string key, string value)
    {
        if (value != null) {
            _values.Add(key,value);
        }
    }

    public void WriteTimeSpanValue(string key, TimeSpan? value)
    {
        throw new NotImplementedException();
    }

    public void WriteTimeValue(string key, Time? value)
    {
        throw new NotImplementedException();
    }

    void ISerializationWriter.WriteCollectionOfEnumValues<T>(string key, IEnumerable<T?> values)
    {
        throw new NotImplementedException();
    }

    void ISerializationWriter.WriteEnumValue<T>(string key, T? value)
    {
        if (value != null) {
            _values.Add(key,nameof(value));
        }
    }
}

public class FormSerializationWriterFactory : ISerializationWriterFactory
    {
        /// <summary>
        /// The valid content type for json
        /// </summary>
        public string ValidContentType { get; } = "application/x-www-form-urlencoded";

        /// <summary>
        /// Get a valid <see cref="ISerializationWriter"/> for the content type
        /// </summary>
        /// <param name="contentType">The content type to search for</param>
        /// <returns>A <see cref="ISerializationWriter"/> instance for json writing</returns>
        public ISerializationWriter GetSerializationWriter(string contentType)
        {
            if(string.IsNullOrEmpty(contentType))
                throw new ArgumentNullException(nameof(contentType));
            else if(!ValidContentType.Equals(contentType, StringComparison.OrdinalIgnoreCase))
                throw new ArgumentOutOfRangeException($"expected a {ValidContentType} content type");

            return new FormSerializationWriter();
        }
    }
