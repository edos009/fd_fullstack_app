const { Router } = require("express");
const TaskController = require("../controllers/task.controller")

const tasksRouter = Router();

tasksRouter.get('/', TaskController.getTasks)

module.exports = tasksRouter;
