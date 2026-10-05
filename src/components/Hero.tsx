import { useState } from 'react';
import type { FC } from 'react';
import { ArrowRight, Scale, AlertCircle, ShieldCheck, Cpu } from 'lucide-react';

interface HeroProps {
  onStartToolkit: () => void;
  onExploreProblem: () => void;
}

export const Hero: FC<HeroProps> = ({
  onStartToolkit,
  onExploreProblem,
}) => {
  // Mode for the interactive visual: 'active' (Con người làm chủ) or 'passive' (Khoán trắng cho máy)
  const [interactiveMode, setInteractiveMode] = useState<'active' | 'passive'>('active');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden academic-grid-pattern border-b border-academic-border">
      {/* Background ambient accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-burgundy-50/40 via-transparent to-transparent pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-burgundy-50 border border-burgundy-200/80 text-burgundy-700 text-xs font-mono font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-burgundy animate-pulse" />
              <span>ĐẠO ĐỨC TRONG THỜI ĐẠI TRÍ TUỆ NHÂN TẠO</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-charcoal tracking-tight leading-[1.12]">
              AI có thể tạo ra{' '}
              <span className="italic font-normal text-charcoal-700 underline decoration-burgundy-300 decoration-wavy decoration-2">
                câu trả lời.
              </span>
              <br />
              Nhưng ai chịu{' '}
              <span className="text-burgundy">trách nhiệm</span> với nó?
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-charcoal-600 max-w-2xl leading-relaxed font-sans font-normal">
              Bộ công cụ đạo đức học giúp sinh viên nhìn lại cách mình ứng dụng AI — không chỉ dừng lại ở câu hỏi AI có thể làm được những gì, mà quan trọng hơn là <strong className="text-charcoal font-semibold">con người cần phải tự mình làm những gì</strong> để gìn giữ năng lực tư duy và phẩm giá đạo đức.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onStartToolkit}
                className="px-6 py-3.5 rounded-xl bg-burgundy hover:bg-burgundy-700 text-white font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all shadow-academic hover:shadow-elevated active:scale-[0.98] group"
              >
                <span>BẮT ĐẦU TRẢI NGHIỆM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreProblem}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-cream-200 text-charcoal-700 border border-academic-border font-medium text-sm sm:text-base flex items-center gap-2 transition-all hover:border-charcoal-300 shadow-subtle hover:shadow-academic"
              >
                <span>XEM BẢN CHẤT VẤN ĐỀ</span>
              </button>
            </div>

            {/* Micro stats / pill labels */}
            {/* <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-charcoal-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" /> 5 Tình Huống Đạo Đức Thực Tế
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" /> Nhóm 04: Chương 06 & Vận Dụng AI
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-burgundy" /> Khung 3 Nguyên Tắc Thực Thi
              </span>
            </div> */}
          </div>

          {/* Right Column: Hero Visual (Abstract, Dynamic, Thought-provoking) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-academic-border p-5 sm:p-6 shadow-academic relative">
              {/* Visual Mode Selector Switch */}
              <div className="flex items-center justify-between pb-4 border-b border-academic-border">
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold">
                  Mô hình luồng nhận thức
                </div>
                <div className="flex items-center p-1 bg-cream-200 rounded-lg text-xs font-mono">
                  <button
                    onClick={() => setInteractiveMode('active')}
                    className={`px-3 py-1 rounded-md transition-all ${interactiveMode === 'active'
                      ? 'bg-burgundy text-white shadow-xs font-bold'
                      : 'text-charcoal-700 hover:text-charcoal'
                      }`}
                  >
                    TỰ CHỦ
                  </button>
                  <button
                    onClick={() => setInteractiveMode('passive')}
                    className={`px-3 py-1 rounded-md transition-all ${interactiveMode === 'passive'
                      ? 'bg-charcoal text-white shadow-xs font-bold'
                      : 'text-charcoal-700 hover:text-charcoal'
                      }`}
                  >
                    PHÓ MẶC
                  </button>
                </div>
              </div>

              {/* Dynamic Diagram Visual */}
              <div className="py-6 space-y-4">
                {/* Step 1: AI Prompt / Data */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-charcoal-50 border border-charcoal-100 flex items-center justify-center shrink-0 text-charcoal">
                    <Cpu className="w-6 h-6 text-charcoal-700" />
                  </div>
                  <div className="flex-1 bg-cream-50 rounded-xl p-3 border border-academic-border text-left">
                    <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-500 uppercase">
                      <span>KHỞI TẠO</span>
                      <span className="font-semibold text-charcoal">AI TẠO SINH DỮ LIỆU</span>
                    </div>
                    <div className="text-sm font-semibold text-charcoal mt-0.5">
                      AI → Câu trả lời ban đầu
                    </div>
                    <div className="text-xs text-charcoal-500">
                      Mô hình xác suất thống kê, tạo ra văn bản tức thì theo yêu cầu.
                    </div>
                  </div>
                </div>

                {/* Arrow connector with pulse */}
                <div className="flex justify-center -my-1">
                  <div className="h-6 w-0.5 bg-burgundy-200 relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-burgundy animate-ping" />
                  </div>
                </div>

                {/* Step 2: Human Agency / Judgment */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${interactiveMode === 'active'
                    ? 'bg-burgundy-50 border-burgundy-200 text-burgundy'
                    : 'bg-charcoal-100 border-charcoal-300 text-charcoal-400'
                    }`}>
                    <Scale className="w-6 h-6" />
                  </div>
                  <div className={`flex-1 rounded-xl p-3 border text-left transition-all ${interactiveMode === 'active'
                    ? 'bg-white border-burgundy-300 shadow-sm'
                    : 'bg-charcoal-50/70 border-dashed border-charcoal-200 opacity-60'
                    }`}>
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase">
                      <span className={interactiveMode === 'active' ? 'text-burgundy' : 'text-charcoal-400'}>
                        PHÁN ĐOÁN CON NGƯỜI
                      </span>
                      <span className="font-semibold text-charcoal">
                        {interactiveMode === 'active' ? 'PHÁN ĐOÁN CON NGƯỜI' : 'BỎ QUA PHÁN ĐOÁN'}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-charcoal mt-0.5">
                      {interactiveMode === 'active' ? 'Con người → Thẩm định & Phản biện' : 'Chỉ Sao chép & Dán, không suy nghĩ'}
                    </div>
                    <div className="text-xs text-charcoal-500">
                      {interactiveMode === 'active'
                        ? 'Đặt câu hỏi "Tại sao?", đối chiếu nguồn gốc, sàng lọc thiên kiến.'
                        : 'Không đọc lại nội dung, tin tưởng mù quáng vào thông tin do máy tạo.'}
                    </div>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="flex justify-center -my-1">
                  <div className={`h-6 w-0.5 relative flex items-center justify-center ${interactiveMode === 'active' ? 'bg-burgundy-300' : 'bg-charcoal-200'
                    }`}>
                    <div className={`w-2 h-2 rounded-full ${interactiveMode === 'active' ? 'bg-burgundy' : 'bg-charcoal-400'
                      }`} />
                  </div>
                </div>

                {/* Step 3: Responsibility */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 transition-colors ${interactiveMode === 'active'
                    ? 'bg-burgundy text-white border-burgundy shadow-sm'
                    : 'bg-red-50 border-red-200 text-red-600'
                    }`}>
                    {interactiveMode === 'active' ? (
                      <ShieldCheck className="w-6 h-6" />
                    ) : (
                      <AlertCircle className="w-6 h-6" />
                    )}
                  </div>
                  <div className={`flex-1 rounded-xl p-3 border text-left transition-all ${interactiveMode === 'active'
                    ? 'bg-burgundy-50/70 border-burgundy-300'
                    : 'bg-red-50/50 border-red-200'
                    }`}>
                    <div className="flex items-center justify-between text-[11px] font-mono uppercase">
                      <span className={interactiveMode === 'active' ? 'text-burgundy' : 'text-red-700 font-semibold'}>
                        {interactiveMode === 'active' ? 'KẾT QUẢ & TRÁCH NHIỆM' : 'RỦI RO ĐẠO ĐỨC'}
                      </span>
                      <span className="font-semibold text-charcoal">
                        {interactiveMode === 'active' ? 'TRÁCH NHIỆM TRỌN VẸN' : 'KHỦNG HOẢNG NIỀM TIN'}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-charcoal mt-0.5">
                      {interactiveMode === 'active'
                        ? 'Chịu trách nhiệm 100% về sản phẩm nộp'
                        : 'Đổ lỗi cho máy tính khi bị phát hiện sai sót'}
                    </div>
                    <div className="text-xs text-charcoal-500">
                      {interactiveMode === 'active'
                        ? 'Tự tin giải trình trước hội đồng, danh dự và thực lực học thuật được bảo toàn.'
                        : 'Mất uy tín cá nhân, teo tóp năng lực tự suy nghĩ độc lập.'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Insight Capsule */}
              <div className="pt-3 border-t border-academic-border text-center">
                <span className="text-xs font-mono text-charcoal-500 italic">
                  {interactiveMode === 'active'
                    ? '✓ Mô hình tu dưỡng: Trí tuệ máy phục vụ cho phẩm giá và trách nhiệm con người.'
                    : '⚠ Cảnh báo: Thuật toán không bao giờ chịu kỷ luật hay đứng ra xin lỗi thay bạn.'}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Large Under-Hero Statement */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-academic-border">
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-burgundy font-semibold block">
              TRIẾT LÝ NỀN TẢNG
            </span>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal font-semibold leading-snug">
              “AI có thể hỗ trợ quá trình học.
              <br />
              <span className="text-burgundy underline decoration-burgundy-200 decoration-4 underline-offset-8">
                Nhưng AI không thể thay thế trách nhiệm của người học.
              </span>”
            </blockquote>
            {/* <p className="text-sm font-mono text-charcoal-500 pt-2">
              Khi câu trả lời trở nên miễn phí, sự trung thực và tự rèn luyện là vô giá.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
