const themeBtn = document.getElementById('theme-btn');

const setDarkMode = (isDark) => {
    document.body.classList.toggle('dark-mode', isDark);
    themeBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Check for saved user preference or system default on load
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    setDarkMode(true);
}

// Toggle on click
themeBtn.addEventListener('click', () => {
    const isDarkNow = !document.body.classList.contains('dark-mode');
    setDarkMode(isDarkNow);
});