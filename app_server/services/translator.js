(function () {

    'use strict';

    // free google translation, good for testing but get error too many requests.
    const translateApi = require('@k3rn31p4nic/google-translate-api');

    class Translator {
        constructor() {
        }
        static translate(text, fromLanguageCode, toLanguageCode) {
            return new Promise((resolve, reject) => {
                return translateApi(text, { from: fromLanguageCode, to: toLanguageCode })
                    .then((translation) => {
                        resolve({
                            text: translation.text + 'xxx'
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