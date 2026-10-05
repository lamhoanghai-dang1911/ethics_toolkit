import { useEthicsStore } from './hooks/useEthicsStore';
import { SCENARIOS } from './data/scenarios';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EthicalProblem } from './components/EthicalProblem';
import { Toolkit } from './components/Toolkit';
import { ScenarioModal } from './components/ScenarioModal';
import { Framework } from './components/Framework';
import { HumanValue } from './components/HumanValue';
import { SelfCultivation } from './components/SelfCultivation';
import { Footer } from './components/Footer';

export function App() {
  const {
    answers,
    selectAnswer,
    resetAnswers,
    activeScenarioId,
    setActiveScenarioId,
  } = useEthicsStore();

  const handleStartToolkit = () => {
    const el = document.getElementById('toolkit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProblem = () => {
    const el = document.getElementById('problem');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Find active scenario object
  const currentScenario = activeScenarioId
    ? SCENARIOS.find((s) => s.id === activeScenarioId) || null
    : null;

  const currentScenarioIndex = SCENARIOS.findIndex(
    (s) => s.id === activeScenarioId
  );
  const hasNextScenario =
    currentScenarioIndex !== -1 && currentScenarioIndex < SCENARIOS.length - 1;
  const hasPrevScenario = currentScenarioIndex > 0;

  const handleNextScenario = () => {
    if (hasNextScenario) {
      setActiveScenarioId(SCENARIOS[currentScenarioIndex + 1].id);
    }
  };

  const handlePrevScenario = () => {
    if (hasPrevScenario) {
      setActiveScenarioId(SCENARIOS[currentScenarioIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal font-sans selection:bg-burgundy-100 selection:text-burgundy-900">
      
      {/* Sticky Academic Navbar */}
      <Navbar
        onStartToolkit={handleStartToolkit}
        answeredCount={Object.keys(answers).length}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onStartToolkit={handleStartToolkit}
          onExploreProblem={handleExploreProblem}
        />

        {/* Section 01: The Ethical Problem */}
        <EthicalProblem />

        {/* Section 02: Main Toolkit (5 Scenarios) */}
        <Toolkit
          answers={answers}
          onOpenScenario={(id) => setActiveScenarioId(id)}
          onReset={resetAnswers}
        />

        {/* Section 03: Core Framework (4 Questions) */}
        <Framework />

        {/* Phân công lao động nhận thức (Giá trị con người) */}
        <HumanValue />

        {/* Nền tảng tự tu dưỡng HCM202 */}
        <SelfCultivation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Scenario Modal */}
      {currentScenario && (
        <ScenarioModal
          scenario={currentScenario}
          userChoiceId={answers[currentScenario.id]}
          onSelectChoice={selectAnswer}
          onClose={() => setActiveScenarioId(null)}
          onNext={handleNextScenario}
          onPrev={handlePrevScenario}
          hasNext={hasNextScenario}
          hasPrev={hasPrevScenario}
        />
      )}

    </div>
  );
}

export default App;
