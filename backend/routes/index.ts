import { Router } from "express";
const router = Router();
import authRoutes from "./authRoutes";

// All Routes
router.use("/auth", authRoutes);

export default router;
