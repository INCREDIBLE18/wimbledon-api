const express = require('express');
const router = express.Router();
const { getWimbledonFinal } = require('../controllers/wimbledonController');
const { validateYear } = require('../middleware/validation');

/**
 * @route GET /wimbledon
 * @desc Get Wimbledon final information by year
 * @access Public
 * @param {number} year - Year of the Wimbledon final (1968-2024)
 */
router.get('/wimbledon', validateYear, getWimbledonFinal);

module.exports = router;
