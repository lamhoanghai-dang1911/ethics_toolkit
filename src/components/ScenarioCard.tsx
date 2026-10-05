import type { FC } from 'react';
import type { Scenario } from '../types';
import { ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

interface ScenarioCardProps {
  scenario: Scenario;
  userChoiceId?: 'A' | 'B' | 'C' | 'D';
  onOpen: (scenarioId: string) => void;
}

export const ScenarioCard: FC<ScenarioCardProps> = ({
  scenario,
  userChoiceId,
  onOpen,
}) => {
  const isAnswered = Boolean(userChoiceId);

  return (
    <div
      onClick={() => onOpen(scenario.id)}
      className="group bg-white rounded-2xl border border-academic-border p-6 sm:p-7 hover:border-burgundy/60 transition-all duration-300 shadow-subtle hover:shadow-academic cursor-pointer flex flex-col justify-between text-left relative overflow-hidden w-full h-full"
    >
      {/* Top indicator bar if answered */}
      {isAnswered && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-burgundy" />
      )}

      <div>
        {/* Number & Tags */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-xs font-bold text-burgundy bg-burgundy-50 border border-burgundy-100 px-2.5 py-1 rounded-md">
            TÌNH HUỐNG {scenario.number}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {scenario.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-charcoal-500 bg-cream-200 px-2 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal group-hover:text-burgundy transition-colors leading-tight mb-2">
          {scenario.title}
        </h3>
        <p className="text-xs text-charcoal-500 font-mono line-clamp-1 mb-4">
          {scenario.subtitle}
        </p>

        {/* Situation Snippet */}
        <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed mb-6 font-sans">
          {scenario.situation}
        </p>
      </div>

      {/* Trade-off pill & CTA */}
      <div className="space-y-4 pt-4 border-t border-academic-border/70">
        {/* Trade-off indicator */}
        <div className="p-2.5 bg-cream-100 rounded-xl border border-academic-border/60">
          <div className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 mb-1">
            Xung đột đánh đổi cốt lõi:
          </div>
          <div className="flex items-center justify-between text-xs font-mono font-semibold text-charcoal">
            <span>{scenario.tradeOff.left}</span>
            <span className="text-burgundy">↔</span>
            <span>{scenario.tradeOff.right}</span>
          </div>
        </div>

        {/* Action Button & Status */}
        <div className="flex items-center justify-between pt-1">
          {isAnswered ? (
            <div className="flex items-center gap-1.5 text-xs font-mono text-burgundy font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Đã chọn ({userChoiceId}) • Xem bóc tách</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs font-mono text-charcoal-500">
              <HelpCircle className="w-4 h-4" />
              <span>Chưa đưa ra phán đoán</span>
            </div>
          )}

          <div className="w-8 h-8 rounded-full bg-cream-200 group-hover:bg-burgundy group-hover:text-white flex items-center justify-center transition-all text-charcoal shrink-0">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};
