import React from 'react';
import { CalendarCheck, Sparkles, Phone, ShieldCheck, ArrowRight } from 'lucide-react';
import { RegionData, StepItem } from '@/src/types/index';

interface ProcessProps {
  data: RegionData;
}

export const ProcessTimeline: React.FC<ProcessProps> = ({ data }) => {
  return (
    <section id="process" className="py-20 bg-[#0d0f12] text-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/30 text-rose-300 text-xs font-semibold">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>SIMPLE 6-STEP BOOKING PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            체리홈타이 간편 이용 방법
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            누구나 1분 만에 예약하고 내 방에서 편안하게 관리받을 수 있는 단계별 이용 안내입니다.
          </p>
        </div>

        {/* Timeline Grid (6 Steps) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {data.steps.map((item: StepItem, index: number) => {
            const isLast = index === data.steps.length - 1;

            return (
              <div
                key={index}
                className="bg-[#161a22] border border-zinc-800/90 hover:border-zinc-700 p-6 rounded-2xl transition-all duration-300 shadow-lg relative flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                    <span className="text-xs font-black tracking-widest text-rose-400 bg-rose-950/60 px-2.5 py-1 rounded-md border border-rose-800/40">
                      {item.step}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">
                      STEP 0{index + 1} / 06
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400">
                  {index === 2 ? (
                    <span className="text-rose-400 font-semibold flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5" /> 24시 연중무휴 접수
                    </span>
                  ) : index === 5 ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% 후불 결제
                    </span>
                  ) : (
                    <span className="text-zinc-400">간편 비대면 진행</span>
                  )}
                  
                  {!isLast && (
                    <ArrowRight className="w-4 h-4 text-zinc-400 hidden lg:block group-hover:text-rose-400 transition-colors" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA Reminder */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 px-6 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
            <span className="text-white font-bold">지금 바로 힐링이 필요하신가요?</span>
            <a
              href={`tel:${data.phone}`}
              className="text-rose-400 hover:text-rose-300 font-bold underline underline-offset-4"
            >
              전화 {data.phoneFormatted} 바로 연결 →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
