using MongoDB.Driver;
using Mongo.Models;

namespace Mongo.Data;

public class MongoDbContext
{
    private readonly IMongoDatabase _database;

    public MongoDbContext()
    {
        var client = new MongoClient("mongodb://localhost:27017");
        _database = client.GetDatabase("NetflixDB");
    }

    public IMongoCollection<Serie> Series => _database.GetCollection<Serie>("series");
}

