const THEME_KEY = 'its-vapt-theme-v1';
const PROGRESS_KEY = 'its-vapt-progress-v1';

const emptyProgress = {
  completed: {},
  checklist: {},
  notes: {},
  quiz: {},
  lastLesson: null,
};

export function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function saveTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    return saved ? { ...emptyProgress, ...saved } : { ...emptyProgress };
  } catch {
    return { ...emptyProgress };
  }
}

export function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}
