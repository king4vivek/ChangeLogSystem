using ChangeLogSystem.Projects.Data.Interfaces;
using ChangeLogSystem.Projects.Mvc.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace ChangeLogSystem.Projects.Mvc.Controllers
{
    public class ChangeLogController : Controller
    {
        IChangeLogSystemRepository changeLogSystemRepository;

        public ChangeLogController(IChangeLogSystemRepository _changeLogSystemRepository)
        {
            changeLogSystemRepository = _changeLogSystemRepository;
        }


        // GET: ChangeLogController
        public async Task<IActionResult> Index()
        {
            var changeLogs = await changeLogSystemRepository.Get();

            if (changeLogs?.Any() == true)
            {
                var result = changeLogs.Select(cl => (ChangeLogModel)cl).ToList().AsEnumerable();

                return View(result);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
