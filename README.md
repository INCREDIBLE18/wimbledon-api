# Wimbledon API

A production-ready REST API that provides information about Wimbledon tennis finals by year.

## Features

- Get Wimbledon final information by year
- Comprehensive data including champion, runner-up, score, sets, and tiebreak information
- Input validation and error handling
- Rate limiting and security headers
- CORS support
- Comprehensive test coverage
- API documentation

## API Endpoint

### Get Wimbledon Final Information

```
GET /wimbledon?year={year}
```

**Parameters:**
- `year` (required): The year of the Wimbledon final (1968-2024)

**Response:**
```json
{
  "year": 2021,
  "champion": "Novak Djokovic",
  "runner_up": "Matteo Berrettini",
  "score": "6–7(4–7), 6–4, 6–4, 6–3",
  "sets": 4,
  "tiebreak": true
}
```

**Error Responses:**
- `400 Bad Request`: Missing or invalid year parameter
- `404 Not Found`: No data available for the specified year
- `500 Internal Server Error`: Server error

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

## Testing

Run tests:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=3000
NODE_ENV=production
```

## Data Coverage

The API contains data for Wimbledon men's singles finals from 1968 to 2024 (Open Era).

## Production Deployment

The API is designed to be production-ready with:
- Security headers (Helmet)
- Rate limiting
- CORS configuration
- Error handling
- Input validation
- Compression
- Environment configuration

## License

MIT
