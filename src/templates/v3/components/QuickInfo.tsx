import React from 'react';
import { Clock, ShieldCheck, MapPin, Smartphone } from 'lucide-react';
import { RegionData } from '@/src/types/index';

interface QuickInfoProps {
  data: RegionData;
}

export const QuickInfo: React.FC<QuickInfoProps> = ({ data }) => {
  const items = [
    {
      icon: Clock,
      highlight: '24H',
      title: '언제든 예약 상담',
      desc: '365일 야간·새벽 상시 배차',
      accent: 'text-rose-400',
      border: 'border-rose-900/30'
    },
    {
      icon: ShieldCheck,
      highlight: '100% 후불제',
      title: '관리 후 현장 결제',
      desc: '선입금·보증금 일체 0원',
      accent: 'text-emerald-400',
      border: 'border-emerald-900/30'
    },
    {
      icon: MapPin,
      highlight: `${data.cityKo} 전지역`,
      title: '30분 내외 방문',
      desc: data.areas && data.areas.length >= 4 
        ? `${data.areas.slice(0, 4).map(a => a.name.split('/')[0].trim()).join('·')} 신속도착`
        : `${data.cityKo} 전지역 어디든 신속도착`,
      accent: 'text-rose-400',
      border: 'border-rose-900/30'
    },
    {
      icon: Smartphone,
      highlight: '3-Way 간편예약',
      title: '전화 · 문자 · 카톡',
      desc: '원하시는 수단으로 1초 접수',
      accent: 'text-amber-400',
      border: 'border-amber-900/30'
    }
  ];

  return (
    <section id="quick-info-section" className="py-6 bg-[#0e1116] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#161a22] hover:bg-[#1c222d] border border-zinc-800/80 hover:border-zinc-700 p-4 rounded-xl transition-all duration-200 shadow-md group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:scale-105 transition-transform">
                    <Icon className={`w-4 h-4 ${item.accent}`} />
                  </div>
                  <span className={`text-base font-extrabold tracking-tight ${item.accent}`}>
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-100 mb-0.5">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-zinc-400 font-normal leading-snug">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
