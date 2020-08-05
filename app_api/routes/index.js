var express = require('express');
var router = express.Router();
const ctrTranslation = require('../controllers/translation');
const ctrSystem = require('../controllers/system');

// translate
router.get('/translate/:text/:toLanguageCode/:fromLanguageCode?', ctrTranslation.translate);

// keep endpoint alive
router.get('/shake', ctrSystem.shake);

module.exports = router;
