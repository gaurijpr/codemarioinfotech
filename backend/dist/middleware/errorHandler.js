"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error('[ErrorHandler] Unhandled error:', err);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'An unexpected server error occurred. Please try again later.';
    res.status(statusCode).json({
        success: false,
        message,
    });
}
