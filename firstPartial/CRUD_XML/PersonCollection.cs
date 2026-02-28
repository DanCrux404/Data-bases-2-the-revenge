namespace CRUD_XML;

using System.Collections.Generic;
using System.Xml.Serialization;
using CRUD_XML.models;

[XmlRoot("Persons")]
public class PersonCollection
{
    [XmlElement("Person")]
    public List<Person> Persons { get; set; } = [];
}
