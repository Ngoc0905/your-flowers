const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var bodyParser = require("body-parser");
var styleParser = bodyParser.urlencoded({
    extended: true
});
const Bouquet = require('../models/bouquet');
const Order = require('../models/order');
const User = require('../models/user');
const {
    ensureLoggedIn,
    ensureLoggedOut
} = require('connect-ensure-login');

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

router.post('/cart', ensureLoggedIn(), styleParser, (req, res, next) => {
    let bouquets = [];
    if (typeof req.body['bouquet.ids'] === 'string') {
        bouquets.push({
            bouquet: req.body['bouquet.ids'],
            quantity: req.body['bouquet.quantities'],
        });
    } else {
        for (let i = 0; i < req.body['bouquet.ids'].length; i++) {
            bouquets.push({
                bouquet: req.body['bouquet.ids'][i],
                quantity: req.body['bouquet.quantities'][i]
            });
        }
    }

    var obj = {
        buyer: req.user._id,
        deliveryDate: req.body.deliveryDate,
        total: req.body.total,
        bouquets: bouquets
    };

    var order = new Order(obj);

    Order.create(order, (err) => {
        if (err) return next(err);

        User.findById(req.user._id, (err, user) => {
            if (err) return next(err);

            if (!user) throw new Error('User not found');

            user.orders.push(order);

            user.save(err => {
                if (err) return next(err);

                return res.redirect('/profile?clear=true');
            });
        });
    });

});

module.exports = router;