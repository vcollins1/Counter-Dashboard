namespace CounterDashboard.Backend.DTOs;

public record CreateCounterDto(string Title, long Count, long Min, long Max, long Step);