import React from 'react';
import { Phone, MessageSquare, Shield, Clock, MapPin } from 'lucide-react';
import { RegionData } from '@/src/types/index';

interface FooterProps {
  data: RegionData;
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <footer id="footer-section" className="bg-[#080a0d] border-t border-white/10 text-zinc-400 text-xs py-14 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center text-white font-serif font-black text-base shadow-md">
                C
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                체리홈타이
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              {data.cityKo} 지역 고객님을 위한 24시간 프리미엄 1:1 방문 홈케어 테라피. 건식, 스웨디시, VIP 마스터 코스를 자택과 숙소에서 편안하게 경험하세요.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-zinc-400">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% 안심 후불제 준수 사업장</span>
            </div>
          </div>

          {/* Service Areas Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-zinc-200 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{data.cityKo} 주요 서비스 지역</span>
            </h4>
            <div className="grid grid-cols-2 gap-1.5 text-xs text-zinc-400">
              {data.areas.map((area, idx) => (
                <span key={idx}>· {area.name}</span>
              ))}
            </div>
          </div>

          {/* Programs Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-zinc-200">
              안내 프로그램 & 요금
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>· 건식 코스 (60분 / 90분 / 120분)</li>
              <li>· 스웨디시 코스 (60분 / 90분 / 120분)</li>
              <li>· VIP 프리미엄 (60분 / 90분 / 120분 / 150분)</li>
              <li className="text-rose-400 font-semibold pt-1">
                ※ 전액 관리 후 결제 (선입금 요구 일체 없음)
              </li>
            </ul>
          </div>

          {/* Quick Contact Col */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-zinc-200 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-rose-400" />
              <span>24시간 고객센터</span>
            </h4>
            <div className="space-y-2">
              <div className="text-base font-bold text-white">
                {data.phoneFormatted}
              </div>
              <div className="text-xs text-zinc-400">
                연중무휴 365일 실시간 상담 가능
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${data.phone}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-rose-400" />
                  <span>전화 바로걸기</span>
                </a>
                <a
                  href={data.kakaoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FEE500]" />
                  <span>카카오톡 1:1 상담</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-zinc-900 text-center space-y-2 text-[11px] text-zinc-400 leading-relaxed">
          <p>
            체리홈타이는 건전한 웰니스 마사지 및 체형 관리 서비스를 지향하며 퇴폐, 불법 행위는 절대 엄금합니다.
          </p>
          <p>
            과도한 음주자나 비매너 고객의 경우 서비스 이용이 제한될 수 있습니다.
          </p>
          <p className="pt-2 text-zinc-400 font-mono">
            © 2026 체리홈타이 ({data.mainKeyword}). All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
