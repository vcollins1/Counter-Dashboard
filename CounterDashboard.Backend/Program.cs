using CounterDashboard.Backend.Data;
using CounterDashboard.Backend.Endpoints;

var builder = WebApplication.CreateBuilder(args);
builder.AddDatabase();

var app = builder.Build();
app.UseCounterEndpoints();
await app.InitDb();

app.Run();