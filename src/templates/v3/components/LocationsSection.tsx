import React from 'react';
import { MapPin, Clock, Navigation, Sparkles, CheckCircle2 } from 'lucide-react';
import { RegionData, AreaInfo } from '@/src/types/index';

interface LocationsProps {
  data: RegionData;
}

export const LocationsSection: React.FC<LocationsProps> = ({ data }) => {
  const regionalZones = [
    {
      title: '송도·연수권',
      areas: '송도 · 연수 · 동춘 · 옥련 · 청학',
      description: '송도국제도시 센트럴파크·테크노파크 및 연수동, 동춘동 스퀘어원, 옥련동 일대'
    },
    {
      title: '청라·검단권',
      areas: '청라 · 검암 · 검단 · 당하 · 마전 · 원당',
      description: '청라국제도시 커낼웨이·호수공원 및 검단신도시, 원당·당하·마전·검암지구'
    },
    {
      title: '부평·계양권',
      areas: '부평 · 삼산 · 갈산 · 계산 · 작전 · 효성',
      description: '부평역 문화의거리, 삼산타운, 계산역, 작전역, 효성·임학·박촌동 일대'
    },
    {
      title: '구월·주안권',
      areas: '구월 · 간석 · 만수 · 주안 · 도화 · 용현',
      description: '구월동 로데오·인천시청, 주안역 역세권, 도화지구, 용현·숭의·학익동'
    },
    {
      title: '영종·중구권',
      areas: '영종 · 운서 · 중산 · 동인천 · 신포',
      description: '영종하늘도시, 운서역 카페거리, 인천공항 주변 호텔 및 동인천·신포동'
    }
  ];

  return (
    <section id="locations" className="py-20 bg-[#13171d] text-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/30 text-rose-300 text-xs font-semibold">
            <Navigation className="w-3.5 h-3.5" />
            <span>{data.cityEn.toUpperCase()} COVERAGE & FAST DISPATCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            {data.cityKo} 전지역 어디서든 30분 내외로 편리하게
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            송도·청라·영종국제도시부터 부평, 구월, 주안, 검단, 연수, 계양, 논현 등 {data.cityKo}시 전지역 모든 아파트, 주택, 오피스텔 및 숙소로 365일 24시간 신속하게 방문합니다.
          </p>
        </div>

        {/* 5-Regional Living Zones Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-10">
          {regionalZones.map((zone, idx) => (
            <div key={idx} className="bg-[#181d26] border border-zinc-800/80 p-4 rounded-xl space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/40">
                  {zone.title}
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 font-medium">{zone.areas}</div>
              <p className="text-xs text-zinc-300">
                {zone.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coverage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.areas.map((area: AreaInfo, index: number) => (
            <div
              key={index}
              className="bg-[#181d26] hover:bg-[#1f2532] border border-zinc-800/80 hover:border-zinc-700 p-5 rounded-2xl transition-all duration-300 shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors">
                        {area.name}
                      </h3>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        {area.subName}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                  {area.description}
                </p>

                {/* Landmarks Tag Cloud */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {area.landmarks.map((landmark, lIdx) => (
                    <span
                      key={lIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrival Time Badge */}
              <div className="pt-4 mt-4 border-t border-zinc-800/70 flex items-center justify-between text-xs">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-rose-400" />
                  <span>예상 도착 시간</span>
                </span>
                <span className="font-bold text-rose-400">
                  {area.arrivalEstimate}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* All Areas Guarantee Card */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-zinc-900 via-[#181d26] to-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                목록에 없는 {data.cityKo}시 전역(송도·청라·영종 및 부평·구월·주안·검단 전역) 특정 번지수나 골목도 모두 방문 가능합니다.
              </h4>
              <p className="text-xs text-zinc-400">
                정확한 주소(도로명 또는 지번)와 호수를 알려주시면 내비게이션 기반으로 가장 빠른 기사가 배차됩니다.
              </p>
            </div>
          </div>

          <a
            href={`tel:${data.phone}`}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-bold border border-zinc-700 transition-colors"
          >
            내 위치 방문시간 문의 →
          </a>
        </div>

      </div>
    </section>
  );
};

