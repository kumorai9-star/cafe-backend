import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  category: { type: String, required: true, index: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Menu', menuSchema);