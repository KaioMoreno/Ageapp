import bcrypt from 'bcrypt'
import { loginService } from '../services/authservice.js'

const Login = async (req, res) => {
     const {email, password} = req.body;

    try {
        const user = await loginService(email);

        if(!user) {
            return res.status(400).send('Senha ou Usuário incorreto.')
        }

        const passwordValid =  bcrypt.compareSync(password, user.password);

        if(passwordValid === false) {
            return res.status(400).send('Senha ou Usuário incorreto.')
        }

        res.send("Login concluído");
        
    } catch (err) {
        res.status(500).send(err);
    }

    
}

export default {
    Login,
};