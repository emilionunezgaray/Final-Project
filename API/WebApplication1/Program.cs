using MovieTheaterBillboardApi.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
app.UseCors((o) => {
    o.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
});
List<Movie> movies = new List<Movie>
{
    new Movie {
        Id = 1,
        Title = "Back To The Future",
        Genre = "Science Fiction",
        Price = 5,
        Time = "19:00",
        ImageUrl = "https://tse1.mm.bing.net/th?id=OIP.cdStIUSvBvA_What2BoUWgHaLH&pid=Api&P=0&h=220"
    },
    new Movie {
        Id = 2,
        Title = "The Mask",
        Genre = "Comedy",
        Price = 4,
        Time = "17:30",
        ImageUrl = "https://tse1.mm.bing.net/th?id=OIP.-TRcLv3HF_leoMDFcX59jAHaJ4&pid=Api&P=0&h=220"
    },
    new Movie {
        Id = 3,
        Title = "Gladiator",
        Genre = "Action",
        Price = 6,
        Time = "20:00",
        ImageUrl = "https://tse1.mm.bing.net/th?id=OIP.2T-aI2Uk7PkIYbYXntgg4gHaK-&pid=Api&P=0&h=220"
    }
};

// Get all movies
app.MapGet("/movies", () => movies);

// Add a new movie
app.MapPost("/movies", (Movie newMovie) => 
{
    newMovie.Id = movies.Any() ? movies.Max(m => m.Id) + 1: 1;
    movies.Add(newMovie);
    return Results.Created($"/movies/{newMovie.Id}", newMovie);
});

// Update an existing movie
app.MapPut("/movies/{id}", (int id, Movie updatedMovie) => 
{
    var movie = movies.FirstOrDefault(m => m.Id == id);
    if (movie == null)
    {
        return Results.NotFound();
    }
    movie.Title = updatedMovie.Title;
    movie.Genre = updatedMovie.Genre;
    movie.Price = updatedMovie.Price;
    movie.Time = updatedMovie.Time;
    movie.ImageUrl = updatedMovie.ImageUrl;
    return Results.NoContent();
});

// Delete a movie
app.MapDelete("/movies/{id}", (int id) => 
{
    var movie = movies.FirstOrDefault(m => m.Id == id);
    if(movie == null)
    {
        return Results.NotFound();
    }
    movies.Remove(movie);
    return Results.NoContent();
});

app.Run();

