import React from 'react';
import { Home, Sparkles, Shield, Clock, Award, CheckCircle2 } from 'lucide-react';
import { RegionData } from '@/src/types/index';

interface AboutProps {
  data: RegionData;
}

export const AboutSection: React.FC<AboutProps> = ({ data }) => {
  const highlights = [
    {
      title: '이동 없는 완벽한 휴식',
      description: '추운 날씨나 궂은 날씨, 피곤한 몸을 이끌고 샵을 찾아 헤맬 필요 없이 나만의 공간에서 편안하게 관리받습니다.',
    },
    {
      title: '위생 전용 매트리스 & 1회용품',
      description: '소독된 전용 매트리스와 개별 포장된 1회용 청결 소모품, 타월을 모두 지참하므로 별도 준비물 없이 쾌적합니다.',
    },
    {
      title: `${data.cityKo} 전지역 상시 대기 시스템`,
      description: data.areas && data.areas.length >= 6
        ? `${data.areas.slice(0, 6).map(a => a.name.split('/')[0].trim()).join(', ')} 등 주요 거점에 상주 인력이 분산 배치되어 지체 없는 배차가 가능합니다.`
        : `${data.cityKo} 주요 거점에 상주 인력이 분산 배치되어 지체 없는 신속 배차가 가능합니다.`,
    },
    {
      title: '투명하고 안전한 전액 후불 결제',
      description: '선입금이나 보증금을 절대 요구하지 않는 100% 후불 원칙으로 처음 이용하시는 분도 걱정 없이 예약하실 수 있습니다.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#13171d] text-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/30 text-rose-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CHERRY HOME THAI SPECIAL CARE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            {data.introTitle}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {data.introLead}
          </p>
        </div>

        {/* Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Context Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#181d26] border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center gap-3 border-b border-zinc-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {data.cityKo}출장마사지 체리홈타이의 약속
                  </h3>
                  <p className="text-xs text-zinc-400">
                    안전하고 품격 있는 1:1 맞춤형 웰니스 테라피
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {data.introParagraphs.map((para, idx) => (
                  <p key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                    <span>{para}</span>
                  </p>
                ))}
              </div>

              {/* Security & Service Checklist */}
              <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>선입금 요구 ZERO</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>전용 매트리스 무상 지참</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>천연 고급 아로마 오일</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{data.cityKo} 전지역 30분 도착</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-[#181d26] hover:bg-[#1f2532] border border-zinc-800/90 hover:border-rose-900/40 p-5 rounded-xl transition-all duration-200 shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-400 font-bold text-xs group-hover:border-rose-500/40">
                    0{index + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
