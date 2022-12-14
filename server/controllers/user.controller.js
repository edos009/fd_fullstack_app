const createError = require("http-errors");
const _ = require("lodash");
const { User } = require("../models");

const pickValue = (body, fields) => {
  return _.pick(body, fields);
};

const omitFields = (user, fields) => {
  return _.omit(user, fields);
}

/* Create User */
module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    if (req.file) {
      body.avatar = req.file.filename;
    }
    const values = pickValue(body, ["login", "password", "avatar"]);

    const user = await User.create(values);
    if (!user) {
      next(createError(400, "Invalid data"));
    }
    const userPrepare = omitFields(await user.get(), ["password"]);
    res.status(201).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};

/* Get all Users */
module.exports.getUsers = async (req, res, next) => {
  try {
    const { pagination = {} } = req;
    const { count } = await User.findAndCountAll();
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["id", "ASC"]],
      ...pagination,
    });
    if (!users) {
      next(createError(404, "Users not found!"));
    }
    res.status(200).send({ data: { users, totalCount: count } });
  } catch (error) {
    next(error);
  }
};

/* Get User by Id */
module.exports.getUserById = async (req, res, next) => {
  try {
    const { instanceUser } = req;
    const user = omitFields(instanceUser.get(), ["password"]);
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

/* Delete User by Id */
module.exports.deleteUserById = async (req, res, next) => {
  try {
    const { instanceUser } = req;
    const userPrepare = omitFields(instanceUser.get(), ["password"]);
    await instanceUser.destroy();
    res.status(200).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};

/* Update User */
module.exports.updateUser = async (req, res, next) => {
  try {
    const { body, instanceUser } = req;
    if (req.file) {
      body.avatar = req.file.filename;
    }

    const updatedUser = await instanceUser.update(body, { returning: true });
    const userPrepare = omitFields(updatedUser.get(), ["password"]);

    res.status(200).send({ data: userPrepare });
  } catch (error) {
    next(error);
  }
};
