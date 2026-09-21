# Codemario Infotech - Official Agency Website & Lead Engine

A modern, production-grade digital agency website and inquiry pipeline built for **Codemario Infotech** (Digital Marketing, Creative Design, Android App Development, and AI Solutions).

Designed with a **strict Black & White monochrome aesthetic**, bold typography, micro-interactions, full mobile responsiveness, and an active Node.js/Express backend email delivery system.

---

## 🚀 Quick Start: How to Run This Project

Both the backend and frontend are already set up and tested. Follow these steps to run them locally:

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v24+ recommended)
- **npm**: v9.0.0 or later

---

### 2. Running Locally (Step-by-Step)

You can run the frontend and backend in two separate terminal windows:

#### Terminal 1: Backend Server (Port 5000)
```bash
cd backend
npm install
npm run dev
```
> The backend server starts at `http://localhost:5000`. It listens for inquiry submissions on `POST /api/contact` and provides a health check at `GET /api/health`.

#### Terminal 2: Frontend Client (Port 5173)
```bash
cd frontend
npm install
npm run dev
```
> The frontend client starts at `http://localhost:5173`. Open this URL in your web browser.

*Note: In development, requests sent to `/api/*` from the frontend are automatically proxied to `http://localhost:5000` via Vite's proxy configuration in `vite.config.ts`.*

---

## 📬 Email Configuration Guide

Whenever a visitor submits the inquiry form on the website, the lead is automatically dispatched to:
**`hello@codemarioinfotech.com`** and a professional auto-responder confirmation is sent to the client.

### Environment Variables File
Location: `backend/.env` (a template is provided in `backend/.env.example`)

```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173,http://localhost:3000
CONTACT_EMAIL=hello@codemarioinfotech.com

# SMTP Credentials
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM="Codemario Infotech <hello@codemarioinfotech.com>"
```

### Safe-Log / Simulation Mode (Default)
If you run the project without adding SMTP credentials, the backend will **not crash**. Instead, it runs in **Safe-Log mode**:
- It validates the inputs and checks for spam bots.
- It displays a complete, beautifully formatted email preview in your backend terminal.
- It returns HTTP 200 OK with `{ "success": true, "simulated": true }` to the frontend so you can test the entire user flow immediately.

### How to Enable Live Email Delivery

#### Option A: Google Workspace / Gmail
1. Go to your Google Account > **Security** > **2-Step Verification**.
2. Scroll to the bottom and click on **App Passwords**.
3. Generate a password named "Codemario Website" (16 characters).
4. Update `backend/.env`:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=xxxx-xxxx-xxxx-xxxx
   SMTP_FROM="Codemario Infotech <hello@codemarioinfotech.com>"
   ```

#### Option B: Hostinger / cPanel Business Email
1. Log in to your Hostinger or cPanel email control panel.
2. Retrieve your SMTP settings:
   - Host: `smtp.hostinger.com` (or your mail server host)
   - Port: `465` (SSL) or `587` (TLS)
3. Update `backend/.env`:
   ```env
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=hello@codemarioinfotech.com
   SMTP_PASSWORD=your-secure-mailbox-password
   SMTP_FROM="Codemario Infotech <hello@codemarioinfotech.com>"
   ```

#### Option C: Resend / SendGrid / AWS SES
Update `backend/.env` with your transactional provider's SMTP host, port 465 or 587, user `apikey`, and API key as the password.

---

## 🛠️ Content Management (Editing Content Without Code Complexity)

All website content is organized in clean TypeScript data modules under `frontend/src/data/`. You do not need to hunt through complex JSX files to modify text:

| Content Area | File Location | What You Can Edit |
| :--- | :--- | :--- |
| **Company Info & Social Links** | `frontend/src/data/siteConfig.ts` | Company name, email, phone, headline, social media URLs |
| **Services & Offerings** | `frontend/src/data/services.ts` | The 6 services, deliverables lists, descriptions, icons |
| **Portfolio Projects** | `frontend/src/data/portfolio.ts` | Project cards, filter tags, specs, case highlights |
| **Why Us / Pillars** | `frontend/src/data/whyUs.ts` | 4 numbered value blocks (01 - 04) |
| **Core Capabilities** | `frontend/src/data/expertise.ts` | Marketing, Creative, Technology, AI categories |
| **Process Steps** | `frontend/src/data/process.ts` | 4-step delivery timeline (Discover, Strategize, Build, Grow) |
| **Target Industries** | `frontend/src/data/industries.ts` | 8 client categories (Startups, Local, E-commerce, etc.) |
| **Trust Metrics** | `frontend/src/data/trust.ts` | Honest principles & editable statistic counters |

---

## 🧪 Testing the Inquiry Form

1. Start both backend and frontend.
2. In your browser, open `http://localhost:5173` and click **"Let's Talk"** or scroll to `#inquiry`.
3. Test validation:
   - Click "Send Inquiry" with empty fields to verify inline error feedback.
4. Test successful submission:
   - Fill in:
     - **Full Name**: `Rahul Sharma`
     - **Email Address**: `rahul@example.com`
     - **Service**: Select `Android App Development`
     - **Project Details**: `Looking for a custom Android app for on-demand booking.`
   - Click **"Send Inquiry"**.
   - Observe the button transition to `"Sending..."` with a spinner.
   - Observe the dark success alert: *"Thank you! Your inquiry has been sent successfully. We will contact you soon."*
5. In your backend terminal, you will see the formatted inquiry log with client details, timestamp, and subject line.

---

## 📦 Building for Production

### Build Frontend
```bash
cd frontend
npm run build
```
> Generates production-optimized static assets in `frontend/dist/`.

### Build Backend
```bash
cd backend
npm run build
```
> Compiles TypeScript to production JavaScript in `backend/dist/`.

---

## 🌐 Deployment Instructions

### Frontend (Static Hosting: Vercel, Netlify, Cloudflare Pages)
1. Set the root directory to `frontend`.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Set Environment Variable in dashboard:
   - `VITE_API_URL`: The URL of your deployed backend (e.g. `https://api.codemarioinfotech.com`)

### Backend (Node.js Hosting: Render, Railway, DigitalOcean, VPS)
1. Set the root directory to `backend`.
2. Build command: `npm install && npm run build`
3. Start command: `node dist/server.js`
4. Configure environment variables in dashboard:
   - `PORT`: `5000` (or host assigned)
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: `https://codemarioinfotech.com`
   - `CONTACT_EMAIL`: `hello@codemarioinfotech.com`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`

---

## 🛡️ Security & Performance Highlights
- **Strict Black & White Aesthetic**: High contrast, minimal, zero colorful gradients.
- **Anti-Spam Honeypot**: Hidden `website_url` field that silently traps and discards automated bots.
- **Rate Limiting**: Built-in `express-rate-limit` prevents abusive form flooding.
- **Input Sanitization**: All fields are trimmed, stripped of malicious control characters, and length-bounded.
- **Zero Exposed Secrets**: SMTP credentials remain strictly in backend environment variables.
- **SEO & Accessibility**: Complete Semantic HTML5, ARIA labels, Open Graph tags, JSON-LD Schema.org markup, `robots.txt`, `sitemap.xml`, and vector `favicon.svg`.
- **Responsive & Reduced Motion**: Fluid layouts tested across desktop, tablet, and mobile, with `prefers-reduced-motion` compliance.

---

© 2026 Codemario Infotech. All rights reserved.
