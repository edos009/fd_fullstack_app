const { Router } = require("express");
const { upload } = require("../middleware/upload.mw");
const UserController = require("../controllers/user.controller");
const TaskController = require("../controllers/task.controller");
const { checkUser } = require("../middleware/user.mw");
const { checkTask } = require("../middleware/task.mw");
const { paginate } = require("../middleware/paginate.mw");

const usersRouter = Router();

usersRouter.post("/", upload, UserController.createUser);
usersRouter.get("/", paginate, UserController.getUsers);
usersRouter.get("/:userId", checkUser, UserController.getUserById);
usersRouter.delete("/:userId", checkUser, UserController.deleteUserById);
usersRouter.patch("/:userId", upload, checkUser, UserController.updateUser);

usersRouter.post("/:userId/tasks", checkUser, TaskController.createTask);

usersRouter.get("/:userId/tasks", checkUser, TaskController.getTasksUser);
usersRouter.patch(
  "/:userId/tasks/:taskId",
  checkUser,
  TaskController.updateTask
);

usersRouter.delete("/:userId/tasks/:taskId", TaskController.deleteTask);

module.exports = usersRouter;
