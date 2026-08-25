import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { RegionData } from '@/src/types/index';

interface HeaderProps {
  data: RegionData;
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '프로그램', href: '#courses' },
    { name: '체리홈타이 소개', href: '#about' },
    { name: '차별점', href: '#why' },
    { name: '이용방법', href: '#process' },
    { name: `${data.cityKo} 방문지역`, href: '#locations' },
    { name: '이용후기', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      id="header-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0f12]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-[#0d0f12]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-600 to-rose-900 flex items-center justify-center text-white shadow-lg shadow-rose-950/50 border border-rose-500/30 group-hover:scale-105 transition-transform">
            <span className="font-serif font-black text-lg tracking-wider">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-rose-400 transition-colors font-sans">
              체리홈타이
            </span>
            <span className="text-[11px] text-zinc-400 tracking-tight font-medium">
              {data.cityKo} 프리미엄 1:1 홈케어
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-rose-400 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            id="header-tel-button"
            href={`tel:${data.phone}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 text-zinc-100 text-xs font-semibold border border-zinc-700/50 transition-all hover:border-zinc-600 shadow-sm"
          >
            <Clock className="w-3.5 h-3.5 text-rose-400" />
            <span>24H 실시간 예약</span>
          </a>
          <a
            id="header-cta-primary"
            href={`tel:${data.phone}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white text-xs font-bold shadow-md shadow-rose-950/40 border border-rose-500/40 transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{data.phoneFormatted}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={`tel:${data.phone}`}
            className="p-2 rounded-lg bg-rose-600/20 text-rose-400 border border-rose-500/30"
            aria-label="전화걸기"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-800 text-zinc-200 border border-zinc-700"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#13171d] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 pt-2 border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% 안심 후불제</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span>{data.cityKo} 전지역 30분 배차</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-200 hover:text-rose-400 text-sm font-medium py-2 px-3 rounded-lg hover:bg-zinc-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`tel:${data.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-rose-600 text-white text-xs font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>전화 상담</span>
            </a>
            <a
              href={data.kakaoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#FEE500] text-[#191919] text-xs font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>카카오톡 상담</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
