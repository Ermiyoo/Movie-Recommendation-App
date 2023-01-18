const jwt = require("jsonwebtoken");
const secretKey = "My$uper$trong$ecr3tKe7";
const generateToken = (id, password) => {
  try {
    return jwt.sign({ id: id, password: password }, secretKey, {
      expiresIn: "1h",
    });
  } catch (error) {
    throw error;
  }
};
const verifyGeneratedToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    throw error;
  }
};
module.exports = { generateToken, verifyGeneratedToken };
