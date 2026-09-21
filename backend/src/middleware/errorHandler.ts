import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error('[ErrorHandler] Unhandled error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'An unexpected server error occurred. Please try again later.';

  res.status(statusCode).json({
    success: false,
    message,
  });
}
