import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
