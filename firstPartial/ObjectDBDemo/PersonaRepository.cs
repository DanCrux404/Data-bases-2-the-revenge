namespace ObjectDBDemo;
using LiteDB;
using ObjectDBDemo.Models;
using System.Collections.Generic;

public class PersonaRepository
{
    private readonly LiteDatabase db;
    private readonly ILiteCollection<Person> collection;

    public PersonaRepository(string databasePath)
    {
        db = new LiteDatabase(databasePath);
        collection = db.GetCollection<Person>("persons");
    }

    // CREATE
    public void Insert(Person person)
    {
        collection.Insert(person);
    }

    // READ ALL
    public List<Person> GetAllPersons()
    {
        //collection expression
        return [.. collection.FindAll()];
    }

    // READ BY ID
    public Person GetById(int id)
    {
        return collection.FindById(id);
    }

    // UPDATE
    public bool Update(Person person)
    {
        return collection.Update(person);
    }

    // DELETE
    public bool Delete(int id)
    {
        return collection.Delete(id);
    }

    // LINQ ejemplo
    public List<Person> GetByAge(int minimumAge)
    {
        return collection.Query()
            .Where(x => x.Age >= minimumAge)
            .ToList();
    }
}
