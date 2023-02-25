import { Router } from "express";
const router = Router();
import authRoutes from "./authRoutes";

router.get("/", function (req, res) {
  res.render("error");
});

// All Routes
router.use("/auth", authRoutes);

export default router;
