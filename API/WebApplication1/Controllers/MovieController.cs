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
            new Movie {Id = 1, Title = "Back To The Future", Description = "Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean time machine invented by a slightly mad scientist. During his often hysterical, always amazing trip back in time, Marty must make sure his teenage parents-to-be meet and fall in love to get back to the future.", ImageUrl = "https://tse2.mm.bing.net/th?id=OIP.MeklphvvlT26Eb0ZUn2gSAHaJ4&pid=Api&P=0&h=220"},
            new Movie {Id = 2, Title = "Interstellar", Description = "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.", ImageUrl = "https://tse2.mm.bing.net/th?id=OIP.uiaj_IMaC7h3NoieAhcmVwHaLG&pid=Api&P=0&h=220"}
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
            movie.Id = movies.Count + 1;
            movies.Add(movie);
            return CreatedAtAction(nameof(GetMovies), new { id = movie.Id }, movie);
        }
    }
}
