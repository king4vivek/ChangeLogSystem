using ChangeLogSystem.Projects.Data.Model;
using System;

namespace ChangeLogSystem.Projects.WebApi.Model
{
    public class ChangeLogViewModel : ChangeLogModel
    {
        public int Identity { get; set; }
        public DateTime TimeStamp { get; set; }

        public static implicit operator ChangeLogModelDto(ChangeLogViewModel changeLog)
        {
            return new ChangeLogModelDto()
            {
                Identity = changeLog.Identity,
                Type = (ChangeLogTypeDto)changeLog.Type,
                Title = changeLog.Title,
                Content = changeLog.Content,
                TimeStamp = changeLog.TimeStamp
            };
        }

        public static implicit operator ChangeLogViewModel(ChangeLogModelDto changeLog)
        {
            return new ChangeLogViewModel()
            {
                Identity = changeLog.Identity,
                Type = (ChangeLogType)changeLog.Type,
                Title = changeLog.Title,
                Content = changeLog.Content,
                TimeStamp = changeLog.TimeStamp
            };
        }
    }
}
