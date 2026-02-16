namespace OOP___files.models;
using ProtoBuf;

//Marker to be able to serealize in binary
[ProtoContract]
//These are called Inherence map. Very important to register all clases to 
//identify the properties in orden to serealize the objects
[ProtoInclude(10, typeof(Student))]
[ProtoInclude(11, typeof(Teacher))]
[ProtoInclude(12, typeof(Administrative))]

public abstract class Person
{
    //ID fields for serealize
    [ProtoMember(1)]
    public string? Name { get; set; }
    //ID fields for serealize
    [ProtoMember(2)]
    public int Age { get; set; }

    //To serealize in binary we do not have to use primary ctor, so we use the clasic one
    protected Person() { }

    protected Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public override string ToString()
    {
        return $"Name: {Name}, Age: {Age}";
    }
}
