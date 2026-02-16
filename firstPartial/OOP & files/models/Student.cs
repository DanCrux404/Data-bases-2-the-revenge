namespace OOP___files.models;
using ProtoBuf;

//Marker to be able to serealize in binary
[ProtoContract]
public class Student: Person
{
    //ID fields for serealize
    [ProtoMember(1)]
    public string? Carreer { get; set; }

    protected Student() { }

    public Student(string name, int age, string Carreer)
        : base(name, age)
    {
        this.Carreer = Carreer;
    }

    public override string ToString()
    {
        return $"Name: {Name}, Age: {Age}, Carreer: {Carreer}";
    }

}
