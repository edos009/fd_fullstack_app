const createError = require("http-errors");
const _ = require("lodash");
const { User } = require("../models");

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
