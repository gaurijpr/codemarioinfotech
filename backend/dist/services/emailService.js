"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = exports.EmailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class EmailService {
    transporter = null;
    isConfigured = false;
    constructor() {
        this.initTransporter();
    }
    initTransporter() {
        const host = process.env.SMTP_HOST?.trim();
        const user = process.env.SMTP_USER?.trim();
        const pass = process.env.SMTP_PASSWORD?.trim();
        const port = parseInt(process.env.SMTP_PORT || '587', 10);
        const secure = process.env.SMTP_SECURE === 'true' || port === 465;
        if (host && user && pass) {
            try {
                this.transporter = nodemailer_1.default.createTransport({
                    host,
                    port,
                    secure,
                    auth: {
                        user,
                        pass,
                    },
                    tls: {
                        rejectUnauthorized: process.env.NODE_ENV === 'production',
                    },
                });
                this.isConfigured = true;
                console.log(`[EmailService] Live SMTP transporter initialized with host: ${host}:${port}`);
            }
            catch (err) {
                console.error('[EmailService] Failed to initialize SMTP transporter:', err);
                this.isConfigured = false;
            }
        }
        else {
            this.isConfigured = false;
            console.log('[EmailService] Notice: SMTP credentials are not fully configured in .env. Operating in Simulation / Safe-Log mode. Inquiries will be logged to server console.');
        }
    }
    getStatus() {
        return {
            isConfigured: this.isConfigured,
            recipient: process.env.CONTACT_EMAIL || 'hello@codemarioinfotech.com',
        };
    }
    async sendInquiry(data) {
        const recipient = process.env.CONTACT_EMAIL || 'hello@codemarioinfotech.com';
        const fromAddress = process.env.SMTP_FROM || `"Codemario Infotech" <${recipient}>`;
        const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 32px; background-color: #FFFFFF; border: 1px solid #E5E5E5; color: #111111;">
        <div style="border-bottom: 2px solid #000000; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="font-size: 22px; font-weight: 800; letter-spacing: -0.5px; margin: 0; color: #000000;">CODEMARIO INFOTECH</h1>
          <p style="font-size: 13px; color: #666666; margin: 4px 0 0; text-transform: uppercase; letter-spacing: 1px;">New Website Inquiry</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tbody>
            <tr style="border-bottom: 1px solid #F0F0F0;">
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px; width: 140px; color: #666666;">Full Name:</td>
              <td style="padding: 10px 0; font-size: 15px; color: #000000; font-weight: 500;">${data.fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0F0F0;">
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px; color: #666666;">Email:</td>
              <td style="padding: 10px 0; font-size: 15px; color: #000000;"><a href="mailto:${data.email}" style="color: #000000; text-decoration: underline;">${data.email}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #F0F0F0;">
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px; color: #666666;">Phone:</td>
              <td style="padding: 10px 0; font-size: 15px; color: #000000;">${data.phone || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0F0F0;">
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px; color: #666666;">Company / Brand:</td>
              <td style="padding: 10px 0; font-size: 15px; color: #000000;">${data.company || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0F0F0;">
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px; color: #666666;">Service:</td>
              <td style="padding: 10px 0; font-size: 15px; color: #000000; font-weight: 600;">${data.service}</td>
            </tr>
            <tr style="border-bottom: 1px solid #F0F0F0;">
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px; color: #666666;">Budget Range:</td>
              <td style="padding: 10px 0; font-size: 15px; color: #000000;">${data.budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 600; font-size: 14px; color: #666666;">Submitted At:</td>
              <td style="padding: 10px 0; font-size: 14px; color: #666666;">${data.submissionDate}</td>
            </tr>
          </tbody>
        </table>

        <div style="background-color: #F7F7F7; border-left: 3px solid #000000; padding: 16px; margin-bottom: 24px;">
          <p style="margin: 0 0 8px; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #111111;">Project Details:</p>
          <div style="font-size: 15px; line-height: 1.6; color: #111111; white-space: pre-wrap;">${data.projectDetails}</div>
        </div>

        <div style="border-top: 1px solid #E5E5E5; padding-top: 16px; font-size: 12px; color: #888888;">
          This message was generated by the Codemario Infotech website inquiry form.
        </div>
      </div>
    `;
        const plainTextBody = `
NEW WEBSITE INQUIRY - CODEMARIO INFOTECH
------------------------------------------
Full Name:       ${data.fullName}
Email:           ${data.email}
Phone:           ${data.phone || 'Not provided'}
Company / Brand: ${data.company || 'Not provided'}
Service:         ${data.service}
Budget:          ${data.budget || 'Not specified'}
Submitted At:    ${data.submissionDate}

PROJECT DETAILS:
${data.projectDetails}
------------------------------------------
`;
        // Client auto-responder HTML
        const autoResponderHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #FFFFFF; border: 1px solid #E5E5E5; color: #111111;">
        <h2 style="font-size: 20px; font-weight: 800; margin: 0 0 16px; color: #000000;">CODEMARIO INFOTECH</h2>
        <p style="font-size: 16px; line-height: 1.6; margin: 0 0 16px;">Hello ${data.fullName},</p>
        <p style="font-size: 15px; line-height: 1.6; color: #333333; margin: 0 0 16px;">
          Thank you for contacting Codemario Infotech. We have received your project inquiry regarding <strong>${data.service}</strong> and will get back to you soon.
        </p>
        <div style="background-color: #F7F7F7; padding: 16px; border-radius: 4px; margin-bottom: 24px; font-size: 14px; color: #555555;">
          <p style="margin: 0 0 8px; font-weight: 600; color: #111111;">Summary of your submission:</p>
          <p style="margin: 4px 0;"><strong>Service:</strong> ${data.service}</p>
          <p style="margin: 4px 0;"><strong>Budget:</strong> ${data.budget || 'Not specified'}</p>
          <p style="margin: 4px 0;"><strong>Date:</strong> ${data.submissionDate}</p>
        </div>
        <p style="font-size: 14px; line-height: 1.6; color: #666666; margin: 0 0 24px;">
          If you have any immediate questions or assets to share, feel free to reply directly to this email or write to us at <a href="mailto:${recipient}" style="color: #000000; font-weight: 600;">${recipient}</a>.
        </p>
        <div style="border-top: 1px solid #E5E5E5; padding-top: 16px; font-size: 13px; color: #888888;">
          Warm regards,<br />
          <strong>The Team at Codemario Infotech</strong><br />
          Marketing • Design • Technology • AI<br />
          <a href="mailto:${recipient}" style="color: #666666;">${recipient}</a>
        </div>
      </div>
    `;
        // If SMTP is NOT configured, simulate and log clearly
        if (!this.isConfigured || !this.transporter) {
            console.log('\n' + '='.repeat(70));
            console.log('📬 [SIMULATED EMAIL DISPATCH] - New Inquiry Received');
            console.log('='.repeat(70));
            console.log(`To:          ${recipient}`);
            console.log(`From:        ${fromAddress}`);
            console.log(`Subject:     New Website Inquiry - Codemario Infotech (${data.service})`);
            console.log(`Client Copy: ${data.email}`);
            console.log('-'.repeat(70));
            console.log(plainTextBody.trim());
            console.log('='.repeat(70));
            console.log('ℹ️  NOTE: Configure SMTP credentials in backend/.env for live email transmission.\n');
            return {
                success: true,
                simulated: true,
                message: 'Inquiry received and logged (simulation mode active).',
            };
        }
        // Live email transmission via Nodemailer
        try {
            // 1. Send notification to agency
            await this.transporter.sendMail({
                from: fromAddress,
                to: recipient,
                replyTo: data.email,
                subject: `New Website Inquiry - Codemario Infotech: ${data.service} (${data.fullName})`,
                text: plainTextBody,
                html: htmlBody,
            });
            // 2. Send auto-responder to client
            try {
                await this.transporter.sendMail({
                    from: fromAddress,
                    to: data.email,
                    subject: 'Thank you for contacting Codemario Infotech',
                    text: `Hello ${data.fullName},\n\nThank you for contacting Codemario Infotech. We have received your inquiry regarding ${data.service} and will get back to you soon.\n\nBest regards,\nCodemario Infotech Team\n${recipient}`,
                    html: autoResponderHtml,
                });
            }
            catch (autoErr) {
                console.warn('[EmailService] Auto-responder delivery warning:', autoErr);
                // Non-fatal, primary agency notification succeeded
            }
            return {
                success: true,
                simulated: false,
                message: 'Email delivered successfully via SMTP.',
            };
        }
        catch (err) {
            console.error('[EmailService] SMTP transmission failed:', err);
            throw new Error(`Email transmission failed: ${err.message || 'Unknown SMTP error'}`);
        }
    }
}
exports.EmailService = EmailService;
exports.emailService = new EmailService();
