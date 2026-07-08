import express from 'express';
import mongoose from 'mongoose'; // or import your Contact model if you have one

const router = express.Router();

// Define a quick Schema if you aren't importing a model file
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true }
}, { timestamps: true });

const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

// POST route matching /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if any fields arrived blank
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All input fields are required." });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Message processed successfully!" });
  } catch (err) {
    console.error("Contact Route Error:", err);
    res.status(500).json({ message: "Error executing action." });
  }
});

export default router;