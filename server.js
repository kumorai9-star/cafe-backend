import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";



// Import Routes
import menuRoutes from "./routes/menuRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Cafe98 Backend is Running Successfully!",
  });
});

// =========================
// API Routes
// =========================
app.use("/api/menu", menuRoutes);
app.use("/api/reservations", reservationRoutes);


// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Cafe98 Server cruising gracefully on port ${PORT}`);
});