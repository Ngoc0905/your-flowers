const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user']
    }
});

module.exports = mongoose.model('User', userSchema);