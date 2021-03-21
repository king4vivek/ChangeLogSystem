using ChangeLogSystem.Projects.Data.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ChangeLogSystem.Projects.Data.Models
{
    public class ChangeLogJsonModel
    {
        public string appName { get; set; }
        public List<ChangeLogModelDto> changeLogs { get; set; } = new List<ChangeLogModelDto>();
        public int counter { get { return changeLogs.Count; }}
    }

}

