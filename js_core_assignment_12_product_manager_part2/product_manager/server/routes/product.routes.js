const ProductController = require('../controllers/product.controller');
 
module.exports = app => {
    app.get('/api/product', ProductController.findAllProduct);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/api/product/:id', ProductController.updateExistingProduct);
    app.post('/api/product', ProductController.createProduct);
    app.delete('/api/product/:id', ProductController.deleteExistingProduct);
}