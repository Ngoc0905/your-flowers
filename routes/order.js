var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bouquet = require('../models/bouquet');
var Order = require('../models/order');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

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

router.post('/cart', ensureLoggedIn(), (req, res, next) => {
    var obj = {
        buyer: req.user._id,
        deliveryDate: req.body.deliveryDate,
        total: req.body.total,
        bouquets: []
    };

    req.body.bouquets.forEach(b => {
        obj.bouquets.push({
            quantity: b.quantity,
            bouquet: b.id
        });
    });

    Order.create(new Order(obj), (err) => {
        if(err) return next(err);

        User.findById(req.user._id, (err, user) => {
            if(err) return next(err);

            if(!user) throw new Error('User not found');

            user.orders.push(order);

            user.save(err => {
                if(err) return next(err);

                return res.redirect('/profile');
            });
        });
    });

});

module.exports = router;