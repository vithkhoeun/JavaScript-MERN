const mongoose = require('mongoose');
 
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "First name is required"],
        minlength: [3, "First name must be at least 3 characters long"],
        maxlength: [225, "Last name must be less than 225 characters long"]
    },
    genre: {
        type: String,
        required: [true, "First name is required"],
        minlength: [6, "First name must be at least 6 characters long"],
        maxlength: [225, "Last name must be less than 225 characters long"]
    },
    year: {
        type: Number,
        required: [true, "First name is required"],
        minlength: [1990, "Release year must be at least 1900"],
        maxlength: [2023, "Release year must be less than 2023"]
    }
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);