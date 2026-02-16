namespace OOP___files.util;
using ProtoBuf;

//Using generics to simplify the serealization
public class BinarySerializer<T>
{
    public void Serialize(string path, T obj)
    {
        using var file = File.Create(path);
        Serializer.Serialize(file, obj);
    }

    public T Deserialize(string path)
    {
        using var file = File.OpenRead(path);
        return Serializer.Deserialize<T>(file);
    }
}