import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectdb.js";
dotenv.config();
await connectDb();
const app =express();
app.get("/",(req,res)=>{
    res.send("hello world");
});
app .listen(3000,()=>{
    console.log("server is running on port 3000");
});