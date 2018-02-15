const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatalogSchema = new Schema({
    alias: {
        type: String,
        required: true
    },
    name: String,
    type: {
        type: String,
        enum: ['daily', 'celebrations'],
        required: true
    },
    bouquets: [{
        type: Schema.Types.ObjectId,
        ref: 'Bouquet'
    }]
});

const Catalog = mongoose.model("Catalog", CatalogSchema);
module.exports = Catalog;