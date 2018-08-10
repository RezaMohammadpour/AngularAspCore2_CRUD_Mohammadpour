
using AngularWebAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
namespace AngularWebAPI
{
    public class DBMohammadpourAngular: DbContext
    {
        public DBMohammadpourAngular(DbContextOptions<DBMohammadpourAngular> options)
            : base(options)
        { }

        public DbSet<Employee> employee { get; set; }
    }
}