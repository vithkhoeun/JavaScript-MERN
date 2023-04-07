const StoreController = require('../controllers/store.controller');
 
module.exports = app => {
    app.get('/api/store', StoreController.findAllStores);
    app.get('/api/store/:id', StoreController.findOneStore);
    app.post('/api/store/', StoreController.createStore);
    app.put('/api/store/:id', StoreController.updateStore);
    app.delete('/api/store/:id', StoreController.deleteStore);
}