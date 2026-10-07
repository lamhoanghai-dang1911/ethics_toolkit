import type { FC } from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-cream-100 py-16 border-t border-charcoal-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-charcoal-700">

          {/* Brand & Quote */}
          <div className="text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start">
              <span className="font-serif text-xl font-bold tracking-tight text-white">
                BỘ CÔNG CỤ ĐẠO ĐỨC AI
              </span>
            </div>

            <blockquote className="font-serif text-lg sm:text-xl text-cream-200 italic max-w-xl">
              “Học cách làm chủ AI.
              <br />
              <span className="text-burgundy-300">Nhưng đừng bao giờ khoán trắng việc suy nghĩ cho máy.”</span>
            </blockquote>

            <p className="text-xs font-mono text-charcoal-400">
              Đạo đức và tu dưỡng trong thời đại AI
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-charcoal-800 hover:bg-burgundy text-cream-200 hover:text-white transition-all border border-charcoal-700 flex items-center gap-2 text-xs font-mono"
            title="Cuộn lên đầu trang"
          >
            <span>LÊN ĐẦU TRANG</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Credits */}
        {/* <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-400 text-center sm:text-left">
          <div>
            Sản phẩm học thuật sáng tạo phục vụ thuyết trình & tranh biện môn học HCM202.
          </div>
          <div>
            Bản quyền tư duy © 2026 • <strong className="text-cream-200">Nhóm 04</strong>: Lâm Hoàng Hải Đăng, Nguyễn Quang Trường, Dương Hữu Đức, Vũ Thanh Hải
          </div>
        </div> */}
      </div>
    </footer>
  );
};
