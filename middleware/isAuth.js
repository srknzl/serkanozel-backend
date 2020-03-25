const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies && req.cookies["token"];
  try {
    if (!token) {
      const err = new Error("Token not found!");
      err.statusCode = 404;
      return next(err);
    }
    jwt.verify(token, "SECRETFINDINGISNOTHARDHORSECARBOTTLETEASPOONMOUSELAPPOTASDDASA");
    next();
  } catch (error) {
    error.statusCode = 401;
    error.message = "Not logged in";
    next(error);
  }
};