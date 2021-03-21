using ChangeLogSystem.Projects.Data.Interfaces;
using ChangeLogSystem.Projects.Data.Model;
using ChangeLogSystem.Projects.Data.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChangeLogSystem.Projects.Data.Repository
{
    public class JsonRepository : IChangeLogSystemRepository
    {
        private const string jsonDatabaseLocation = @"ChangeLogData.json";

        public JsonRepository()
        {
            if (File.Exists(jsonDatabaseLocation))
            {
                changeLogJsonModel = JsonConvert.DeserializeObject<ChangeLogJsonModel>(File.ReadAllText(jsonDatabaseLocation));
            }
            else
            {
                File.WriteAllText(jsonDatabaseLocation, JsonConvert.SerializeObject(changeLogJsonModel));
            }
        }

        private ChangeLogJsonModel changeLogJsonModel = new ChangeLogJsonModel() { changeLogs = new List<ChangeLogModelDto>() };

        public async Task<ChangeLogModelDto> Get(int Identity)
        {
            var changeLog = changeLogJsonModel?.changeLogs?.FirstOrDefault(cl => cl.Identity == Identity);

            return await Task.FromResult(changeLog);
        }

        public async Task<IEnumerable<ChangeLogModelDto>> Get()
        {
            return await Task.FromResult(changeLogJsonModel.changeLogs);
        }

        public async Task<int> Add(ChangeLogModelDto changeLogDataModel)
        {
            try
            {
                ChangeLogModelDto newChange = new ChangeLogModelDto()
                {
                    Identity = changeLogJsonModel.counter + 1,
                    Type = changeLogDataModel.Type,
                    Title = changeLogDataModel.Title,
                    Content = changeLogDataModel.Content
                };

                changeLogJsonModel.changeLogs.Add(newChange);

                //changeLogJsonModel.counter += 1;

                await Task.Run(() => Save());
            }
            catch
            {
                throw;
            }
            return await Task.FromResult(changeLogJsonModel.counter);
        }

        public async Task<bool> Update(int Identity, ChangeLogModelDto changeLogDataModel)
        {
            var updated = false;
            try
            {
                foreach (var changeLog in changeLogJsonModel.changeLogs.Where(cl => cl.Identity == Identity))
                {
                    changeLog.Type = changeLogDataModel.Type;
                    changeLog.Title = changeLogDataModel.Title;
                    changeLog.Content = changeLogDataModel.Content;

                    await Task.Run(() => Save());

                    updated = true;
                }
            }
            catch
            {
                throw;
            }
            return await Task.FromResult(updated);
        }

        public async Task<bool> Delete(int Identity)
        {
            var deleted = false;
            try
            {
                if (changeLogJsonModel.changeLogs.Any(cl => cl.Identity == Identity))
                {
                    changeLogJsonModel.changeLogs.RemoveAll(cl => cl.Identity == Identity);

                    //changeLogJsonModel.counter -= 1;

                    await Task.Run(() => Save());

                    deleted = true;
                }
            }
            catch
            {
                throw;
            }
            return await Task.FromResult(deleted);
        }

        private async Task Save()
        {
            var jsonContent = JsonConvert.SerializeObject(changeLogJsonModel);
            File.WriteAllText(jsonDatabaseLocation, jsonContent);
        }
    }
}
