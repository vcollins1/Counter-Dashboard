using CounterDashboard.Backend.Endpoints;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseCounterEndpoints();

app.Run();