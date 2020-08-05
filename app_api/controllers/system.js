(function () {
    'use strict';
    
    module.exports = {
        shake: shake
    };

    function shake(req, res) {        
        res.status(201);
        res.json({ status: 'Okay' });
    }

})();

