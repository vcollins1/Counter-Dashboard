namespace CounterDashboard.Backend.DTOs;

public record UpdateCounterDto(string Title, long Count, long Min, long Max, long Step);