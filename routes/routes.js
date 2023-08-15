import express from 'express'
const routes = express.Router()
import taskcontroller from '../controller/taskcontroller.js'

routes.get('/home', taskcontroller.Home);
routes.get('/login', taskcontroller.Login);
routes.get('/register', taskcontroller.Register);
routes.post('/create', taskcontroller.create);



export default routes;