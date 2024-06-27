const {Router} = require('express')
const productsController = require('../controllers/ProductsController')

const productsRoutes = new Router()

// Rota para cadastrar um produto
productsRoutes.post('/', productsController.create);


module.exports = productsRoutes;