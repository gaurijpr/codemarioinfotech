"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactController_js_1 = require("../controllers/contactController.js");
const rateLimiter_js_1 = require("../middleware/rateLimiter.js");
const router = (0, express_1.Router)();
// Health check endpoint
router.get('/health', contactController_js_1.getHealthStatus);
// Main contact inquiry submission with rate limiting
router.post('/contact', rateLimiter_js_1.contactRateLimiter, contactController_js_1.submitContact);
exports.default = router;
