const express = require("express");
const verifyUser = require("../middleware/auth.midleware");
const router = express.Router();

const {
  getMe,
  loginUser,
  changePassword,
  createAccount,
} = require("../controller/userController");

router.post("/login", loginUser);
router.get("/me", verifyUser, getMe);
router.patch("/changePassword", changePassword);
router.post("/createAccount", createAccount);

module.exports = router;
