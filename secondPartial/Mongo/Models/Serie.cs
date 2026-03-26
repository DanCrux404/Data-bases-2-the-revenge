using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Mongo.Models;

public class Serie
{
    [BsonId]
    public ObjectId Id { get; set; }

    [BsonElement("title")]
    public string Title { get; set; } = string.Empty;

    [BsonElement("genres")]
    public string[] Genres { get; set; } = Array.Empty<string>();

    [BsonElement("seasons")]
    public int Seasons { get; set; }

    [BsonElement("rating")]
    public double Rating { get; set; }

    [BsonElement("year")]
    public int Year { get; set; }
}

