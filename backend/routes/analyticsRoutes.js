const express = require('express');
const { generateAnalytics } = require('../controllers/analyticsController');
const router = express.Router();

router.post('/generate', generateAnalytics);

module.exports = router;
