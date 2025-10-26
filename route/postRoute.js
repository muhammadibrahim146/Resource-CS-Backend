import express from "express";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { createPost, getAllPosts, addComment, deletePost } from "../controller/post.controller.js";
import { upload } from "../middleware/multer.js";

const postRoutes = express.Router();

postRoutes.post("/create", authMiddleware,upload.single("image"), createPost);
postRoutes.get("/", getAllPosts);
postRoutes.post("/:postId/comment", authMiddleware, addComment);
postRoutes.delete("/:postId", authMiddleware, deletePost);

export default postRoutes;
