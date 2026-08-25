import React from 'react';
import { Phone, MessageSquare, Sparkles, Check, Clock, ChevronRight } from 'lucide-react';
import { RegionData, Course } from '@/src/types/index';

interface CoursesProps {
  data: RegionData;
}

export const CoursesSection: React.FC<CoursesProps> = ({ data }) => {
  return (
    <section id="courses" className="py-20 bg-[#0d0f12] text-zinc-100 relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-rose-950/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT ALL-IN-ONE PRICING</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            체리홈타이 프로그램 및 정찰제 요금표
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            추가 요금이나 숨겨진 비용 없이, 모든 시간과 정찰제 가격을 한 화면에서 투명하게 확인하실 수 있습니다.
          </p>
        </div>

        {/* 3 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.courses.map((course: Course) => {
            const isVip = course.id === 'vip-luxury';

            return (
              <div
                key={course.id}
                id={`course-card-${course.id}`}
                className={`flex flex-col justify-between rounded-2xl bg-[#161a22] border transition-all duration-300 shadow-xl overflow-hidden group ${
                  isVip
                    ? 'border-rose-800/60 hover:border-rose-600/80 shadow-rose-950/20 ring-1 ring-rose-500/20'
                    : 'border-zinc-800/90 hover:border-zinc-700'
                }`}
              >
                {/* Card Top Section */}
                <div className="p-6 sm:p-7 space-y-5">
                  
                  {/* Badge & Title */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                        {course.englishName}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {course.name}
                      </h3>
                    </div>
                    {course.badge && (
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md border shrink-0 ${
                        isVip
                          ? 'bg-rose-600 text-white border-rose-500 shadow-sm'
                          : 'bg-zinc-800 text-zinc-200 border-zinc-700'
                      }`}>
                        {course.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {course.description}
                  </p>

                  {/* Best For Tag */}
                  <div className="p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-2">
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-800 text-rose-400 shrink-0">
                      추천대상
                    </span>
                    <span className="truncate">{course.bestFor}</span>
                  </div>

                  {/* Pricing Table - All times & prices fully visible */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-semibold text-zinc-400 flex items-center justify-between pb-1 border-b border-zinc-800">
                      <span>이용 코스 / 관리 시간</span>
                      <span>정찰제 가격 (후불)</span>
                    </div>

                    {course.prices.map((priceItem, pIdx) => (
                      <div
                        key={pIdx}
                        className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                          priceItem.isPopular
                            ? 'bg-rose-950/30 border-rose-800/50 text-white'
                            : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-200 hover:bg-zinc-900'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Clock className={`w-4 h-4 ${priceItem.isPopular ? 'text-rose-400' : 'text-zinc-400'}`} />
                          <span className="text-sm font-bold tracking-tight">
                            {priceItem.duration}
                          </span>
                          {priceItem.tag && (
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                              {priceItem.tag}
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-base sm:text-lg font-black text-rose-400 tracking-tight">
                            {priceItem.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Included Perks */}
                  <div className="pt-2 border-t border-zinc-800/80 space-y-1.5">
                    {course.detailedPoints.map((point, ptIdx) => (
                      <div key={ptIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-normal">
                        <Check className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Bottom CTA */}
                <div className="p-4 sm:px-7 bg-zinc-900/90 border-t border-zinc-800/90 grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${data.phone}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>전화 예약</span>
                  </a>
                  <a
                    href={`sms:${data.phone}?body=${encodeURIComponent(`${data.cityKo}출장마사지 [${course.name}] 예약 문의드립니다.`)}`}
                    className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-bold border border-zinc-700 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
                    <span>문자 예약</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Notice Banner */}
        <div className="mt-10 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center text-xs text-zinc-400 max-w-3xl mx-auto space-y-1">
          <p className="text-zinc-300 font-semibold">
            ※ 안내된 모든 요금은 관리사 방문 비용 및 전용 매트리스, 최고급 오일, 타월 등 일체의 비품이 포함된 정찰 가격입니다.
          </p>
          <p>
            별도의 팁이나 추가 요금 요구가 전혀 없으며, 관리가 완료된 후 편안하게 후불로 결제하시면 됩니다.
          </p>
        </div>

      </div>
    </section>
  );
};
