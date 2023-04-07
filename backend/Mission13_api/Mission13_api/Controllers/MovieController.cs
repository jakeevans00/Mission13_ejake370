using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Mission13_api.Data;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Mission13_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;

        public MovieController(MovieDbContext temp) {
            context = temp;
        }
        // GET: /<controller>/
        public IEnumerable<Movie> Get()
        {
            return context.Movies.Where(x => x.edited == "Yes").OrderBy(x => x.title).ToArray();
        }

    }
}

