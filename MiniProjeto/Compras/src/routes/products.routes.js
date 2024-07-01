const {Router} = require('express')
const productsController = require('../controllers/ProductsController')

const productsRoutes = new Router()

// Rota para cadastrar um produto
productsRoutes.post('/', productsController.create);

// Rota para listar todos os produtos
productsRoutes.get('/', productsController.getAllProducts);

// Rota para listar um produto com detalhes
productsRoutes.get('/:id', productsController.getProductDetails);

module.exports = productsRoutes;