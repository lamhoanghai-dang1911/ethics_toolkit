import { useState } from 'react';
import type { FC } from 'react';
import { HelpCircle, AlertTriangle, Lightbulb, Check, Sliders } from 'lucide-react';

export const EthicalProblem: FC = () => {
  const [selectedCard, setSelectedCard] = useState<number>(1);
  const [sliderLevel, setSliderLevel] = useState<number>(35);

  const cards = [
    {
      id: 1,
      label: 'HỖ TRỢ',
      title: 'AI hỗ trợ tôi',
      subtitle: 'Cộng sự phản biện & khuếch đại tư duy',
      theme: 'border-emerald-200 bg-emerald-50/20 hover:border-emerald-500',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      icon: Lightbulb,
      iconColor: 'text-emerald-700 bg-emerald-100',
      aiRole: ['Khơi gợi ý tưởng phong phú', 'Giải thích khái niệm khó hiểu', 'Gợi ý cấu trúc dàn bài logic', 'Kiểm tra lỗi chính tả & ngữ pháp'],
      humanRole: ['Thấu hiểu bản chất tri thức', 'Kiểm chứng tính xác thực của nguồn', 'Tự mình đưa ra phán đoán & quyết định'],
      verdict: 'Lý tưởng: Con người giữ vai trò thuyền trưởng, AI là cánh buồm đón gió.',
    },
    {
      id: 2,
      label: 'THAY THẾ',
      title: 'AI làm thay tôi',
      subtitle: 'Sự nhượng bộ phán đoán & teo tóp năng lực',
      theme: 'border-amber-200 bg-amber-50/20 hover:border-amber-500',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      icon: HelpCircle,
      iconColor: 'text-amber-700 bg-amber-100',
      aiRole: ['Viết toàn bộ nội dung từ A đến Z', 'Suy nghĩ và lập luận thay thế con người', 'Chọn phương án & kết luận thay thế'],
      humanRole: ['Chỉ sao chép và nộp bài', 'Không kiểm tra lại dữ liệu nguồn', 'Không hiểu sâu điều mình vừa nộp'],
      verdict: 'Nguy cơ: Điểm số cao trên giấy tờ, nhưng tri thức nội tại rỗng ruột.',
    },
    {
      id: 3,
      label: 'RỦI RO',
      title: 'AI đánh lừa tôi',
      subtitle: 'Ảo giác thông tin & dữ liệu ngụy tạo',
      theme: 'border-burgundy-200 bg-burgundy-50/20 hover:border-burgundy-500',
      badgeColor: 'bg-burgundy-100 text-burgundy-800 border-burgundy-300',
      icon: AlertTriangle,
      iconColor: 'text-burgundy bg-burgundy-100',
      aiRole: ['Tạo thông tin nghe rất thuyết phục nhưng sai sự thật', 'Bịa đặt trích dẫn & số liệu không hề tồn tại', 'Lập luận ngụy biện tinh vi'],
      humanRole: ['Kiểm chứng nguồn gốc (Xác thực thông tin)', 'Chất vấn logic (Đặt câu hỏi phản biện)', 'Gánh vác trách nhiệm (Chịu trách nhiệm 100%)'],
      verdict: 'Trách nhiệm: Chỉ có bạn — người nộp bài — bị kỷ luật, cỗ máy không bao giờ chịu phạt.',
    },
  ];

  // Helper for spectrum description
  const getSpectrumDetails = (val: number) => {
    if (val < 30) {
      return {
        mode: 'Vùng Hỗ Trợ Tối Ưu (Tự chủ làm chủ)',
        color: 'text-emerald-700',
        desc: 'Bạn dùng AI để khơi mở góc nhìn, tự tay viết và đối chiếu nguồn sách. Năng lực tự tu dưỡng được phát huy cao nhất.',
        autonomy: '90% Con người • 10% AI',
      };
    } else if (val < 70) {
      return {
        mode: 'Vùng Giằng Co (Cảnh báo nhị nguyên)',
        color: 'text-amber-700',
        desc: 'AI viết một nửa, bạn biên tập một nửa. Cần cảnh giác cao độ: Bạn có thực sự hiểu lý lẽ của từng đoạn văn không?',
        autonomy: '50% Con người • 50% AI',
      };
    } else {
      return {
        mode: 'Vùng Thay Thế Nguy Hiểm (Khoán trắng tư duy)',
        color: 'text-burgundy',
        desc: 'AI làm gần như toàn bộ. Bạn trở thành chiếc tem cao su đóng dấu. Mất đi hoàn toàn tư cách chủ thể học thuật.',
        autonomy: '10% Con người • 90% AI',
      };
    }
  };

  const spectrum = getSpectrumDetails(sliderLevel);

  return (
    <section id="problem" className="py-20 md:py-28 bg-white border-b border-academic-border scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-academic-border text-xs font-mono font-medium text-charcoal-700">
            <span>BẢN CHẤT XUNG ĐỘT ĐẠO ĐỨC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
            Vấn đề không nằm ở việc bạn dùng AI.
          </h2>

          <p className="text-lg sm:text-xl text-burgundy font-serif italic">
            “Vấn đề nằm ở việc AI đang làm thay bạn phần nào.”
          </p>

          <p className="text-sm sm:text-base text-charcoal-500 font-sans max-w-2xl mx-auto">
            Công nghệ tự nó không tốt cũng không xấu. Đạo đức chỉ xuất hiện khi con người tương tác, phân công và gán trách nhiệm cho nó.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((card) => {
            const Icon = card.icon;
            const isSelected = selectedCard === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card.id)}
                className={`rounded-2xl p-6 sm:p-7 border cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                  card.theme
                } ${
                  isSelected
                    ? 'ring-2 ring-burgundy shadow-elevated scale-[1.02] bg-white'
                    : 'shadow-subtle hover:shadow-academic bg-cream-50/50'
                }`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full border ${card.badgeColor}`}
                    >
                      {card.label}
                    </span>
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${card.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 font-mono mb-6">
                    {card.subtitle}
                  </p>

                  {/* AI Section */}
                  <div className="space-y-2 mb-5">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-charcoal-400 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-charcoal-400" />
                      <span>AI đảm nhận:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-charcoal-700 pl-3">
                      {card.aiRole.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-charcoal-400 mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Human Section */}
                  <div className="space-y-2 pt-4 border-t border-academic-border/70">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-burgundy flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-burgundy" />
                      <span>Con người phải:</span>
                    </div>
                    <ul className="space-y-1.5 text-xs font-medium text-charcoal pl-3">
                      {card.humanRole.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-burgundy shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Verdict */}
                <div className="mt-6 pt-4 border-t border-academic-border/60">
                  <div className="text-[11px] font-mono text-charcoal-500 italic">
                    {card.verdict}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Spectrum Slider: Classroom Engagement */}
        <div className="bg-cream-100 rounded-2xl border border-academic-border p-6 sm:p-8 max-w-4xl mx-auto shadow-subtle">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Sliders className="w-5 h-5 text-burgundy" />
              <h4 className="font-serif text-lg font-bold text-charcoal">
                Thang đo mức độ can thiệp: Bạn đang ở đâu trên phổ đạo đức?
              </h4>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-white rounded-full border border-academic-border font-bold text-charcoal">
              {spectrum.autonomy}
            </span>
          </div>

          <div className="space-y-3 py-4">
            <input
              type="range"
              min="5"
              max="95"
              value={sliderLevel}
              onChange={(e) => setSliderLevel(Number(e.target.value))}
              className="w-full h-2.5 bg-cream-300 rounded-lg appearance-none cursor-pointer accent-burgundy"
            />
            <div className="flex justify-between text-[11px] font-mono text-charcoal-500">
              <span>0% (Thuần túy tự làm)</span>
              <span>50% (Hợp tác nhị nguyên)</span>
              <span>100% (Phó mặc hoàn toàn cho AI)</span>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-academic-border mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className={`text-xs font-mono font-bold uppercase tracking-wider block ${spectrum.color}`}>
                {spectrum.mode}
              </span>
              <p className="text-xs sm:text-sm text-charcoal-700 mt-1">
                {spectrum.desc}
              </p>
            </div>
            <div className="shrink-0 text-xs font-mono text-burgundy underline cursor-pointer" onClick={() => setSliderLevel(25)}>
              Đặt lại mức tối ưu
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
