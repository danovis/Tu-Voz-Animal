using Microsoft.EntityFrameworkCore;
namespace MascotasApp.Models
{
    public class TvAContext : DbContext
    {
        public TvAContext (DbContextOptions<TvAContext> options) : 
        base(options)
        {

        }
        public DbSet<AdopcionItem> AdopcionItems{get;set;}
        public DbSet<MascotaItem> MascotaItems{get;set;}

    }
}