import type { CourseProgress, QuizModuleState } from './types';

const STORAGE_PREFIX = 'sbj-progress-v2';

export function progressKey(courseSlug: string, userId = 'guest'): string {
  return `${STORAGE_PREFIX}:${courseSlug}:${userId}`;
}

export function emptyQuizState(count: number): QuizModuleState[] {
  return Array.from({ length: count }, () => ({
    answers: {},
    submitted: false,
    score: 0,
  }));
}

export function loadProgress(
  courseSlug: string,
  moduleCount: number,
  userId = 'guest'
): CourseProgress {
  if (typeof window === 'undefined') {
    return {
      completed: Array(moduleCount).fill(false),
      quizzes: emptyQuizState(moduleCount),
      lastModule: 0,
    };
  }
  try {
    const raw = localStorage.getItem(progressKey(courseSlug, userId));
    if (!raw) throw new Error('none');
    const parsed = JSON.parse(raw) as CourseProgress;
    if (parsed.completed?.length !== moduleCount) throw new Error('mismatch');
    return parsed;
  } catch {
    return {
      completed: Array(moduleCount).fill(false),
      quizzes: emptyQuizState(moduleCount),
      lastModule: 0,
    };
  }
}

export function saveProgress(
  courseSlug: string,
  progress: CourseProgress,
  userId = 'guest'
): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(progressKey(courseSlug, userId), JSON.stringify(progress));
}

export function completionPercent(completed: boolean[]): number {
  if (!completed.length) return 0;
  return Math.round(
    (completed.filter(Boolean).length / completed.length) * 100
  );
}
