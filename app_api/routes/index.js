var express = require('express');
var router = express.Router();
const ctrTranslation = require('../controllers/translation');
const ctrSystem = require('../controllers/system');

// translate
router.post('/translate/:toLanguageCode/:fromLanguageCode?', ctrTranslation.translate);

// keep endpoint alive
router.get('/shake', ctrSystem.shake);

module.exports = router;
