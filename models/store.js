const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storeSchema = new Schema ({
    name: String,
    flag:{
        type: String,
        enum: ["red", "yellow","green"]
    }
}, {
    timestamps:{
        createAt: "created_at",
        updatedAt:"updated_at"
    }
});

const Store = mongoose.model("Store", storeSchema);
module.exports = Store;