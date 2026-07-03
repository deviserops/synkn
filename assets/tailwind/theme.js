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

document.addEventListener("DOMContentLoaded", () => {
    // 1. Elements Definition

    const mobileMenuToggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const simulateBtn = document.getElementById('simulate-mobile-btn');


    // 3. Mobile Menu Expanding & Collapsing Logic
    const toggleMobileMenu = () => {
        const isExpanded = mobileMenuToggleBtn.getAttribute('aria-expanded') === 'true';

        // Update ARIA expand state
        mobileMenuToggleBtn.setAttribute('aria-expanded', !isExpanded);

        if (isExpanded) {
            // Slide Up & Collapse Transition
            mobileMenu.classList.add('opacity-0', '-translate-y-3');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');

            // Toggle SVGs
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');

            // Add hidden utility after transition completes
            setTimeout(() => {
                if (mobileMenuToggleBtn.getAttribute('aria-expanded') === 'false') {
                    mobileMenu.classList.add('hidden');
                }
            }, 250);
        } else {
            // Display the container block
            mobileMenu.classList.remove('hidden');

            // Trigger browser layout reflow before starting active transitions
            mobileMenu.offsetHeight;

            // Slide Down & Expand Transition
            mobileMenu.classList.remove('opacity-0', '-translate-y-3');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');

            // Toggle SVGs
            hamburgerIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        }
    };

    mobileMenuToggleBtn.addEventListener('click', toggleMobileMenu);

    // Close menu if a nav link is clicked (great for scrolling to sections on single page layouts)
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuToggleBtn.getAttribute('aria-expanded') === 'true') {
                toggleMobileMenu();
            }
        });
    });

    // 4. Auxiliary Simulator Helper for Desktop Testing
    simulateBtn.addEventListener('click', () => {
        toggleMobileMenu();
    });
});
