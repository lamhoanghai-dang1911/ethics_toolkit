import { useState, useEffect, useMemo } from 'react';
import { SCENARIOS } from '../data/scenarios';
import type { ReflectionProfileData } from '../types';

export function useEthicsStore() {
  // Scenario selections: { [scenarioId]: choiceId }
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>(() => {
    try {
      const saved = localStorage.getItem('hcm202_ethics_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Self reflection text
  const [reflectionText, setReflectionText] = useState<string>(() => {
    try {
      return localStorage.getItem('hcm202_reflection_text') || '';
    } catch {
      return '';
    }
  });

  const [submittedReflection, setSubmittedReflection] = useState<string>(() => {
    try {
      return localStorage.getItem('hcm202_submitted_reflection') || '';
    } catch {
      return '';
    }
  });

  // Modal active scenario ID (null if closed)
  const [activeScenarioId, setActiveScenarioId] = useState<string | null>(null);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('hcm202_ethics_answers', JSON.stringify(answers));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [answers]);

  useEffect(() => {
    try {
      localStorage.setItem('hcm202_reflection_text', reflectionText);
    } catch {
      // Ignore
    }
  }, [reflectionText]);

  useEffect(() => {
    try {
      localStorage.setItem('hcm202_submitted_reflection', submittedReflection);
    } catch {
      // Ignore
    }
  }, [submittedReflection]);

  // Handle selecting an answer
  const selectAnswer = (scenarioId: string, choiceId: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => ({
      ...prev,
      [scenarioId]: choiceId,
    }));
  };

  // Submit personal reflection
  const saveReflection = (text: string) => {
    setSubmittedReflection(text);
  };

  // Clear answers (reset)
  const resetAnswers = () => {
    setAnswers({});
    try {
      localStorage.removeItem('hcm202_ethics_answers');
    } catch {
      // Ignore
    }
  };

  // Dynamic Reflection Profile (NO MORAL GRADING)
  const profile: ReflectionProfileData = useMemo(() => {
    const answeredCount = Object.keys(answers).length;
    if (answeredCount === 0) {
      return {
        verificationScore: 50,
        understandingScore: 50,
        judgmentScore: 50,
        responsibilityScore: 50,
        totalAnswered: 0,
        dominantTraits: ['Chưa ghi nhận lựa chọn'],
        summaryNote: 'Hãy thử tương tác với ít nhất một tình huống trong Toolkit để xem khuynh hướng phản tư của bạn.',
      };
    }

    let verification = 40;
    let understanding = 40;
    let judgment = 40;
    let responsibility = 40;
    const tendencies: Record<string, number> = {
      efficiency: 0,
      verification: 0,
      self_cultivation: 0,
      critical_thinking: 0,
      abdication: 0,
      responsibility: 0,
      judgment: 0,
      understanding: 0,
    };

    SCENARIOS.forEach((scenario) => {
      const choiceId = answers[scenario.id];
      if (!choiceId) return;

      const choice = scenario.choices.find((c) => c.id === choiceId);
      if (!choice) return;

      tendencies[choice.tendency] = (tendencies[choice.tendency] || 0) + 1;

      switch (choice.tendency) {
        case 'efficiency':
          verification -= 5;
          judgment -= 5;
          responsibility -= 5;
          break;
        case 'verification':
          verification += 25;
          responsibility += 15;
          break;
        case 'self_cultivation':
          understanding += 25;
          judgment += 20;
          responsibility += 20;
          break;
        case 'critical_thinking':
          judgment += 25;
          understanding += 20;
          verification += 15;
          break;
        case 'responsibility':
          responsibility += 30;
          judgment += 15;
          verification += 15;
          break;
        case 'judgment':
          judgment += 30;
          understanding += 15;
          break;
        case 'understanding':
          understanding += 30;
          responsibility += 15;
          break;
        case 'abdication':
          responsibility -= 20;
          judgment -= 15;
          understanding -= 10;
          break;
      }
    });

    // Bound values between 25 and 92 (no 100/100 or 0/100 moral judgements)
    const clamp = (val: number) => Math.max(25, Math.min(92, Math.round(val)));
    const vScore = clamp(verification);
    const uScore = clamp(understanding);
    const jScore = clamp(judgment);
    const rScore = clamp(responsibility);

    const traits: string[] = [];
    if (tendencies.self_cultivation > 0 || tendencies.understanding > 0)
      traits.push('Ý thức rèn luyện năng lực tự thân');
    if (tendencies.verification > 0)
      traits.push('Thói quen kiểm chứng nguồn thông tin');
    if (tendencies.critical_thinking > 0 || tendencies.judgment > 0)
      traits.push('Tư duy phản biện và truy vấn tính hợp lý');
    if (tendencies.responsibility > 0)
      traits.push('Cam kết trách nhiệm học thuật cá nhân');
    if (tendencies.efficiency > 0)
      traits.push('Khuynh hướng tối ưu hóa thời gian & hiệu suất');
    if (tendencies.abdication > 0)
      traits.push('Xu hướng nhượng bộ phán đoán khi gặp áp lực');

    let summary = '';
    if (tendencies.efficiency >= 2) {
      summary =
        'Các lựa chọn của bạn phản ánh sự ưu tiên cao cho tính Hiệu quả (Efficiency) và tiến độ công việc. Đây là phản xạ thực tế, nhưng cũng là lời nhắc nhở cần chú ý bảo vệ không gian cho việc tự thấu hiểu sâu.';
    } else if (tendencies.self_cultivation >= 2 || tendencies.understanding >= 2) {
      summary =
        'Bạn thể hiện sự cam kết mạnh mẽ với quá trình Tự tu dưỡng (Self-cultivation). Bạn sẵn sàng chấp nhận sự vất vả của việc tự học thay vì giao toàn bộ quá trình nhận thức cho máy móc.';
    } else if (
      tendencies.verification >= 2 ||
      tendencies.critical_thinking >= 2 ||
      tendencies.judgment >= 2
    ) {
      summary =
        'Lựa chọn của bạn đặt trọng tâm vào Kiểm chứng (Verification) và Phán đoán phản biện. Bạn có sự cảnh giác lành mạnh trước ảo giác thông tin của AI.';
    } else {
      summary =
        'Hồ sơ phản ánh sự cân bằng và giằng co tự nhiên giữa áp lực hoàn thành nhiệm vụ với ý thức trách nhiệm cá nhân đối với sản phẩm học tập.';
    }

    return {
      verificationScore: vScore,
      understandingScore: uScore,
      judgmentScore: jScore,
      responsibilityScore: rScore,
      totalAnswered: answeredCount,
      dominantTraits: traits,
      summaryNote: summary,
    };
  }, [answers]);

  return {
    answers,
    selectAnswer,
    resetAnswers,
    reflectionText,
    setReflectionText,
    submittedReflection,
    saveReflection,
    activeScenarioId,
    setActiveScenarioId,
    profile,
  };
}
