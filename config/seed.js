import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Menu from '../models/Menu.js';

dotenv.config();

const items = [
  { name: 'Espresso', description: 'Rich, robust shot extracted under pressure.', category: 'Coffee', price: 120, image: 'https://images.unsplash.com/photo-1510705315444-83796324212a?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Americano', description: 'Espresso shots topped with pure piping hot water.', category: 'Coffee', price: 150, image: 'https://images.unsplash.com/photo-1551046710-23b229a2f224?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Latte', description: 'Silky smooth steamed milk poured over signature espresso.', category: 'Coffee', price: 180, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Cappuccino', description: 'Perfect balance of deep espresso, steamed milk, and wet foam.', category: 'Coffee', price: 180, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Mocha', description: 'Espresso mixed with premium dark chocolate sauce and textured milk.', category: 'Coffee', price: 210, image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Cold Coffee', description: 'Blended creamy chilled milk, espresso, and vanilla ice cream scoop.', category: 'Cold Coffee', price: 220, image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Chicken Sandwich', description: 'Pulled roasted chicken laced with homemade sauce on toasted sourdough.', category: 'Sandwiches', price: 290, image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Veg Sandwich', description: 'Crisp garden greens, avocado, cheese layer with home spice emulsion.', category: 'Sandwiches', price: 240, image: 'https://images.unsplash.com/photo-1540713434306-585de5e8b61a?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Premium Nachos', description: 'Fresh tortilla crisps loaded with salsa, jalapeños, and warm molten cheese.', category: 'Nachos', price: 260, image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'Fudge Brownie', description: 'Warm chewy dark chocolate center served with hot fudge stream.', category: 'Desserts', price: 180, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600', available: true },
  { name: 'New York Cheesecake', description: 'Rich velvet texture cake over buttery graham cracker crust layer.', category: 'Desserts', price: 250, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600', available: true }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Menu.deleteMany({});
    await Menu.insertMany(items);
    console.log('Café 98 Menu seed data injected successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();