import User from '../models/user.js'

const loginService = (email) => User.findOne({email: email});

export { loginService };