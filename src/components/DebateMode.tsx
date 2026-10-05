import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { DEBATE_QUESTIONS } from '../data/debateQuestions';
import { MessageSquare, Users, ChevronDown, ChevronUp, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

export const DebateMode: FC = () => {
  const [expandedId, setExpandedId] = useState<string>('debate-01');

  // Đồng hồ tranh biện tại lớp (tính bằng giây)
  const [timerSeconds, setTimerSeconds] = useState<number>(120);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Trạng thái biểu quyết trực tiếp: { [debateId]: { sideA: number, sideB: number } }
  const [votes, setVotes] = useState<Record<string, { sideA: number; sideB: number }>>({
    'debate-01': { sideA: 14, sideB: 18 },
    'debate-02': { sideA: 8, sideB: 24 },
    'debate-03': { sideA: 16, sideB: 16 },
    'debate-04': { sideA: 10, sideB: 22 },
    'debate-05': { sideA: 12, sideB: 20 },
    'debate-06': { sideA: 7, sideB: 25 },
  });

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  const handleVote = (id: string, side: 'sideA' | 'sideB') => {
    setVotes((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [side]: prev[id][side] + 1,
      },
    }));
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  return (
    <section id="debate" className="py-20 md:py-28 bg-cream-50 border-b border-academic-border scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-xs font-mono font-semibold text-burgundy">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>07 • KHÔNG GIAN TRANH BIỆN LỚP HỌC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-charcoal tracking-tight">
              CHẾ ĐỘ TRANH BIỆN GIẢNG ĐƯỜNG
            </h2>

            <p className="text-lg sm:text-xl font-serif italic text-burgundy">
              “Không có câu trả lời dễ dàng.”
            </p>

            <p className="text-xs sm:text-sm text-charcoal-500 font-sans">
              Mô hình 3C (Bối cảnh - Khái niệm - Xung đột) được thiết kế đặc biệt để giảng viên và sinh viên thực hiện các phiên tranh biện học thuật sôi nổi ngay tại giảng đường.
            </p>
          </div>

          {/* Interactive Live Classroom Timer Widget */}
          <div className="bg-white p-4 rounded-2xl border border-academic-border shadow-subtle flex items-center gap-4 shrink-0">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-charcoal-400 block font-semibold">
                ĐỒNG HỒ TRANH BIỆN (2 PHÚT)
              </span>
              <div className="text-2xl font-mono font-bold text-charcoal">
                {formatTimer(timerSeconds)}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="p-2 rounded-xl bg-burgundy text-white hover:bg-burgundy-700 transition-colors"
                title={isTimerRunning ? 'Tạm dừng' : 'Bắt đầu bấm giờ tranh biện'}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button
                onClick={() => {
                  setIsTimerRunning(false);
                  setTimerSeconds(120);
                }}
                className="p-2 rounded-xl bg-cream-200 text-charcoal hover:bg-cream-300 transition-colors"
                title="Đặt lại 2 phút"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 6 Debate Question Cards */}
        <div className="space-y-4 text-left">
          {DEBATE_QUESTIONS.map((item) => {
            const isExpanded = expandedId === item.id;
            const vote = votes[item.id] || { sideA: 10, sideB: 10 };
            const totalVotes = vote.sideA + vote.sideB;
            const percentA = Math.round((vote.sideA / totalVotes) * 100);

            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-burgundy ring-1 ring-burgundy shadow-academic'
                    : 'border-academic-border hover:border-charcoal-300 shadow-subtle'
                }`}
              >
                {/* Clickable Header */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-burgundy bg-burgundy-50 border border-burgundy-100 px-2.5 py-1 rounded-md shrink-0">
                      CHỦ ĐỀ #{item.number}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal leading-snug">
                      “{item.question}”
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden sm:inline text-xs font-mono text-charcoal-400">
                      {isExpanded ? 'Đóng phân tích 3C' : 'Mở phân tích 3C'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center text-charcoal">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* 3C Framework Deep Dive (Expanded) */}
                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-academic-border/70 space-y-6 animate-fadeIn">
                    
                    {/* 3C Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* 1. CONTEXT */}
                      <div className="p-4 rounded-xl bg-cream-100/70 border border-academic-border space-y-1.5">
                        <span className="text-xs font-mono font-bold text-charcoal-500 uppercase tracking-wider block">
                          01 • BỐI CẢNH THỰC TẾ (CONTEXT)
                        </span>
                        <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-sans">
                          {item.context}
                        </p>
                      </div>

                      {/* 2. CONCEPT */}
                      <div className="p-4 rounded-xl bg-cream-100/70 border border-academic-border space-y-1.5">
                        <span className="text-xs font-mono font-bold text-burgundy uppercase tracking-wider block">
                          02 • HỌC THUYẾT & KHÁI NIỆM (CONCEPT)
                        </span>
                        <p className="text-xs sm:text-sm text-charcoal-800 leading-relaxed font-sans font-medium">
                          {item.concept}
                        </p>
                      </div>

                      {/* 3. KEY TAKEAWAY */}
                      <div className="p-4 rounded-xl bg-burgundy-50 border border-burgundy-100 space-y-1.5">
                        <span className="text-xs font-mono font-bold text-burgundy-800 uppercase tracking-wider block flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>ĐIỂM CHỐT TRANH BIỆN</span>
                        </span>
                        <p className="text-xs sm:text-sm text-burgundy-950 leading-relaxed font-serif italic">
                          “{item.keyTakeaway}”
                        </p>
                      </div>
                    </div>

                    {/* CONFLICT: Two Opposing Sides */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono text-charcoal-500">
                        <span className="font-bold uppercase tracking-wider text-charcoal">
                          03 • HAI CHIẾN TUYẾN LẬP LUẬN (CONFLICT)
                        </span>
                        <span className="flex items-center gap-1 text-charcoal-400">
                          <Users className="w-3.5 h-3.5" /> Biểu quyết trực tiếp tại lớp
                        </span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Side A */}
                        <div className="p-4 rounded-xl bg-white border border-academic-border shadow-subtle flex flex-col justify-between space-y-3">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold text-charcoal-800 uppercase">
                                LUẬN ĐIỂM A
                              </span>
                              <span className="text-xs font-mono text-charcoal-500">
                                {vote.sideA} phiếu ({percentA}%)
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                              {item.conflict.sideA}
                            </p>
                          </div>

                          <button
                            onClick={() => handleVote(item.id, 'sideA')}
                            className="w-full py-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-charcoal text-xs font-mono font-semibold transition-colors"
                          >
                            + Bỏ phiếu cho Luận điểm A
                          </button>
                        </div>

                        {/* Side B */}
                        <div className="p-4 rounded-xl bg-white border border-burgundy-200 shadow-subtle flex flex-col justify-between space-y-3">
                          <div className="space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-bold text-burgundy uppercase">
                                LUẬN ĐIỂM B (PHẢN BIỆN)
                              </span>
                              <span className="text-xs font-mono text-burgundy font-semibold">
                                {vote.sideB} phiếu ({100 - percentA}%)
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                              {item.conflict.sideB}
                            </p>
                          </div>

                          <button
                            onClick={() => handleVote(item.id, 'sideB')}
                            className="w-full py-1.5 rounded-lg bg-burgundy-50 hover:bg-burgundy text-burgundy hover:text-white border border-burgundy-200 text-xs font-mono font-semibold transition-all"
                          >
                            + Bỏ phiếu cho Luận điểm B
                          </button>
                        </div>
                      </div>

                      {/* Vote Ratio Bar */}
                      <div className="w-full h-1.5 bg-cream-300 rounded-full overflow-hidden flex">
                        <div style={{ width: `${percentA}%` }} className="bg-charcoal-600 transition-all duration-300" />
                        <div style={{ width: `${100 - percentA}%` }} className="bg-burgundy transition-all duration-300" />
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
