var express = require('express');
var router = express.Router();

router.get('/celebrations/:pageName', (req, res, next) => {
return res.render('pages/celebrations', {pageName : req.params.pageName});
});
router.get('/daily-flowers/:pageName', (req, res, next) => {
    return res.render('pages/celebrations', {pageName : req.params.pageName});
    });


module.exports = router;