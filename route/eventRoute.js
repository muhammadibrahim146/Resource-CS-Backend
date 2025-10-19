import express from "express";
import {upload }from "../middleware/multer.js";
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controller/event.controller.js"

const eventRoutes= express.Router();

eventRoutes.post("/", upload.single("image"), createEvent);
eventRoutes.get("/", getAllEvents);
eventRoutes.get("/:id", getEventById);
eventRoutes.put("/:id", upload.single("image"), updateEvent);
eventRoutes.delete("/:id", deleteEvent);

export default eventRoutes;
