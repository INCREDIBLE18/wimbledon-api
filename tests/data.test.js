const wimbledonData = require('../src/data/wimbledonData');

describe('Wimbledon Data', () => {
  describe('getFinalByYear', () => {
    it('should return correct data for existing year', () => {
      const result = wimbledonData.getFinalByYear(2021);
      expect(result).toEqual({
        year: 2021,
        champion: 'Novak Djokovic',
        runner_up: 'Matteo Berrettini',
        score: '6–7(4–7), 6–4, 6–4, 6–3',
        sets: 4,
        tiebreak: true
      });
    });

    it('should return null for non-existing year', () => {
      const result = wimbledonData.getFinalByYear(2025);
      expect(result).toBeNull();
    });

    it('should return data for all test years', () => {
      const testYears = [1968, 1980, 1990, 2000, 2010, 2020, 2024];
      testYears.forEach(year => {
        const result = wimbledonData.getFinalByYear(year);
        expect(result).not.toBeNull();
        expect(result.year).toBe(year);
        expect(result).toHaveProperty('champion');
        expect(result).toHaveProperty('runner_up');
        expect(result).toHaveProperty('score');
        expect(result).toHaveProperty('sets');
        expect(result).toHaveProperty('tiebreak');
      });
    });
  });

  describe('getAvailableYears', () => {
    it('should return array of years in descending order', () => {
      const years = wimbledonData.getAvailableYears();
      expect(Array.isArray(years)).toBe(true);
      expect(years.length).toBeGreaterThan(50);
      expect(years[0]).toBeGreaterThan(years[1]); // Descending order
      expect(years).toContain(1968); // First Open Era year
      expect(years).toContain(2024); // Recent year
    });
  });

  describe('getFinalsByDecade', () => {
    it('should return finals from 2020s', () => {
      const finals = wimbledonData.getFinalsByDecade(2020);
      expect(finals.length).toBeGreaterThan(0);
      finals.forEach(final => {
        expect(final.year).toBeGreaterThanOrEqual(2020);
        expect(final.year).toBeLessThan(2030);
      });
    });

    it('should return finals from 1970s', () => {
      const finals = wimbledonData.getFinalsByDecade(1970);
      expect(finals.length).toBe(10);
      finals.forEach(final => {
        expect(final.year).toBeGreaterThanOrEqual(1970);
        expect(final.year).toBeLessThan(1980);
      });
    });

    it('should return empty array for non-existent decade', () => {
      const finals = wimbledonData.getFinalsByDecade(1950);
      expect(finals).toEqual([]);
    });
  });

  describe('Data integrity', () => {
    it('should have consistent data structure for all years', () => {
      const allYears = wimbledonData.getAvailableYears();
      allYears.forEach(year => {
        const final = wimbledonData.getFinalByYear(year);
        expect(final).toHaveProperty('year');
        expect(final).toHaveProperty('champion');
        expect(final).toHaveProperty('runner_up');
        expect(final).toHaveProperty('score');
        expect(final).toHaveProperty('sets');
        expect(final).toHaveProperty('tiebreak');
        
        expect(typeof final.year).toBe('number');
        expect(typeof final.champion).toBe('string');
        expect(typeof final.runner_up).toBe('string');
        expect(typeof final.score).toBe('string');
        expect(typeof final.sets).toBe('number');
        expect(typeof final.tiebreak).toBe('boolean');
      });
    });

    it('should have tiebreak=true when score contains tiebreak notation', () => {
      const allYears = wimbledonData.getAvailableYears();
      allYears.forEach(year => {
        const final = wimbledonData.getFinalByYear(year);
        const hasTiebreakInScore = final.score.includes('(') && final.score.includes(')');
        
        if (hasTiebreakInScore && year !== 2020) { // 2020 is special case
          expect(final.tiebreak).toBe(true);
        }
      });
    });
  });
});
