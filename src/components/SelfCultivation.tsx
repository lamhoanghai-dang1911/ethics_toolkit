import { useState } from 'react';
import type { FC } from 'react';
import { Brain, Eye, ShieldCheck } from 'lucide-react';

export const SelfCultivation: FC = () => {
  const [activeDimension, setActiveDimension] = useState<'ability' | 'awareness' | 'responsibility'>('ability');

  const dimensions = [
    {
      id: 'ability' as const,
      label: 'NĂNG LỰC',
      english: 'TRI THỨC & NĂNG LỰC TỰ THÂN',
      question: 'Tôi có còn tự suy nghĩ?',
      shortDesc: 'Khả năng giữ gìn các liên kết tư duy độc lập khi công cụ làm thay quá dễ dàng.',
      detail:
        'Khi một cỗ máy có thể viết hộ bạn bài luận chỉ trong 10 giây, sự cám dỗ lớn nhất là biến não bộ thành nơi tiếp nhận thụ động. Tự tu dưỡng năng lực là việc chủ động chọn con đường tự mình vật lộn trí tuệ và nghiền ngẫm sâu sắc để tự xây dựng hệ thống tư duy phản biện cho riêng mình.',
      hcmQuote:
        '“Học để làm việc, làm người, làm cán bộ. Học để phụng sự Tổ quốc và nhân dân. Muốn học thì phải tự lực cánh sinh, không được ỷ lại.”',
      icon: Brain,
      tag: 'Tư duy độc lập',
    },
    {
      id: 'awareness' as const,
      label: 'NHẬN THỨC',
      english: 'SỰ TỈNH TÁO & GIỚI HẠN CỦA MÁY',
      question: 'Tôi có biết giới hạn của AI?',
      shortDesc: 'Sự tỉnh táo để nhận diện ảo giác thông tin và định kiến tiềm ẩn của mô hình.',
      detail:
        'Nhận thức đúng đắn đòi hỏi sự khiêm tốn khoa học: Hiểu rằng AI không có lương tâm, không có trải nghiệm sống, và không có tư cách đạo đức. Nó chỉ phản ánh các mẫu dữ liệu xác suất trong quá khứ mà nó được nạp vào, bao gồm cả những thiên kiến xã hội.',
      hcmQuote:
        '“Thực sự cầu thị — Thấy đúng thì bảo là đúng, thấy sai thì bảo là sai. Không được tự dối mình và dối người.”',
      icon: Eye,
      tag: 'Tỉnh táo khoa học',
    },
    {
      id: 'responsibility' as const,
      label: 'TRÁCH NHIỆM',
      english: 'TRÁCH NHIỆM ĐẠO ĐỨC & LIÊM CHÍNH',
      question: 'Tôi có chịu trách nhiệm với kết quả?',
      shortDesc: 'Cam kết đạo đức của người học trước danh dự cá nhân và cộng đồng.',
      detail:
        'Không bao giờ dùng lý do "Do AI tạo ra nên tôi không biết" khi đối diện với sai sót. Mọi công trình hay sản phẩm học thuật gắn tên bạn là một lời thề danh dự về tính chính trực. Tu dưỡng trách nhiệm là lòng dũng cảm bảo vệ sự thật.',
      hcmQuote:
        '“Có tài mà không có đức là người vô dụng, có đức mà không có tài thì làm việc gì cũng khó.”',
      icon: ShieldCheck,
      tag: 'Liêm chính học thuật',
    },
  ];

  return (
    <section id="cultivation" className="py-20 md:py-28 bg-white border-b border-academic-border scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-academic-border text-xs font-mono font-medium text-charcoal-700">
            <span>NỀN TẢNG TU DƯỠNG HCM202</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
            AI càng mạnh, tự tu dưỡng càng quan trọng?
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans max-w-2xl mx-auto">
            Không có câu trả lời tuyệt đối hay cấm đoán tiêu cực. Thay vào đó là tam giác kiềng ba chân giúp người học giữ vững bản lĩnh trong kỷ nguyên tự động hóa.
          </p>
        </div>

        {/* 3 Dimensions Grid / Triangle Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Visual Triangle Diagram */}
          <div className="lg:col-span-5 bg-cream-50 p-6 sm:p-8 rounded-3xl border border-academic-border text-center relative overflow-hidden shadow-subtle">
            <span className="font-mono text-[11px] text-charcoal-400 uppercase tracking-wider block mb-6">
              TAM GIÁC TỰ TU DƯỠNG HỌC THUẬT
            </span>

            {/* SVG Triangle Graphic */}
            <div className="relative w-64 h-64 mx-auto my-4 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 180">
                {/* Outer Triangle Lines */}
                <polygon
                  points="100,20 180,160 20,160"
                  fill="rgba(133, 30, 50, 0.04)"
                  stroke="#E2DCD2"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Connecting Lines to Center */}
                <line x1="100" y1="20" x2="100" y2="110" stroke="#851E32" strokeWidth="1.5" strokeOpacity="0.3" />
                <line x1="180" y1="160" x2="100" y2="110" stroke="#851E32" strokeWidth="1.5" strokeOpacity="0.3" />
                <line x1="20" y1="160" x2="100" y2="110" stroke="#851E32" strokeWidth="1.5" strokeOpacity="0.3" />

                {/* Center Core: HUMAN INTEGRITY */}
                <circle cx="100" cy="110" r="18" fill="#851E32" />
                <text x="100" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">
                  BẢN LĨNH
                </text>
              </svg>

              {/* Vertex 1: Năng lực (Top) */}
              <button
                onClick={() => setActiveDimension('ability')}
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all shadow-subtle ${
                  activeDimension === 'ability'
                    ? 'bg-burgundy text-white border-burgundy scale-105 shadow-academic'
                    : 'bg-white text-charcoal border-academic-border hover:border-burgundy'
                }`}
              >
                ▲ NĂNG LỰC
              </button>

              {/* Vertex 2: Nhận thức (Bottom Left) */}
              <button
                onClick={() => setActiveDimension('awareness')}
                className={`absolute bottom-0 left-0 translate-y-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all shadow-subtle ${
                  activeDimension === 'awareness'
                    ? 'bg-burgundy text-white border-burgundy scale-105 shadow-academic'
                    : 'bg-white text-charcoal border-academic-border hover:border-burgundy'
                }`}
              >
                ◀ NHẬN THỨC
              </button>

              {/* Vertex 3: Trách nhiệm (Bottom Right) */}
              <button
                onClick={() => setActiveDimension('responsibility')}
                className={`absolute bottom-0 right-0 translate-y-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all shadow-subtle ${
                  activeDimension === 'responsibility'
                    ? 'bg-burgundy text-white border-burgundy scale-105 shadow-academic'
                    : 'bg-white text-charcoal border-academic-border hover:border-burgundy'
                }`}
              >
                TRÁCH NHIỆM ▶
              </button>
            </div>

            <p className="text-xs font-mono text-charcoal-500 mt-6">
              Bấm vào 3 đỉnh tam giác để xem chi tiết từng chiều kích tu dưỡng.
            </p>
          </div>

          {/* Dimension Detailed Cards */}
          <div className="lg:col-span-7 space-y-4">
            {dimensions.map((dim) => {
              const Icon = dim.icon;
              const isSelected = activeDimension === dim.id;

              return (
                <div
                  key={dim.id}
                  onClick={() => setActiveDimension(dim.id)}
                  className={`rounded-2xl p-5 sm:p-6 border transition-all duration-200 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-cream-50 border-burgundy shadow-academic ring-1 ring-burgundy'
                      : 'bg-white border-academic-border hover:bg-cream-100/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-burgundy bg-burgundy-50 border border-burgundy-100 px-2 py-0.5 rounded flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5" />
                        {dim.label}
                      </span>
                      <span className="text-[10px] font-mono text-charcoal-400">
                        {dim.english}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-charcoal-500 font-medium">
                      #{dim.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal mb-2">
                    “{dim.question}”
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                    {dim.detail}
                  </p>

                  {/* Connected HCM202 Pedagogical Reflection */}
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-academic-border/80 bg-white/70 p-3.5 rounded-xl border border-academic-border/60 animate-fadeIn">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-burgundy font-bold block mb-1">
                        GẮN KẾT TƯ TƯỞNG HỌC TẬP SUỐT ĐỜI (HCM202):
                      </span>
                      <p className="font-serif italic text-xs sm:text-sm text-charcoal-800 leading-relaxed">
                        {dim.hcmQuote}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
