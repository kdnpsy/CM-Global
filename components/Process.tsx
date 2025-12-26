import React from 'react';

const steps = [
  { num: '01', title: '신청 및 접수', desc: '온라인으로 주소와 연락처만 남겨주시면 접수가 완료됩니다.' },
  { num: '02', title: '현장 실사', desc: '전문 엔지니어가 방문하여 일조량과 구조 안전성을 정밀 진단합니다.' },
  { num: '03', title: '계약 체결', desc: '예상 수익률 분석 보고서를 토대로 임대차 계약을 진행합니다.' },
  { num: '04', title: '인허가 및 시공', desc: '복잡한 행정 절차부터 시공까지 모든 과정을 전담합니다.' },
  { num: '05', title: '발전 개시', desc: '설치 완료 즉시 발전이 시작되며, 매월 임대료가 지급됩니다.' },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-[#FDFCF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-5xl font-bold tracking-tight">Simple Process</h2>
          <p className="text-stone-500 mt-4 md:mt-0 max-w-md text-right">
            시작부터 수익 창출까지, <br/>모든 과정이 투명하고 신속하게 진행됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div key={idx} className="group p-6 border-t border-stone-200 hover:border-stone-900 transition-colors duration-300">
              <span className="block text-sm font-mono text-stone-400 mb-12 group-hover:text-stone-900 transition-colors">
                {step.num}
              </span>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};