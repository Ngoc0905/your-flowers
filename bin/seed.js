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
                    name: 'Special days',
                    type: 'celebrations'
                });
                var catalog2 = new Catalog({
                    alias: 'wedding',
                    name: 'Wedding',
                    type: 'celebrations'
                });
                var catalog3 = new Catalog({
                    alias: 'congratulation',
                    name: 'Congratulation',
                    type: 'celebrations'
                });
                var catalog4 = new Catalog({
                    alias: 'launchday',
                    name: 'Launch day',
                    type: 'celebrations'
                });
                var catalog5 = new Catalog({
                    alias: 'company',
                    name: 'Company',
                    type: 'daily'
                });
                var catalog6 = new Catalog({
                    alias: 'home',
                    name: 'Home',
                    type: 'daily'
                });
                var catalog7 = new Catalog({
                    alias: 'specialprice',
                    name: 'Special price',
                    type: 'daily'
                });

                Catalog.create([catalog, catalog2, catalog3, catalog4, catalog5, catalog6, catalog7], (err) => {
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

                    var wedding1 = new Bouquet({
                        name: 'Rose Elegance',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/wedding1.jpg'
                        }],
                        catalogs: [
                            catalog2._id
                        ]
                    });
                    var wedding2 = new Bouquet({
                        name: 'Sunset',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/wedding7.jpg'
                        }],
                        catalogs: [
                            catalog2._id
                        ]
                    });
                    var wedding3 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 40,
                        images: [{
                            link: '/images/wedding3.jpg'
                        }],
                        catalogs: [
                            catalog2._id
                        ]
                    });
                    var wedding4 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 45,
                        images: [{
                            link: '/images/wedding8.jpg'
                        }],
                        catalogs: [
                            catalog2._id
                        ]
                    });

                    var congratulations1 = new Bouquet({
                        name: 'Rose Elegance',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/63516984.jpg'
                        }],
                        catalogs: [
                            catalog3._id
                        ]
                    });
                    var congratulations2 = new Bouquet({
                        name: 'Sunset',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/violet-company.jpg'
                        }],
                        catalogs: [
                            catalog3._id
                        ]
                    });
                    var congratulations3 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 40,
                        images: [{
                            link: '/images/rose-company.jpg'
                        }],
                        catalogs: [
                            catalog3._id
                        ]
                    });
                    var congratulations4 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 45,
                        images: [{
                            link: '/images/sun-company.jpg'
                        }],
                        catalogs: [
                            catalog3._id
                        ]
                    });

                    var launch1 = new Bouquet({
                        name: 'Rose Elegance',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/sun-special.jpg'
                        }],
                        catalogs: [
                            catalog4._id
                        ]
                    });
                    var launch2 = new Bouquet({
                        name: 'Sunset',
                        description: '',
                        price: 50,
                        images: [{
                            link: '/images/mix-company (2).jpg'
                        }],
                        catalogs: [
                            catalog4._id
                        ]
                    });
                    var launch3 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 40,
                        images: [{
                            link: '/images/rose-company.jpg'
                        }],
                        catalogs: [
                            catalog4._id
                        ]
                    });
                    var launch4 = new Bouquet({
                        name: 'Rose mix',
                        description: '',
                        price: 45,
                        images: [{
                            link: '/images/violet-company.jpg'
                        }],
                        catalogs: [
                            catalog4._id
                        ]
                    });

                    var bouquet5 = new Bouquet({
                        name: 'Elegant',
                        description: '',
                        price: 100,
                        images: [{
                            link: '/images/5a62d0b6652fe8e052ecb639.jpg'
                        }],
                        catalogs: [
                            catalog5._id
                        ]
                    });
                    var bouquet6 = new Bouquet({
                        name: 'Passion',
                        description: '',
                        price: 120,
                        images: [{
                            link: '/images/5a62f0ec652fe87e65ecb5d0.jpg'
                        }],
                        catalogs: [
                            catalog5._id
                        ]
                    });
                    var bouquet7 = new Bouquet({
                        name: 'Deluxe',
                        description: '',
                        price: 140,
                        images: [{
                            link: '/images/5a62f2ab652fe8bb41ecb618.jpg'
                        }],
                        catalogs: [
                            catalog5._id
                        ]
                    });
                    var bouquet8 = new Bouquet({
                        name: 'Deluxe',
                        description: '',
                        price: 140,
                        images: [{
                            link: '/images/daily.jpg'
                        }],
                        catalogs: [
                            catalog5._id
                        ]
                    });


                    var home1 = new Bouquet({
                        name: 'Morning',
                        description: '',
                        price: 100,
                        images: [{
                            link: '/images/598eb0d5652fe8c33095082c.jpg'
                        }],
                        catalogs: [
                            catalog6._id
                        ]
                    });
                    var home2 = new Bouquet({
                        name: 'Monday',
                        description: '',
                        price: 120,
                        images: [{
                            link: '/images/598eb32c652fe8ff7a950828.jpg'
                        }],
                        catalogs: [
                            catalog6._id
                        ]
                    });
                    var home3 = new Bouquet({
                        name: 'Weekend',
                        description: '',
                        price: 140,
                        images: [{
                            link: '/images/598eb35c652fe8651e95085c.jpg'
                        }],
                        catalogs: [
                            catalog6._id
                        ]
                    });
                    var home4 = new Bouquet({
                        name: 'Holiday',
                        description: '',
                        price: 140,
                        images: [{
                            link: '/images/598eb097652fe8651e95082a.jpg'
                        }],
                        catalogs: [
                            catalog6._id
                        ]
                    });


                    var specialprice = new Bouquet({
                        name: 'Special price',
                        description: '',
                        price: 80,
                        images: [{
                            link: '/images/slogan2.png'
                        }],
                        catalogs: [
                            catalog7._id
                        ]
                    });

                    Bouquet.create([bouquet1, bouquet2, bouquet3, bouquet4, 
                        wedding1, wedding2, wedding3, wedding4, 
                        congratulations1, congratulations2, congratulations3, congratulations4, 
                        launch1, launch2, launch3, launch4, 
                        bouquet5, bouquet6, bouquet7, bouquet8, home1, home2, home3, home4, specialprice], (err) => {

                        catalog.bouquets.push(bouquet1._id);
                        catalog.bouquets.push(bouquet2._id);
                        catalog.bouquets.push(bouquet3._id);
                        catalog.bouquets.push(bouquet4._id);

                        catalog2.bouquets.push(wedding1._id);
                        catalog2.bouquets.push(wedding2._id);
                        catalog2.bouquets.push(wedding3._id);
                        catalog2.bouquets.push(wedding4._id);

                        catalog3.bouquets.push(congratulations1._id);
                        catalog3.bouquets.push(congratulations2._id);
                        catalog3.bouquets.push(congratulations3._id);
                        catalog3.bouquets.push(congratulations4._id);

                        catalog4.bouquets.push(launch1._id);
                        catalog4.bouquets.push(launch2._id);
                        catalog4.bouquets.push(launch3._id);
                        catalog4.bouquets.push(launch4._id);

                        catalog5.bouquets.push(bouquet5._id);
                        catalog5.bouquets.push(bouquet6._id);
                        catalog5.bouquets.push(bouquet7._id);
                        catalog5.bouquets.push(bouquet8._id);

                        catalog6.bouquets.push(home1._id);
                        catalog6.bouquets.push(home2._id);
                        catalog6.bouquets.push(home3._id);
                        catalog6.bouquets.push(home4._id);

                        catalog7.bouquets.push(specialprice._id);


                        catalog.save();
                        catalog2.save();
                        catalog3.save();
                        catalog4.save();
                        catalog5.save();
                        catalog6.save();
                        catalog7.save();

                        console.log('done');
                    });
                });
            });
        });
    });

});