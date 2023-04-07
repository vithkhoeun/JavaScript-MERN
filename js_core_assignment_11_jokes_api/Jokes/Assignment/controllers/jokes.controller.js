const Joke = require('../models/jokes.model');
 
const getAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {res.json({ allJokes })
        })
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })
        });
}
 
const getJokeById = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => {res.json({ oneJoke })
        })
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })
        });}
 
const createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {res.json({ newlyCreatedJoke })
        })
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })
        });}
 
const updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {res.json({ updatedJoke })
        })
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })
        });}

const deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {res.json({ result: result })
        })
        .catch((err) => {res.json({ message: 'Something went wrong', error: err })
        });}

module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke,
};