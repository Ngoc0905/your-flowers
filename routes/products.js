var express = require('express');
var router = express.Router();
var Bouquet = require('../models/bouquet');
var Catalog = require('../models/catalog');

router.get('/celebrations/:pageName', (req, res, next) => {
    Catalog.findOne({alias: req.params.pageName}).populate('bouquets').exec((err, catalog) => {
        if(!catalog)
            return next(err);
        return res.render('pages/celebrations', {
            pageName: catalog.name,
            bouquets: catalog.bouquets
        });
    });
    
});
router.get('/daily-flowers/:pageName', (req, res, next) => {
    return res.render('pages/celebrations', {
        pageName: req.params.pageName
    });
});

router.get('/flowers/:id', (req, res, next) => {
    //Get flower detail from database
    Bouquet.findById(req.params.id, (err, bouquet) => {

    });
    //show detail page
    
    return res.render('pages/detail', {
        flower: flower
    });
});


module.exports = router;