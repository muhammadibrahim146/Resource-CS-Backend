import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectdb.js";
import cors from "cors";
import userRoutes from "./route/userRoute.js";
import cookieParser from "cookie-parser";
import postRoutes from "./route/postRoute.js";
import eventRoutes from "./route/eventRoute.js";

// ✅ Load environment variables
dotenv.config();

// ✅ Connect MongoDB
await connectDb();

// ✅ Initialize app
const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "https://resource-cs.netlify.app", // frontend ka link
    credentials: true,
  })
);

// ✅ API Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/events", eventRoutes);

// ✅ Default route (for testing)
app.get("/", (req, res) => {
  res.send("✅ Resource-CS Backend is running successfully!");
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(5000, () => {
  console.log(`🚀 Server is running on http://localhost:5000`);
});
