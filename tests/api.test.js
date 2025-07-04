const request = require('supertest');
const app = require('../src/app');

describe('Wimbledon API', () => {
  describe('GET /wimbledon', () => {
    it('should return Wimbledon final data for a valid year', async () => {
      const response = await request(app)
        .get('/wimbledon?year=2021')
        .expect(200);

      expect(response.body).toEqual({
        year: 2021,
        champion: 'Novak Djokovic',
        runner_up: 'Matteo Berrettini',
        score: '6–7(4–7), 6–4, 6–4, 6–3',
        sets: 4,
        tiebreak: true
      });
    });

    it('should return 400 for missing year parameter', async () => {
      const response = await request(app)
        .get('/wimbledon')
        .expect(400);

      expect(response.body).toEqual({
        error: 'Year parameter is required'
      });
    });

    it('should return 400 for invalid year parameter', async () => {
      const response = await request(app)
        .get('/wimbledon?year=invalid')
        .expect(400);

      expect(response.body).toEqual({
        error: 'Year must be a valid number'
      });
    });

    it('should return 400 for year before 1968', async () => {
      const response = await request(app)
        .get('/wimbledon?year=1967')
        .expect(400);

      expect(response.body.error).toContain('Year must be between 1968 and');
    });

    it('should return 400 for future year', async () => {
      const futureYear = new Date().getFullYear() + 1;
      const response = await request(app)
        .get(`/wimbledon?year=${futureYear}`)
        .expect(400);

      expect(response.body.error).toContain('Year must be between 1968 and');
    });

    it('should return 404 for year with no data', async () => {
      // Using a hypothetical future year that would be valid but has no data
      const response = await request(app)
        .get('/wimbledon?year=2025')
        .expect(404);

      expect(response.body.error).toContain('No Wimbledon final data available for year 2025');
    });

    it('should return data for the first Open Era year (1968)', async () => {
      const response = await request(app)
        .get('/wimbledon?year=1968')
        .expect(200);

      expect(response.body).toEqual({
        year: 1968,
        champion: 'Rod Laver',
        runner_up: 'Tony Roche',
        score: '6–3, 6–4, 6–2',
        sets: 3,
        tiebreak: false
      });
    });

    it('should return data for 2020 (cancelled tournament)', async () => {
      const response = await request(app)
        .get('/wimbledon?year=2020')
        .expect(200);

      expect(response.body).toEqual({
        year: 2020,
        champion: 'Tournament Cancelled',
        runner_up: 'Due to COVID-19',
        score: 'N/A',
        sets: 0,
        tiebreak: false
      });
    });

    it('should return data for recent year (2024)', async () => {
      const response = await request(app)
        .get('/wimbledon?year=2024')
        .expect(200);

      expect(response.body).toEqual({
        year: 2024,
        champion: 'Carlos Alcaraz',
        runner_up: 'Novak Djokovic',
        score: '6–2, 6–2, 7–6(7–4)',
        sets: 3,
        tiebreak: true
      });
    });

    it('should handle tiebreak matches correctly', async () => {
      const response = await request(app)
        .get('/wimbledon?year=2019')
        .expect(200);

      expect(response.body.tiebreak).toBe(true);
      expect(response.body.score).toContain('7–6');
    });

    it('should handle non-tiebreak matches correctly', async () => {
      const response = await request(app)
        .get('/wimbledon?year=2017')
        .expect(200);

      expect(response.body.tiebreak).toBe(false);
      expect(response.body.score).not.toContain('7–6');
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200);

      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('uptime');
    });
  });

  describe('404 handling', () => {
    it('should return 404 for unknown endpoints', async () => {
      const response = await request(app)
        .get('/unknown-endpoint')
        .expect(404);

      expect(response.body).toEqual({
        error: 'Endpoint not found'
      });
    });
  });

  describe('Rate limiting', () => {
    it('should accept requests under the rate limit', async () => {
      // Make several requests quickly
      const promises = Array(5).fill().map(() => 
        request(app).get('/wimbledon?year=2021')
      );

      const responses = await Promise.all(promises);
      responses.forEach(response => {
        expect(response.status).toBe(200);
      });
    });
  });
});
