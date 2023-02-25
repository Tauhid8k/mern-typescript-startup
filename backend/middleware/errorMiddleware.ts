import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

// Route Error Handler
const routeErrorHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Global Error Handler
const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  if (res.headersSent) return next(error);

  res.status(error.status || 500);

  if (req.accepts("html")) {
    res.render("error", {
      message: error.message || "Internal Server Error",
    });
  } else if (req.accepts("json")) {
    res.json({
      message: error.message || "Internal Server Error",
      stack: process.env.NODE_ENV === "production" ? null : error.stack,
    });
  }
};

export { routeErrorHandler, errorHandler };
