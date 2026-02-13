const jwt = require("jsonwebtoken");

exports.token = async (req, res, next) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "token not provided" });
    }

    if (!process.env.JWT_KEY) {
      return res.status(500).json({ message: "jwt key missing" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
