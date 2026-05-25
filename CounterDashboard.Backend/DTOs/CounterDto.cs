namespace CounterDashboard.Backend.DTOs;

public record CounterDto(
    long Id, string Title, long Count, long Min, long Max, long step);