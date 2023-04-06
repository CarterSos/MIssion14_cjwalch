using Microsoft.EntityFrameworkCore;

namespace MoviesAPI.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext (DbContextOptions<MovieDbContext> options) : base(options) { }
        public DbSet<MovieInfo> Movies { get; set; }
    }
}
