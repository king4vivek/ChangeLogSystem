using ChangeLogSystem.Projects.Data.Model;
using System;

namespace ChangeLogSystem.Projects.WebApi.Model
{
    public class ChangeLogSaveModel : ChangeLogModel
    {
        public static implicit operator ChangeLogModelDto(ChangeLogSaveModel changeLog)
        {
            return new ChangeLogModelDto()
            {
                Type = (ChangeLogTypeDto)changeLog.Type,
                Title = changeLog.Title,
                Content = changeLog.Content
            };
        }

        public static implicit operator ChangeLogSaveModel(ChangeLogModelDto changeLog)
        {
            return new ChangeLogSaveModel()
            {
                Type = (ChangeLogType)changeLog.Type,
                Title = changeLog.Title,
                Content = changeLog.Content
            };
        }
    }
}
