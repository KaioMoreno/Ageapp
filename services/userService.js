import User from '../models/user.js'

const create = (body) => User.create(body); // Recebe o body, e depois usando o metodo create, ele cria esse body.

export default {
    create,
}