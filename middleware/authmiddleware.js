import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    // check token exist
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // find user
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error(" Auth Middleware Error:", error);
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};
