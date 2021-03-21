using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChangeLogSystem.Projects.WebApi.Model
{
    public abstract class ChangeLogModel
    {
        public string Title { get; set; }
        public ChangeLogType Type { get; set; }
        public string Content { get; set; }
    }
}
