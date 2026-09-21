import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { servicesData } from '../data/services';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  projectDetails: string;
  website_url: string; // Honeypot
}

const serviceOptions = [
  ...servicesData.map((s) => s.title),
  'Other',
];

const budgetOptions = [
  'Not decided yet',
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000 – ₹1,00,000',
  '₹1,00,000+',
];

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: 'Not decided yet',
    projectDetails: '',
    website_url: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState<string>('');

  // Listen for custom service selection event from service cards
  useEffect(() => {
    const handleServiceSelect = (event: Event) => {
      const customEvent = event as CustomEvent<{ service: string }>;
      if (customEvent.detail?.service) {
        const found = serviceOptions.find(
          (s) => s.toLowerCase() === customEvent.detail.service.toLowerCase()
        );
        if (found) {
          setFormData((prev) => ({ ...prev, service: found }));
        } else {
          setFormData((prev) => ({ ...prev, service: customEvent.detail.service }));
        }
      }
    };

    window.addEventListener('codemario:selectService', handleServiceSelect);
    return () => window.removeEventListener('codemario:selectService', handleServiceSelect);
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email address is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
        return '';
      case 'service':
        if (!value) return 'Please select a service.';
        return '';
      case 'projectDetails':
        if (!value.trim()) return 'Please describe your project.';
        if (value.trim().length < 10) return 'Please provide at least 10 characters of detail.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check honeypot for spam bots
    if (formData.website_url && formData.website_url.trim().length > 0) {
      setStatus('success');
      setServerMessage('Thank you! Your inquiry has been sent successfully. We will contact you soon.');
      return;
    }

    const newTouched = {
      fullName: true,
      email: true,
      service: true,
      projectDetails: true,
    };
    setTouched((prev) => ({ ...prev, ...newTouched }));

    const nameError = validateField('fullName', formData.fullName);
    const emailError = validateField('email', formData.email);
    const serviceError = validateField('service', formData.service);
    const detailsError = validateField('projectDetails', formData.projectDetails);

    const newErrors: Record<string, string> = {};
    if (nameError) newErrors.fullName = nameError;
    if (emailError) newErrors.email = emailError;
    if (serviceError) newErrors.service = serviceError;
    if (detailsError) newErrors.projectDetails = detailsError;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setStatus('loading');
    setServerMessage('');

    let sentSuccessfully = false;

    // 1. Try local/configured backend endpoint first
    try {
      const apiUrl = import.meta.env.VITE_API_URL 
        ? `${import.meta.env.VITE_API_URL}/api/contact`
        : '/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        sentSuccessfully = true;

        // If backend was in simulation mode (no SMTP configured), also send via direct mailbox delivery
        if (result.simulated) {
          try {
            await fetch('https://formsubmit.co/ajax/hello@codemarioinfotech.com', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({
                name: formData.fullName,
                email: formData.email,
                phone: formData.phone || 'Not provided',
                company: formData.company || 'Not provided',
                service: formData.service,
                budget: formData.budget,
                message: formData.projectDetails,
                _subject: `New Website Inquiry - Codemario Infotech (${formData.service})`,
                _template: 'table',
                _captcha: 'false',
              }),
            });
          } catch (directErr) {
            console.log('[InquiryForm] Direct mailbox fallback notice:', directErr);
          }
        }
      }
    } catch (backendErr) {
      console.log('[InquiryForm] Backend unavailable, routing directly to mailbox:', backendErr);
    }

    // 2. If backend was unavailable, dispatch directly to hello@codemarioinfotech.com
    if (!sentSuccessfully) {
      try {
        const directResponse = await fetch('https://formsubmit.co/ajax/hello@codemarioinfotech.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            company: formData.company || 'Not provided',
            service: formData.service,
            budget: formData.budget,
            message: formData.projectDetails,
            _subject: `New Website Inquiry - Codemario Infotech (${formData.service})`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        const directResult = await directResponse.json();
        if (directResponse.ok || directResult.success) {
          sentSuccessfully = true;
        }
      } catch (err: any) {
        console.error('[InquiryForm] Direct email dispatch error:', err);
      }
    }

    if (sentSuccessfully) {
      setStatus('success');
      setServerMessage(
        'Thank you! Your inquiry has been sent directly to hello@codemarioinfotech.com. We will contact you soon.'
      );
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: 'Not decided yet',
        projectDetails: '',
        website_url: '',
      });
      setTouched({});
      setErrors({});
    } else {
      setStatus('error');
      setServerMessage(
        'Unable to send inquiry automatically. Please email us directly at hello@codemarioinfotech.com.'
      );
    }
  };

  return (
    <section id="inquiry" className="py-24 sm:py-32 bg-black text-white border-b border-[#222222] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#141414]">
            <span>Start a Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-4">
            Tell Us About Your Project.
          </h2>
          <p className="text-base text-[#AAAAAA] leading-relaxed">
            Fill out the inquiry form below with your requirements. Inquiries land directly in our inbox at <strong className="text-white">hello@codemarioinfotech.com</strong> and we respond within 24 business hours.
          </p>
        </div>

        {/* Success Alert Banner */}
        {status === 'success' && (
          <div
            className="mb-8 p-6 bg-[#161616] text-white border-2 border-white flex items-start gap-4 animate-in fade-in duration-300"
            role="alert"
          >
            <CheckCircle className="w-6 h-6 text-white shrink-0 mt-0.5" />
            <div className="text-left">
              <h3 className="text-base font-bold uppercase tracking-wider mb-1">
                Inquiry Received
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed mb-4">
                {serverMessage}
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          </div>
        )}

        {/* Error Alert Banner */}
        {status === 'error' && (
          <div
            className="mb-8 p-6 bg-[#161616] text-white border-2 border-[#555555] flex items-start gap-4"
            role="alert"
          >
            <AlertCircle className="w-6 h-6 text-white shrink-0 mt-0.5" />
            <div className="text-left">
              <h3 className="text-base font-bold uppercase tracking-wider mb-1">
                Submission Notice
              </h3>
              <p className="text-sm text-[#CCCCCC] leading-relaxed mb-3">
                {serverMessage}
              </p>
              <p className="text-xs font-mono text-[#888888]">
                You can also email us directly at{' '}
                <a
                  href="mailto:hello@codemarioinfotech.com"
                  className="font-bold underline text-white"
                >
                  hello@codemarioinfotech.com
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Form Container */}
        {status !== 'success' && (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-[#111111] border border-[#262626] p-8 sm:p-12 shadow-2xl text-left"
          >
            {/* Anti-spam Honeypot Field */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website_url">Leave this field blank</label>
              <input
                type="text"
                id="website_url"
                name="website_url"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website_url}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
                >
                  Full Name <span className="text-white font-extrabold">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  className={`w-full min-h-[48px] px-4 py-3 text-sm bg-[#181818] border text-white placeholder:text-[#666666] focus:outline-none transition-colors ${
                    errors.fullName
                      ? 'border-white bg-[#221818]'
                      : 'border-[#333333] focus:border-white'
                  }`}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-white font-semibold">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
                >
                  Email Address <span className="text-white font-extrabold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="e.g. rahul@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full min-h-[48px] px-4 py-3 text-sm bg-[#181818] border text-white placeholder:text-[#666666] focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-white bg-[#221818]'
                      : 'border-[#333333] focus:border-white'
                  }`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-white font-semibold">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
                >
                  Phone Number <span className="text-xs font-normal text-[#888888]">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full min-h-[48px] px-4 py-3 text-sm bg-[#181818] border border-[#333333] text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Company / Brand */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
                >
                  Company / Brand <span className="text-xs font-normal text-[#888888]">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  placeholder="e.g. Acme Corp"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full min-h-[48px] px-4 py-3 text-sm bg-[#181818] border border-[#333333] text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Service Interested In */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
                >
                  Service Interested In <span className="text-white font-extrabold">*</span>
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    className={`w-full min-h-[48px] px-4 py-3 text-sm bg-[#181818] border text-white focus:outline-none transition-colors appearance-none cursor-pointer ${
                      errors.service
                        ? 'border-white bg-[#221818]'
                        : 'border-[#333333] focus:border-white'
                    }`}
                  >
                    <option value="" className="bg-[#181818] text-[#888888]">-- Select a Service --</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#181818] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white font-bold text-xs">
                    ▼
                  </div>
                </div>
                {errors.service && (
                  <p id="service-error" className="mt-1.5 text-xs text-white font-semibold">
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Budget Range */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
                >
                  Budget Range <span className="text-xs font-normal text-[#888888]">(Optional)</span>
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full min-h-[48px] px-4 py-3 text-sm bg-[#181818] border border-[#333333] text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    {budgetOptions.map((bOpt) => (
                      <option key={bOpt} value={bOpt} className="bg-[#181818] text-white">
                        {bOpt}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white font-bold text-xs">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="mb-8">
              <label
                htmlFor="projectDetails"
                className="block text-xs font-bold uppercase tracking-wider text-white mb-2"
              >
                Project Details <span className="text-white font-extrabold">*</span>
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                rows={5}
                required
                placeholder="Please describe your current business, project requirements, timeline, and what you aim to achieve..."
                value={formData.projectDetails}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.projectDetails}
                aria-describedby={errors.projectDetails ? 'details-error' : undefined}
                className={`w-full p-4 text-sm bg-[#181818] border text-white placeholder:text-[#666666] focus:outline-none transition-colors ${
                  errors.projectDetails
                    ? 'border-white bg-[#221818]'
                    : 'border-[#333333] focus:border-white'
                }`}
              />
              {errors.projectDetails && (
                <p id="details-error" className="mt-1.5 text-xs text-white font-semibold">
                  {errors.projectDetails}
                </p>
              )}
            </div>

            {/* Submit Button (High Contrast White) */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#262626]">
              <p className="text-xs font-mono text-[#888888] text-left">
                * Required fields • Delivered directly to hello@codemarioinfotech.com
              </p>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto min-h-[48px] px-10 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-[#E5E5E5] disabled:bg-[#444444] disabled:text-[#888888] disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
