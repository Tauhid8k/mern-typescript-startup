import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import connectDB from "./config/db";
import allRoutes from "./routes";
import { routeErrorHandler, errorHandler } from "./middleware/errorMiddleware";

// Initialize (Express, Dotenv, Database)
const app = express();
dotenv.config();
connectDB();

// Request parser
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    methods: ["GET", "POST", "PUT", "DELETE"],
    origin: "*",
  })
);

// All API Routes
app.use("/api", allRoutes);

// Error Handler
app.use(routeErrorHandler);
app.use(errorHandler);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
