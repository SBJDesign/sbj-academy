'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { CourseData, CourseProgress } from '@/lib/types';
import {
  completionPercent,
  loadProgress,
  saveProgress,
} from '@/lib/progress';
import { generateCertificateId } from '@/lib/certificate';
import { getModuleGuides } from '@/lib/module-guides';
import { CertificateModal } from './certificate-modal';
import { ModuleGuidePanel } from './module-guide';
import { ModuleQuizPanel } from './module-quiz';
import { ThemeToggle } from '@/components/layout/theme-toggle';

function withCompletionMeta(
  progress: CourseProgress,
  courseSlug: string,
  completed: boolean[]
): CourseProgress {
  const allDone = completed.every(Boolean);
  if (!allDone) return { ...progress, completed };

  const completedAt = progress.completedAt ?? new Date().toISOString();
  const certificateId =
    progress.certificateId ?? generateCertificateId(courseSlug, completedAt);

  return { ...progress, completed, completedAt, certificateId };
}

export function CoursePlayer({ course }: { course: CourseData }) {
  const moduleCount = course.modMeta.length;
  const guides = getModuleGuides(course.slug);
  const [currentMod, setCurrentMod] = useState(0);
  const [progress, setProgress] = useState<CourseProgress | null>(null);
  const [showCert, setShowCert] = useState(false);

  useEffect(() => {
    const loaded = loadProgress(course.slug, moduleCount);
    setProgress(loaded);
    setCurrentMod(loaded.lastModule);
  }, [course.slug, moduleCount]);

  const persist = useCallback(
    (next: CourseProgress) => {
      setProgress(next);
      saveProgress(course.slug, next);
    },
    [course.slug]
  );

  const pct = progress ? completionPercent(progress.completed) : 0;
  const allComplete = progress?.completed.every(Boolean) ?? false;

  const selectAnswer = (qi: number, oi: number) => {
    if (!progress) return;
    const quizzes = [...progress.quizzes];
    const st = { ...quizzes[currentMod], answers: { ...quizzes[currentMod].answers, [qi]: oi } };
    quizzes[currentMod] = st;
    persist({ ...progress, quizzes });
  };

  const submitQuiz = () => {
    if (!progress) return;
    const quiz = course.quizzes[currentMod];
    const st = progress.quizzes[currentMod];
    let score = 0;
    quiz.questions.forEach((q, i) => {
      if (st.answers[i] === q.correct) score++;
    });
    const quizzes = [...progress.quizzes];
    quizzes[currentMod] = { ...st, submitted: true, score };
    persist({ ...progress, quizzes });
  };

  const retakeQuiz = () => {
    if (!progress) return;
    const quizzes = [...progress.quizzes];
    quizzes[currentMod] = { answers: {}, submitted: false, score: 0 };
    persist({ ...progress, quizzes });
  };

  const markComplete = () => {
    if (!progress || progress.completed[currentMod]) return;
    const completed = [...progress.completed];
    completed[currentMod] = true;
    persist(
      withCompletionMeta(
        { ...progress, lastModule: currentMod },
        course.slug,
        completed
      )
    );
  };

  const goMod = (idx: number) => {
    setCurrentMod(idx);
    if (progress) {
      persist({ ...progress, lastModule: idx });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const meta = course.modMeta[currentMod];
  const quiz = course.quizzes[currentMod];
  const quizState = progress?.quizzes[currentMod];
  const guide = guides?.[currentMod];

  const worksheetText = useMemo(() => {
    const title = course.resources[currentMod] ?? `Module ${currentMod + 1} Worksheet`;
    return `${title}\nSBJ Academy — ${course.slug}\n\nComplete the exercises for: ${meta.title}\n\n1. Key insight from this module:\n\n2. How I will apply it:\n\n3. Action steps this week:\n`;
  }, [course, currentMod, meta.title]);

  const downloadWorksheet = () => {
    const blob = new Blob([worksheetText], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${course.resources[currentMod]?.replace(/\s+/g, '-') ?? 'worksheet'}.txt`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  if (!progress || !quizState) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center text-muted">
        Loading course…
      </div>
    );
  }

  const completedAt = progress.completedAt ?? new Date().toISOString();

  return (
    <div className="min-h-screen bg-bg text-foreground pb-20 lg:pb-0">
      <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-6">
          <Link href="/" className="font-display text-lg font-bold text-teal">
            SBJ <span className="text-foreground">Academy</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/courses"
              className="rounded-lg border border-border px-2.5 py-1 text-xs text-muted transition-colors hover:border-teal hover:text-teal sm:text-sm"
            >
              ← Courses
            </Link>
            <ThemeToggle />
            {allComplete && (
              <button
                type="button"
                className="rounded-lg bg-teal px-2.5 py-1 text-xs font-semibold text-navy sm:text-sm"
                onClick={() => setShowCert(true)}
              >
                🎓 Certificate
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 border-t border-border bg-surface px-4 py-2.5 sm:px-6">
          <span className="whitespace-nowrap text-xs font-medium text-muted">Progress</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
            <div
              className="h-full rounded-full bg-teal transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-semibold text-teal">{pct}%</span>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[280px_1fr]">
        <aside className="hidden border-r border-border lg:block">
          <div className="sticky top-[96px] max-h-[calc(100vh-96px)] overflow-y-auto py-4">
            <p className="px-4 pb-2 text-[10px] font-semibold uppercase tracking-widest text-muted">
              Modules
            </p>
            {course.modMeta.map((m, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goMod(i)}
                className={`flex w-full items-center gap-2 border-l-2 px-4 py-2.5 text-left text-sm transition-colors ${
                  currentMod === i
                    ? 'border-teal bg-teal/10 font-medium text-teal'
                    : 'border-transparent text-muted hover:bg-surface-2 hover:text-foreground'
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-2 text-[10px] font-semibold">
                  {i + 1}
                </span>
                <span className="truncate">{m.title}</span>
                {progress.completed[i] && (
                  <span className="ml-auto text-teal" aria-label="Completed">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>

        <main className="course-lesson px-4 py-6 sm:px-8 lg:max-w-3xl">
          <header className="mb-6 border-b border-border pb-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-teal">
              {meta.tag}
            </p>
            <h1 className="mt-1 font-display text-2xl font-semibold leading-tight sm:text-3xl">
              {meta.title}
            </h1>
            <p className="mt-2 text-base text-text-body">{meta.sub}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted">
              <span className="rounded-full border border-border px-2 py-0.5">⏱ {meta.dur}</span>
              <span className="rounded-full border border-border px-2 py-0.5">📖 {meta.lessons}</span>
              <span className="rounded-full border border-border px-2 py-0.5">
                Module {currentMod + 1} of {moduleCount}
              </span>
            </div>
          </header>

          {guide && <ModuleGuidePanel guide={guide} />}

          <article
            className="lesson-html"
            dangerouslySetInnerHTML={{ __html: course.modBodies[currentMod] }}
          />

          <div className="resource-bar">
            <div className="res-info">
              <span className="res-icon" aria-hidden>
                📄
              </span>
              <div>
                <p className="res-title">{course.resources[currentMod]}</p>
                <p className="res-sub">Apply what you learned — download and fill in</p>
              </div>
            </div>
            <button type="button" className="dl-btn" onClick={downloadWorksheet}>
              Download
            </button>
          </div>

          <ModuleQuizPanel
            quiz={quiz}
            state={quizState}
            onSelect={selectAnswer}
            onSubmit={submitQuiz}
            onRetake={retakeQuiz}
          />

          <div className="complete-row">
            <button
              type="button"
              className={`complete-btn ${progress.completed[currentMod] ? 'done' : ''}`}
              onClick={markComplete}
              disabled={progress.completed[currentMod]}
            >
              {progress.completed[currentMod] ? '✓ Module complete' : 'Mark module complete'}
            </button>
            <span className="complete-hint">
              {progress.completed.filter(Boolean).length} of {moduleCount} modules done
            </span>
          </div>

          {allComplete && (
            <div className="mt-4 rounded-xl border border-teal/30 bg-teal/10 p-4 text-center">
              <p className="font-display text-lg font-semibold text-teal">
                Course complete — well done!
              </p>
              <p className="mt-1 text-sm text-text-body">
                Download your personalised certificate with your name, completion date, and ID.
              </p>
              <button
                type="button"
                className="btn-primary mt-3"
                onClick={() => setShowCert(true)}
              >
                Get your certificate
              </button>
            </div>
          )}

          <div className="mod-nav">
            <button
              type="button"
              className="nav-btn"
              disabled={currentMod === 0}
              onClick={() => goMod(currentMod - 1)}
            >
              ← Previous
            </button>
            <span className="mod-progress-info">
              {currentMod + 1} / {moduleCount}
            </span>
            <button
              type="button"
              className="nav-btn"
              disabled={currentMod === moduleCount - 1}
              onClick={() => goMod(currentMod + 1)}
            >
              Next →
            </button>
          </div>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-surface p-2 lg:hidden">
        <select
          className="input-field w-full"
          value={currentMod}
          onChange={(e) => goMod(Number(e.target.value))}
          aria-label="Select module"
        >
          {course.modMeta.map((m, i) => (
            <option key={i} value={i}>
              {i + 1}. {m.title}
            </option>
          ))}
        </select>
      </div>

      <CertificateModal
        open={showCert}
        onClose={() => setShowCert(false)}
        courseSlug={course.slug}
        defaultName={progress.studentName ?? ''}
        completedAt={completedAt}
        existingId={progress.certificateId}
        onSave={(name, certId) => {
          persist({ ...progress, studentName: name, certificateId: certId });
        }}
      />
    </div>
  );
}

