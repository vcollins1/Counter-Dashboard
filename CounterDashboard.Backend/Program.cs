using CounterDashboard.Backend.Data;
using CounterDashboard.Backend.Endpoints;

const string allowedOrigins = "_allowedOrigins";
var builder = WebApplication.CreateBuilder(args);
builder.AddDatabase();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowedOrigins, policy =>
    {
        policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();
app.UseCors(allowedOrigins);
app.UseCounterEndpoints();
await app.InitDb();

app.Run();