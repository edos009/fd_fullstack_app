const createError = require("http-errors");
const _ = require("lodash");
const { User } = require("../models");

/* Create User */
module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const values = _.pick(body, ["login", "password", "avatar"]);

    const user = await User.create(values);
    if (!user) {
      next(createError(400, "Invalid data"));
    }
    const userPrepare = _.omit(user.get(), ["password"]);
    res.status(201).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};

/* Get all Users */
module.exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    if (!users) {
      next(createError(404, "Users not found!"));
    }
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

/* Get User by Id */
module.exports.getUserById = async (req, res, next) => {
  try {
    const { instanceUser } = req;
    const userPrepare = _.omit(instanceUser.get(), ["password"]);
    res.status(200).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};

/* Update User */
module.exports.updateUser = async (req, res, next) => {
  try {
    const { body, instanceUser } = req;

    const updatedUser = await instanceUser.update(body, { returning: true });
    const userPrepare = _.omit(updatedUser.get(), ["password"]);

    res.status(200).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};
