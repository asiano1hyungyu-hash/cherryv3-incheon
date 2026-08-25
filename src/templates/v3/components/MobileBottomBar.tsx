import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { RegionData } from '@/src/types/index';

interface MobileBottomBarProps {
  data: RegionData;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ data }) => {
  return (
    <div
      id="mobile-bottom-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0f12]/95 backdrop-blur-md border-t border-zinc-800 p-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl shadow-black"
    >
      <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto">
        
        {/* Phone Button */}
        <a
          id="mobile-bar-call"
          href={`tel:${data.phone}`}
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white font-bold text-xs shadow-md shadow-rose-950/60 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span className="truncate">전화예약</span>
        </a>

        {/* SMS Button */}
        <a
          id="mobile-bar-sms"
          href={`sms:${data.phone}?body=${encodeURIComponent(data.smsMessage)}`}
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-bold text-xs border border-zinc-700 active:scale-95 transition-transform"
        >
          <Send className="w-4 h-4 text-rose-400 shrink-0" />
          <span className="truncate">문자예약</span>
        </a>

        {/* Kakao Button */}
        <a
          id="mobile-bar-kakao"
          href={data.kakaoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center justify-center gap-1.5 py-3 px-2 rounded-xl bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs border border-yellow-400/60 shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span className="truncate">카카오톡</span>
        </a>

      </div>
    </div>
  );
};
