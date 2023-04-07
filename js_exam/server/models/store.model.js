const mongoose = require('mongoose');
 
const StoreSchema = new mongoose.Schema({
    store: {
        type: String,
        required: [true, "Store name is required"],
        minlength: [2, "Position must be more than 2 characters"]
    },
    storeNumber: {
        type: Number,
        required: [true, "Store number is required"],
        min: [1, "Store number must be greater than 0"]
    },
    open: {
        type: String,
    }
}, {timestamps: true});
 
const Store = mongoose.model('Store', StoreSchema);
 
module.exports = Store;