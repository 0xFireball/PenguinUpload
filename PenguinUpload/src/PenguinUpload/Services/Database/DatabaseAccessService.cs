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
            if (_dbInstance == null)
            {
                _dbInstance = new LiteDatabase("penguinupload.lidb");
            }
            return _dbInstance;
        }
    }
}