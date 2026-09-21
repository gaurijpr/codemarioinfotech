import rateLimit from 'express-rate-limit';

// Limit contact submissions: 5 requests per 15 minutes per IP
export const contactRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // maximum 10 requests per 15 min window (generous for testing, strict against spam)
  standardHeaders: true, // Return standard RateLimit-* headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
  message: {
    success: false,
    message: 'Too many inquiries submitted from this IP address. Please try again after 15 minutes or email us directly at hello@codemarioinfotech.com.',
  },
});
