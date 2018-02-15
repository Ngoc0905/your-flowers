var express = require('express');
var router = express.Router();
var Bouquet = require('../models/bouquet');
var Catalog = require('../models/catalog');


router.get('/celebrations/:pageName', (req, res, next) => {
    var sortConditions = req.query.sort;

    Catalog.findOne({
        alias: req.params.pageName,
        type: 'celebrations'
    }).populate('bouquets').exec((err, catalog) => {
        if (!catalog)
            return next(err);
        return res.render('pages/celebrations', {
            pageName: catalog.name,
            bouquets: catalog.bouquets
        });
    });
});


router.get('/daily/:pageName', (req, res, next) => {
    Catalog.findOne({
        alias: req.params.pageName,
        type: 'daily'
    }).populate('bouquets').exec((err, catalog) => {
        return res.render('pages/daily-flowers', {
            pageName: catalog.name,
            bouquets: catalog.bouquets
        });
    });
});

router.get('/specialprice', (req, res, next) => {
    Catalog.findOne({
        alias: 'specialprice'
    }).populate('bouquets').exec((err, catalog) => {
        return res.render('pages/special-price', {
            pageName: catalog.name,
            bouquets: catalog.bouquets
        });
    });
});

router.get('/bouquetpage/:id', (req, res, next) => {
    //Get flower detail from database
    Bouquet.findById(req.params.id, (err, bouquet) => {
        console.log(bouquet);
        return res.render('pages/detail', {
            bouquet: bouquet
        });
    });
});

router.get('/bouquets/:id', (req, res, next) => {
    //Get flower detail from database
    Bouquet.findById(req.params.id, (err, bouquet) => {
        if (err) return next(err);

        return res.json(bouquet);
    });
});


module.exports = router;