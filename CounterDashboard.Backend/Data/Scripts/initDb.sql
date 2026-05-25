CREATE TABLE IF NOT EXISTS Counters (
    Id INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT NOT NULL UNIQUE,
    Count INTEGER NOT NULL,
    Min INTEGER NOT NULL,
    Max INTEGER NOT NULL,
    Step INTEGER NOT NULL
);

INSERT OR IGNORE INTO Counters (Title, Count, Min, Max, Step)
    VALUES
        ('Water', 0, 0, 16, 2),
        ('Exercise', 0, 0, 60, 5),
        ('Study', 0, 0, 120, 20);