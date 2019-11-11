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
    public class MascotaController : ControllerBase
    {
        private readonly TvAContext _context;

        public MascotaController(TvAContext context)
        {
            _context = context;
            if(_context.MascotaItems.Count()==0)
            {
                _context.MascotaItems.Add(new MascotaItem{ Nombre= " Pini ", Sexo="F ", Raza= " pudul" , TipoMascota= "", Descripcion="hfhhdjkd " });
                _context.SaveChanges();

            }

        }   
        //GET: api/Mascota
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MascotaItem>>> GetMascotaItem(){
            return await _context.MascotaItems.ToListAsync();
        }
        
         // GET: api/Mascota/5
         [HttpGet("{id}")]
        public async Task<ActionResult<MascotaItem>> GetMascotaItem(int id)
        {
            var mascotaItem = await _context.MascotaItems.FindAsync(id);
            if (mascotaItem == null)
            {
                return NotFound();
            }
            return mascotaItem;
        }

        
        //POST: api/Mascota
        [HttpPost]
        public async Task<ActionResult<MascotaItem>> PostMascotaItem(MascotaItem item){
            _context.MascotaItems.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMascotaItem), new MascotaItem{Id= item.Id}, item);
        }

        
        //PUT: api/Mascota/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMascotaItem(int id, MascotaItem item){
            if(id != item.Id){
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        } 

        
        //DELETE: api/Mascota/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMascotasItem(int id){
            var MascotasItem = await
            _context.MascotaItems.FindAsync(id);
            if(MascotasItem == null){
                return NotFound();
            }

            _context.MascotaItems.Remove(MascotasItem);
            await _context.SaveChangesAsync();
            return NoContent();
        }



        }
    }
