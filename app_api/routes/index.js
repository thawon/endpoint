var express = require('express');
var router = express.Router();
const ctrTranslation = require('../controllers/translation');

// translate
router.get('/translate/:text/:fromLanguageCode/:toLanguageCode', ctrTranslation.translate);

module.exports = router;