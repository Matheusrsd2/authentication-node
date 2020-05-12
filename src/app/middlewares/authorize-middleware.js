const jwt = require("jsonwebtoken");
const User = require("./../models/user");

const authorize = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.SECRET);

    req.user = User.findById(decoded.id);

    next();
  } catch (error) {
    res.status(401).json({
      message: "Usuário não autenticado!",
    });
  }
};

module.exports = authorize;
