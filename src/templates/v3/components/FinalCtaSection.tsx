import React from 'react';
import { Phone, MessageSquare, Send, Sparkles, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { RegionData } from '@/src/types/index';

interface FinalCtaProps {
  data: RegionData;
}

export const FinalCtaSection: React.FC<FinalCtaProps> = ({ data }) => {
  return (
    <section id="final-cta" className="py-20 bg-gradient-to-b from-[#0d0f12] via-[#12161e] to-[#0a0c0f] text-zinc-100 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-950/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#181d26] to-[#12161e] border border-rose-900/40 rounded-3xl p-8 sm:p-12 text-center space-y-7 shadow-2xl shadow-rose-950/20">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24HOURS RESERVATION AVAILABLE</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {data.cityKo}에서 편안한 관리가 필요한 순간
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
              복잡한 예약 절차 없이, 전화·문자·카톡으로 주소만 남겨주시면 {data.cityKo} 전지역 30분 내외로 전문 테라피스트가 찾아갑니다.
            </p>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% 안심 후불제
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-400" />
              24시간 상시 상담 및 배차
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-400" />
              {data.cityKo} 전지역 30분 신속도착
            </span>
          </div>

          {/* 3 Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-xl mx-auto pt-2">
            <a
              id="final-cta-call"
              href={`tel:${data.phone}`}
              className="flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-sm shadow-xl shadow-rose-950/60 border border-rose-500/40 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>전화예약 바로연결</span>
            </a>

            <a
              id="final-cta-sms"
              href={`sms:${data.phone}?body=${encodeURIComponent(data.smsMessage)}`}
              className="flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm border border-zinc-700 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4 text-rose-400" />
              <span>문자 간편예약</span>
            </a>

            <a
              id="final-cta-kakao"
              href={data.kakaoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm border border-yellow-400/50 shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>카카오톡 예약</span>
            </a>
          </div>

          <div className="text-[11px] text-zinc-400 font-mono">
            직통 예약센터: <span className="text-zinc-300 font-bold">{data.phoneFormatted}</span> · 365일 24시간 연중무휴
          </div>

        </div>
      </div>
    </section>
  );
};
