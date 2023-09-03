const Routes = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const swaggerDocuments = require('../swagger.json')

const routes = Routes()

routes.use('/', swaggerUi.serve)
routes.get('/', swaggerUi.setup(swaggerDocuments));

module.exports = routes;