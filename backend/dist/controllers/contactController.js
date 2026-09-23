"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitContact = submitContact;
exports.getHealthStatus = getHealthStatus;
const validator_1 = __importDefault(require("validator"));
const emailService_js_1 = require("../services/emailService.js");
// Sanitize string helper
function sanitize(input) {
    if (typeof input !== 'string')
        return '';
    return validator_1.default.trim(validator_1.default.stripLow(input));
}
async function submitContact(req, res) {
    try {
        const { fullName, email, phone, company, service, budget, projectDetails, website_url, // Anti-spam honeypot
         } = req.body;
        // 1. Anti-spam honeypot detection
        // Bots fill every field including hidden ones. If website_url has a value, silently reject.
        if (website_url && website_url.trim().length > 0) {
            console.warn('[ContactController] Spam bot detected via honeypot trap. Request silently ignored.');
            return res.status(200).json({
                success: true,
                message: 'Inquiry submitted successfully',
            });
        }
        // 2. Validate required fields
        const cleanName = sanitize(fullName);
        const cleanEmail = sanitize(email);
        const cleanService = sanitize(service);
        const cleanDetails = sanitize(projectDetails);
        const cleanPhone = sanitize(phone);
        const cleanCompany = sanitize(company);
        const cleanBudget = sanitize(budget);
        const validationErrors = [];
        if (!cleanName || cleanName.length < 2) {
            validationErrors.push('Full Name is required (minimum 2 characters).');
        }
        if (cleanName.length > 100) {
            validationErrors.push('Full Name must be 100 characters or fewer.');
        }
        if (!cleanEmail || !validator_1.default.isEmail(cleanEmail)) {
            validationErrors.push('A valid email address is required.');
        }
        if (!cleanService) {
            validationErrors.push('Please select a service you are interested in.');
        }
        if (!cleanDetails || cleanDetails.length < 10) {
            validationErrors.push('Project details are required (minimum 10 characters).');
        }
        if (cleanDetails.length > 4000) {
            validationErrors.push('Project details must not exceed 4000 characters.');
        }
        if (cleanPhone && cleanPhone.length > 25) {
            validationErrors.push('Phone number is too long.');
        }
        if (cleanCompany && cleanCompany.length > 100) {
            validationErrors.push('Company name is too long.');
        }
        if (validationErrors.length > 0) {
            return res.status(400).json({
                success: false,
                message: validationErrors[0],
                errors: validationErrors,
            });
        }
        // 3. Prepare data for dispatch
        const now = new Date();
        const submissionDate = now.toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            dateStyle: 'full',
            timeStyle: 'long',
        }) + ' (IST)';
        const result = await emailService_js_1.emailService.sendInquiry({
            fullName: cleanName,
            email: cleanEmail,
            phone: cleanPhone || undefined,
            company: cleanCompany || undefined,
            service: cleanService,
            budget: cleanBudget || undefined,
            projectDetails: cleanDetails,
            submissionDate,
        });
        return res.status(200).json({
            success: true,
            message: 'Thank you! Your inquiry has been sent successfully. We will contact you soon.',
            simulated: result.simulated,
        });
    }
    catch (error) {
        console.error('[ContactController] Error processing inquiry:', error);
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while sending your inquiry. Please try again or email us directly at hello@codemarioinfotech.com.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined,
        });
    }
}
function getHealthStatus(req, res) {
    const emailStatus = emailService_js_1.emailService.getStatus();
    res.status(200).json({
        status: 'healthy',
        service: 'Codemario Infotech Backend API',
        timestamp: new Date().toISOString(),
        email: {
            isConfigured: emailStatus.isConfigured,
            targetRecipient: emailStatus.recipient,
            mode: emailStatus.isConfigured ? 'live-smtp' : 'simulation-logger',
        },
    });
}
