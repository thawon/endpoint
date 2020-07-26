(function () {
    'use strict';

    const Translator = require('../../app_server/services/translator');

    module.exports = {
        translate: translate
    };

    function translate(req, res) {
        let text = req.params.text,
            fromLanguageCode = req.params.fromLanguageCode,
            toLanguageCode = req.params.toLanguageCode;

        Translator.translate(text, fromLanguageCode, toLanguageCode)
            .then((translation) => {
                res.status(201);
                res.json({
                    text: translation.text
                });
            })
            .catch((err) => {
                res.status(404);
                res.json(err);
            });
    }

})();

