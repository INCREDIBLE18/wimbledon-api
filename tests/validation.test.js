const { validateYear } = require('../src/middleware/validation');

describe('Validation Middleware', () => {
  let req, res, next;

  beforeEach(() => {
    req = { query: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    next = jest.fn();
  });

  describe('validateYear', () => {
    it('should call next() for valid year', () => {
      req.query.year = '2021';
      validateYear(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('should return 400 for missing year', () => {
      validateYear(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Year parameter is required'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 for invalid year format', () => {
      req.query.year = 'invalid';
      validateYear(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Year must be a valid number'
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 for year before 1968', () => {
      req.query.year = '1967';
      validateYear(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: expect.stringContaining('Year must be between 1968 and')
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should return 400 for future year', () => {
      const futureYear = new Date().getFullYear() + 1;
      req.query.year = futureYear.toString();
      validateYear(req, res, next);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: expect.stringContaining('Year must be between 1968 and')
      });
      expect(next).not.toHaveBeenCalled();
    });

    it('should accept current year', () => {
      const currentYear = new Date().getFullYear();
      req.query.year = currentYear.toString();
      validateYear(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });

    it('should accept 1968 (first Open Era year)', () => {
      req.query.year = '1968';
      validateYear(req, res, next);
      expect(next).toHaveBeenCalled();
      expect(res.status).not.toHaveBeenCalled();
    });
  });
});
