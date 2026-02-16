namespace OOP___files.models;
using ProtoBuf;

//Marker to be able to serealize in binary
[ProtoContract]

public class Administrative: Person
{
    //ID fields for serealize
    [ProtoMember(1)]
    public string? Department { get; set; }

    protected Administrative() { }
    public Administrative(string name, int age, string Department)
        : base(name, age)
    {
        this.Department = Department;
    }

    public override string ToString()
    {
        return $"Name: {Name}, Age: {Age}, Department: {Department}";
    }
}
