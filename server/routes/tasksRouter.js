const { Router } = require("express");
const TaskController = require("../controllers/task.controller")
const { checkUser } = require("../middleware/user.mw");

const tasksRouter = Router();

// tasksRouter.patch("/:taskId");
// tasksRouter.delete("/:taskId");

module.exports = tasksRouter;
