namespace CRUD_XML;

using System.Xml.Serialization;
using CRUD_XML.models;

public class PersonRepository(string filePath = "persons.xml")
{
    private readonly string _filePath = filePath;

    // load data if not return an empty list
    private PersonCollection Load()
    {
        if (!File.Exists(_filePath))
            return new PersonCollection();

        XmlSerializer serializer = new(typeof(PersonCollection));
        using var stream = new FileStream(_filePath, FileMode.Open);

        return serializer.Deserialize(stream) as PersonCollection
               ?? new PersonCollection();
    }

    // Save full list, always overwrite file 
    private void Save(PersonCollection collection)
    {
        XmlSerializer serializer = new(typeof(PersonCollection));
        using var stream = new FileStream(_filePath, FileMode.Create);
        serializer.Serialize(stream, collection);
    }

    public void Create(Person person)
    {
        var collection = Load();
        collection.Persons.Add(person);
        Save(collection);
        WriteLine($"Person Added: {person.Name}");
    }

    public List<Person> ReadAll()
    {
        return Load().Persons;
    }

    public void Update(int index, Person updatedPerson)
    {
        var collection = Load();
        if (index >= 0 && index < collection.Persons.Count)
        {
            collection.Persons[index] = updatedPerson;
            Save(collection);
            WriteLine($"Updated person with index: {index}");
        }
        else
        {
            WriteLine("Index out of range");
        }
    }

    public void Delete(int index)
    {
        var collection = Load();
        if (index >= 0 && index < collection.Persons.Count)
        {
            var deletedName = collection.Persons[index].Name;
            collection.Persons.RemoveAt(index);
            Save(collection);
            WriteLine($"Deleted person: {deletedName} (index: {index})");
        }
        else
        {
            WriteLine("Index out of range");
        }
    }
    public int FindIndexByName(string name)
    {
        var persons = ReadAll();
        for (int i = 0; i < persons.Count; i++)
        {
            if (persons[i].Name?.Equals(name, StringComparison.OrdinalIgnoreCase) == true)
                return i;
        }
        return -1;
    }
}