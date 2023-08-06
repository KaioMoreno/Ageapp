const routes = require('express').Router();
const taskcontroller = require('../controller/taskcontroller');

// routes.get('/home', taskcontroller.Home);
// routes.get('/login', taskcontroller.Login);
// routes.get('/register', taskcontroller.Register);
routes.post('/create', taskcontroller.create);



module.exports = routes;