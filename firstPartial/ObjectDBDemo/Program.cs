using ObjectDBDemo;
using ObjectDBDemo.Models;

PersonaRepository repo = new("persons.db");

//Insert
repo.Insert(
    new Person
    {
        Id = 1,
        Name = "Dante",
        Age = 21
    }
);

repo.Insert(
    new Person
    {
        Id = 2,
        Name = "Juan",
        Age = 20
    }
);

repo.Insert(
    new Person
    {
        Id = 3,
        Name = "Pedro",
        Age = 23
    }
);

//Read
List<Person> persons = repo.GetAllPersons();

foreach(Person per in persons)
{
    WriteLine(per.ToString());
}

//Update 
Person person1 = repo.GetById(1);

//? checks if it is null by Use null propagation (IDE0031)
//this is like: if(person1 is not null){...}
person1.Age = 22;
repo.Update(person1);

//Read
persons = repo.GetAllPersons();
foreach(Person per in persons)
{
    WriteLine(per.ToString());
}

//Delete
repo.Delete(1);

//Read
persons = repo.GetAllPersons();
foreach(Person per in persons)
{
    WriteLine(per.ToString());
}