var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bouquet = require('../models/bouquet');

router.get('/cart', (req, res, next) => {
    const idStrings = req.query.ids.split(',');
    const ids = idStrings.map(id => mongoose.Types.ObjectId(id));
    Bouquet.find({
        '_id': {
            $in: ids
        }
    }, (err, bouquets) => {
        if (err) return next(err);

        var vm = {
            bouquets: []
        };

        if (bouquets && bouquets.length) {
            bouquets.forEach(b => {
                b.quantity = req.query.quantities.split(',')[idStrings.indexOf(b._id.toString())];
                vm.bouquets.push(b);
            });
        }

        return res.render('pages/cart', vm);
    });
});

router.post('/cart', (req, res, next) => {
    return res.redirect('/profile');
});

module.exports = router;