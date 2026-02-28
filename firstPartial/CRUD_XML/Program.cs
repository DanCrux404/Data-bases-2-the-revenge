using CRUD_XML;
using CRUD_XML.models;

PersonRepository repo = new();

repo.Create(new Person("Dante", 28, "dante@ejemplo.com"));
repo.Create(new Person("Cesar", 25, "Cesar@ejemplo.com"));
repo.Create(new Person("Aldana", 35, "Aldana@ejemplo.com"));

WriteLine("List of persons:");
var list = repo.ReadAll();
for (int i = 0; i < list.Count; i++)
{
    WriteLine($"{i}: {list[i]}");
}

//Update Cesar
repo.Update(1, new Person("Julio Cesar", 26, "Julio.nuevo@ejemplo.com"));

//Delete Aldana
repo.Delete(2);


int indice = repo.FindIndexByName("Dante");
if (indice != -1)
    WriteLine($"Dante is in index: {indice}");
