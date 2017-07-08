using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSpa.Server.Entities
{
    /// <summary>
    /// 勤務記録
    /// </summary>
    public class WorkingRecord : IEntityBase
    {
        /// <summary>
        /// 勤務記録ID
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// 従業員ID
        /// </summary>
        public int UserId { get; set; }

        /// <summary>
        /// 勤務日
        /// </summary>
        [Required]
        public int RecordeDate { get; set; }

        /// <summary>
        /// 出勤時間
        /// </summary>
        [DataType(DataType.DateTime)]
        public DateTime? ClockIn { get; set; }

        /// <summary>
        /// 退勤時間
        /// </summary>
        [DataType(DataType.DateTime)]
        public DateTime? ClockOut { get; set; }

        /// <summary>
        /// 労働時間
        /// </summary>
        public int? WorkingTime { get; set; }

        /// <summary>
        /// 残業時間
        /// </summary>
        public int? OverTime { get; set; }

        /// <summary>
        /// 勤務種類
        /// </summary>
        public WorkingType WorkingType { get; set; }

        /// <summary>
        /// 従業員
        /// </summary>
        public ApplicationUser User { get; set; }
    }
}
