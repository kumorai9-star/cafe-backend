import express from 'express';
import Reservation from '../models/Reservation.js';

const router = express.Router();

// POST /api/reservation
router.post('/', async (req, res) => {
  try {
    const { customerName, email, phone, date, time, guests } = req.body;
    
    if (!customerName || !email || !phone || !date || !time || !guests) {
      return res.status(400).json({ message: 'All baseline parameters are required.' });
    }

    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: 'Table reservation placed successfully!', data: reservation });
  } catch (error) {
    res.status(500).json({ message: 'Reservation engine fault', error: error.message });
  }
});

// Admin hook placeholder
router.get('/admin', async (req, res) => {
  try {
    const records = await Reservation.find({}).sort({ date: 1, time: 1 });
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Fetch fault', error: error.message });
  }
});

export default router;