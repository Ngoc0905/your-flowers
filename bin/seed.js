const mongoose = require('mongoose');
const Bouquet = require('../models/bouquet');
const Catalog = require('../models/catalog');
const Order = require('../models/order');
const User = require('../models/user');
const bcrypt = require('bcryptjs');


mongoose.connect('mongodb://localhost/yourflowers');

Catalog.remove({}, (err) => {
    Bouquet.remove({}, (err) => {
        Order.remove({}, (err) => {
            User.remove({}, (err) => {
                console.log('collections are removed');

                var password = 'a';
                bcrypt.genSalt(14, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hashedPass) => {
                        const newUser = new User({
                            email: 'a@a.a',
                            password: hashedPass,
                            role: 'admin'
                        });

                        User.create(newUser, err => {
                            console.log('user created');
                        });
                    });
                });

                var catalog = new Catalog({
                    alias: 'specialdays',
                    name: 'Special days'
                });
                var catalog2 = new Catalog({
                    alias: 'congratulation',
                    name: 'Congratulation'
                });

                Catalog.create([catalog, catalog2], (err) => {
                    var bouquet1 = new Bouquet({
                        name: 'Rose Elegance',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/rose-birthday.jpg'
                        }],
                        catalogs: [
                            catalog._id
                        ]
                    });
                    var bouquet2 = new Bouquet({
                        name: 'Sunset',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/mix-special.jpg'
                        }],
                        catalogs: [
                            catalog._id
                        ]
                    });
                    var bouquet3 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 40,
                        images: [{
                            link: '/images/mix2-special.jpg'
                        }],
                        catalogs: [
                            catalog._id
                        ]
                    });
                    var bouquet4 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 45,
                        images: [{
                            link: '/images/rose-special.jpg'
                        }],
                        catalogs: [
                            catalog._id
                        ]
                    });

                    Bouquet.create([bouquet1, bouquet2, bouquet3, bouquet4], (err) => {
                        console.log(
                            bouquet1._id
                        );

                        catalog.bouquets.push(bouquet1._id);
                        catalog.bouquets.push(bouquet2._id);
                        catalog.bouquets.push(bouquet3._id);
                        catalog.bouquets.push(bouquet4._id);

                        catalog2.bouquets.push(bouquet1._id);
                        catalog2.bouquets.push(bouquet2._id);
                        catalog2.bouquets.push(bouquet3._id);
                        catalog2.bouquets.push(bouquet4._id);


                        catalog.save();
                        catalog2.save();
                    });
                });
            });
        });
    });

});