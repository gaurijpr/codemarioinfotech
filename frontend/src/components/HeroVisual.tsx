import React from 'react';
import { Activity, Cpu, TrendingUp, Sparkles, Bot } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto select-none" aria-hidden="true">
      {/* Background Architectural Grid Accent */}
      <div className="absolute -inset-4 bg-[#F7F7F7] border border-[#E5E5E5] -rotate-1 pointer-events-none" />
      
      {/* Main Agency Stack Card */}
      <div className="relative bg-black text-white p-6 sm:p-8 shadow-2xl border border-[#222222]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
            <span className="text-[11px] font-mono text-[#888888] ml-2">core.engine.ts</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#AAAAAA] uppercase tracking-wider bg-[#1A1A1A] px-2.5 py-1 border border-[#333333]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Active Stack</span>
          </div>
        </div>

        {/* Abstract Architectural Diagram */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-3">
            {/* Box 1: Marketing / Performance */}
            <div className="p-3.5 bg-[#111111] border border-[#262626] transition-all hover:border-white/40">
              <div className="flex items-center justify-between text-xs text-[#888888] mb-1.5 font-mono">
                <span>ACQUISITION</span>
                <TrendingUp className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-xl font-bold tracking-tight text-white">Meta + Google</div>
              <div className="text-[11px] text-[#777777] mt-0.5">High-intent conversion loops</div>
            </div>

            {/* Box 2: AI Content & Automation (Replaced Android Apps as requested) */}
            <div className="p-3.5 bg-[#111111] border border-[#262626] transition-all hover:border-white/40">
              <div className="flex items-center justify-between text-xs text-[#888888] mb-1.5 font-mono">
                <span>AUTOMATION</span>
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="text-xl font-bold tracking-tight text-white leading-tight">AI Content & Automation</div>
              <div className="text-[11px] text-[#777777] mt-1">Smart workflows & LLMs</div>
            </div>
          </div>

          {/* Box 3: AI Neural Node Visual */}
          <div className="p-3.5 bg-[#111111] border border-[#262626] transition-all hover:border-white/40">
            <div className="flex items-center justify-between text-xs text-[#888888] mb-2 font-mono">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-white" />
                <span>AI PIPELINE RUNTIME</span>
              </span>
              <span className="text-[10px] text-white bg-[#222222] px-1.5 py-0.5 font-mono">v3.8</span>
            </div>
            
            {/* Node Flow Diagram */}
            <div className="flex items-center justify-between text-[11px] font-mono text-[#AAAAAA] bg-[#161616] p-2.5 border border-[#222222]">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 border border-white" />
                <span>Creative Prompt</span>
              </div>
              <span className="text-white">→</span>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-white" />
                <span>Generative AI</span>
              </div>
              <span className="text-white">→</span>
              <div className="flex items-center gap-1 text-white font-semibold">
                <span>High-ROAS Video</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live Metrics Row */}
        <div className="pt-4 border-t border-[#262626] flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-white" />
            <span className="text-[#888888]">Attribution:</span>
            <span className="text-white font-bold">100% Deterministic</span>
          </div>
          <span className="text-[#666666]">STRICT B&W ARCHITECTURE</span>
        </div>
      </div>

      {/* Floating Card 1: Marketing ROAS Card (Top-Right) */}
      <div className="absolute -top-6 -right-4 sm:-right-8 bg-white border-2 border-black p-3.5 shadow-xl transition-transform hover:-translate-y-1">
        <div className="flex items-center gap-2 mb-1">
          <div className="p-1 bg-black text-white">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666]">Campaign ROAS</span>
        </div>
        <div className="text-2xl font-black tracking-tight text-black">+184.6%</div>
        <div className="text-[10px] text-[#666666] font-mono">Real-time attribution metric</div>
      </div>

      {/* Floating Card 2: AI Content & Automation Component (Bottom-Left) */}
      <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border-2 border-black p-3.5 shadow-xl transition-transform hover:translate-y-1">
        <div className="flex items-center gap-2 mb-1.5">
          <Bot className="w-3.5 h-3.5 text-black" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-black font-semibold">AI Automation</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-black animate-ping" />
          <span className="text-xs font-bold text-black">Workflows Active</span>
        </div>
        <div className="text-[10px] text-[#666666] font-mono mt-1">Prompt Engines • Smart Flows</div>
      </div>

      {/* Floating Card 3: Creative Badge (Bottom-Right) */}
      <div className="hidden sm:flex absolute -bottom-4 right-6 bg-[#F7F7F7] border border-black px-3 py-1.5 items-center gap-2 shadow-md">
        <Sparkles className="w-3 h-3 text-black" />
        <span className="text-[11px] font-semibold tracking-tight text-black">AI Reels & Branding</span>
      </div>
    </div>
  );
};
