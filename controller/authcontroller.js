import bcrypt from 'bcrypt'
import { loginService, generateToken } from '../services/authservice.js'

const Login = async (req, res) => {
     const {email, password} = req.body;

    try {
        const user = await loginService(email);

        if(!user) {
            return res.status(400).send('Usuário incorreto.')
        }

        const passwordValid =  bcrypt.compareSync(password, user.password);

        if(passwordValid === false) {
            return res.status(400).send('Senha ou Usuário incorreto.')
        }

        const token = generateToken(user.id);

        res.send({token});
        
    } catch (err) {
        res.status(500)
        console.log(err)
    };   
};

export default {
    Login,
};