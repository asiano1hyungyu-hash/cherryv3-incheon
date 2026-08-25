import React from 'react';
import { Smartphone, Clock, ShieldCheck, Home, Sparkles, Moon, Award } from 'lucide-react';
import { RegionData, FeatureItem } from '@/src/types/index';

interface WhyUsProps {
  data: RegionData;
}

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Clock,
  ShieldCheck,
  Home,
  Sparkles,
  Moon,
};

export const WhyUsSection: React.FC<WhyUsProps> = ({ data }) => {
  return (
    <section id="why" className="py-20 bg-[#13171d] text-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/30 text-rose-300 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>WHY CHOOSE CHERRY HOME THAI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            왜 {data.cityKo}출장마사지는 체리홈타이인가?
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            체리홈타이가 오랜 시간 고객님들께 높은 신뢰와 만족도를 인정받는 6가지 핵심 가치입니다.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.features.map((feature: FeatureItem, index: number) => {
            const Icon = iconMap[feature.iconName] || Sparkles;

            return (
              <div
                key={index}
                className="bg-[#181d26] hover:bg-[#1f2532] border border-zinc-800/80 hover:border-rose-900/50 p-6 rounded-2xl transition-all duration-300 shadow-lg group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:border-rose-500/40 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                      {feature.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
