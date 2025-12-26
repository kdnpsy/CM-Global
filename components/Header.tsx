import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X, Sun } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-200' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-[#1C1917] rounded-xl flex items-center justify-center text-white">
            <Sun size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1C1917]">SOLARIS</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">임대 혜택</a>
          <a href="#process" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">설치 과정</a>
          <a href="#calculator" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">수익 계산기</a>
          <a href="#faq" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            상담 신청하기
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-stone-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#FDFCF8] border-b border-stone-200 p-6 md:hidden flex flex-col gap-4 shadow-xl">
           <a href="#features" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>임대 혜택</a>
          <a href="#process" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>설치 과정</a>
          <a href="#calculator" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>수익 계산기</a>
          <a href="#faq" className="text-lg font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <Button className="w-full mt-4" onClick={() => {
            setIsMobileMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>상담 신청하기</Button>
        </div>
      )}
    </header>
  );
};