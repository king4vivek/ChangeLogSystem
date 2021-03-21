using System;

namespace ChangeLogSystem.Projects.Data.Model
{
    public class ChangeLogModelDto
    {
        public int Identity { get; set; }
        public string Title { get; set; }
        public ChangeLogTypeDto Type { get; set; }
        public string Content { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
