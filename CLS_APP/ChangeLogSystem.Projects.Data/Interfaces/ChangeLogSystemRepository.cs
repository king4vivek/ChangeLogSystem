using ChangeLogSystem.Projects.Data.Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ChangeLogSystem.Projects.Data.Interfaces
{
    public interface IChangeLogSystemRepository
    {
        Task<IEnumerable<ChangeLogModelDto>> Get();
        Task<ChangeLogModelDto> Get(int Identity);
        Task<int> Add(ChangeLogModelDto changeLogDataModel);
        Task<bool> Update(int Identity, ChangeLogModelDto changeLogDataModel);
        Task<bool> Delete(int Identity);
    }
}
