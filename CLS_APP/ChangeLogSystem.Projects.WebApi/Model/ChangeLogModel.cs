using ChangeLogSystem.Projects.Data.Model;

namespace ChangeLogSystem.Projects.WebApi.Model
{
    public class ChangeLogModel
    {
        public int Identity { get; set; }
        public string Title { get; set; }
        public ChangeLogType Type { get; set; }
        public string Content { get; set; }

        public static implicit operator ChangeLogModelDto(ChangeLogModel changeLog)
        {
            return new ChangeLogModelDto()
            {
                Identity = changeLog.Identity,
                Type = (ChangeLogTypeDto)changeLog.Type,
                Title = changeLog.Title,
                Content = changeLog.Content
            };
        }

        public static implicit operator ChangeLogModel(ChangeLogModelDto changeLog)
        {
            return new ChangeLogModel()
            {
                Identity = changeLog.Identity,
                Type = (ChangeLogType)changeLog.Type,
                Title = changeLog.Title,
                Content = changeLog.Content
            };
        }
    }
}
