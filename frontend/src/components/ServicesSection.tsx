import React from 'react';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../data/services';
import { Target, Share2, Palette, Smartphone, Video, Cpu, ArrowUpRight, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

export const ServicesSection: React.FC = () => {
  const handleScrollToInquiry = (serviceName: string) => {
    const elem = document.querySelector('#inquiry');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('codemario:selectService', { detail: { service: serviceName } })
      );
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A0A0A] text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#141414]">
            <span>Capabilities & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-5">
            Everything You Need to Grow Online.
          </h2>
          <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed">
            From customer acquisition to creative production and technology, we bring strategy, design, marketing and development together under one roof.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative bg-[#121212] border border-[#262626] p-8 flex flex-col justify-between transition-all duration-300 hover:border-white hover:bg-[#161616] hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#222222]">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#777777] group-hover:text-white transition-colors">
                    {service.number} // {service.category.toUpperCase()}
                  </span>
                  <div className="w-10 h-10 bg-[#1A1A1A] border border-[#333333] flex items-center justify-center text-white group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                    {iconMap[service.iconName] || <Target className="w-5 h-5" />}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:underline decoration-1 underline-offset-4">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#AAAAAA] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-[#1F1F1F] mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] block mb-3">
                    Includes:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#DDDDDD]">
                        <Check className="w-3.5 h-3.5 text-white shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Link */}
              <button
                type="button"
                onClick={() => handleScrollToInquiry(service.title)}
                className="w-full mt-auto pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#CCCCCC] group-hover:text-white transition-colors"
                aria-label={`Inquire about ${service.title}`}
              >
                <span>Request Proposal</span>
                <div className="w-6 h-6 rounded-none bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
