using LiteDB;
using Newtonsoft.Json;

namespace PenguinUpload.DataModels
{
    public class DatabaseObject
    {
        [JsonIgnore]
        [BsonId]
        public ObjectId DatabaseId { get; set; }
    }
}