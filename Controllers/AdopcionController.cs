using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MascotasApp.Models;
namespace MascotasApp.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class AdopcionController : ControllerBase
    {
        private readonly TvAContext _context;
        public AdopcionController (TvAContext context)
        {
            _context = context;
                    if (_context.AdopcionItems.Count() == 0)
            {
                 _context.AdopcionItems.Add(new AdopcionItem{ Cod_Personna = "", NombreCompleto=" ", Telefono = "" , Direccion=" ", Sexo=" " , Edad=""});
                _context.SaveChanges();
            }
        }


            //GET: api/Adopcion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdopcionItem>>> GetAdopcionItem(){
            return await _context.AdopcionItems.ToListAsync();
        }

           // GET: api/Adopcion/5
         [HttpGet("{Id}")]
        public async Task<ActionResult<AdopcionItem>> GetAdopcionItem(int Id)
        {
            var adopcionItem = await _context.AdopcionItems.FindAsync(Id);
            if (adopcionItem == null)
            {
                return NotFound();
            }
            return adopcionItem;
        }

         //POST: api/Task
        [HttpPost]
        public async Task<ActionResult<AdopcionItem>> PostAdopcionItem(AdopcionItem item){
            _context.AdopcionItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAdopcionItem), new AdopcionItem{Id= item.Id}, item);
        }



        }
    }
