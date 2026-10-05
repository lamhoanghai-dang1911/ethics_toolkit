import { ACADEMIC_SOURCES } from '../data/sources';
import { Bookmark } from 'lucide-react';

export const Sources: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-50 border-b border-academic-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-academic-border text-xs font-mono font-medium text-charcoal-700">
            <Bookmark className="w-3.5 h-3.5 text-burgundy" />
            <span>09 • TÀI LIỆU THAM KHẢO & KHUYẾN NGHỊ HỌC THUẬT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal tracking-tight">
            SOURCES & REFERENCES
          </h2>

          <p className="text-xs sm:text-sm text-charcoal-500 font-mono max-w-xl mx-auto">
            Các văn kiện nền tảng và hướng dẫn quốc tế được đối chiếu trong quá trình xây dựng bộ công cụ.
          </p>
        </div>

        {/* Minimal Source List */}
        <div className="space-y-3 text-left">
          {ACADEMIC_SOURCES.map((source) => (
            <div
              key={source.id}
              className={`p-4 sm:p-5 rounded-xl border transition-all ${source.isPlaceholder
                ? 'bg-cream-100/60 border-dashed border-charcoal-300 text-charcoal-700'
                : 'bg-white border-academic-border hover:border-burgundy/40 shadow-subtle'
                }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <span className="text-[11px] font-mono font-bold text-burgundy uppercase tracking-wider">
                  {source.category}
                </span>
                {source.year && (
                  <span className="text-[11px] font-mono text-charcoal-400">
                    Năm ban hành: {source.year}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-base sm:text-lg font-bold text-charcoal mb-1">
                {source.title}
              </h3>

              <div className="text-xs font-mono text-charcoal-600 mb-2">
                Cơ quan / Tổ chức: <strong>{source.organization}</strong>
              </div>

              <p className="text-xs text-charcoal-500 font-sans leading-relaxed">
                {source.note}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote on source integrity */}
        <div className="mt-8 text-center text-xs font-mono text-charcoal-400">
          * Tuân thủ chuẩn mực liêm chính học thuật: Không bịa đặt DOI, số liệu hay trích dẫn giả mạo. Các mục `[ADD VERIFIED SOURCE]` dành riêng cho nhóm bổ sung văn bản nội bộ của trường.
        </div>

      </div>
    </section>
  );
};
