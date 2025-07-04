/**
 * Validation middleware for year parameter
 */
const validateYear = (req, res, next) => {
  const { year } = req.query;
  
  // Check if year is provided
  if (!year) {
    return res.status(400).json({
      error: 'Year parameter is required'
    });
  }
  
  // Check if year is a valid number
  const yearNum = parseInt(year);
  if (isNaN(yearNum)) {
    return res.status(400).json({
      error: 'Year must be a valid number'
    });
  }
  
  // Check if year is within valid range (Open Era started in 1968)
  const currentYear = new Date().getFullYear();
  if (yearNum < 1968 || yearNum > currentYear) {
    return res.status(400).json({
      error: `Year must be between 1968 and ${currentYear}`
    });
  }
  
  next();
};

module.exports = {
  validateYear
};
