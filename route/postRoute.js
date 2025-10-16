import express from "express";
import { authMiddleware } from "../middleware/authmiddleware.js";
import { createPost, getAllPosts, addComment, deletePost } from "../controllers/postController.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/create", authMiddleware, upload.single("image"), createPost);
router.get("/", getAllPosts);
router.post("/:postId/comment", authMiddleware, addComment);
router.delete("/:postId", authMiddleware, deletePost);

export default router;
