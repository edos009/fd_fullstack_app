const {Router} = require("express");
const UserController = require('../controllers/user.controller')

const usersRouter = Router();

usersRouter.post("/", UserController.createUser);
// usersRouter.get('/')
// usersRouter.get('/:userId')
// usersRouter.patch('/:userId')

module.exports = usersRouter;