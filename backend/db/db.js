import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Failed to connect to DB:", err);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDB;