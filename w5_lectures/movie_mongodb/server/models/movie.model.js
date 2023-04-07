const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [255, "Title must be less than 255 characters long"]
    },
    year: {
        type: Number,
        required:[true, "Title is required"],
        minlength: [3, "Title must be at least 3 characters long"],
        maxlength: [255, "Title must be less than 255 characters long"]
    },
    genre: {
        type: String,
        required:[true, "Title is required"],
        minlength: [1900, "Release year must be after 1900"],
        maxlength: [2023, "Release year must be before 2023"]
    }
}, { timestamps: true });

// const Movie = mongoose.model('Movie', movieSchema);
// module.exports = Movie;

module.exports = mongoose.model('Movie', movieSchema);