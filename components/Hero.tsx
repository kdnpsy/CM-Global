import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex flex-col bg-[#FDFCF8] overflow-hidden">
      {/* 3D Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe 
          src='https://my.spline.design/solarenergy-W02z6PHifdndZ6X8w3FAbo0Y/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-105" // Slight scale to avoid iframe borders
          title="Solar Energy 3D Model"
        ></iframe>
        
        {/* Dark overlay to make white text visible */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

        {/* Overlay gradient to blend bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FDFCF8] to-transparent pointer-events-none"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pointer-events-none">
        <div className="max-w-3xl pt-20">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/30 bg-white/10 backdrop-blur-md pointer-events-auto shadow-sm">
            <span className="text-xs font-bold tracking-widest uppercase text-white drop-shadow-md">The Future of Energy</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.95] mb-8 drop-shadow-xl">
            유휴 공간을<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-amber-500 filter drop-shadow-lg">자산으로</span> 바꾸세요.
          </h1>
          <p className="text-xl text-stone-100 max-w-xl leading-relaxed mb-10 font-medium drop-shadow-md">
            건물 옥상에 태양광 패널을 설치하고, 아무런 노력 없이 안정적인 임대 수익을 창출하세요. 
            환경과 경제적 이익, 두 마리 토끼를 잡는 가장 우아한 방법입니다.
          </p>
          <div className="flex gap-4 pointer-events-auto">
             <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#1C1917] px-8 py-4 rounded-full font-semibold hover:bg-stone-200 transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
             >
                더 알아보기 <ArrowDown size={18} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};