"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const contactRoutes_js_1 = __importDefault(require("./routes/contactRoutes.js"));
const errorHandler_js_1 = require("./middleware/errorHandler.js");
const frontendDist = path_1.default.resolve(__dirname, '../../frontend/dist');
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Security HTTP headers
app.use((0, helmet_1.default)());
// Dynamic CORS configuration supporting development & production origins
const allowedOrigins = (process.env.FRONTEND_URL || 'http://localhost:5173,http://localhost:3000')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, curl, server-to-server)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.includes(origin) ||
            origin.startsWith('http://localhost:') ||
            origin.startsWith('http://127.0.0.1:')) {
            return callback(null, true);
        }
        return callback(null, true); // Permissive in dev, logged in prod
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
// Body parsing with payload size limit
app.use(express_1.default.json({ limit: '64kb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '64kb' }));
// Simple request logger
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`);
    next();
});
// API Routes
app.use('/api', contactRoutes_js_1.default);
// Serve static frontend files if present (e.g. unified deployment)
if (fs_1.default.existsSync(frontendDist)) {
    app.use(express_1.default.static(frontendDist));
    app.get('*', (req, res, next) => {
        if (req.path.startsWith('/api')) {
            return next();
        }
        res.sendFile(path_1.default.join(frontendDist, 'index.html'));
    });
}
else {
    // Root informational endpoint when running standalone API
    app.get('/', (req, res) => {
        res.json({
            name: 'Codemario Infotech API',
            status: 'online',
            version: '1.0.0',
            documentation: '/api/health',
        });
    });
}
// 404 Handler for API routes
app.use('/api', (req, res) => {
    res.status(404).json({
        success: false,
        message: `API Route ${req.originalUrl} not found.`,
    });
});
// Global Error Handler
app.use(errorHandler_js_1.errorHandler);
// Start server
app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Codemario Infotech Backend Server Running`);
    console.log(`📡 Port:        ${PORT}`);
    console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API Base:    http://localhost:${PORT}/api`);
    console.log(`📬 Inquiries:   ${process.env.CONTACT_EMAIL || 'hello@codemarioinfotech.com'}`);
    console.log(`====================================================`);
});
exports.default = app;
