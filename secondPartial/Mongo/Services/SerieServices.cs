using MongoDB.Driver;
using MongoDB.Bson;
using Mongo.Models;
using Mongo.Data;

namespace Mongo.Services;

public class SerieService
{
    private readonly MongoDbContext _context;

    public SerieService()
    {
        _context = new MongoDbContext();
    }

    /// <summary>
    /// Adds a new series
    /// </summary>
    public async Task AddSerieAsync()
    {
        WriteLine("Add New Series");

        Write("Title: ");
        string title = ReadLine() ?? "Untitled";

        Write("Genres (separated by comma): ");
        string genresInput = ReadLine() ?? "";
        string[] genres = genresInput.Split(',', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries);

        Write("Seasons: ");
        int seasons = int.TryParse(ReadLine(), out int s) ? s : 1;

        Write("Rating (0-10): ");
        double rating = double.TryParse(ReadLine(), out double r) ? r : 0;

        Write("Year: ");
        int year = int.TryParse(ReadLine(), out int y) ? y : DateTime.Now.Year;

        var newSerie = new Serie
        {
            Title = title,
            Genres = genres,
            Seasons = seasons,
            Rating = rating,
            Year = year
        };

        await _context.Series.InsertOneAsync(newSerie);

        WriteLine($"Series '{title}' added successfully!");
    }

    /// <summary>
    /// Displays all series
    /// </summary>
    public async Task DisplayAllAsync()
    {
        var series = await _context.Series
            .Find(FilterDefinition<Serie>.Empty)
            .SortByDescending(s => s.Rating)
            .ToListAsync();

        WriteLine("\nAvailable series in NetflixDB:");

        if (series.Count == 0)
        {
            WriteLine("No series found.");
            return;
        }

        foreach (var serie in series)
        {
            WriteLine($"ID: {serie.Id}");
            WriteLine($"{serie.Title} ({serie.Year})");
            WriteLine($"Seasons: {serie.Seasons}");
            WriteLine("Rating: {serie.Rating}");
            WriteLine($"Genres: {string.Join(", ", serie.Genres)}\n");
        }
    }

    /// <summary>
    /// Delete by Id
    /// </summary>
    public async Task DeleteSerieAsync()
    {
        WriteLine("Delete Series");
        Write("Enter ID: ");
        string idInput = ReadLine() ?? "";

        if (!ObjectId.TryParse(idInput, out ObjectId objectId))
        {
            WriteLine("Invalid ID format.");
            return;
        }

        var result = await _context.Series.DeleteOneAsync(s => s.Id == objectId);

        if (result.DeletedCount > 0)
            WriteLine("Series deleted successfully!");
        else
            WriteLine("Series not found.");
    }

    /// <summary>
    /// Update by Id
    /// </summary>
    public async Task UpdateSerieAsync()
    {
        WriteLine("Update Series");
        Write("Enter ID: ");
        string idInput = ReadLine() ?? "";

        if (!ObjectId.TryParse(idInput, out ObjectId objectId))
        {
            WriteLine("Invalid ID format.");
            return;
        }

        var serie = await _context.Series.Find(s => s.Id == objectId).FirstOrDefaultAsync();

        if (serie == null)
        {
            WriteLine("Series not found.");
            return;
        }

        Write($"New Title ({serie.Title}): ");
        string newTitle = ReadLine() ?? serie.Title;

        Write($"New Genres ({string.Join(", ", serie.Genres)}): ");
        string genresInput = ReadLine() ?? "";
        string[] newGenres = string.IsNullOrWhiteSpace(genresInput)
            ? serie.Genres
            : genresInput.Split(',', StringSplitOptions.TrimEntries | StringSplitOptions.RemoveEmptyEntries);

        Write($"New Seasons ({serie.Seasons}): ");
        int newSeasons = int.TryParse(ReadLine(), out int s) ? s : serie.Seasons;

        Write($"New Rating ({serie.Rating}): ");
        double newRating = double.TryParse(ReadLine(), out double r) ? r : serie.Rating;

        Write($"New Year ({serie.Year}): ");
        int newYear = int.TryParse(ReadLine(), out int y) ? y : serie.Year;

        var update = Builders<Serie>.Update
            .Set(s => s.Title, newTitle)
            .Set(s => s.Genres, newGenres)
            .Set(s => s.Seasons, newSeasons)
            .Set(s => s.Rating, newRating)
            .Set(s => s.Year, newYear);

        await _context.Series.UpdateOneAsync(s => s.Id == objectId, update);

        WriteLine("Series updated successfully!");
    }

    /// <summary>
    /// Menu
    /// </summary>
    public async Task ShowMenuAsync()
    {
        while (true)
        {
            WriteLine("\nNetflix Series MongoDB");
            WriteLine("1. View all series");
            WriteLine("2. Add new series");
            WriteLine("3. Update series");
            WriteLine("4. Delete series");
            WriteLine("5. Exit");

            Write("Choose an option: ");
            string? option = ReadLine();

            switch (option)
            {
                case "1":
                    await DisplayAllAsync();
                    break;
                case "2":
                    await AddSerieAsync();
                    break;
                case "3":
                    await UpdateSerieAsync();
                    break;
                case "4":
                    await DeleteSerieAsync();
                    break;
                case "5":
                    WriteLine("Goodbye!");
                    return;
                default:
                    WriteLine("Invalid option.");
                    break;
            }
        }
    }
}
