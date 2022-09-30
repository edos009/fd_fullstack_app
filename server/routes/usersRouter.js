const { Router } = require("express");
const UserController = require("../controllers/user.controller");
const TaskController = require("../controllers/task.controller");
const { checkUser } = require("../middleware/user.mw");

const usersRouter = Router();

usersRouter.post("/", UserController.createUser);
usersRouter.get("/", UserController.getUsers);
usersRouter.get("/:userId", checkUser, UserController.getUserById);
usersRouter.patch("/:userId", checkUser, UserController.updateUser);

usersRouter.post("/:userId/tasks", checkUser, TaskController.createTask);
usersRouter.get("/:userId/tasks", checkUser, TaskController.getTasksUser);
usersRouter.patch("/:userId/tasks/:taskId", checkUser, TaskController.updateTask);

module.exports = usersRouter;
