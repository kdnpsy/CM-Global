import React, { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';

export const Calculator: React.FC = () => {
  const [area, setArea] = useState<number>(100); // pyung
  const unitPrice = 30000; // KRW per pyung per year (example)

  return (
    <section id="calculator" className="py-24 bg-[#1C1917] text-[#FDFCF8] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
            <CalcIcon size={16} />
            <span className="text-sm font-medium">수익 시뮬레이션</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">얼마나 벌 수 있을까요?</h2>
          <p className="text-stone-400 text-lg">보유하신 옥상 면적(평)을 입력해보세요.</p>
        </div>

        <div className="bg-[#292524] rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <label className="block text-stone-400 text-sm font-medium mb-4">옥상 면적 (평)</label>
                <div className="relative">
                  <input 
                    type="range" 
                    min="30" 
                    max="500" 
                    step="10" 
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  />
                  <div className="mt-4 flex justify-between text-2xl font-bold font-mono">
                    <span>{area}평</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-sm text-stone-400 mb-2">예상 설치 용량</p>
                <p className="text-2xl font-bold">약 {Math.floor(area * 0.4)} kW</p>
              </div>
            </div>

            <div className="h-px w-full md:w-px md:h-64 bg-stone-700"></div>

            <div className="w-full md:w-1/2 text-center md:text-right">
              <p className="text-stone-400 text-lg mb-2">20년간 총 예상 수익</p>
              <p className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4 tracking-tighter">
                {(area * unitPrice * 20).toLocaleString()} <span className="text-2xl md:text-4xl text-white">원</span>
              </p>
              <p className="text-stone-500 text-sm">* 위 금액은 추정치이며, 실제 설치 환경(일조량, 구조물 등)에 따라 달라질 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};