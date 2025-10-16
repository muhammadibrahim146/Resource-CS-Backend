import { Post } from "../models/post.model.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";


// Create Post

export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // from auth middleware

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "posts",
    });

    // Delete image from local storage after upload
    fs.unlinkSync(req.file.path);

    // Create post
    const post = new Post({
      title,
      desciption: description,
      user: userId,
      image: result.secure_url,
    });

    await post.save();

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Get All Posts

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};


// Get Single Post by ID
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user", "name email");
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error: error.message });
  }
};


// Delete Post

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    // Optional: check if user owns the post
    if (post.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error: error.message });
  }
};


// Add Comment to Post

export const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: "Post not found" });

    const comment = {
      user: req.user.id,
      text,
      createdAt: new Date(),
    };

    post.comments.push(comment);
    await post.save();

    res.status(200).json({ message: "Comment added", post });
  } catch (error) {
    res.status(500).json({ message: "Error adding comment", error: error.message });
  }
};


