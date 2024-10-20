const express = require('express');
const { getQuestion } = require('../controllers/questionController');
const router = express.Router();

router.get('/questions/:region', getQuestion);

module.exports = router;
