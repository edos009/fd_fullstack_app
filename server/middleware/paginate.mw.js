module.exports.paginate = async (req, res, next) => {
  try {
    const {
      query: { limit, offset },
    } = req;
    req.pagination = {
      limit: limit > 40 || limit <= 0 ? 40 : limit,
      offset: offset <= 0 ? 0 : offset,
    };
    next();
  } catch (error) {
    next(error);
  }
};
