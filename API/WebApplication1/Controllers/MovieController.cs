// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using MovieTheaterBillboardApi.Models;

// namespace MovieTheaterBillboardApi.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class MovieController : ControllerBase
//     {
//         private static List<Movie> movies = new List<Movie>
//         {
//             new Movie {
//                 Id = 1,
//                 Title = "Back To The Future",
//                 Genre = "Science Fiction",
//                 Price = 5,
//                 Time = "19:00",
//                 ImageUrl = "https://tse1.mm.bing.net/th?id=OIP.cdStIUSvBvA_What2BoUWgHaLH&pid=Api&P=0&h=220"
//             },
//             new Movie {
//                 Id = 2,
//                 Title = "The Mask",
//                 Genre = "Comedy",
//                 Price = 4,
//                 Time = "17:30",
//                 ImageUrl = "https://tse1.mm.bing.net/th?id=OIP.-TRcLv3HF_leoMDFcX59jAHaJ4&pid=Api&P=0&h=220"
//             },
//             new Movie {
//                 Id = 3,
//                 Title = "Gladiator",
//                 Genre = "Action",
//                 Price = 6,
//                 Time = "20:00",
//                 ImageUrl = "https://tse1.mm.bing.net/th?id=OIP.2T-aI2Uk7PkIYbYXntgg4gHaK-&pid=Api&P=0&h=220"
//             }
//         };
//         // GET: api/movies
//         [HttpGet]
//         public ActionResult<IEnumerable<Movie>> GetMovies()
//         {
//             return Ok(movies);
//         }

//         // POST: api/movies
//         [HttpPost]
//         public ActionResult<Movie> AddMovie([FromBody] Movie movie)
//         {
//             movie.Id = movies.Count + 1;
//             movies.Add(movie);
//             return CreatedAtAction(nameof(GetMovies), new { id = movie.Id }, movie);
//         }
//     }
// }
