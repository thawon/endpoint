(function () {

    'use strict';

    // free google translation, good for testing but get error too many requests.
    const translateApi = require('@k3rn31p4nic/google-translate-api');

    class Translator {
        constructor() {
        }
        static translate(text, fromLanguageCode, toLanguageCode) {
            return new Promise((resolve, reject) => {
                let option = { to: toLanguageCode };
                if (fromLanguageCode) option.from = fromLanguageCode;

                return translateApi(text, option)
                    .then((translation) => {
                        resolve({
                            text: translation.text,
                            from: {
                                languageCode: translation.from.language.iso 
                            }
                        });
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        }
    }

    module.exports = Translator;
})();