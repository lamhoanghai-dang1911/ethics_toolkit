import type { FC } from 'react';
import { SCENARIOS } from '../data/scenarios';
import { ScenarioCard } from './ScenarioCard';
import { Compass, RotateCcw, Sparkles } from 'lucide-react';

interface ToolkitProps {
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  onOpenScenario: (scenarioId: string) => void;
  onReset: () => void;
}

export const Toolkit: FC<ToolkitProps> = ({
  answers,
  onOpenScenario,
  onReset,
}) => {
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / SCENARIOS.length) * 100);

  return (
    <section id="toolkit" className="py-20 md:py-28 bg-cream-50 border-b border-academic-border scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-xs font-mono font-semibold text-burgundy">
              <Compass className="w-3.5 h-3.5" />
              <span>PHÒNG THÍ NGHIỆM ĐẠO ĐỨC HỌC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
              BỘ TÌNH HUỐNG ĐẠO ĐỨC THỰC CHIẾN
            </h2>

            <p className="text-base sm:text-lg text-charcoal-600 font-sans">
              Chọn một tình huống thực tế. Đưa ra phán đoán của riêng bạn. Sau đó cùng bóc tách điều gì thực sự đang bị đánh đổi giữa{' '}
              <strong className="text-charcoal font-semibold">tiện ích trước mắt</strong> và{' '}
              <strong className="text-burgundy font-semibold">năng lực tự tu dưỡng</strong>.
            </p>
          </div>

          {/* Progress & Reset Status Card */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-academic-border shadow-subtle shrink-0 min-w-[280px]">
            <div className="flex items-center justify-between text-xs font-mono text-charcoal-500 mb-2">
              <span>TIẾN ĐỘ TỰ VẤN</span>
              <span className="font-bold text-burgundy">{answeredCount} / {SCENARIOS.length} HOÀN THÀNH</span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2.5 bg-cream-200 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-burgundy transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-charcoal-500">
                {progressPercent === 100 ? (
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Đã hoàn thành 5/5 tình huống
                  </span>
                ) : (
                  `Còn ${5 - answeredCount} tình huống chưa hoàn thành`
                )}
              </span>

              {answeredCount > 0 && (
                <button
                  onClick={onReset}
                  className="text-charcoal-400 hover:text-burgundy flex items-center gap-1 transition-colors"
                  title="Đặt lại tất cả lựa chọn"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Làm lại từ đầu</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 5 Scenario Cards - Symmetrical Centered Layout */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {SCENARIOS.map((scenario) => (
            <div
              key={scenario.id}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)] max-w-md lg:max-w-none flex"
            >
              <ScenarioCard
                scenario={scenario}
                userChoiceId={answers[scenario.id]}
                onOpen={onOpenScenario}
              />
            </div>
          ))}
        </div>

        {/* Bottom Educational Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-academic-border text-center max-w-3xl mx-auto shadow-subtle">
          <p className="text-xs sm:text-sm font-mono text-charcoal-600">
            💡 <strong className="text-charcoal">Ghi chú phương pháp luận:</strong> Trong bộ công cụ này, chúng tôi không phân định Đúng/Sai theo lối trắc nghiệm thuộc lòng.
            Mục đích là kích thích tư duy phản biện, giúp bạn tự nhận diện cái giá phải trả của mỗi quyết định học thuật.
          </p>
        </div>

      </div>
    </section>
  );
};
