import React from 'react';
import { TrendingUp, Leaf, ShieldCheck, Wallet } from 'lucide-react';

const Card: React.FC<{ 
  title: string; 
  desc: string; 
  className?: string; 
  children?: React.ReactNode; 
  dark?: boolean;
}> = ({ title, desc, className = "", children, dark = false }) => (
  <div className={`relative overflow-hidden rounded-[2rem] p-8 md:p-12 transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col justify-between ${
    dark ? 'bg-[#1C1917] text-[#FDFCF8]' : 'bg-[#E7E5E4] text-[#1C1917]'
  } ${className}`}>
    <div className="relative z-10">
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h3>
      <p className={`text-lg leading-relaxed ${dark ? 'text-stone-400' : 'text-stone-600'}`}>{desc}</p>
    </div>
    {children}
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-[#FDFCF8] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Designed for <br />building owners.</h2>
          <p className="text-xl text-stone-500 max-w-2xl">
            복잡한 관리는 저희가 맡겠습니다. 건물주는 오직 깨끗한 에너지 생산에 기여하고 있다는 자부심과 매월 입금되는 임대료만 확인하시면 됩니다.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          
          {/* Card 1: Large Image Visual */}
          <div className="lg:col-span-2 rounded-[2rem] overflow-hidden relative group">
             <img 
               src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2940&auto=format&fit=crop" 
               alt="Solar Roof" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             />
             <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors p-10 flex flex-col justify-end">
                <h3 className="text-white text-4xl font-bold mb-2">미관을 해치지 않는 디자인</h3>
                <p className="text-white/80 text-lg">건물의 가치를 높여주는 모던한 시공 방식을 채택합니다.</p>
             </div>
          </div>

          {/* Card 2: Passive Income */}
          <Card title="고정 임대 수익" desc="공실 걱정 없는 20년 장기 계약으로 안정적인 추가 수익을 확보하세요." className="lg:col-span-1" >
             <div className="absolute bottom-8 right-8 p-4 bg-white rounded-2xl shadow-sm">
                <TrendingUp size={48} className="text-green-600" />
             </div>
          </Card>

          {/* Card 3: Eco Friendly (Dark) */}
          <Card title="탄소 중립 실천" desc="연간 소나무 3,000그루를 심는 효과. ESG 경영의 첫 걸음입니다." dark className="lg:col-span-1">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                <Leaf size={200} />
             </div>
          </Card>

          {/* Card 4: Safety */}
          <div className="lg:col-span-2 bg-[#D6D3D1] rounded-[2rem] p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
             <div className="flex-1 relative z-10">
                <h3 className="text-4xl font-bold mb-4 text-[#1C1917]">완벽한 방수 및 관리</h3>
                <p className="text-stone-700 text-lg mb-6">
                  태양광 설치 시 가장 걱정되는 누수 문제. 
                  특허받은 무타공 공법과 이중 방수 시스템으로 건물을 더욱 안전하게 보호합니다.
                  정기적인 안전 점검은 무료입니다.
                </p>
                <div className="flex gap-2">
                  <span className="px-4 py-2 bg-[#1C1917] text-white rounded-full text-sm">무타공 공법</span>
                  <span className="px-4 py-2 bg-white text-[#1C1917] rounded-full text-sm">책임 보험 가입</span>
                </div>
             </div>
             <div className="flex-1 w-full h-64 md:h-full bg-stone-200 rounded-xl overflow-hidden shadow-inner">
                <img src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Engineer" />
             </div>
          </div>

          {/* Card 5: Investment Free */}
          <Card title="초기 비용 0원" desc="설치비, 유지보수비, 철거비까지. 건물주가 부담하는 비용은 단 1원도 없습니다." className="lg:col-span-3 bg-[#F5F5F4] flex-row items-center">
             <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 pointer-events-none">
               <Wallet size={400} />
             </div>
          </Card>

        </div>
      </div>
    </section>
  );
};