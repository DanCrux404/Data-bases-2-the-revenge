namespace OOP___files.models;
using ProtoBuf;

//Marker to be able to serealize in binary
[ProtoContract]

public class Teacher: Person
{
    //ID fields for serealize
    [ProtoMember(1)]
    public string? Subject { get; set; }

    protected Teacher() { }
    public Teacher(string name, int age, string Subject)
        : base(name, age)
    {
        this.Subject = Subject;
    }

    public override string ToString()
    {
        return $"Name: {Name}, Age: {Age}, Carreer: {Subject}";
    }
}
