import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==========================
// Home Route
// ==========================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Cafe98 Backend is Running Successfully!",
  });
});

// ==========================
// API Routes
// (Uncomment when you create them)
// ==========================

// import productRoutes from "./routes/productRoutes.js";
// import authRoutes from "./routes/authRoutes.js";

// app.use("/api/products", productRoutes);
// app.use("/api/auth", authRoutes);

// ==========================
// 404 Route
// ==========================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ==========================
// Start Server
// ==========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Cafe98 Server cruising gracefully on port ${PORT}`);
});