const { Router } = require("express");
const usersRouter = require('./usersRouter');
const tasksRouter = require('./tasksRouter');

const router = Router();

router.use('/users', usersRouter)
router.use('/users/:userId/tasks', tasksRouter)
// router.use('/tasks')

module.exports = router;