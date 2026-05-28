# Counter Dashboard

A full-stack counter dashboard for tracking customizable counters such as water, exercise, and study goals. Users can create counters, update counts, reset values, and persist data through a SQLite-backed ASP.NET Core API.

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### Backend

- C#
- ASP.NET Core
- Dapper
- SQLite

## Features

- View saved counters
- Add new counters with title, min, max, step, and current count
- Increment and decrement counters within configured limits
- Reset one counter or all counters
- Delete counters
- Persist counter data in SQLite

## Getting Started

### Prerequisites

- Node.js and npm
- .NET SDK

### Run the Backend

```bash
cd CounterDashboard.Backend
dotnet run
```

The API runs at:

```txt
http://localhost:5121
```

### Run the Frontend

```bash
cd CounterDashboard.Frontend
npm install
npm run dev
```

The app runs at:

```txt
http://localhost:5173
```

## API Routes

| Method | Route | Description |
| --- | --- | --- |
| GET | `/counter` | Get all counters |
| GET | `/counter/{id}` | Get a counter by ID |
| POST | `/counter` | Create a counter |
| PUT | `/counter/{id}` | Update a counter |
| DELETE | `/counter/{id}` | Delete a counter |

## Frontend Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Project Structure

```txt
CounterDashboard.Backend/
  Data/
  DTOs/
  Endpoints/
  Program.cs

CounterDashboard.Frontend/
  src/
    components/
    hooks/
    utils/
    assets/
```
