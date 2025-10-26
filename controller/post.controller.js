import { Post } from "../model/post.model.js";
import cloudinary from "../utilis/cloudinnary.js";

// ------------------
// Create Post
// ------------------
export const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const userId = req.user.id;

    if (!caption) {
      return res.status(400).json({ message: "Caption is required" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "ResourceCS_Posts",
    });

    // Create post
    const post = new Post({
      caption,
      user: userId,
      image: result.secure_url,
    });

    await post.save();

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    console.error("❌ Error creating post:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ------------------
// Get All Posts
// ------------------
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    res.status(500).json({ message: "Error fetching posts", error: error.message });
  }
};

// ------------------
// Get Single Post
// ------------------
export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user", "name email");
    if (!post) return res.status(404).json({ message: "Post not found" });

    res.status(200).json(post);
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    res.status(500).json({ message: "Error fetching post", error: error.message });
  }
};

// ------------------
// Delete Post
// ------------------
export const deletePost = async (req, res) => {
  try {
    console.log("Deleting post ID:", req.params.id);
    console.log("User trying to delete:", req.user);

    const post = await Post.findById(req.params.postId);
    console.log("Found post:", post);

    if (!post) return res.status(404).json({ message: "Post not found" });

   

    await Post.findByIdAndDelete(req.params.postId);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting post", error: error.message });
  }
};


// ------------------
// Add Comment
// ------------------
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
    console.error("❌ Error adding comment:", error);
    res.status(500).json({ message: "Error adding comment", error: error.message });
  }
};



