const {Router} = require('express')
const productsController = require('../controllers/ProductsController')

const productsRoutes = new Router()

// Rota para cadastrar um produto
productsRoutes.post('/', productsController.create);

// Rota para listar todos os produtos
router.get('/', productsController.getAllProducts);

module.exports = productsRoutes;