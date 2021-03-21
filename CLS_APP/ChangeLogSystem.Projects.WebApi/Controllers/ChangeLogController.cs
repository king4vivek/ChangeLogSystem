using ChangeLogSystem.Projects.Data.Interfaces;
using ChangeLogSystem.Projects.WebApi.Model;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChangeLogSystem.Projects.WebApi.Controllers
{
    [Route("api/changelog")]
    [ApiController]
    public class ChangeLogController : ControllerBase
    {
        IChangeLogSystemRepository changeLogSystemRepository;

        public ChangeLogController(IChangeLogSystemRepository _changeLogSystemRepository)
        {
            changeLogSystemRepository = _changeLogSystemRepository;
        }

        // GET: api/<ReleaseController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChangeLogViewModel>>> Get()
        {
            var changeLogs = await changeLogSystemRepository.Get();

            if (changeLogs?.Any() == true)
            {
                var result = changeLogs.Select(cl => (ChangeLogViewModel)cl).ToList().AsEnumerable();

                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }

        // GET api/<ReleaseController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChangeLogViewModel>> Get(int id)
        {
            var changeLog = await changeLogSystemRepository.Get(id);

            if (changeLog != null)
            {
                ChangeLogViewModel result = changeLog;
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }

        // POST api/<ReleaseController>
        [HttpPost]
        public async Task<ActionResult<int>> Post([FromBody] ChangeLogSaveModel changeLog)
        {
            return Ok(await changeLogSystemRepository.Add(changeLog));
        }

        // PUT api/<ReleaseController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<bool>> Put(int id, [FromBody] ChangeLogSaveModel changeLog)
        {
            return Ok(await changeLogSystemRepository.Update(id, changeLog));
        }

        // DELETE api/<ReleaseController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> Delete(int id)
        {
            return Ok(await changeLogSystemRepository.Delete(id));
        }
    }
}
