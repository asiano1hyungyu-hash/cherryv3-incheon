import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { RegionData, FaqItem } from '@/src/types/index';

interface FaqProps {
  data: RegionData;
}

export const FaqSection: React.FC<FaqProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#13171d] text-zinc-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-800/30 text-rose-300 text-xs font-semibold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            {data.cityKo}출장마사지 자주 묻는 질문
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            체리홈타이 이용 전 가장 궁금해하시는 핵심 질문과 답변을 모았습니다.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {data.faqs.map((faq: FaqItem, index: number) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#181d26] border-rose-900/40 shadow-lg'
                    : 'bg-[#161a22] border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 text-rose-400 font-bold text-xs flex items-center justify-center shrink-0">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-rose-400' : ''
                    }`}
                  />
                </button>

                <div
                  className={`px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal border-t border-zinc-800/60 items-start gap-3 ${
                    isOpen ? 'flex' : 'hidden'
                  }`}
                >
                  <span className="w-6 h-6 rounded-md bg-rose-950 text-rose-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    A
                  </span>
                  <p className="pt-0.5">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Questions Help Box */}
        <div className="mt-10 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-center space-y-3">
          <h3 className="text-sm sm:text-base font-bold text-white">
            찾으시는 질문의 답변이 없으신가요?
          </h3>
          <p className="text-xs text-zinc-400">
            24시간 연중무휴 전문 상담원이 전화, 문자, 카카오톡으로 언제든 친절하게 답변해 드립니다.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${data.phone}`}
              className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors"
            >
              전화 {data.phoneFormatted} 문의
            </a>
            <a
              href={data.kakaoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2 rounded-lg bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] text-xs font-bold transition-colors"
            >
              카카오톡 1:1 상담
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
