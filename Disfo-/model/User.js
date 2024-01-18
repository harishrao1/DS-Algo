const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    maxlength: 50,
    default: "",
  },
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 25,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Invalid email Format ",
    },
  },
});

// creating user modal

const User = mongoose.model("User", userSchema);

module.exports = User;
