import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are mandatory.' });
    }

    const contactEntry = new Contact(req.body);
    await contactEntry.save();
    res.status(201).json({ message: 'Message logged successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Contact processing fault', error: error.message });
  }
});

// Admin hook placeholder
router.get('/admin', async (req, res) => {
  try {
    const messages = await Contact.find({}).sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Fetch fault', error: error.message });
  }
});

export default router;