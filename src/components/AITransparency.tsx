import type { FC } from 'react';
import { ShieldCheck, Check, UserCheck, Bot } from 'lucide-react';

export const AITransparency: FC = () => {
  const aiUsedFor = [
    'Khơi gợi các kịch bản tình huống đa dạng ban đầu',
    'Tạo sinh các phương án phản biện giả định để đối chiếu',
    'Thử nghiệm góc nhìn phê bình và phản biện đa chiều',
    'Gợi ý trau chuốt câu từ và tối ưu hóa cách hành văn học thuật',
    'Tham khảo ý tưởng cấu trúc giao diện tương tác số',
  ];

  const humansDid = [
    'Lựa chọn và quyết định các luận cứ triết học cuối cùng',
    'Kiểm chứng toàn bộ thông tin và nguồn gốc tài liệu học thuật',
    'Đưa ra các phán đoán đạo đức và xác lập chuẩn mực giá trị',
    'Thiết kế toàn bộ ý tưởng & kiến trúc sản phẩm bộ công cụ',
    'Biên tập và quyết định nội dung văn bản chính thức',
    'Gánh vác 100% trách nhiệm trước hội đồng chấm thi môn HCM202',
  ];

  return (
    <section id="transparency" className="py-20 md:py-28 bg-white border-b border-academic-border scroll-mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-academic-border text-xs font-mono font-medium text-charcoal-700">
            <ShieldCheck className="w-3.5 h-3.5 text-burgundy" />
            <span>LIÊM CHÍNH HỌC THUẬT & MINH BẠCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
            CÁCH CHÚNG TÔI SỬ DỤNG AI
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans max-w-2xl mx-auto">
            Thực hành đúng tinh thần của môn học: Chúng tôi công khai 100% ranh giới phân công giữa công cụ trí tuệ nhân tạo và lao động trí tuệ của con người.
          </p>
        </div>

        {/* 2-Column Transparency Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          
          {/* Column 1: AI WAS USED FOR */}
          <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-academic-border shadow-subtle flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-academic-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-100 flex items-center justify-center text-charcoal">
                    <Bot className="w-5 h-5 text-charcoal-700" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-charcoal-500 uppercase tracking-wider block">
                      VAI TRÒ CỦA CÔNG CỤ
                    </span>
                    <h3 className="font-serif text-xl font-bold text-charcoal">
                      AI ĐÃ ĐƯỢC DÙNG ĐỂ:
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-white border border-academic-border text-charcoal-600 font-semibold">
                  TRỢ THỦ
                </span>
              </div>

              <ul className="space-y-3 font-sans text-sm text-charcoal-700">
                {aiUsedFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-charcoal-400 mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-academic-border/70 text-xs font-mono text-charcoal-500">
              * AI chỉ đóng vai trò đối thoại, khơi gợi và phản biện sơ khởi.
            </div>
          </div>

          {/* Column 2: HUMANS DID */}
          <div className="bg-burgundy-50/50 rounded-3xl p-6 sm:p-8 border border-burgundy-200 shadow-academic flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-burgundy-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-burgundy text-white flex items-center justify-center shadow-subtle">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-burgundy-700 uppercase tracking-wider block font-bold">
                      CHỦ THỂ QUYẾT ĐỊNH
                    </span>
                    <h3 className="font-serif text-xl font-bold text-charcoal">
                      CON NGƯỜI ĐÃ TỰ THỰC HIỆN:
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-burgundy text-white font-bold">
                  TÁC GIẢ
                </span>
              </div>

              <ul className="space-y-3 font-sans text-sm text-charcoal-900 font-medium">
                {humansDid.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-burgundy-200 text-xs font-mono text-burgundy-900 font-bold">
              ★ Toàn bộ phán đoán giá trị và danh dự thuộc về nhóm sinh viên thực hiện.
            </div>
          </div>

        </div>

        {/* Footer Statement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-charcoal text-white text-center shadow-elevated">
          <blockquote className="font-serif text-xl sm:text-2xl font-bold text-cream-100 leading-snug">
            “AI đóng góp vào tiến trình.
            <br />
            <span className="text-burgundy-300">Con người chịu trách nhiệm toàn diện cho sản phẩm cuối cùng.”</span>
          </blockquote>
          <p className="text-xs font-mono text-charcoal-300 mt-2">
            (AI contributed to the process. Humans remained responsible for the final product).
          </p>
        </div>

      </div>
    </section>
  );
};
