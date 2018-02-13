const mongoose = require('mongoose');
const Bouquet = require('../models/bouquet');
const Catalog = require('../models/catalog');

mongoose.connect('mongodb://localhost/yourflowers');

Catalog.remove({}, (err) => {
    Bouquet.remove({}, (err) => { 
        console.log('collection removed');
    
        var catalog = new Catalog({
            alias: 'specialdays',
            name: 'Special days'
        });
    
        Catalog.create(catalog, (err) => {
            var bouquet1 = new Bouquet({
                name: 'Rose Elegance',
                description: '',
                images:[
                    {
                        link: '/images/rose-birthday.jpg'
                    }
                ],
                catalogs: [
                    catalog._id
                ]
            });
            var bouquet2 = new Bouquet({
                name: 'Sunset',
                description: '',
                images:[
                    {
                        link: '/images/mix-special.jpg'
                    }
                ],
                catalogs: [
                    catalog._id
                ]
            });
            var bouquet3 = new Bouquet({
                name: 'Rose mix',
                description: '',
                images:[
                    {
                        link: '/images/mix2-special.jpg'
                    }
                ],
                catalogs: [
                    catalog._id
                ]
            });
            var bouquet4 = new Bouquet({
                name: 'Rose mix',
                description: '',
                images:[
                    {
                        link: '/images/rose-special.jpg'
                    }
                ],
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
    
                catalog.save();
            });
        });
     });
    
});



