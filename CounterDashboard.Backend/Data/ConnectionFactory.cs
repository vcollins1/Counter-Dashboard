using Microsoft.Data.Sqlite;

namespace CounterDashboard.Backend.Data;

public sealed class ConnectionFactory(string connectionString)
{
    public SqliteConnection CreateConnection() => new(connectionString);
}