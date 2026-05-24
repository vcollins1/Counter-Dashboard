namespace CounterDashboard.Backend.Endpoints;

public static class CounterEndpoints
{
    public static void UseCounterEndpoints(this WebApplication app)
    {
        var counter = app.MapGroup("/counter");

        counter.MapGet("/", () => "Get all counters");

        counter.MapPost("/", () => "Create a counter");

        counter.MapPut("/{id}", (int id) => $"Update counter with id: {id}");
        
        counter.MapDelete("/{id}", (int id) => $"Delete counter with id: {id}");
    }
}