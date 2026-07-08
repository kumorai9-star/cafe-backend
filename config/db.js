import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGO_URI =", JSON.stringify(process.env.MONGO_URI));

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};


export default connectDB;
