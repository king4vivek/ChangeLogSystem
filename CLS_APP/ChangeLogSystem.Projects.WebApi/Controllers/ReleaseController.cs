using ChangeLogSystem.Projects.WebApi.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChangeLogSystem.Projects.Data.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ChangeLogSystem.Projects.WebApi.Controllers
{
    [Route("api/changelog")]
    [ApiController]
    public class ReleaseController : ControllerBase
    {
        IChangeLogSystemRepository changeLogSystemRepository;

        public ReleaseController(IChangeLogSystemRepository _changeLogSystemRepository)
        {
            changeLogSystemRepository = _changeLogSystemRepository;
        }

        // GET: api/<ReleaseController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ChangeLogModel>>> Get()
        {
            var changeLogs = await changeLogSystemRepository.Get();

            if (changeLogs?.Any() == true)
            {
                IEnumerable<ChangeLogModel> result = changeLogs.Select(cl => (ChangeLogModel)cl).ToList().AsEnumerable();

                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }

        // GET api/<ReleaseController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ChangeLogModel>> Get(int id)
        {
            var changeLog = await changeLogSystemRepository.Get(id);

            if (changeLog != null)
            {
                ChangeLogModel result = changeLog;
                return Ok(result);
            }
            else
            {
                return NotFound();
            }
        }

        // POST api/<ReleaseController>
        [HttpPost]
        public async Task<ActionResult<int>> Post([FromBody] ChangeLogModel changeLog)
        {
            return Ok(await changeLogSystemRepository.Add(changeLog));
        }

        // PUT api/<ReleaseController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult<bool>> Put(int id, [FromBody] ChangeLogModel changeLog)
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
