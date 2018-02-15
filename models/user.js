const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }]
});

module.exports = mongoose.model('User', userSchema);