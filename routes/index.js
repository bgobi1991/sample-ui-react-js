var express = require('express'),
    passport = require('passport'),
    router = express.Router(),
    dataCtrl = require('../controller/dataController.js');



router.post('/checkSession', function(req, res) {
    if(req.user !=undefined) {
        res.end(JSON.stringify({"data": req.user}));
    } else {
        res.end(JSON.stringify({"data": null}));
    }
});
router.post('/getresponse', function(req, res) {
    dataCtrl.getresponse(req, res, function(req, result) {
        res.end(JSON.stringify(result));
    });
});


module.exports = router;