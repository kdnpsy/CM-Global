import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "건물에 손상이 가지 않나요?",
    answer: "네, 걱정하지 않으셔도 됩니다. 당사는 건물 옥상 방수층을 훼손하지 않는 '무타공 클램프' 공법을 우선 적용합니다. 오히려 패널이 옥상을 직사광선으로부터 보호하여 단열 효과를 높이고 옥상 수명을 연장시킵니다."
  },
  {
    question: "설치 비용은 정말 0원인가요?",
    answer: "네, 100% 무료입니다. 인허가 비용, 자재비, 시공비, 그리고 20년 동안의 유지보수 비용까지 모두 Solaris Estate가 부담합니다. 건물주님은 장소만 제공해주시면 됩니다."
  },
  {
    question: "계약 기간 중 건물을 매매하게 되면 어떻게 되나요?",
    answer: "건물 매매 시 임대 계약은 새로운 건물주에게 승계됩니다. 매매 시 해당 설비가 건물의 수익 가치를 높이는 요인으로 작용하여 더 유리한 조건으로 매매가 가능합니다."
  },
  {
    question: "어떤 건물이 설치 가능한가요?",
    answer: "주로 콘크리트 슬라브 지붕이나 샌드위치 판넬 지붕의 공장, 창고, 상가 건물이 적합합니다. 최소 50평 이상의 유휴 공간이 있으면 검토 가능합니다."
  }
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#E7E5E4]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FDFCF8] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 md:p-8 flex justify-between items-center">
                <h3 className="text-xl font-bold text-stone-900">{item.question}</h3>
                <div className={`p-2 rounded-full bg-stone-100 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </div>
              <div 
                className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100 pb-8' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-stone-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};