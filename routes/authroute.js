import authcontroller from '../controller/authcontroller.js'
import { Router } from 'express'
const routes = Router();

routes.post('/login', authcontroller.Login);


export default routes;