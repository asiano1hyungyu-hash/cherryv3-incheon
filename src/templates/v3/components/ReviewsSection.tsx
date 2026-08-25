import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, Sparkles } from 'lucide-react';
import { RegionData, ReviewItem } from '@/src/types/index';

interface ReviewsProps {
  data: RegionData;
}

export const ReviewsSection: React.FC<ReviewsProps> = ({ data }) => {
  return (
    <section id="reviews" className="py-20 bg-[#0d0f12] text-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/30 text-rose-300 text-xs font-semibold">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>REAL VERIFIED CUSTOMER REVIEWS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            {data.cityKo} 실제 고객님들의 솔직한 이용 후기
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            체리홈타이를 직접 경험하신 {data.cityKo} 지역 고객님들의 생생한 만족도 평가입니다.
          </p>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.reviews.map((rev: ReviewItem) => (
            <div
              key={rev.id}
              className="bg-[#161a22] border border-zinc-800/80 hover:border-zinc-700 p-6 rounded-2xl transition-all duration-300 shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Rating & Date */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-400 font-mono">
                    {rev.date}
                  </span>
                </div>

                {/* Course Badge & Location */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 border border-rose-800/40">
                      {rev.course}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-rose-300 transition-colors pt-1">
                    {rev.title}
                  </h3>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-zinc-200">{rev.author}</div>
                  <div className="text-[11px] text-zinc-400">{rev.location}</div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>이용 확인</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
