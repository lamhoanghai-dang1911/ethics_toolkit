import { useState } from 'react';
import type { FC } from 'react';
import { FRAMEWORK_STEPS } from '../data/framework';
import { CheckSquare, ArrowDown, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';

export const Framework: FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3); // Mặc định ở Bước 04: Gánh vác trách nhiệm

  return (
    <section id="framework" className="py-20 md:py-28 bg-white border-b border-academic-border scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 border border-academic-border text-xs font-mono font-medium text-charcoal-700">
            <span>KHUNG HÀNH ĐỘNG HỌC THUẬT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
            4 CÂU HỎI TỰ VẤN TRƯỚC KHI TIN DÙNG AI
          </h2>

          <p className="text-base sm:text-lg text-charcoal-600 font-sans max-w-2xl mx-auto">
            Quy trình tự vấn 4 bước dành cho sinh viên trước khi quyết định đưa bất kỳ nội dung do AI tạo ra vào bài tập, báo cáo hay bài thuyết trình.
          </p>
        </div>

        {/* 4 Steps Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Visual Flow (HỎI ↓ KIỂM ↓ THẤU ↓ NHẬN) */}
          <div className="lg:col-span-5 space-y-3">
            {FRAMEWORK_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isOwn = step.number === '04';

              return (
                <div key={step.number} className="relative">
                  <div
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-2xl p-4 sm:p-5 border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                      isOwn
                        ? isActive
                          ? 'bg-burgundy text-white border-burgundy shadow-elevated scale-[1.02]'
                          : 'bg-burgundy-50 border-burgundy-300 text-burgundy-950 hover:bg-burgundy-100'
                        : isActive
                        ? 'bg-charcoal text-white border-charcoal shadow-academic scale-[1.02]'
                        : 'bg-cream-50 border-academic-border hover:bg-cream-100 text-charcoal'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Step Number Badge */}
                      <span
                        className={`w-9 h-9 rounded-xl font-mono text-sm font-bold flex items-center justify-center shrink-0 ${
                          isOwn
                            ? isActive
                              ? 'bg-white text-burgundy'
                              : 'bg-burgundy text-white'
                            : isActive
                            ? 'bg-white text-charcoal'
                            : 'bg-cream-200 text-charcoal'
                        }`}
                      >
                        {step.number}
                      </span>

                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-mono text-xs font-bold tracking-wider uppercase ${
                              isOwn && !isActive ? 'text-burgundy' : ''
                            }`}
                          >
                            {step.keyword}
                          </span>
                          {isOwn && (
                            <span
                              className={`text-[10px] font-mono px-2 py-0.2 rounded-full uppercase font-bold ${
                                isActive ? 'bg-burgundy-900 text-burgundy-100' : 'bg-burgundy text-white'
                              }`}
                            >
                              ★ ĐIỂM CHỐT TRÁCH NHIỆM
                            </span>
                          )}
                        </div>
                        <div
                          className={`font-serif text-base sm:text-lg font-bold leading-snug ${
                            isActive ? 'text-white' : 'text-charcoal'
                          }`}
                        >
                          “{step.question}”
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isActive ? 'translate-x-1' : 'opacity-40'
                      }`}
                    />
                  </div>

                  {/* Flow Arrow to next item */}
                  {idx < FRAMEWORK_STEPS.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-burgundy-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-dive Detail Card for Selected Step */}
          <div className="lg:col-span-7">
            {(() => {
              const current = FRAMEWORK_STEPS[activeStep];
              const isOwn = current.number === '04';

              return (
                <div
                  className={`rounded-3xl p-6 sm:p-8 border shadow-academic transition-all text-left space-y-6 ${
                    isOwn
                      ? 'bg-cream-50 border-burgundy-300 ring-2 ring-burgundy/20'
                      : 'bg-white border-academic-border'
                  }`}
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-academic-border">
                    <div>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-burgundy">
                        BƯỚC {current.number} • {current.title}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-1">
                        {current.keyword}: “{current.question}”
                      </h3>
                    </div>
                    {isOwn && (
                      <div className="w-12 h-12 rounded-2xl bg-burgundy text-white flex items-center justify-center shrink-0 shadow-subtle">
                        <ShieldAlert className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  {/* Deep Description */}
                  <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed font-sans">
                    {current.description}
                  </p>

                  {/* Practical Checklist for Students */}
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal-500 block">
                      DANH SÁCH KIỂM TRA TRƯỚC KHI NỘP BÀI:
                    </span>
                    <div className="space-y-2.5">
                      {current.checklist.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-academic-border/80 text-xs sm:text-sm text-charcoal font-sans"
                        >
                          <CheckSquare className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Rule Capsule */}
                  <div
                    className={`p-4 rounded-xl border text-xs sm:text-sm font-mono flex items-center gap-3 ${
                      isOwn
                        ? 'bg-burgundy text-white border-burgundy'
                        : 'bg-cream-200 border-academic-border text-charcoal'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>{current.actionPrompt}</span>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

        {/* Section Caption Banner */}
        <div className="p-6 rounded-2xl bg-cream-100 border border-academic-border text-center max-w-2xl mx-auto shadow-subtle">
          <blockquote className="font-serif text-lg sm:text-xl font-bold text-charcoal">
            “AI có thể hỗ trợ quá trình.
            <br />
            <span className="text-burgundy">Nhưng trách nhiệm không bao giờ được khoán trắng cho máy.</span>”
          </blockquote>
          <p className="text-xs font-mono text-charcoal-500 mt-2">
            Nguyên tắc cốt lõi: Bạn là tác giả, bạn là người bảo vệ, bạn là người chịu trách nhiệm.
          </p>
        </div>

      </div>
    </section>
  );
};
