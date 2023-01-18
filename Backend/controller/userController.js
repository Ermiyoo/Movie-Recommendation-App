require("dotenv").config();
const { encryptPassword } = require("../utils/pwd_encryption_decryption.util");
const {
  compareHashAndPlainPassword,
} = require("../utils/pwd_encryption_decryption.util");
const { generateToken } = require("../utils/token.utils");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// #######################
// #######################
// #######################

const createAccount = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add The Required Fields");
  }

  const { username, password, firstName, lastName, email, preferences } =
    req.body;

  // check if the user exist
  const userExist = await User.findOne({ username });

  if (userExist) {
    res.status(400);
    throw new Error(`${username} already Exist`);
  }

  // hash password before storing on db;
  const hashPWD = encryptPassword(password);
  const user = await User.create({
    username,
    password: hashPWD,
    firstName,
    lastName,
    email,
    preferences,
  });

  return res.status(201).json(user);
});

// #######################
// #######################
// #######################

const getMe = asyncHandler(async (req, res) => {
  const { username } = req.user;

  const user = await User.findOne({ username });
  if (!user) return res.status(401).json("Not Authorized");
  return res.status(200).json(user);
});

// #######################
// #######################
// #######################

const loginUser = asyncHandler(async (req, res) => {
  try {
    const { username, password } = undefined || req.body;

    const currentUser = await User.findOne({ username });

    if (!currentUser) return res.status(404).json({ message: "No user found" });

    //compare the password hashes
    const hashPWD = currentUser.password;

    const correctPassword = compareHashAndPlainPassword(hashPWD, password);

    if (!correctPassword) {
      return res.status(401).json({
        message: `Unauthorized`,
      });
    }
    // generate token
    const token = generateToken(username, hashPWD);

    return res.status(200).json({
      message: `login success`,
      user: currentUser,
      token: token,
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong`,
    });
  }
});

// #######################
// #######################
// #######################

const changePassword = asyncHandler(async (req, res) => {
  try {
    const { id, password, oldPassword } = undefined || req.body;

    const fetchedUser = await User.findOne({ _id: id });

    const hashPWD = fetchedUser.password;

    const correctPassword = compareHashAndPlainPassword(hashPWD, oldPassword);

    if (!correctPassword) {
      return res.status(400).json({
        message: `incorrect password`,
      });
    } else {
      const hashPWD = encryptPassword(password);

      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        {
          password: hashPWD,
        }
      );

      if (updatedUser) return res.status(200).json({ message: "Success" });
    }

    console.log("pass change err");
  } catch (error) {
    res.status(400).json({
      message: `something went wrong`,
    });
  }
});

module.exports = {
  getMe,
  loginUser,
  changePassword,
  createAccount,
};
