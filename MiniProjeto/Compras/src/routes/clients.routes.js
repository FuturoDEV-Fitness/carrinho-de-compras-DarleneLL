const {Router} = require('express')
const clientsController = require('../controllers/ClientsController')

const clientsRoutes = new Router()

// Rota para cadastrar um auditório
clientsRoutes.post('/', clientsController.create);


module.exports = clientsRoutes;