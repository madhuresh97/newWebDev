import express from "express";
import Hotel from "../models/hotels.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {

    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = new Hotel(req.body);
        res.status(200).json(savedHotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;