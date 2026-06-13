// ============================================================================
// 1. IMMEDIATE EXECUTION (Runs instantly in <head> to prevent layout flashing)
// ============================================================================
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

// ============================================================================
// 2. DEFERRED EXECUTION (Waits for the DOM button to exist before attaching click)
// ============================================================================
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  
  if (!toggleBtn) return; // Safety check in case a page doesn't have the button

  toggleBtn.addEventListener('click', () => {
    // Toggle the dark class on <html>
    const isDark = document.documentElement.classList.toggle('dark');
    
    // Persist the choice in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Bind to DOMContentLoaded to guarantee the button is rendered and ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initThemeToggle);
} else {
  initThemeToggle();
}
