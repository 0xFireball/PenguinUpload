using LiteDB;

namespace PenguinUpload.Services.Database
{
    /// <summary>
    /// A service that contains global database table info, and provides access to the LiteDB store
    /// </summary>
    public class DatabaseAccessService
    {
        public static string UsersCollectionDatabaseKey => "Users";

        private static LiteDatabase _dbInstance;

        public LiteDatabase OpenOrCreateDefault()
        {
            return _dbInstance ?? (_dbInstance = new LiteDatabase("penguinupload.lidb"));
        }
    }
}