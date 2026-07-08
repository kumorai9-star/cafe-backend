import express from 'express';
import Reservation from '../models/Reservation.js'; // Adjust to your model path

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // 1. Make sure these match the CamelCase keys sent by your frontend form state!
    const { customerName, email, phone, date, time, guests, specialRequest } = req.body;

    const newReservation = new Reservation({
      customerName,
      email,
      phone,
      date,
      time,
      guests,
      specialRequest
    });

    await newReservation.save();
    res.status(201).json({ message: "Table Booked successfully!" });
  } catch (err) {
    console.error("Reservation Route Error:", err);
    res.status(500).json({ message: "Booking fault occurred." });
  }
});

export default router;