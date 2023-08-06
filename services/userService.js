const User = require('../models/user');

const create = (body) => User.create(body); // Recebe o body, e depois usando o metodo create, ele cria esse body.

module.exports = {
    create,
}