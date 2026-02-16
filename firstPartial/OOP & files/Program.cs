using OOP___files.models;
using OOP___files.util;

string studentPath = "student.bin";
string teacherPath = "teacher.bin";
string administrativePath = "admin.bin";

BinarySerializer<Student> serializer = new();

serializer.Serialize(studentPath, new Student("Dante", 21, "Software Engineer"));

Student student = serializer.Deserialize(studentPath);
WriteLine(student.ToString());

BinarySerializer<Teacher> serializer1 = new();

serializer1.Serialize(teacherPath, new Teacher("Pedro", 34, "Cloud Computing"));

Teacher teacher = serializer1.Deserialize(teacherPath);
WriteLine(teacher.ToString());

BinarySerializer<Administrative> serializer2 = new();

serializer2.Serialize(administrativePath, new Administrative("Perla", 28, "student attention"));

Administrative administrative = serializer2.Deserialize(administrativePath);
WriteLine(administrative.ToString());