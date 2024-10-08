/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || "Something went wrong";

  return res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    stack: err.stack,
  });
};

export default globalErrorHandler;
