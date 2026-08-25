import React from 'react';
import { Phone, MessageSquare, Send, ShieldCheck, Clock, MapPin, Sparkles, Award } from 'lucide-react';
import { RegionData } from '@/src/types/index';

interface HeroProps {
  data: RegionData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#0b0d10] via-[#0f1217] to-[#13171d]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-10 w-[300px] h-[300px] bg-zinc-800/15 rounded-full blur-3xl pointer-events-none" />
      
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-semibold tracking-wide backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>24HOURS PREMIUM HOME CARE · 100% 후불제</span>
          </div>

          {/* Single H1 on the entire page */}
          <h1
            id="main-h1-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] font-sans"
          >
            <span className="block text-zinc-400 text-lg sm:text-xl md:text-2xl font-medium tracking-normal mb-2">
              프라이빗 힐링 케어의 새로운 기준
            </span>
            <span className="text-white">{data.mainKeyword} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-rose-300 to-rose-500">
              체리홈타이
            </span>
          </h1>

          {/* Subtitle / Paragraph with natural keywords and clear service guarantees */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-2.5xl mx-auto font-normal">
            {data.heroParagraph}
          </p>

          {/* Trust Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 pt-2 text-xs text-zinc-400">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
              <Clock className="w-3.5 h-3.5 text-rose-400" />
              <span>365일 24시간 연중무휴</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>선입금 0원 · 전액 후불제</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{data.cityKo} 전지역 신속 30분 배차</span>
            </div>
          </div>

          {/* 3 Primary CTAs */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto">
            {/* Phone Booking */}
            <a
              id="hero-cta-call"
              href={`tel:${data.phone}`}
              className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r from-rose-600 via-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-base shadow-xl shadow-rose-950/60 border border-rose-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="w-8 h-8 rounded-lg bg-black/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-rose-200 font-medium uppercase leading-tight">전화 1초 연결</div>
                <div className="text-sm font-bold tracking-wide">전화예약</div>
              </div>
            </a>

            {/* SMS Booking */}
            <a
              id="hero-cta-sms"
              href={`sms:${data.phone}?body=${encodeURIComponent(data.smsMessage)}`}
              className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-bold text-base shadow-lg shadow-black/40 border border-zinc-700/80 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Send className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-zinc-400 font-medium uppercase leading-tight">실시간 문자상담</div>
                <div className="text-sm font-bold tracking-wide">문자예약</div>
              </div>
            </a>

            {/* KakaoTalk Booking */}
            <a
              id="hero-cta-kakao"
              href={data.kakaoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-base shadow-lg shadow-yellow-950/20 border border-yellow-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center">
                <MessageSquare className="w-4 h-4 text-[#191919]" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-[#554a00] font-medium uppercase leading-tight">24H 1:1 채팅</div>
                <div className="text-sm font-bold tracking-wide">카카오톡 예약</div>
              </div>
            </a>
          </div>

          {/* Quick Notice */}
          <div className="pt-2 text-xs text-zinc-400 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>원하시는 장소(자택·오피스텔·호텔)와 코스를 말씀해주시면 즉시 배차됩니다.</span>
          </div>

        </div>
      </div>
    </section>
  );
};
