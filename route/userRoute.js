import express from "express";
import { registerUser, loginUser, logoutUser } from "../controller/user.controller.js";
import { authMiddleware } from "../middleware/authmiddleware.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", authMiddleware,logoutUser);

export default userRoutes;
