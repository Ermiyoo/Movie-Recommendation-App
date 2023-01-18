const { verifyGeneratedToken } = require("../utils/token.utils");
const User = require("../models/userModel");
const verifyUser = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //Get the Token
      token = req.headers.authorization.split(" ")[1];

      //verify Token
      const decoded = verifyGeneratedToken(token);

      // Get user from the token
      req.user = await User.findOne({ username: decoded.id });
      next();
    } catch (e) {
      console.log(e);
    }
  }
};
module.exports = verifyUser;
