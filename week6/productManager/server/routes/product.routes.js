const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProds);
    app.get('/api/product/:id', ProductController.getAProd);
    app.delete('/api/product/:id', ProductController.deleteProd);
    app.put('/api/product/:id', ProductController.updateProd);
}
