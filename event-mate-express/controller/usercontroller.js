const userdata = require("../model/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
exports.register = async (req, res) => {
  try {
    const { name, email, password, role, age, gender, company, location } =req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "required fields missing" });
    }
    if (!["employee", "employer"].includes(role)) {
      return res.status(400).json({ message: "invalid role" });
    }

    if (role === "employee" && (!age || !gender)) {
      return res.status(400).json({ message: "age and gender required" });
    }

    if (role === "employer" && (!company || !location)) {
      return res.status(400).json({ message: "company and location required" });
    }

    const exists = await userdata.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: "email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    await userdata.create({
      name,
      email,
      password: hashed,
      role,
      age,
      gender,
      company,
      location,
    });

    return res.status(201).json({ message: "registration successful" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await userdata.findOne({ email });
    if (!data) {
      return res.status(404).json({ message: "user not found" });
    }

    const pmatch = await bcrypt.compare(password, data.password);
    if (!pmatch) {
      return res.status(401).json({ message: "wrong password" });
    }

    if (!process.env.JWT_KEY) {
      return res.status(500).json({ message: "jwt key is missing" });
    }

    const token = jwt.sign(
      { id: data._id, role: data.role },
      process.env.JWT_KEY,
      { expiresIn: "1d" },
    );

    data.password = undefined;

    return res.status(200).json({
      message: "login successful",
      token,
      user: data,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
