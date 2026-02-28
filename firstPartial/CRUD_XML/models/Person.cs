namespace CRUD_XML.models;

public class Person
{
    public string? Name { get; set; }
    public int Age { get; set; }
    public string? Email { get; set; }

    public Person(){}

    public Person(string? name, int age, string? email)
    {
        Name = name;
        Age = age;
        Email = email;
    }

    public override string ToString()
    {
        return $"Name: {Name}, Age: {Age}, Email: {Email}";
    }
}
