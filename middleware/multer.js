import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utilis/cloudinnary.js";

// Configure storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ResourceCS_Posts",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

export const upload = multer({ storage });