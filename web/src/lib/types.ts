export interface ModuleGuide {
  plainEnglish: string;
  analogy: string;
  youWillLearn: string[];
}

export interface ModuleMeta {
  tag: string;
  title: string;
  sub: string;
  dur: string;
  lessons: string;
}

export interface QuizQuestion {
  q: string;
  opts: string[];
  correct: number;
}

export interface ModuleQuiz {
  title: string;
  questions: QuizQuestion[];
}

export interface CourseData {
  slug: string;
  modMeta: ModuleMeta[];
  modBodies: string[];
  quizzes: ModuleQuiz[];
  resources: string[];
  modNames: string[];
}

export interface CourseCatalogItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
  modules: number;
  quizCount: string;
  worksheets: number;
  duration: string;
  tags: string[];
  available: boolean;
}

export interface QuizModuleState {
  answers: Record<number, number>;
  submitted: boolean;
  score: number;
}

export interface CourseProgress {
  completed: boolean[];
  quizzes: QuizModuleState[];
  lastModule: number;
  completedAt?: string;
  certificateId?: string;
  studentName?: string;
}
