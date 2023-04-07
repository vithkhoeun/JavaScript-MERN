const Movie = require('../models/movie.model');
 
module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then((allMovies) => {
            res.json({ movies: allMovies })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.createNewMovie = (req, res) => {
    Movie.create(req.body)
        .then(newlyCreatedMovie => {
            res.json({ movie: newlyCreatedMovie })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

//find by certain field (genre)
module.exports.findByGenre = (req, res) => {
    Movie.find( {genre: req.params.genre.toLowerCase() })
        .then(movie => res.json({ movie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));}

// find one movie by id
module.exports.findOneById = (req, res) => {
    Movie.findById( {_id: req.params.id })
        .then(movie => res.json({ movie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}) );}

// update movie by id
module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate( {_id: req.params.id }, req.body, {new:true})
        .then(updatedMovie => res.json({ movie: updatedMovie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}) );}

// update movie by id with patch
module.exports.updateMovie = (req, res) => {
    Movie.findOneAndUpdate( {_id: req.params.id}, req.body, {new:true})
        .then(updatedMovie => res.json({ updatedMovie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}) );}

// delete movie
module.exports.deleteMovie = (req, res) => {
    Movie.findByIdAndDelete( {_id: req.params.id}, req.body, {new:true})
    .then(deleteConfirmation => res.json({ deleteConfirmation }))
    .catch(err => res.json({ message: 'Something went wrong', error: err}) );}