"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRateLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// Limit contact submissions: 5 requests per 15 minutes per IP
exports.contactRateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // maximum 10 requests per 15 min window (generous for testing, strict against spam)
    standardHeaders: true, // Return standard RateLimit-* headers
    legacyHeaders: false, // Disable X-RateLimit-* headers
    message: {
        success: false,
        message: 'Too many inquiries submitted from this IP address. Please try again after 15 minutes or email us directly at hello@codemarioinfotech.com.',
    },
});
