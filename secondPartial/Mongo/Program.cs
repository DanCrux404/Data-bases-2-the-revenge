using Mongo.Services;

WriteLine("Starting Netflix Series App with MongoDB");

try
{
    var service = new SerieService();
    await service.ShowMenuAsync();
}
catch (Exception ex)
{
    WriteLine($"Error: {ex.Message}");
    WriteLine("Make sure MongoDB container is running → docker ps");
}
