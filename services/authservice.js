import User from '../models/user.js'
import jwt from 'jsonwebtoken'


const loginService = (email) => User.findOne({email: email}).select('+password'); //  o uso de select('+password') permite que você acesse o campo de senha apenas temporariamente para realizar a comparação de senhas

// Usando JWT

const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: '12h'})

export { loginService, generateToken };