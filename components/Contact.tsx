import React from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto bg-[#1C1917] rounded-[3rem] p-8 md:p-20 overflow-hidden relative">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-white">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Ready to <br/> earn more?
            </h2>
            <p className="text-stone-400 text-xl mb-12">
              주소만 남겨주시면, AI가 위성 지도로 면적을 분석하여 <br/>
              예상 수익 리포트를 24시간 내에 보내드립니다.
            </p>
            <div className="hidden lg:block">
              <div className="w-24 h-24 rounded-full bg-yellow-400 animate-pulse blur-3xl opacity-20 absolute top-0 left-0"></div>
            </div>
          </div>

          <form className="bg-[#292524] p-8 md:p-10 rounded-3xl space-y-6 shadow-xl border border-white/5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-stone-400 text-sm font-medium mb-2">건물 주소</label>
              <input type="text" placeholder="예: 서울시 강남구..." className="w-full bg-[#1C1917] border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
            </div>
            <div>
              <label className="block text-stone-400 text-sm font-medium mb-2">연락처</label>
              <input type="tel" placeholder="010-0000-0000" className="w-full bg-[#1C1917] border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
            </div>
            <div>
              <label className="block text-stone-400 text-sm font-medium mb-2">성함 (건물주/관리자)</label>
              <input type="text" placeholder="홍길동" className="w-full bg-[#1C1917] border border-stone-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors" />
            </div>
            <Button className="w-full py-5 text-lg bg-yellow-500 text-black hover:bg-yellow-400 border-none">
              무료 컨설팅 신청하기
            </Button>
            <p className="text-stone-500 text-xs text-center mt-4">
              신청 시 개인정보 처리방침에 동의하는 것으로 간주합니다.
            </p>
          </form>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-800 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      </div>
    </section>
  );
};