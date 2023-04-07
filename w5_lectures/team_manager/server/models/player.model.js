const mongoose = require('mongoose');
 
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be more than 2 characters"]
    },
    preferredPosition: {
        type: String,
        required: [true, "Position is required"],
        minlength: [2, "Position must be more than 2 characters"]
    },
    gameOneStatus: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        default: "Undecided"
    },
    gameTwoStatus: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        default: "Undecided"
    },
    gameThreeStatus: {
        type: String,
        enum: ["Undecided", "Playing", "Not Playing"],
        default: "Undecided"
    }
}, {timestamps: true});

module.exports = mongoose.model('Player', PlayerSchema);