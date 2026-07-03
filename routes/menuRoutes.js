import express from 'express';
import Menu from '../models/Menu.js';

const router = express.Router();

// GET /api/menu - Public Route
router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.find({});
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch menu items', error: error.message });
  }
});

// Admin Hooks placeholder setup for later additions
router.post('/admin', async (req, res) => {
  try {
    const newItem = new Menu(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create item', error: error.message });
  }
});

export default router;