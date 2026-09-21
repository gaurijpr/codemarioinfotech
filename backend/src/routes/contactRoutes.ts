import { Router } from 'express';
import { submitContact, getHealthStatus } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Health check endpoint
router.get('/health', getHealthStatus);

// Main contact inquiry submission with rate limiting
router.post('/contact', contactRateLimiter, submitContact);

export default router;
