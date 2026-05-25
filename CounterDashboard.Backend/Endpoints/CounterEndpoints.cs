using CounterDashboard.Backend.Data;
using CounterDashboard.Backend.DTOs;
using Dapper;

namespace CounterDashboard.Backend.Endpoints;

public static class CounterEndpoints
{
    private const string GetCounter = "GetCounter";
    
    public static void UseCounterEndpoints(this WebApplication app)
    {
        var counterGroup = app.MapGroup("/counter");
        

        counterGroup.MapGet("/", async (ConnectionFactory factory) =>
        {
            const string sql = "SELECT * FROM Counters;";
            await using var conn = factory.CreateConnection();
            var counters = await conn.QueryAsync<CounterDto>(sql);
            return Results.Ok(counters);
        });

        counterGroup.MapGet("/{id}", async (int id, ConnectionFactory factory) =>
        {
            const string sql = "SELECT * FROM Counters WHERE Id = @Id";
            await using var conn = factory.CreateConnection();
            var counter = await conn.QuerySingleAsync<CounterDto>(sql, new{Id = id});
            return Results.Ok(counter);
        }).WithName(GetCounter);

        counterGroup.MapPost("/", async (CreateCounterDto newCounter, ConnectionFactory factory) =>
        {
            const string sql = """
                               INSERT INTO Counters (Title, Count, Min, Max, Step)
                               VALUES (@Title, @Count, @Min, @Max, @Step)
                               RETURNING Id, Title, Count, Min, Max, Step;
                               """;

            await using var conn = factory.CreateConnection();
            var counter = await conn.QuerySingleAsync<CounterDto>(sql, newCounter);

            return Results.CreatedAtRoute(GetCounter, new { id = counter.Id }, counter);
        }); 

        counterGroup.MapPut("/{id}", async (int id, UpdateCounterDto update, ConnectionFactory factory) =>
        {
            const string sql = """
                               UPDATE Counters 
                               SET Title = @Title, Count = @Count, Min = @Min, Max = @Max, Step = @Step
                               WHERE Id = @Id;
                               """;
            await using var conn = factory.CreateConnection();
            
            await conn.ExecuteAsync(sql, new
            {
                Id = id,
                update.Title,
                update.Count,
                update.Min,
                update.Max,
                update.Step
            });

            return Results.NoContent();
        });
        
        counterGroup.MapDelete("/{id}", async (int id, ConnectionFactory factory) =>
        {
            const string sql = "DELETE FROM Counters WHERE Id = @Id";
            await using var conn = factory.CreateConnection();
            await conn.ExecuteAsync(sql, new {Id = id});

            return Results.NoContent();
        });
    }
}