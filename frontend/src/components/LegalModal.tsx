import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | null;

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="bg-white border-2 border-black max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl relative text-left">
        {/* Header */}
        <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between bg-[#F7F7F7]">
          <div className="flex items-center gap-2">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-black" />
            ) : (
              <FileText className="w-5 h-5 text-black" />
            )}
            <h2 id="legal-modal-title" className="text-xl font-bold uppercase tracking-tight text-black">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-black hover:bg-black hover:text-white border border-black transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-[#444444] space-y-4 leading-relaxed font-normal">
          {type === 'privacy' ? (
            <>
              <p className="font-semibold text-black">Last updated: September 2026</p>
              <p>
                At <strong>Codemario Infotech</strong>, we respect your privacy and are committed to protecting any personal information you share with us through our website.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">1. Information We Collect</h3>
              <p>
                When you submit an inquiry through our contact form, we collect your name, email address, phone number, company name, service interest, budget, and project details. This information is solely used to evaluate your business requirements and communicate with you regarding our services.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">2. How We Use Your Data</h3>
              <p>
                We do not sell, trade, or rent your personal information to third parties. Information is used exclusively to respond to inquiries, provide customized proposals, and fulfill agreed digital services.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">3. Security Standards</h3>
              <p>
                All data transmission between your browser and our backend server utilizes industry-standard encryption protocols. We maintain administrative safeguards to protect your personal details against unauthorized access.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">4. Contact Inquiries</h3>
              <p>
                For questions regarding this policy or to request removal of your submission record, contact us at{' '}
                <a href="mailto:hello@codemarioinfotech.com" className="font-bold underline text-black">
                  hello@codemarioinfotech.com
                </a>.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-black">Last updated: September 2026</p>
              <p>
                Welcome to <strong>Codemario Infotech</strong>. By accessing our website and engaging our services, you agree to comply with and be bound by the following terms.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">1. Scope of Services</h3>
              <p>
                Codemario Infotech provides digital marketing, brand identity design, Android software development, and generative AI creative services. Specific project timelines, milestones, and deliverables are governed by individual client proposals and service agreements.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">2. Intellectual Property</h3>
              <p>
                All proprietary design systems, code samples, and branding displayed on this site are the intellectual property of Codemario Infotech. Client deliverables transferred upon full compensation remain the property of the respective client as specified in project contracts.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">3. Limitation of Liability</h3>
              <p>
                Codemario Infotech exercises professional diligence in executing marketing and development projects. However, third-party platform algorithms (e.g. Meta Ads, Google Ads, Play Store policies) remain subject to their respective independent operator guidelines.
              </p>
              <h3 className="text-base font-bold text-black uppercase pt-2">4. Inquiries & Governance</h3>
              <p>
                Direct inquiries regarding project terms to{' '}
                <a href="mailto:hello@codemarioinfotech.com" className="font-bold underline text-black">
                  hello@codemarioinfotech.com
                </a>.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E5E5E5] bg-[#F7F7F7] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#222222] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
