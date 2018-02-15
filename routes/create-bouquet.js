const express = require('express');
const router = express.Router();
const multer = require('multer');
const Bouquet = require('../models/bouquet');
const Catalog = require('../models/catalog');
const upload = multer({
    dest: './public/uploads/'
});
const {
    ensureLoggedIn,
    ensureLoggedOut
} = require('connect-ensure-login');

function checkRole(role) {
    return (req, res, next) => {
        if (req.user.role !== role)
            return res.redirect('/');
        else
            next();
    }
}

router.get('/create-bouquet', ensureLoggedIn(), checkRole('admin'), (req, res, next) => {
    return res.render('admin/create-bouquet');
});

router.post('/bouquets', ensureLoggedIn(), checkRole('admin'), upload.single('imageURL'), (req, res, next) => {
    Catalog.findOne({
        alias: req.body.catalog
    }, (err, catalog) => {
        if (err) return next(err);

        var obj = new Bouquet({
            name: req.body.name,
            price: req.body.price,
            colors: [req.body.color],
            images: [{
                link: `/uploads/${req.file.filename}`
            }],
            catalogs: [catalog._id]
        });

        Bouquet.create(obj, (err) => {
            if (err) return next(err);

            catalog.bouquets.push(obj);

            catalog.save((err) => {
                if (err) return next(err);
                return res.redirect('/create-bouquet');
            });
        });
    });
});

module.exports = router;