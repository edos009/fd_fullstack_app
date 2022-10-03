const { Router } = require("express");
const usersRouter = require("./usersRouter");
const tasksRouter = require("./tasksRouter");
const { checkUser } = require("../middleware/user.mw");

const router = Router();

router.use("/users", usersRouter);
router.use("/tasks", tasksRouter);

module.exports = router;
