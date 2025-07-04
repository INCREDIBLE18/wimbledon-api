const wimbledonData = require('../data/wimbledonData');

/**
 * Get Wimbledon final information by year
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const getWimbledonFinal = async (req, res, next) => {
  try {
    const year = parseInt(req.query.year);
    
    const finalData = wimbledonData.getFinalByYear(year);
    
    if (!finalData) {
      return res.status(404).json({
        error: `No Wimbledon final data available for year ${year}`
      });
    }

    res.status(200).json(finalData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWimbledonFinal
};
