import bcrypt from 'bcrypt' // Importando o bcrypt para fazer o hash de senha
import userService from '../services/userService.js'   // Importando o userService

const Home = (req, res) => {
    try {
        return res.render('index');
    } catch (err) {
        res.status(500).send(err)
    }
};

const Login = (req, res) => {
    try {
        return res.render('login.ejs');
    } catch (err) {
        res.status(500).send(err);
    }
};

const Register = (req, res) => {
    try {
        return res.render('register');
    } catch (err) {
        res.status(500).send(err);
    }
};

const create = async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {      // Fazendo a verificação se todos os campos foram preenchidos

        res.status(400).send({ message: 'You have to type in all fields' });  
    };

    const user = await userService.create(req.body);

    if(!user) {
        return res.status(400).send({Message: 'Error into create'})
    }

    res.status(201).send({

        Message: 'A requisição foi bem sucedida',
        user: {
            id: user._id,
            username,
            email
        },
        
    });
};


export default {
    Home,
    Login,
    Register,
    create,
    
};