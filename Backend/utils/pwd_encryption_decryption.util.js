const bcrypt = require("bcrypt");

const encryptPassword = (plainPassword) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(plainPassword, salt);
  } catch (error) {
    throw error;
  }
};

const compareHashAndPlainPassword = (hash, plainPassword) => {
  try {
    return bcrypt.compareSync(plainPassword, hash);
  } catch (error) {
    throw error;
  }
};
module.exports = { encryptPassword, compareHashAndPlainPassword };
