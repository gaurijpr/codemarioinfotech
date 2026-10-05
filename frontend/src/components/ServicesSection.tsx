import React from 'react';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../data/services';
import { useTheme } from '../context/ThemeContext';
import { Target, Share2, Palette, Smartphone, Video, Cpu, ArrowUpRight, Check, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-5 h-5" />,
  Share2: <Share2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
};

export const ServicesSection: React.FC = () => {
  const { themeMode } = useTheme();
  const isHok = themeMode === 'hok-home3';

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
    <section
      id="services"
      className={`py-24 sm:py-32 border-b transition-colors duration-300 ${
        isHok
          ? 'bg-[#06060E] border-[#684DF4]/20 text-white'
          : 'bg-[#0A0A0A] border-[#222222] text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase transition-all ${
              isHok
                ? 'rounded-full bg-[#684DF4]/15 text-[#A855F7] border border-[#684DF4]/40'
                : 'border border-[#333333] text-white bg-[#141414]'
            }`}
          >
            {isHok ? <Sparkles className="w-3.5 h-3.5 text-[#684DF4]" /> : null}
            <span>Capabilities & Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase leading-tight mb-5">
            Everything You Need to Grow{' '}
            <span className={isHok ? 'text-gradient-hok' : 'text-white'}>Online.</span>
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isHok ? 'text-[#C0C0E0]' : 'text-[#AAAAAA]'
            }`}
          >
            From customer acquisition to creative production and technology, we bring strategy, design, marketing and development together under one roof.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`group relative p-8 flex flex-col justify-between transition-all duration-300 ${
                isHok
                  ? 'bg-[#0D0D1F] border border-[#684DF4]/20 rounded-3xl hover:border-[#684DF4] hover:shadow-hok-card hover:-translate-y-1'
                  : 'bg-[#121212] border border-[#262626] hover:border-white hover:bg-[#161616] hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)]'
              }`}
            >
              <div>
                {/* Header: Number & Icon */}
                <div
                  className={`flex items-center justify-between pb-6 mb-6 border-b ${
                    isHok ? 'border-[#684DF4]/20' : 'border-[#222222]'
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold tracking-widest ${
                      isHok ? 'text-[#A855F7] px-3 py-1 rounded-full bg-[#684DF4]/10' : 'text-[#777777] group-hover:text-white'
                    }`}
                  >
                    {service.number} // {service.category.toUpperCase()}
                  </span>
                  <div
                    className={`w-11 h-11 flex items-center justify-center transition-all ${
                      isHok
                        ? 'bg-gradient-hok text-white rounded-2xl shadow-hok-glow group-hover:scale-110'
                        : 'bg-[#1A1A1A] border border-[#333333] text-white group-hover:bg-white group-hover:text-black group-hover:border-white'
                    }`}
                  >
                    {iconMap[service.iconName] || <Target className="w-5 h-5" />}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#A855F7] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isHok ? 'text-[#B0B0D0]' : 'text-[#AAAAAA]'
                  }`}
                >
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div
                  className={`pt-4 mb-8 border-t ${
                    isHok ? 'border-[#684DF4]/20' : 'border-[#1F1F1F]'
                  }`}
                >
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider block mb-3 ${
                      isHok ? 'text-[#8B5CF6]' : 'text-[#666666]'
                    }`}
                  >
                    Includes:
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#DDDDDD]">
                        <Check
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isHok ? 'text-[#A855F7]' : 'text-white'
                          }`}
                        />
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
                className={`w-full mt-auto pt-4 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-all ${
                  isHok
                    ? 'border-[#684DF4]/20 text-[#C5C5E8] hover:text-white'
                    : 'border-[#222222] text-[#CCCCCC] group-hover:text-white'
                }`}
                aria-label={`Inquire about ${service.title}`}
              >
                <span>Request Proposal</span>
                <div
                  className={`w-7 h-7 flex items-center justify-center transition-transform group-hover:translate-x-1 ${
                    isHok
                      ? 'bg-gradient-hok text-white rounded-full shadow-hok-glow'
                      : 'bg-white text-black'
                  }`}
                >
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
