using System.ComponentModel.DataAnnotations;

namespace AspNetCoreSpa.Server.Entities
{
    public enum ExternalLoginStatus
    {
        Ok = 0,
        Error = 1,
        Invalid = 2,
        TwoFactor = 3,
        Lockout = 4,
        CreateAccount = 5

    }

    /// <summary>
    /// ‹Î–±í—Ş
    /// </summary>
    public enum WorkingType
    {
        /// <summary>
        /// –¢“o˜^
        /// </summary>
        [Display(Name = "–¢“o˜^")]
        Unregistered = 0,
        /// <summary>
        /// o‹Î
        /// </summary>
        [Display(Name = "o‹Î")]
        Attendance = 1,
        /// <summary>
        /// —L‹‹‹x‰É
        /// </summary>
        [Display(Name = "—L‹‹‹x‰É")]
        PaidHoliday = 20,
        /// <summary>
        /// –@“à‹x“ú
        /// </summary>
        [Display(Name = "–@“à‹x“ú")]
        LegalHoliday = 10,
        /// <summary>
        /// –@’èŠO‹x“ú
        /// </summary>
        [Display(Name = "–@’èŠO‹x“ú")]
        NonLegalHoliday = 11,

    }

}