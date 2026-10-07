import { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { Scenario } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Shield,
  AlertTriangle,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  RefreshCw,
} from 'lucide-react';

interface ScenarioModalProps {
  scenario: Scenario | null;
  userChoiceId?: 'A' | 'B' | 'C' | 'D';
  onSelectChoice: (scenarioId: string, choiceId: 'A' | 'B' | 'C' | 'D') => void;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const ScenarioModal: FC<ScenarioModalProps> = ({
  scenario,
  userChoiceId,
  onSelectChoice,
  onClose,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  // Active step in modal: 1 (ĐỌC BỐI CẢNH), 2 (CHỌN PHƯƠNG ÁN), 3 (BÓC TÁCH), 4 (PHẢN TƯ)
  const [currentStep, setCurrentStep] = useState<number>(userChoiceId ? 3 : 1);

  useEffect(() => {
    if (userChoiceId) {
      setCurrentStep(3);
    } else {
      setCurrentStep(1);
    }
  }, [scenario?.id, userChoiceId]);

  // Handle ESC key to close modal & Arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowRight' && hasNext) {
        onNext?.();
      }
      if (e.key === 'ArrowLeft' && hasPrev) {
        onPrev?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!scenario) return null;

  const selectedChoice = userChoiceId
    ? scenario.choices.find((c) => c.id === userChoiceId)
    : null;

  const handlePickChoice = (choiceId: 'A' | 'B' | 'C' | 'D') => {
    onSelectChoice(scenario.id, choiceId);
    setCurrentStep(3);
  };

  const getStepLabel = (step: number) => {
    switch (step) {
      case 1:
        return 'ĐỌC TÌNH HUỐNG';
      case 2:
        return 'ĐƯA RA LỰA CHỌN';
      case 3:
        return 'BÓC TÁCH ĐÁNH ĐỔI';
      case 4:
        return 'SUY NGẪM PHẢN TƯ';
      default:
        return '';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-charcoal-900/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-cream-50 w-full max-w-6xl max-h-[94vh] rounded-3xl border border-academic-border shadow-2xl flex flex-col overflow-hidden text-left relative">

        {/* Top Header & Progress */}
        <div className="px-6 py-4 bg-white border-b border-academic-border flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-burgundy bg-burgundy-50 border border-burgundy-200 px-2.5 py-1 rounded-md">
              TÌNH HUỐNG {scenario.number} / 05
            </span>
            <h2 className="font-serif text-lg sm:text-xl font-bold text-charcoal truncate">
              {scenario.title}
            </h2>
          </div>

          {/* Stepper indicator: 01 / 04 */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex items-center text-xs font-mono font-semibold text-charcoal-500 gap-1 bg-cream-200 px-3 py-1 rounded-full">
              <span className="text-burgundy">
                0{currentStep}
              </span>
              <span>/ 04</span>
              <span className="mx-1 text-charcoal-300">•</span>
              <span className="uppercase text-charcoal-700">
                {getStepLabel(currentStep)}
              </span>
            </div>
          </div>

          {/* Close & Navigation */}
          <div className="flex items-center gap-1.5">
            {hasPrev && (
              <button
                onClick={onPrev}
                className="p-1.5 rounded-lg hover:bg-cream-200 text-charcoal-600 transition-colors"
                title="Tình huống trước (Phím mũi tên trái)"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="p-1.5 rounded-lg hover:bg-cream-200 text-charcoal-600 transition-colors"
                title="Tình huống kế tiếp (Phím mũi tên phải)"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-cream-200 hover:bg-burgundy hover:text-white text-charcoal transition-all ml-2"
              title="Đóng cửa sổ (Phím ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: 3 Columns Desktop / Stacked Mobile */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* COLUMN 1 (LEFT): Scenario Context & Situation */}
            <div className="lg:col-span-4 space-y-5">
              <div className="bg-white rounded-2xl p-5 border border-academic-border shadow-subtle space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-charcoal-400">
                  <span>BỐI CẢNH</span>
                  {/* <span className="text-burgundy font-semibold">TÌNH HUỐNG THỰC TẾ</span> */}
                </div>

                <div className="p-4 bg-cream-100 rounded-xl border border-academic-border/70 font-sans text-sm sm:text-base text-charcoal-800 leading-relaxed font-normal">
                  “{scenario.situation}”
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-burgundy font-bold block">
                    CÂU HỎI TRỌNG TÂM:
                  </span>
                  <div className="font-serif text-base sm:text-lg font-bold text-charcoal leading-snug">
                    {scenario.question}
                  </div>
                </div>

                {/* <div className="pt-2 border-t border-academic-border/70">
                  <div className="text-[11px] font-mono text-charcoal-500 mb-1">
                    Căng thẳng đạo đức tiềm ẩn:
                  </div>
                  <div className="p-2.5 rounded-lg bg-burgundy-50 border border-burgundy-100 text-xs font-mono text-burgundy-900 font-semibold flex items-center justify-between">
                    <span>{scenario.tradeOff.left}</span>
                    <span className="text-burgundy">⚡</span>
                    <span>{scenario.tradeOff.right}</span>
                  </div>
                </div> */}
              </div>
            </div>

            {/* COLUMN 2 (CENTER): Decision Choices (A, B, C, D) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-charcoal-500 px-1">
                <span>QUYẾT ĐỊNH CỦA BẠN</span>
                {/* <span>CHỌN 1 TRONG 4 PHƯƠNG ÁN</span> */}
              </div>

              <div className="space-y-3">
                {scenario.choices.map((choice) => {
                  const isSelected = userChoiceId === choice.id;

                  return (
                    <button
                      key={choice.id}
                      onClick={() => handlePickChoice(choice.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-200 relative flex items-start gap-3 group ${isSelected
                        ? 'bg-burgundy-50 border-burgundy ring-2 ring-burgundy shadow-sm'
                        : 'bg-white hover:bg-cream-100 border-academic-border hover:border-charcoal-300'
                        }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${isSelected
                          ? 'bg-burgundy text-white'
                          : 'bg-cream-200 text-charcoal group-hover:bg-charcoal group-hover:text-white'
                          }`}
                      >
                        {choice.id}
                      </div>

                      <div className="flex-1 text-xs sm:text-sm font-sans text-charcoal-800 leading-relaxed">
                        {choice.text}
                      </div>

                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-burgundy shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {!userChoiceId && (
                <div className="p-3 bg-cream-200/80 rounded-xl text-center text-xs font-mono text-charcoal-600">
                  👆 Vui lòng nhấp vào một phương án để mở khóa phân tích đa chiều.
                </div>
              )}
            </div>

            {/* COLUMN 3 (RIGHT): Reflection & Trade-off Reveal */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-charcoal-500 px-1">
                <span>BÓC TÁCH ĐÁNH ĐỔI</span>
                {userChoiceId && <span className="text-burgundy font-bold">ĐÃ MỞ KHÓA</span>}
              </div>

              {selectedChoice ? (
                <div className="space-y-4 animate-fadeIn">
                  {/* Position banner */}
                  <div className="bg-white rounded-2xl p-5 border border-academic-border shadow-subtle space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-burgundy-50 text-burgundy text-xs font-mono font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>LẬP TRƯỜNG CỦA BẠN • PHƯƠNG ÁN {selectedChoice.id}</span>
                    </div>

                    <div className="text-xs font-mono text-charcoal-500 italic">
                      “Lựa chọn của bạn tiết lộ sự giằng co trực tiếp giữa các giá trị đạo đức:”
                    </div>

                    <div className="p-3 bg-cream-100 rounded-xl border border-academic-border text-xs font-mono text-charcoal">
                      <strong className="text-burgundy block mb-1">Căng thẳng đạo đức cốt lõi:</strong>
                      {scenario.tradeOff.description}
                    </div>

                    {/* 3 Core Prompts */}
                    <div className="space-y-3 pt-2">
                      {/* What does this choice protect? */}
                      <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 uppercase">
                          <Shield className="w-3.5 h-3.5" />
                          <span>Lựa chọn này bảo vệ điều gì?</span>
                        </div>
                        <p className="text-xs text-emerald-950 font-sans leading-relaxed">
                          {selectedChoice.analysis.protects}
                        </p>
                      </div>

                      {/* What does this choice risk? */}
                      <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-800 uppercase">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Lựa chọn này gây rủi ro / đánh đổi gì?</span>
                        </div>
                        <p className="text-xs text-amber-950 font-sans leading-relaxed">
                          {selectedChoice.analysis.risks}
                        </p>
                      </div>

                      {/* What responsibility remains with you? */}
                      <div className="p-3 rounded-xl bg-burgundy-50/60 border border-burgundy-200/80 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-burgundy-800 uppercase">
                          <HeartHandshake className="w-3.5 h-3.5" />
                          <span>Trách nhiệm nào vẫn thuộc về bạn?</span>
                        </div>
                        <p className="text-xs text-burgundy-950 font-sans leading-relaxed font-medium">
                          {selectedChoice.analysis.responsibility}
                        </p>
                      </div>
                    </div>

                    {/* Result statement */}
                    <div className="pt-3 border-t border-academic-border">
                      <div className="text-xs font-mono uppercase text-charcoal-400 mb-1">
                        SUY NGẪM SÂU HƠN:
                      </div>
                      <blockquote className="font-serif text-sm font-semibold text-charcoal italic leading-relaxed">
                        “{scenario.keyReflection}”
                      </blockquote>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white/70 border border-dashed border-academic-border rounded-2xl p-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-cream-200 flex items-center justify-center mx-auto text-charcoal-400">
                    ?
                  </div>
                  <h4 className="font-serif text-base font-bold text-charcoal">
                    Chưa có quyết định
                  </h4>
                  <p className="text-xs text-charcoal-500 font-sans max-w-xs mx-auto">
                    Trong đạo đức học, không có đáp án đúng/sai trắc nghiệm tuyệt đối. Mỗi lựa chọn đều mang lại một lợi ích và đòi hỏi một sự đánh đổi. Hãy chọn phương án ở cột giữa.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-3.5 bg-white border-t border-academic-border flex items-center justify-between">
          <div className="text-xs font-mono text-charcoal-500">
            {userChoiceId ? (
              <span className="text-emerald-700 font-medium">
                ✓ Lựa chọn đã được ghi nhận vào hệ thống.
              </span>
            ) : (
              <span>Vui lòng chọn 1 phương án để hoàn tất tình huống.</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {userChoiceId && (
              <button
                onClick={() => {
                  onSelectChoice(scenario.id, 'C'); // default reset toggle
                }}
                className="text-xs font-mono text-charcoal-500 hover:text-burgundy flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Thử chọn góc nhìn khác</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-charcoal hover:bg-charcoal-800 text-white text-xs font-medium transition-colors"
            >
              Đóng & Quay lại danh sách
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
