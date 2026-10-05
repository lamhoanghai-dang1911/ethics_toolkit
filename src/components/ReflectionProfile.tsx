import type { FC } from 'react';
import type { ReflectionProfileData } from '../types';
import { Activity, ShieldCheck, Eye, Brain, Scale } from 'lucide-react';

interface ReflectionProfileProps {
  profile: ReflectionProfileData;
  onOpenToolkit: () => void;
}

export const ReflectionProfile: FC<ReflectionProfileProps> = ({
  profile,
  onOpenToolkit,
}) => {
  const indicators = [
    {
      name: 'Kiểm chứng nguồn gốc (Verification)',
      value: profile.verificationScore,
      icon: Eye,
      desc: 'Xu hướng tự đối chiếu nguồn gốc, nghi vấn ảo giác thông tin và không chấp nhận trích dẫn mù quáng.',
    },
    {
      name: 'Thấu hiểu tri thức (Understanding)',
      value: profile.understandingScore,
      icon: Brain,
      desc: 'Mức độ coi trọng việc biến tri thức thành năng lực nội tại thay vì chỉ nộp bài hình thức lấy điểm.',
    },
    {
      name: 'Phán đoán đạo đức (Judgment)',
      value: profile.judgmentScore,
      icon: Scale,
      desc: 'Ý thức giữ quyền lựa chọn đạo đức và cân nhắc nhân văn thay vì giao phó cho thuật toán tối ưu hóa.',
    },
    {
      name: 'Gánh vác trách nhiệm (Responsibility)',
      value: profile.responsibilityScore,
      icon: ShieldCheck,
      desc: 'Sẵn sàng đứng tên và gánh vác mọi sai sót hoặc hậu quả học thuật mà không đổ lỗi cho AI.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-b border-academic-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-academic-border text-xs font-mono font-medium text-charcoal-700">
            <Activity className="w-3.5 h-3.5 text-burgundy" />
            <span>HỒ SƠ KHUYNH HƯỚNG PHẢN TƯ</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-charcoal tracking-tight">
            HỒ SƠ KHUYNH HƯỚNG PHẢN TƯ CỦA BẠN
          </h2>

          <p className="text-xs sm:text-sm text-charcoal-500 font-mono max-w-xl mx-auto">
            (Bản đồ thể hiện xu hướng cân nhắc của bạn qua các tình huống. Đây <strong className="text-charcoal font-bold">không phải điểm đạo đức</strong> và không đánh giá phẩm chất con người).
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-cream-50 rounded-3xl border border-academic-border p-6 sm:p-8 lg:p-10 shadow-academic">
          
          {/* Top Summary Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-academic-border mb-8 text-left space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-charcoal-500">
              <span className="font-bold text-burgundy uppercase">NHẬN ĐỊNH TỔNG QUAN</span>
              <span>Đã phản tư {profile.totalAnswered} / 5 tình huống</span>
            </div>
            <p className="text-sm sm:text-base text-charcoal-800 font-serif italic leading-relaxed">
              “{profile.summaryNote}”
            </p>
            {profile.dominantTraits.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-academic-border/60">
                {profile.dominantTraits.map((trait, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-burgundy-50 text-burgundy-900 border border-burgundy-200"
                  >
                    ✓ {trait}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 4 Dimension Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {indicators.map((ind, idx) => {
              const Icon = ind.icon;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-academic-border/90 shadow-subtle space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-cream-200 text-charcoal flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-charcoal">
                        {ind.name}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-cream-100 text-charcoal-700">
                      {ind.value}% chú trọng
                    </span>
                  </div>

                  {/* Relative bar */}
                  <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-burgundy rounded-full transition-all duration-700"
                      style={{ width: `${ind.value}%` }}
                    />
                  </div>

                  <p className="text-xs text-charcoal-500 font-sans leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer Guidance */}
          <div className="mt-8 pt-6 border-t border-academic-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-500">
            <span>
              💡 Mục tiêu của học phần HCM202 là bồi dưỡng sự tự ý thức liên tục trong mọi hành vi.
            </span>

            {profile.totalAnswered < 5 && (
              <button
                onClick={onOpenToolkit}
                className="text-burgundy hover:underline font-bold shrink-0"
              >
                Tiếp tục hoàn thành {5 - profile.totalAnswered} tình huống còn lại →
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
