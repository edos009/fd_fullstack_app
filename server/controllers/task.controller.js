const { Task } = require("../models");
const { Op } = require("sequelize");
const _ = require("lodash");
const createError = require("http-errors");

const pickValue = (body, fields) => {
  return _.pick(body, fields);
};

/* Create Task */
module.exports.createTask = async (req, res, next) => {
  try {
    const { body, instanceUser } = req;
    const values = pickValue(body, ["content", "isDone", "deadLine"]);

    const task = await instanceUser.createTask(values);

    if (!task) {
      next(createError(400, "Invalid data."));
    }

    res.status(201).send({ data: task });
  } catch (error) {
    next(error);
  }
};

/*Get Tasks by User */
module.exports.getTasksUser = async (req, res, next) => {
  try {
    const { instanceUser } = req;

    const tasks = await instanceUser.getTasks();

    if (!tasks) {
      next(createError(404, "Tasks not found."));
    }

    res.status(200).send({ data: tasks });
  } catch (error) {
    next(error);
  }
};

/*Update Task */
module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      body,
      params: { userId, taskId },
    } = req;
    const values = pickValue(body, ["content", "isDone", "deadLine"]);

    const [task] = await Task.findAll({
      where: {
        [Op.and]: [{ id: taskId }, { userId: userId }],
      },
    });

    if (!task) {
      next(createError(404, "Nothing found. Try again!"));
    }

    const updatedTask = await task.update(values, { returning: true });

    res.status(200).send({ data: updatedTask });
  } catch (error) {
    next(error);
  }
};

/* Delete Task */
module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { userId, taskId },
    } = req;

    const [task] = await Task.findAll({
      where: {
        [Op.and]: [{ id: taskId }, { userId: userId }],
      },
    });

    if (!task) {
      next(createError(404, "Nothing found. Try again!"));
    }

    await task.destroy();
    res.status(200).send({ data: task });
  } catch (error) {
    next(error);
  }
};

/* Get all Tasks */
module.exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll();

    if (!tasks) {
      next(404, '"Tasks not found.');
    }

    res.status(200).send({ data: { tasks } });
  } catch (error) {
    next(error);
  }
};
