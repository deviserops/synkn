/**
 * Script specific to the SyncZone Landing Page.
 * Since features are now statically rendered in the HTML for better SEO in Eleventy,
 * this file only handles necessary UI initializations.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons (waits for the defered unpkg script to load)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        // Fallback check if script loads slightly after DOMContentLoaded
        setTimeout(() => {
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 300);
    }
});