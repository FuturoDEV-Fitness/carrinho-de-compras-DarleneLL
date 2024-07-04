const {Router} = require('express');

const ordersController = require("../controllers/OrdersController")

const ordersRoutes = new Router()

// Rota para cadastrar um pedido juntamente com os itens
ordersRoutes.post('/', ordersController.create)

module.exports = ordersRoutes