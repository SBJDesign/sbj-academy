/**
 * SBJ Academy — theme toggle (persists in localStorage)
 */
(function () {
  const STORAGE_KEY = 'sbj-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (_) {}
  }

  function initTheme() {
    let theme = 'dark';
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'light' || saved === 'dark') theme = saved;
    } catch (_) {}
    applyTheme(theme);
  }

  window.toggleTheme = function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  };

  initTheme();
})();
