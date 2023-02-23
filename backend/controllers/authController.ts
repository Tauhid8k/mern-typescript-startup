import asyncHandler from "express-async-handler";
import { Request, Response } from "express";

// @desc    Sign Up
// @route   POST /api/auth/signup
// @access  Public
const signUp = asyncHandler(async (req: Request, res: Response) => {
  res.json("User Signup");
});

// @desc    Sign In
// @route   POST /api/auth/signin
// @access  Public
const signIn = asyncHandler(async (req: Request, res: Response) => {
  res.json("User SignIn");
});

export { signUp, signIn };
