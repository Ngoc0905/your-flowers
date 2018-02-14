var express = require('express');
var router = express.Router();
var Bouquet = require('../models/bouquet');
var Catalog = require('../models/catalog');


router.get('/celebrations/:pageName', (req, res, next) => {
    var sortConditions = req.query.sort;

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

router.get('/flowerspage/:id', (req, res, next) => {
    //Get flower detail from database
    Bouquet.findById(req.params.id, (err, bouquet) => {
        console.log(bouquet);
        return res.render('pages/detail', {
            bouquet: bouquet
        });
    });
});

router.get('/flowers/:id', (req, res, next) => {
    //Get flower detail from database
    Bouquet.findById(req.params.id, (err, bouquet) => {
        console.log(bouquet);
        return res.render('pages/detail', {
            bouquet: bouquet
        });
    });
});


module.exports = router;