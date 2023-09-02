import { Routes, json } from 'express'
import swaggerUi from 'swagger-ui express'
import swaggerDocuments from '../swagger.json' assert { type: "json" }

const routes = Routes()

routes.use('/', swaggerUi.serve)
routes.get('/', swaggerUi.setup(swaggerDocuments));

export default routes;