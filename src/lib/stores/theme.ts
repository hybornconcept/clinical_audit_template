import { browser } from '$app/environment';

// Get initial theme from localStorage or default to dark
const getInitialTheme = () => {
    if (browser) {
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        return 'dark';
    }
    return 'dark';
};

// Toggle theme function
export function toggleMode() {
    if (browser) {
        const html = document.documentElement;
        const current = html.classList.contains('dark') ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        
        html.classList.remove(current);
        html.classList.add(next);
        localStorage.setItem('theme', next);
    }
}

// Initialize theme
if (browser) {
    const theme = getInitialTheme();
    document.documentElement.classList.add(theme);
} 