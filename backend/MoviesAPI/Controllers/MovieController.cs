using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Data;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp)
        {
            context = temp;
        }


        public IEnumerable<MovieInfo> Get()
        {
            var x = context.Movies.ToArray();
            return context.Movies
                .Where(x => x.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}
