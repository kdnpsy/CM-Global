import React from 'react';
import { Sun, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-[#FDFCF8] py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <Sun size={32} className="text-white" />
                <span className="text-2xl font-bold tracking-tight">SOLARIS</span>
             </div>
             <p className="text-stone-400 max-w-sm text-lg">
               지속 가능한 미래를 위한 프리미엄 태양광 솔루션.<br/>
               건물의 가치를 높이고 지구를 지킵니다.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" className="hover:text-white transition-colors">브랜드 스토리</a></li>
              <li><a href="#" className="hover:text-white transition-colors">시공 사례</a></li>
              <li><a href="#" className="hover:text-white transition-colors">채용 정보</a></li>
              <li><a href="#" className="hover:text-white transition-colors">뉴스룸</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Contact</h4>
            <ul className="space-y-4 text-stone-400">
              <li>서울 강남구 테헤란로 123</li>
              <li>contact@solaris.estate</li>
              <li>02-1234-5678</li>
            </ul>
            <div className="flex gap-4 mt-6">
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram size={20}/></a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter size={20}/></a>
               <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Linkedin size={20}/></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
          <p>© 2024 Solaris Estate Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">이용약관</a>
            <a href="#" className="hover:text-white">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
};