const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "enter your email"],
    unique: [true, "already registered"],
    match: [/^\S+@\S+\.\S+$/, "please provide valid email"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "enter your password"],
    minlength: [8, "it must have eight letter"],
  },
  age: {
    type: Number,
    required: function () {
      return this.role === "employee";
    },
  },

  gender: {
    type: String,
    required: function () {
      return this.role === "employee";
    },
  },

  company: {
    type: String,
    required: function () {
      return this.role === "employer";
    },
  },

  location: {
    type: String,
    required: function () {
      return this.role === "employer";
    },
  },
  role: {
    type: String,
    enum: ["admin", "employee", "employer"],
    required: [true, "option must be select"],
  },
});

module.exports = mongoose.model("userdata", schema);
