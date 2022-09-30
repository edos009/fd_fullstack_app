const { User } = require("../models");
const createError = require("http-errors");

module.exports.checkUser = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findByPk(userId);
    if (!user) {
      next(createError(404, "User not found!"));
    }
    
    req.instanceUser = user;
    next();
  } catch (error) {
    next(error);
  }
};
