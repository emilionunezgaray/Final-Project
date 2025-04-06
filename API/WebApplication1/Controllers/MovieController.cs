using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MovieTheaterBillboardApi.Models;

namespace MovieTheaterBillboardApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private static List<Movie> movies = new List<Movie>
        {
            new Movie {Title = "Back To The Future", Genre = "Science Fiction", Price = 5, ImageUrl = "https://tse2.mm.bing.net/th?id=OIP.MeklphvvlT26Eb0ZUn2gSAHaJ4&pid=Api&P=0&h=220"},
        };
        // GET: api/movies
        [HttpGet]
        public ActionResult<IEnumerable<Movie>> GetMovies()
        {
            return Ok(movies);
        }

        // POST: api/movies
        [HttpPost]
        public ActionResult<Movie> AddMovie([FromBody] Movie movie)
        {
            movie.Title = movies.Count + 1;
            movies.Add(movie);
            return CreatedAtAction(nameof(GetMovies), new { id = movie.Id }, movie);
        }
    }
}
