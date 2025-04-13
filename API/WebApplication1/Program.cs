using MovieTheaterBillboardApi.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();

app.UseCors(o => o.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

List<Movie> movies = new List<Movie>
{
    new Movie {Id = 1, Title = "Back To The Future", Genre = "Science Fiction", Price = 5, Time = "19:00", ImageUrl = "https://tse2.mm.bing.net/th?id=OIP.o_tMoOhO0J1Z6DsRKnUD3gHaLH&pid=Api&P=0&h=220"},
    new Movie {Id = 2, Title = "The Dark Knight", Genre = "Action", Price = 4, Time = "17:30", ImageUrl = "https://tse4.mm.bing.net/th?id=OIP.NN9rKH-vZbFgtH4FuoW7OwHaLH&pid=Api&P=0&h=220"},
    new Movie {Id = 3, Title = "Gladiator", Genre = "Action", Price = 6, Time = "20:00", ImageUrl = "https://tse1.mm.bing.net/th?id=OIP.95KrTnCWvpjs7Rfv7VGkHQHaLH&pid=Api&P=0&h=220"}
};

// Only GET endpoint for frontend usage
app.MapGet("/movies", () => movies);

app.Run();
