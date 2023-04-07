const Store = require('../models/store.model');
 
module.exports.findAllStores = (req, res) => {
    Store.find()
        .then((allStores) => {
            res.json({ stores: allStores })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err }) 
        });
}
 
module.exports.findOneStore = (req, res) => {
    Store.findOne({ _id: req.params.id })
        .then(oneStore => {
            res.json({ store: oneStore })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createStore = (req, res) => {
    Store.create(req.body)
        .then(newStore => {
            res.json({ store: newStore })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateStore = (req, res) => {
    Store.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedStore => {
            res.json({ store: updatedStore })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteStore = (req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });} 