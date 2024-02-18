const route = require('express').Router();
const controller = require('../controllers/user');

route.post('/', controller.createUser);
route.get('/', controller.getUsers);
route.get('/:field/:value', controller.findUsersByField);
route.put('/:id', controller.updateUser);
route.get('/:id', controller.getUserById);
route.delete('/:id', controller.deleteUser);

module.exports = route;
