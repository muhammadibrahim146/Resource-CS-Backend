
import { Event } from "../model/event.model.js";
import cloudinary from "../utilis/cloudinnary.js";
import fs from "fs";


//  Create Event (with image upload)
export const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const imagePath = req.file?.path;

    if (!imagePath) {
      return res.status(400).json({ message: "Image is required" });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: "events",
    });

    // Remove local temp file
    fs.unlinkSync(imagePath);

    const event = new Event({
      title,
      description,
      date,
      image: result.secure_url,
    });

    await event.save();

    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error: error.message });
  }
};

//  Get All Events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error: error.message });
  }
};

//  Get Single Event
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Error fetching event", error: error.message });
  }
};

//  Update Event
export const updateEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const imagePath = req.file?.path;

    let updatedData = { title, description, date };

    if (imagePath) {
      const result = await cloudinary.uploader.upload(imagePath, { folder: "events" });
      fs.unlinkSync(imagePath);
      updatedData.image = result.secure_url;
    }

    const event = await Event.findByIdAndUpdate(req.params.id, updatedData, { new: true });

    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    res.status(500).json({ message: "Error updating event", error: error.message });
  }
};

//  Delete Event
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting event", error: error.message });
  }
};
