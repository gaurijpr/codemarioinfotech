import React, { useState } from 'react';
import {
  portfolioProjects,
  portfolioCategories,
} from '../data/portfolio';
import type { PortfolioCategory, ProjectItem } from '../data/portfolio';
import { ArrowUpRight, Video, Layers, X, Check } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  // Render minimal monochrome graphic based on visualType
  const renderVisualMockup = (project: ProjectItem) => {
    switch (project.visualType) {
      case 'chart':
        return (
          <div className="w-full h-48 bg-[#0D0D0D] text-white p-5 flex flex-col justify-between border-b border-[#222222]">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#888888]">
              <span>ATTRIBUTION ENGINE</span>
              <span className="text-white bg-[#1E1E1E] px-1.5 py-0.5 border border-[#333333]">META + GOOGLE</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#AAAAAA]">CAC Reduction</span>
                <span className="text-white font-bold">-38.4%</span>
              </div>
              <div className="w-full bg-[#1E1E1E] h-2">
                <div className="bg-white h-2 w-3/4" />
              </div>
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#AAAAAA]">Lead Volume</span>
                <span className="text-white font-bold">+210%</span>
              </div>
              <div className="w-full bg-[#1E1E1E] h-2">
                <div className="bg-white h-2 w-5/6" />
              </div>
            </div>
            <div className="text-[10px] font-mono text-[#666666]">ANALYTICS REPORT SAMPLE</div>
          </div>
        );

      case 'mobile':
        return (
          <div className="w-full h-48 bg-[#0D0D0D] p-4 flex items-center justify-center border-b border-[#222222]">
            <div className="w-36 bg-black text-white p-3 rounded-lg border-2 border-[#444444] shadow-xl">
              <div className="w-6 h-1 bg-white/40 mx-auto rounded mb-2" />
              <div className="flex items-center justify-between text-[8px] font-mono text-[#888888] mb-2">
                <span>ANDROID NATIVE</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              </div>
              <div className="h-4 bg-white/20 rounded mb-1.5" />
              <div className="h-3 bg-white/10 rounded w-4/5 mb-2" />
              <div className="py-1 bg-white text-black text-[9px] font-bold text-center uppercase tracking-wider">
                Active Session
              </div>
            </div>
          </div>
        );

      case 'identity':
        return (
          <div className="w-full h-48 bg-[#0D0D0D] p-6 flex flex-col items-center justify-center border-b border-[#222222] relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />
            <div className="w-16 h-16 border-2 border-white flex items-center justify-center font-black text-2xl tracking-tighter text-white">
              ID
            </div>
            <span className="text-[10px] font-mono tracking-widest uppercase mt-3 text-[#AAAAAA]">
              Vector Spec System
            </span>
          </div>
        );

      case 'ai-video':
        return (
          <div className="w-full h-48 bg-[#0D0D0D] text-white p-5 flex flex-col justify-between border-b border-[#222222]">
            <div className="flex justify-between items-center text-[10px] font-mono text-[#888888]">
              <span className="flex items-center gap-1">
                <Video className="w-3 h-3 text-white" />
                <span>GEN-AI SYNTHESIS</span>
              </span>
              <span className="text-white border border-white/40 px-1 text-[9px]">4K UHD</span>
            </div>
            <div className="my-auto border border-dashed border-white/30 p-3 text-center">
              <span className="text-[11px] font-mono text-[#CCCCCC]">
                [Scene Keyframe Matrix • 60 FPS]
              </span>
            </div>
            <div className="flex justify-between text-[9px] font-mono text-[#777777]">
              <span>PROMPT COMPILATION: OK</span>
              <span className="text-white">RENDER: 100%</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-48 bg-[#0D0D0D] p-5 flex flex-col justify-center items-center border-b border-[#222222]">
            <Layers className="w-8 h-8 text-white mb-2" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#AAAAAA]">
              {project.categoryLabel} Prototype
            </span>
          </div>
        );
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 bg-black text-white border-b border-[#222222]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#333333] text-[11px] font-bold tracking-widest text-white uppercase bg-[#141414]">
              <span>Portfolio & Case Models</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight mb-4">
              Our Work.
            </h2>
            <p className="text-base sm:text-lg text-[#AAAAAA] leading-relaxed">
              Explore sample prototypes, campaign architectures, and production implementations across our core domains.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            className="flex flex-wrap gap-2 mt-8 md:mt-0"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeFilter === cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === cat.id
                    ? 'bg-white text-black'
                    : 'bg-[#121212] text-[#888888] border border-[#262626] hover:text-white hover:border-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111111] border border-[#262626] flex flex-col justify-between transition-all duration-300 hover:border-white hover:bg-[#141414] hover:shadow-2xl group"
            >
              <div>
                {/* Visual Placeholder Graphic */}
                {renderVisualMockup(project)}

                {/* Card Content */}
                <div className="p-6 text-left">
                  {/* Category & Year */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] mb-2">
                    <span className="uppercase font-bold tracking-wider text-white">
                      {project.categoryLabel}
                    </span>
                    <span>{project.year}</span>
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:underline underline-offset-4">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#AAAAAA] leading-relaxed mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.deliverables.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#1A1A1A] border border-[#333333] text-[#CCCCCC]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Breakdown Trigger */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 bg-[#1A1A1A] border border-[#333333] hover:border-white hover:bg-white hover:text-black transition-all text-xs font-semibold uppercase tracking-wider flex items-center justify-between text-white"
                >
                  <span>Inspect Specifications</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Easy replace notification */}
        <div className="mt-12 text-center text-xs font-mono text-[#777777] border-t border-[#222222] pt-6">
          <span>// Content management ready: Portfolio items are configured via </span>
          <code className="text-white font-semibold bg-[#161616] px-1.5 py-0.5 border border-[#333333]">
            src/data/portfolio.ts
          </code>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="bg-[#121212] border-2 border-white text-white max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-left">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-white hover:bg-white hover:text-black border border-[#444444] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono uppercase tracking-widest text-[#888888] block mb-1">
              {selectedProject.categoryLabel} // Case Overview
            </span>
            <h3 id="modal-project-title" className="text-2xl font-black uppercase text-white mb-4">
              {selectedProject.name}
            </h3>

            <p className="text-sm text-[#CCCCCC] leading-relaxed mb-6 font-normal">
              {selectedProject.fullOverview}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white mb-2">
                  Technical & Execution Highlights:
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#AAAAAA]">
                      <Check className="w-3.5 h-3.5 text-white shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white mb-2">
                  Scope Deliverables:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((del, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 bg-[#1E1E1E] border border-[#333333] text-white"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#262626] flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 border border-[#444444] text-xs font-semibold uppercase tracking-wider hover:bg-[#1E1E1E] transition-colors text-white"
              >
                Close
              </button>
              <a
                href="#inquiry"
                onClick={() => {
                  setSelectedProject(null);
                  document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-[#E5E5E5] transition-colors"
              >
                Inquire Similar Solution
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
