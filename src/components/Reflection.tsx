import { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { Send, Check, Copy, Sparkles, BookOpen, Quote, RefreshCw } from 'lucide-react';

interface ReflectionProps {
  reflectionText: string;
  setReflectionText: (val: string) => void;
  submittedReflection: string;
  onSaveReflection: (text: string) => void;
}

export const Reflection: FC<ReflectionProps> = ({
  reflectionText,
  setReflectionText,
  submittedReflection,
  onSaveReflection,
}) => {
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!reflectionText.trim()) return;
    onSaveReflection(reflectionText.trim());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(submittedReflection);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="reflection" className="py-20 md:py-28 bg-cream-50 border-b border-academic-border scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-xs font-mono font-semibold text-burgundy">
            <BookOpen className="w-3.5 h-3.5" />
            <span>06 • TỰ VẤN LƯƠNG TÂM HỌC THUẬT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
            GIỜ LÀ LÚC TỰ VẤN CHÍNH MÌNH
          </h2>

          <div className="p-6 rounded-2xl bg-white border border-academic-border shadow-subtle max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-burgundy font-bold block mb-1">
              CÂU HỎI TRỌNG TÂM DÀNH CHO BẠN:
            </span>
            <p className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-snug">
              “Nếu AI có thể làm 90% bài tập của bạn,
              <br />
              <span className="text-burgundy">10% nào bạn vẫn muốn tự mình thực hiện?</span>”
            </p>
          </div>
        </div>

        {/* Reflection Input Form */}
        {!submittedReflection ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative bg-white rounded-2xl border border-academic-border shadow-academic p-4 sm:p-6 focus-within:border-burgundy focus-within:ring-2 focus-within:ring-burgundy/20 transition-all">
              <label htmlFor="reflection-input" className="sr-only">
                Viết suy nghĩ phản tư của bạn
              </label>
              <textarea
                id="reflection-input"
                rows={5}
                value={reflectionText}
                onChange={(e) => setReflectionText(e.target.value)}
                placeholder="Viết suy nghĩ chân thật của bạn... Ví dụ: 10% tôi muốn giữ lại là quyền đưa ra phán đoán kết luận và bảo vệ bài tập trước thầy cô, vì đó là danh dự của người học..."
                className="w-full text-sm sm:text-base text-charcoal placeholder:text-charcoal-400 bg-transparent border-0 focus:ring-0 focus:outline-none resize-none leading-relaxed font-sans"
              />

              <div className="pt-4 border-t border-academic-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs font-mono text-charcoal-500">
                  🔒 Dữ liệu được lưu cục bộ trên trình duyệt của bạn (Bảo mật tuyệt đối).
                </div>

                <button
                  type="submit"
                  disabled={!reflectionText.trim()}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-burgundy hover:bg-burgundy-700 disabled:opacity-40 text-white font-medium text-xs sm:text-sm font-mono flex items-center justify-center gap-2 transition-all shadow-subtle"
                >
                  <span>LƯU PHẢN TƯ →</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Quick Inspiration Prompts */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-charcoal-500">
              <span className="font-semibold text-charcoal">Gợi ý suy ngẫm:</span>
              <button
                type="button"
                onClick={() =>
                  setReflectionText(
                    '10% tôi muốn tự làm là phần phán đoán kết luận và bảo vệ bài thuyết trình. Tôi có thể dùng AI gợi ý tài liệu, nhưng quan điểm cuối cùng phải là của chính tôi.'
                  )
                }
                className="px-2.5 py-1 rounded-lg bg-white border border-academic-border hover:border-burgundy transition-colors text-[11px]"
              >
                Gợi ý 1: Quyền phán đoán cuối cùng
              </button>
              <button
                type="button"
                onClick={() =>
                  setReflectionText(
                    '10% tôi giữ lại là việc tự tra cứu nguồn sách gốc tại thư viện để đảm bảo bài viết trung thực và không bịa đặt nguồn tài liệu.'
                  )
                }
                className="px-2.5 py-1 rounded-lg bg-white border border-academic-border hover:border-burgundy transition-colors text-[11px]"
              >
                Gợi ý 2: Kiểm chứng liêm chính học thuật
              </button>
            </div>
          </form>
        ) : (
          /* Submitted Reflection Display Card */
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-burgundy-200/80 p-6 sm:p-8 shadow-elevated relative overflow-hidden text-left">
              {/* Top Accent Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-burgundy" />

              <div className="flex items-center justify-between pb-4 border-b border-academic-border mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-burgundy-50 text-burgundy flex items-center justify-center">
                    <Quote className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase text-charcoal tracking-wider">
                    BẢN PHẢN TƯ CỦA BẠN
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="p-1.5 rounded-lg border border-academic-border text-charcoal-600 hover:bg-cream-100 text-xs font-mono flex items-center gap-1 transition-colors"
                    title="Sao chép nội dung"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Đã sao chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onSaveReflection('')}
                    className="p-1.5 rounded-lg border border-academic-border text-charcoal-600 hover:text-burgundy text-xs font-mono flex items-center gap-1 transition-colors"
                    title="Chỉnh sửa lại"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Sửa lại</span>
                  </button>
                </div>
              </div>

              {/* User's text in elegant academic serif */}
              <blockquote className="font-serif text-lg sm:text-xl text-charcoal leading-relaxed italic mb-6">
                “{submittedReflection}”
              </blockquote>

              {/* Pedagogical Affirmations */}
              <div className="pt-4 border-t border-academic-border/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="space-y-1">
                  <div className="text-emerald-800 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Câu trả lời của bạn không bị chấm điểm.</span>
                  </div>
                  <div className="text-charcoal-500 italic">
                    “Tự phản tư chính là một phần của sự trưởng thành.”
                  </div>
                </div>

                <span className="px-3 py-1 bg-cream-200 rounded-full text-charcoal-700 text-[11px]">
                  #10%_Giá_trị_con_người
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
