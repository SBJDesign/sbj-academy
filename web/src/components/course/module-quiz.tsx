'use client';

import type { ModuleQuiz, QuizModuleState } from '@/lib/types';

const LETTERS = ['A', 'B', 'C', 'D'];

interface ModuleQuizProps {
  quiz: ModuleQuiz;
  state: QuizModuleState;
  onSelect: (questionIndex: number, optionIndex: number) => void;
  onSubmit: () => void;
  onRetake: () => void;
}

export function ModuleQuizPanel({
  quiz,
  state,
  onSelect,
  onSubmit,
  onRetake,
}: ModuleQuizProps) {
  const allAnswered = quiz.questions.every((_, i) => state.answers[i] !== undefined);
  const pct = state.submitted
    ? Math.round((state.score / quiz.questions.length) * 100)
    : 0;

  return (
    <section className="quiz-section">
      <div className="quiz-head">
        <div className="quiz-icon-box">🧠</div>
        <div>
          <div className="quiz-title">{quiz.title}</div>
          <div className="quiz-sub-text">4 questions · Test your understanding</div>
        </div>
      </div>

      {!state.submitted ? (
        <>
          {quiz.questions.map((question, qi) => (
            <div key={qi} className="q-item">
              <div className="q-num">Question {qi + 1}</div>
              <p className="q-text">{question.q}</p>
              <div className="q-opts">
                {question.opts.map((opt, oi) => {
                  const selected = state.answers[qi] === oi;
                  return (
                    <button
                      key={oi}
                      type="button"
                      className={`q-opt ${selected ? 'selected' : ''}`}
                      onClick={() => onSelect(qi, oi)}
                    >
                      <span className="opt-ltr">{LETTERS[oi]}</span>
                      <span>{opt}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="quiz-submit-row">
            <button
              type="button"
              className="quiz-btn"
              disabled={!allAnswered}
              onClick={onSubmit}
            >
              Submit Quiz
            </button>
            <span className="text-xs text-muted">
              {allAnswered ? 'Ready to submit' : 'Answer all questions to submit'}
            </span>
          </div>
        </>
      ) : (
        <div className="quiz-result show">
          <div className="qr-icon">{pct >= 75 ? '🎉' : pct >= 50 ? '👍' : '📚'}</div>
          <div className="qr-title">
            {pct >= 75 ? 'Excellent!' : pct >= 50 ? 'Good effort!' : 'Keep learning!'}
          </div>
          <div className="qr-score">
            {state.score}/{quiz.questions.length}
          </div>
          <p className="qr-sub">{pct}% correct</p>
          <button type="button" className="retake-btn" onClick={onRetake}>
            Retake Quiz
          </button>
        </div>
      )}
    </section>
  );
}
