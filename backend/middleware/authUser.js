const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from headers
      token = req.headers.authorization.split(" ")[1];
      //verify jwt
      const userID = jwt.verify(token, process.env.JWT_SECRETKEY);

      req.user = await User.findById(userID.id);
      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("invalid token");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("no token");
  }
};

exports.auth = auth;
