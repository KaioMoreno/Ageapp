import express from 'express'
const routes = express.Router()
import taskcontroller from '../controller/taskcontroller.js'
import { authMiddleware } from '../middleware/authmiddleware.js';

routes.get('/home', taskcontroller.Home);
routes.get('/login', taskcontroller.Login);
routes.get('/register', taskcontroller.Register);
routes.get('/agendamento', authMiddleware , taskcontroller.Agendamento)
routes.post('/create', taskcontroller.Create);



export default routes;