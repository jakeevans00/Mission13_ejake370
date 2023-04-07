using System;
using Microsoft.EntityFrameworkCore;

namespace Mission13_api.Data
{
	public class MovieDbContext : DbContext
	{
		public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }
		public DbSet<Movie> Movies { get; set; }
	}
}
