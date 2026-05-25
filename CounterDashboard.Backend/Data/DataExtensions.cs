using Dapper;

namespace CounterDashboard.Backend.Data;

public static class DataExtensions
{
    private const string SchemaResource = "CounterDashboard.Backend.Data.Scripts.initDb.sql";
    
    public static void AddDatabase(this WebApplicationBuilder builder)
    {
        var connectionString = builder.Configuration.GetConnectionString("CounterDashboard")
                               ?? throw new InvalidOperationException("Connection string was not found");

        builder.Services.AddSingleton(new ConnectionFactory(connectionString));
    }

    public static async Task InitDb(this WebApplication app)
    {
        await using var schemaStream = typeof(DataExtensions).Assembly.GetManifestResourceStream(SchemaResource)
                                 ?? throw new InvalidOperationException($"SQL resource {SchemaResource} not found");

        using var reader = new StreamReader(schemaStream);
        var schemaSql = await reader.ReadToEndAsync();

        var factory = app.Services.GetRequiredService<ConnectionFactory>();
        await using var connection = factory.CreateConnection();
        await connection.ExecuteAsync(schemaSql);
    }
}