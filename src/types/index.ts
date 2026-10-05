export type TendencyType =
  | 'efficiency'
  | 'verification'
  | 'self_cultivation'
  | 'critical_thinking'
  | 'abdication'
  | 'responsibility'
  | 'judgment'
  | 'understanding';

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  tendency: TendencyType;
  analysis: {
    protects: string;
    risks: string;
    responsibility: string;
  };
}

export interface Scenario {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  situation: string;
  question: string;
  choices: Choice[];
  tradeOff: {
    left: string;
    right: string;
    description: string;
  };
  keyReflection: string;
  tags: string[];
}

export interface DebateQuestion {
  id: string;
  number: string;
  question: string;
  context: string;
  concept: string;
  conflict: {
    sideA: string;
    sideB: string;
  };
  keyTakeaway: string;
}

export interface FrameworkStep {
  number: string;
  keyword: string;
  title: string;
  question: string;
  description: string;
  checklist: string[];
  actionPrompt: string;
}

export interface UserScenarioState {
  scenarioId: string;
  selectedChoiceId: 'A' | 'B' | 'C' | 'D';
  timestamp: number;
}

export interface ReflectionProfileData {
  verificationScore: number;
  understandingScore: number;
  judgmentScore: number;
  responsibilityScore: number;
  totalAnswered: number;
  dominantTraits: string[];
  summaryNote: string;
}
