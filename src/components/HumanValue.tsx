import { useState } from 'react';
import type { FC } from 'react';
import { Cpu, User, ArrowLeftRight, Check } from 'lucide-react';

interface ValuePair {
  ai: string;
  aiDesc: string;
  human: string;
  humanDesc: string;
  synergy: string;
}

export const HumanValue: FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pairs: ValuePair[] = [
    {
      ai: 'Tạo sinh dữ liệu (Generate)',
      aiDesc: 'Sản xuất hàng nghìn từ ngữ, đoạn mã hay trang thuyết trình chỉ trong tích tắc dựa trên dữ liệu quá khứ.',
      human: 'Thấu hiểu bản chất (Understand)',
      humanDesc: 'Hấp thụ tri thức vào tư duy, liên hệ với trải nghiệm sống và làm chủ bản chất nội dung.',
      synergy: 'Máy tạo ra nguyên liệu bề mặt; con người thấu hiểu để biến nó thành trí tuệ nội tại.',
    },
    {
      ai: 'Tóm tắt tài liệu (Summarize)',
      aiDesc: 'Rút gọn hàng trăm trang sách, báo cáo phức tạp thành các gạch đầu dòng ngắn gọn.',
      human: 'Kiểm chứng nguồn gốc (Verify)',
      humanDesc: 'Đối chiếu nguồn tin gốc, phát hiện ảo giác (thông tin ngụy tạo) và bảo vệ sự thật.',
      synergy: 'Tóm tắt giúp tiết kiệm giờ đọc; kiểm chứng bảo vệ uy tín và liêm chính học thuật.',
    },
    {
      ai: 'Gợi ý phương án (Suggest)',
      aiDesc: 'Liệt kê các phương án giải quyết dựa trên xác suất tối ưu hóa định lượng.',
      human: 'Phán đoán đạo đức (Judge)',
      humanDesc: 'Cân nhắc giá trị nhân văn, đạo đức, sự công bằng và bối cảnh cụ thể mà máy không thấy.',
      synergy: 'Máy đưa ra các biến số; con người dùng lương tâm và đạo đức để phán đoán.',
    },
    {
      ai: 'Dịch thuật ngôn ngữ (Translate)',
      aiDesc: 'Chuyển ngữ văn bản xuyên ngôn ngữ với ngữ pháp chuẩn xác và tốc độ cao.',
      human: 'Tự phản tư nhân cách (Reflect)',
      humanDesc: 'Nhìn nhận lại bản sắc văn hóa, ý nghĩa sâu xa đằng sau câu chữ và tự vấn chính mình.',
      synergy: 'Dịch thuật vượt qua rào cản ngôn ngữ; phản tư giúp định hình nhân cách và bản lĩnh.',
    },
    {
      ai: 'Tìm kiếm ý tưởng (Brainstorm)',
      aiDesc: 'Tung ra hàng chục ý tưởng mới lạ từ sự kết hợp ngẫu nhiên của kho dữ liệu lớn.',
      human: 'Quyết định dứt khoát (Decide)',
      humanDesc: 'Chọn lựa hướng đi dứt khoát, dám chấp nhận sự đánh đổi và giới hạn của thực tế.',
      synergy: 'Máy mở rộng không gian ý tưởng; con người chọn con đường có ý nghĩa nhất.',
    },
    {
      ai: 'Phân tích quy luật (Analyze patterns)',
      aiDesc: 'Phát hiện các mô thức lặp lại, xu hướng số liệu trong các bộ dữ liệu khổng lồ.',
      human: 'Gánh vác trách nhiệm (Take responsibility)',
      humanDesc: 'Đứng tên tác giả, sẵn sàng giải trình trước hội đồng và đối diện với mọi hệ quả.',
      synergy: 'Dữ liệu chỉ là dữ liệu; tư cách đạo đức và trách nhiệm chỉ tồn tại ở con người.',
    },
  ];

  return (
    <section id="human-value" className="py-20 md:py-28 bg-cream-50 border-b border-academic-border scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-xs font-mono font-semibold text-burgundy">
            <span>PHÂN CÔNG LAO ĐỘNG NHẬN THỨC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
            ĐIỀU AI CÓ THỂ LÀM KHÔNG PHẢI LÀ ĐIỀU CON NGƯỜI NÊN TỪ BỎ
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans max-w-2xl mx-auto">
            Khả năng kỹ thuật của máy móc ngày càng mở rộng, nhưng việc nhượng lại vùng đất nhận thức nào cho AI là một{' '}
            <strong className="text-burgundy">lựa chọn đạo đức</strong> của mỗi sinh viên.
          </p>
        </div>

        {/* Interactive Comparison Matrix */}
        <div className="bg-white rounded-3xl border border-academic-border p-6 sm:p-8 lg:p-10 shadow-academic">

          {/* Header of the 2 columns + Center Badge */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6 border-b border-academic-border items-center">
            {/* Left Header */}
            <div className="md:col-span-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-charcoal-100 flex items-center justify-center text-charcoal">
                <Cpu className="w-5 h-5 text-charcoal-700" />
              </div>
              <div>
                <span className="font-mono text-xs text-charcoal-400 uppercase tracking-wider block">
                  CÔNG NGHỆ TÍNH TOÁN
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  AI CÓ THỂ LÀM (MÁY MÓC)
                </h3>
              </div>
            </div>

            {/* Center Divider / Title */}
            <div className="md:col-span-2 text-center py-2 md:py-0">
              <span className="inline-block px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy text-[11px] font-mono font-bold uppercase tracking-wider">
                GIÁ TRỊ CON NGƯỜI
              </span>
            </div>

            {/* Right Header */}
            <div className="md:col-span-5 flex items-center justify-end gap-3 text-right">
              <div>
                <span className="font-mono text-xs text-burgundy-700 uppercase tracking-wider block font-bold">
                  BẢN LĨNH HỌC THUẬT
                </span>
                <h3 className="font-serif text-xl font-bold text-charcoal">
                  CON NGƯỜI PHẢI GIỮ (CHỦ THỂ)
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-burgundy text-white flex items-center justify-center shadow-subtle">
                <User className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Rows of Pairs */}
          <div className="divide-y divide-academic-border/70">
            {pairs.map((pair, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`py-4 sm:py-5 transition-all duration-200 rounded-xl px-2 sm:px-4 cursor-pointer ${isHovered
                    ? 'bg-burgundy-50/40 ring-1 ring-burgundy-200'
                    : 'hover:bg-cream-100/60'
                    }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

                    {/* Left: AI CAN */}
                    <div className="md:col-span-5 text-left">
                      <div className="font-mono text-sm sm:text-base font-bold text-charcoal flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-charcoal-400" />
                        <span>{pair.ai}</span>
                      </div>
                      <p className="text-xs text-charcoal-500 mt-1 font-sans pl-4">
                        {pair.aiDesc}
                      </p>
                    </div>

                    {/* Center Icon */}
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isHovered
                          ? 'bg-burgundy text-white scale-110'
                          : 'bg-cream-200 text-charcoal-400'
                          }`}
                      >
                        <ArrowLeftRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Right: HUMAN MUST */}
                    <div className="md:col-span-5 text-left md:text-right">
                      <div className="font-mono text-sm sm:text-base font-bold text-burgundy flex items-center md:justify-end gap-2">
                        <span>{pair.human}</span>
                        <Check className="w-4 h-4 text-burgundy shrink-0" />
                      </div>
                      <p className="text-xs text-charcoal-600 mt-1 font-sans">
                        {pair.humanDesc}
                      </p>
                    </div>

                  </div>

                  {/* Expanded Synergy Note on Hover */}
                  {/* {isHovered && (
                    <div className="mt-3 pt-3 border-t border-burgundy-100 flex items-center justify-center gap-2 text-xs font-mono text-burgundy-900 bg-white/80 p-2.5 rounded-lg animate-fadeIn">
                      <Sparkles className="w-3.5 h-3.5 text-burgundy shrink-0" />
                      <span>{pair.synergy}</span>
                    </div>
                  )} */}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
