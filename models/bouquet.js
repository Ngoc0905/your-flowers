const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bouquetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true   
    },
    colors: [String],
    images: [{
        link: String,
        name: String
    }],
    catalogs: [{
        type: Schema.Types.ObjectId,
        ref: 'Catalog'
    }]
});

const Bouquet = mongoose.model("Bouquet", bouquetSchema);
module.exports = Bouquet;