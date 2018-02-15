const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    bouquets: [{
        quantity: {
            type: Number,
            required: true
        },
        bouquet: {
            type: Schema.Types.ObjectId,
            ref: 'Bouquet',
            required: true
        }
    }],
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;