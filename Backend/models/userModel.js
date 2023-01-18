const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "User Should have firstname"],
    },

    lastName: {
      type: String,
      required: [true, "User Should have lastname"],
    },

    username: {
      type: String,
      required: [true, "User Should have username"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "User should have a password"],
    },

    email: {
      type: String,
      required: [true, "User should have Email"],
    },

    preferences: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
