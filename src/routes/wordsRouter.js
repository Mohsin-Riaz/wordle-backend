const express = require('express');
const router = express.Router();
const { getWord, checkWord } = require('../controllers/wordsController');

router.route('/getword').get(getWord);
router.route('/checkword').get(checkWord);

module.exports = router;
