const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const { checkUser } = require("../middleware/user.mw");

const usersRouter = Router();

usersRouter.post("/", UserController.createUser);
usersRouter.get("/", UserController.getUsers);
usersRouter.get("/:userId", checkUser, UserController.getUserById);
usersRouter.patch("/:userId", checkUser, UserController.updateUser);

module.exports = usersRouter;
